import { create } from 'zustand'
import { getEnv } from '../../env';

interface User {
  username: string;
  email: string;
  userId: string;
}

interface AuthState {
  user: User | null;
  username: string | null;
  email: string | null;
  userId: string | null;
  isAuthenticated: boolean;
  isAdminLoggedIn?: boolean;
  accessToken?: string | null;
  id_token?: string | null;
  login: (username: string, password: string) => void
  logout: () => void
  adminLogin: (username: string, password: string) => void
  adminLogout: () => void
  initializeAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  username: null,
  email: null,
  userId: null,
  isAuthenticated: false,
  isAdminLoggedIn: false,
  accessToken:null,
  id_token: null,

  login: async (username: string, password: string) => {
    // Demo: Accept any non-empty username/password
    if (username && password) {
      const CLIENT_ID = getEnv('CLIENT_ID');
      const CLIENT_SECRET = getEnv('CLIENT_SECRET'); // only for dev/testing
      const COGNITO_DOMAIN = getEnv('COGNITO_DOMAIN'); // Hosted UI domain
      

      try {

      } catch {

      }



      const user: User = { username: username, email: `${username}@gmail.com`, userId: `uid-  ${Math.random().toString(12)}` }
      set({ user:user, isAuthenticated: true })
      localStorage.setItem('authUser', JSON.stringify(user))
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false })
    localStorage.removeItem('authUser')
  },

  adminLogin: (username: string, password: string) => {
        // Demo: Accept any non-empty username/password
    if (username && password) {
      const user: User = { username: username, email: `${username}@gmail.com`, userId: `uid-  ${Math.random().toString(12)}` }
      set({ user:user, isAuthenticated: true , isAdminLoggedIn:true})
      localStorage.setItem('authUser', JSON.stringify(user))
    }
  },

    adminLogout: () => {
      set({ user: null, isAuthenticated: false , isAdminLoggedIn:false})
      localStorage.removeItem('authUser')
    },


  initializeAuth: () => {
    const storedUser = localStorage.getItem('authUser')
    if (storedUser) {
      set({ user: JSON.parse(storedUser), isAuthenticated: true })
    }
  }
}))
