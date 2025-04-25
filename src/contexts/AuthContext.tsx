"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthService } from '@/services/auth.service';
import { TokenService } from '@/services/token.service';

interface User {
  email: string;
  name: string;
  userName: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login({ email, password });
      console.log('Login response:', response);
      
      if (!response.accessToken || !response.refreshToken) {
        throw new Error('Invalid token data received');
      }
      
      TokenService.setTokens(response.accessToken, response.refreshToken);
      console.log('Tokens stored:', {
        access: TokenService.getAccessToken(),
        refresh: TokenService.getRefreshToken()
      });
      
      setUser(response.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    TokenService.removeTokens();
    setUser(null);
    setIsAuthenticated(false);
  };

  const refreshAuth = async () => {
    const refreshToken = TokenService.getRefreshToken();
    console.log('Attempting refresh with token:', refreshToken);
    
    if (!refreshToken) {
      console.log('No refresh token found, logging out');
      logout();
      return;
    }

    try {
      const response = await AuthService.refreshToken(refreshToken);
      console.log('Refresh successful:', response);
      
      TokenService.setTokens(response.accessToken, response.refreshToken);
      setUser(response.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Refresh failed:', error);
      logout();
    }
  };

  useEffect(() => {
    refreshAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};