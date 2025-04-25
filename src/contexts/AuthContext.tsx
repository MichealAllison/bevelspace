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
    const response = await AuthService.login(email, password);
    TokenService.setTokens(response.accessToken, response.refreshToken);
    setUser(response.user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    TokenService.removeTokens();
    setUser(null);
    setIsAuthenticated(false);
  };

  const refreshAuth = async () => {
    const refreshToken = TokenService.getRefreshToken();
    if (refreshToken) {
      try {
        const response = await AuthService.refreshToken(refreshToken);
        TokenService.setTokens(response.accessToken, response.refreshToken);
        setUser(response.user);
        setIsAuthenticated(true);
      } catch (error) {
        logout();
      }
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