import { useEffect, type JSX } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/login" />
}

const App = () => {
  const initializeAuth = useAuthStore((state) => state.initializeAuth)

  useEffect(() => {
    initializeAuth()
  }, [initializeAuth])

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
