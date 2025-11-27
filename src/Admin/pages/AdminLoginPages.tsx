import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'

const AdminLoginPage = () => {
  const [username, setUsername] = useState('Admin admin')
  const [password, setPassword] = useState('Password123213123424234!')
  const navigate = useNavigate()
  const adminLogin = useAuthStore((state) => state.adminLogin)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    adminLogin(username, password)
    navigate('/admin/adminHome')
  }

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Admin Login</button>
      </form>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '80px',
    // backgroundColor: 'red',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    gap: '10px'
  }
}

export default AdminLoginPage
