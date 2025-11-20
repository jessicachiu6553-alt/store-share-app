import { useAuthStore } from '../store/useAuthStore'

const Settings = () => {
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);


  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <p>This is your Settings page.</p>
    </div>
  )
}

export default Settings