import { SignupFormData } from '@/features/auth/types';


export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
    userName: string;
  };
}

export interface AuthError {
  message: string;
  status: number;
}

export class AuthService {
  private static API_URL = 'https://e-commerce-1-pdsc.onrender.com/api/user';

  private static async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Authentication failed');
    }
    return response.json();
  }

  static async register(userData: SignupFormData) {
    try {
      const response = await fetch(`${this.API_URL}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          confirmPassword: userData.confirmPassword,
          userName: userData.userName,
          firstName: userData.firstName,
          lastName: userData.lastName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Handle validation errors
        if (response.status === 400) {
          const errorMessage = Object.entries(errorData)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
          throw new Error(errorMessage);
        }
        throw new Error(errorData.message || 'Registration failed');
      }

      return response.json();
    } catch (error) {
      throw error;
    }
  }

  static async login(credentials: { email: string; password: string }) {
    try {
      const response = await fetch(`${this.API_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 400) {
          const errorMessage = Object.entries(errorData)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
          throw new Error(errorMessage);
        }
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login response:', data);

      return {
        accessToken: data.access,
        refreshToken: data.refresh,
        user: {
          email: data.user?.email,
          name: data.user?.name || data.user?.username,
          userName: data.user?.username
        }
      };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  static async refreshToken(refreshToken: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.API_URL}/token/refresh/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      const data = await this.handleResponse<{access: string, refresh: string}>(response);
      
      // Since refresh token endpoint doesn't return user data, we need to get it from the token
      const tokenData = this.parseJwt(data.access);
      
      return {
        accessToken: data.access,
        refreshToken: data.refresh,
        user: {
          email: tokenData.email,
          name: tokenData.name || tokenData.username,
          userName: tokenData.username
        }
      };
    } catch (error) {
      throw this.handleError(error as Error);
    }
  }

  // Add this helper method to parse JWT tokens
  private static parseJwt(token: string) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error('Error parsing JWT:', e);
        return {};
    }
  }

  private static handleError(error: Error): AuthError {
    return {
      message: error.message || 'An error occurred during authentication',
      status: 500,
    };
  }
}
