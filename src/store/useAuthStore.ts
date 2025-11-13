import { create } from 'zustand'

interface User {
  username: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => void
  logout: () => void
  initializeAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (username: string, password: string) => {
    // Demo: Accept any non-empty username/password
    if (username && password) {
      const user = { username }
      set({ user, isAuthenticated: true })
      localStorage.setItem('authUser', JSON.stringify(user))
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false })
    localStorage.removeItem('authUser')
  },

  initializeAuth: () => {
    const storedUser = localStorage.getItem('authUser')
    if (storedUser) {
      set({ user: JSON.parse(storedUser), isAuthenticated: true })
    }
  }
}))
