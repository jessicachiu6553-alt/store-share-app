import { useAuthStore } from '../store/useAuthStore'

const AllFiles = () => {
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);


  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <p>This is your AllFiles page.</p>
    </div>
  )
}

export default AllFiles
