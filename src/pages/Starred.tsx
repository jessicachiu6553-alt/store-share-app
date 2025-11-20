import { useAuthStore } from '../store/useAuthStore'

const Starred = () => {
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);


  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <p>This is your Starred page.</p>
    </div>
  )
}

export default Starred