"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export interface User {
    name: string;
    email: string;
    image?: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    signOut: () => Promise<void>;
}

interface SignupData {
    email: string;
    password: string;
    fullName: string;
    phone: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Check if user is logged in when the app loads
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            // Get the token from localStorage
            const token = localStorage.getItem('auth_token');
            
            if (token) {
                // Verify token with your backend
                const response = await fetch('/api/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    // If token is invalid, clear it
                    localStorage.removeItem('auth_token');
                    setUser(null);
                }
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const { token, user: userData } = await response.json();
            
            // Store the token
            localStorage.setItem('auth_token', token);
            
            // Update user state
            setUser(userData);
            
            // Redirect to home page
            router.push('/');
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const signup = async (data: SignupData) => {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const { token, user: userData } = await response.json();
            
            // Store the token
            localStorage.setItem('auth_token', token);
            
            // Update user state
            setUser(userData);
            
            // Redirect to home page
            router.push('/');
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    };

    const signOut = async () => {
        try {
            // Call logout endpoint if needed
            await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('auth_token')}`
                }
            });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            // Clear token and user state regardless of API call result
            localStorage.removeItem('auth_token');
            setUser(null);
            router.push('/');
        }
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, signup, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}