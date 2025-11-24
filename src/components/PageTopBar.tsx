import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useLocation } from "react-router-dom";
import Buttons from "./Buttons";

const PageTopBar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.pageHeaderText}>
        {/* Zustand TS Demo, isAuthenticated: {isAuthenticated ? "Yes" : "No"} */}
        Dashboard
      </div>
      <div style={styles.links}>
        {/* <div>{`location: ${location.pathname}`}</div> */}
        {isAuthenticated ? (
          <>
            <span>Hello, {user?.username}</span>
            <Buttons
              label="Upload +"
              onClick={() => {
                console.log("onPress Upload");
              }}
              variant="primary"
            />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Buttons label="login" onClick={handleLogin} />
          </>
        )}
      </div>
    </nav>
  );
};

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "95px",
    background: "yellow",
    padding: "0px 20px",
  },
  pageHeaderText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "58px",
    fontWeight: "600", //semi-bold
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
};

export default PageTopBar;
