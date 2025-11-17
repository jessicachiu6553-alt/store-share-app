import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { useLocation } from 'react-router-dom';

const NavTopbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation();

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav style={styles.nav}>
      <h3>Zustand TS Demo, isAuthenticated: {isAuthenticated ? "Yes": "No"}</h3>
      <div style={styles.links}>
        {/* <div>{`location: ${location.pathname}`}</div> */}
        {isAuthenticated ? (
          <>
            <span>Hello, {user?.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={{color:'#ffffff'}}>Login</Link>
        )}
      </div>
    </nav>
  )
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: '#282c34',
    color: '#fff'
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },

}

export default NavTopbar
