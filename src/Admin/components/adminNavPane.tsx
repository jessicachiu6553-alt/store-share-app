import { type JSX } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { GiDuck } from "react-icons/gi";
import { useAuthStore } from "../../store/useAuthStore";

const AdminNavPane = (): JSX.Element => {
  const { isAuthenticated, user, logout, adminLogout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => location.pathname === path;
  const handleAdminLogout = () => {
    adminLogout();
    navigate("/admin/adminLogin");
  };

  return (
    <>
      <div style={styles.pane}>
        <div style={styles.paneWrap}>
          <div style={styles.title}>
            {/* WebApp logo */}
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
            {/* WebApp logo */}
            <div>Storesite - Admin Portal</div>
          </div>

          <div style={styles.sectionWrap}>
            {/* UPPER PART */}
            <div style={styles.upperSectionWrap}>
              {/* <div>location: {location.pathname}</div> */}
              <div
                style={
                  isActive("admin/adminHome")
                    ? styles.itemSelected
                    : styles.item
                }
                onClick={() => navigate("/admin/adminHome")}
              >
                Admin Home Page
              </div>
              <div
                style={
                  isActive("admin/userManagement")
                    ? styles.itemSelected
                    : styles.item
                }
                onClick={() => navigate("/admin/userManagement")}
              >
                User Management
              </div>

              <div
                style={
                  isActive("/admin/analytics")
                    ? styles.itemSelected
                    : styles.item
                }
                onClick={() => navigate("/admin/analytics")}
              >
                Analytics
              </div>
            </div>
            {/* UPPER PART */}

            {/* BOTTOM PART */}
            <div style={styles.bottomSectionWrap}>
              <div
                style={
                  isActive("/admin/notification")
                    ? styles.itemSelected
                    : styles.item
                }
                onClick={() => navigate("/admin/notification")}
              >
                Notification
              </div>
              <div
                style={
                  isActive("/admin/settings")
                    ? styles.itemSelected
                    : styles.item
                }
                onClick={() => navigate("/admin/settings")}
              >
                Admin Settings
              </div>
              {user && isAuthenticated ? (
                <>
                  <div onClick={handleAdminLogout} style={styles.item}>
                    Admin Logout
                  </div>

                  <div style={styles.userCardWrap}>
                    <div style={styles.userCardRightWrap}>
                      <div style={styles.userName}>{user.username}</div>
                      <div style={styles.userEmail}>{user.email}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={
                      isActive("/admin/adminLogin")
                        ? styles.itemSelected
                        : styles.item
                    }
                    onClick={() => navigate("/admin/adminLogin")}
                  >
                    Admin Login
                  </div>
                  <div
                    style={
                      isActive("/") || isActive("/home")
                        ? styles.itemSelected
                        : styles.item
                    }
                    onClick={() => navigate("/home")}
                  >
                    Back to User Portal
                  </div>
                </>
              )}
            </div>

            {/* BOTTOM PART */}
          </div>
        </div>
      </div>
      {/* Outlet means path child goes here */}
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </>
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
    display: "flex",
    // minHeight: winHeight
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

export default AdminNavPane;
