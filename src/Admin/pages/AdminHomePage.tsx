// import { useAuthStore } from '../store/useAuthStore'

import { useAuthStore } from "../../store/useAuthStore";

const AdminHomePage = () => {
  const user = useAuthStore((state) => state.user)
  const isAdminLoggedIn = useAuthStore((state) => state.isAdminLoggedIn);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);


  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h2>Welcome, {user && isAuthenticated ?  user?.username: "Please Login!!"} 👋</h2>
      <h2>Is it admin Logged In? : {isAdminLoggedIn? "true": "false"}</h2>
      <p>This is your ADMIN home page.</p>
    </div>
  )
}

export default AdminHomePage