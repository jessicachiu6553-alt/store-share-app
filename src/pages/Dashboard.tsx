import { useAuthStore } from '../store/useAuthStore'

const Dashboard = () => {
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);


  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      {/* <h2>Welcome, {user && isAuthenticated ?  user?.username: "Please Login!!"} </h2> */}
      <p>This is your dashboard page.</p>
    </div>
  )
}

export default Dashboard
