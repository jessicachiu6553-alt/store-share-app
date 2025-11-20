import { useAuthStore } from '../store/useAuthStore'

const SharedWithMe = () => {
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);


  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <p>This is your SharedWithMe page.</p>
    </div>
  )
}

export default SharedWithMe