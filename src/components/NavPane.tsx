import { type JSX } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { GiDuck } from "react-icons/gi";

const NavPane = (): JSX.Element => {
  const { isAuthenticated, user, logout } = useAuthStore()
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => location.pathname === path;
  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div style={styles.pane}>
      <div style={styles.paneWrap}>
        <div style={styles.title}>
          <div
            style={{
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "32px",
              height: "32px",
              borderRadius: "4px",
            }}
          >
            <GiDuck
              size={28}
              color="yellow"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <div>Store-Share-App</div>
        </div>

        <div style={styles.sectionWrap}>
          {/* UPPER PART */}
          <div style={styles.upperSectionWrap}>
            {/* <div style={styles.item}>
              Welcome
              {user && user.username
                ? ", " + user?.username
                : "! Please login!"}
            </div> */}
            {/* <div>location: {location.pathname}</div> */}
            {/* <div>username: {user ? user.username: "No user"}</div>
          <div>userId: {user ? user.userId: "No user"}</div>
          <div>useremail: {user ? user.email: "No user"}</div> */}

            <div
              style={isActive("/") ? styles.itemSelected : styles.item}
              onClick={() => navigate("/")}
            >
              Home
            </div>

            <div
              style={isActive("/dashboard") ? styles.itemSelected : styles.item}
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </div>

            <div
              style={isActive("/allFiles") ? styles.itemSelected : styles.item}
              onClick={() => navigate("/allFiles")}
            >
              All Files
            </div>

            <div
              style={isActive("/shared") ? styles.itemSelected : styles.item}
              onClick={() => navigate("/shared")}
            >
              Shared with me
            </div>

            <div
              style={isActive("/starred") ? styles.itemSelected : styles.item}
              onClick={() => navigate("/starred")}
            >
              Starred
            </div>

            <div
              style={isActive("/trash") ? styles.itemSelected : styles.item}
              onClick={() => navigate("/trash")}
            >
              Trash
            </div>
          </div>
          {/* UPPER PART */}

          {/* BOTTOM PART */}
          <div style={styles.bottomSectionWrap}>
            <div
              style={isActive("/settings") ? styles.itemSelected : styles.item}
              onClick={() => navigate("/settings")}
            >
              Settings
            </div>
            {user && isAuthenticated ? (
              <>
                <div onClick={handleLogout} style={styles.item}>
                  Logout
                </div>

                <div style={styles.userCardWrap}>
                  <div style={styles.userIconWrap}>
                    <FaUserTie size={40} color="#324054" />
                    {/* <img src={logo} alt="logo" style={{height:"50px"}} /> */}
                  </div>
                  <div style={styles.userCardRightWrap}>
                    <div style={styles.userName}>{user.username}</div>
                    <div style={styles.userEmail}>{user.email}</div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={isActive("/login") ? styles.itemSelected : styles.item}
                  onClick={() => navigate("/login")}
                >
                  Login
                </div>

                <div style={styles.item}>Please login!!</div>
              </>
            )}
          </div>

          {/* BOTTOM PART */}
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  pane: {
    width: "250px",
    padding: "16px",
    backgroundColor: "#E5E5EA",
    borderRight: "1px solid #ddd",
    alignItems: "stretch",
    minHeight: "100%",
    overflowY: "auto",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "12px 8px",
    display: "flex",
    gap: "12px",
    alignItems: "center",
    // backgroundColor: "blue",
  },

  paneWrap: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
    height: "100%",
  },
  sectionWrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  upperSectionWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  item: {
    padding: "12px",
    cursor: "pointer",
    color: "#324054",
    fontSize: "16px",
    fontWeight: "medium",
  },
  itemSelected: {
    padding: "12px",
    backgroundColor: "#EFF6FF",
    color: "#2D68FE",
    fontSize: "16px",
    fontWeight: "medium",
  },

  bottomSectionWrap: {
    display: "flex",
    flexDirection: "column",
  },

  userCardWrap: {
    display: "flex",
    gap: "8px",
    padding: "12px",
  },
  userIconWrap: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    overflow: "hidden",
  },
  userCardRightWrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "4px",
  },
  userName: {
    fontSize: "12px",
    color: "#324054",
    fontWeight: "regular",
  },
  userEmail: {
    fontSize: "12px",
    color: "#71839B",
    fontWeight: "medium",
  },
};

export default NavPane;
