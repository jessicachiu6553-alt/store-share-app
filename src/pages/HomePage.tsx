import { useAuthStore } from '../store/useAuthStore'

const HomePage = () => {
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);


  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h2>Welcome, {user && isAuthenticated ?  user?.username: "Please Login!!"} 👋</h2>
      <p>This is your home page.</p>
    </div>
  )
}

export default HomePage
