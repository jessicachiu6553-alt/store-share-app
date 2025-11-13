import { useAuthStore } from '../store/useAuthStore'

const HomePage = () => {
  const user = useAuthStore((state) => state.user)

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h2>Welcome, {user?.username} 👋</h2>
      <p>This is your home page.</p>
    </div>
  )
}

export default HomePage
