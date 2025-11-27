import { useEffect, type JSX } from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import NavTopbar from "./components/NavTopBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import NavPane from "./components/NavPane";
import useWindowDimensions from "./store/useWindowDirection";
import AllFiles from "./pages/AllFiles";
import SharedWithMe from "./pages/SharedWithMe";
import Starred from "./pages/Starred";
import Trash from "./pages/Trash";
import Settings from "./pages/Settings";
import AdminLoginPage from "./Admin/pages/AdminLoginPages";
import AdminNavPane from "./Admin/components/adminNavPane";
import AdminHomePage from "./Admin/pages/AdminHomePage";
import AdminUserManagementPage from "./Admin/pages/AdminUserManagementPage";
import AdminAnalyticsPage from "./Admin/pages/AdminAnalyticsPage";
import AdminNotificationsPage from "./Admin/pages/AdminNotificationsPage";
import AdminSettingsPage from "./Admin/pages/AdminSettingsPage";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const { winHeight, winWidth } = useWindowDimensions();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <>
      <div style={{ minHeight: winHeight, fontFamily: "Arial" }}>
        {/* <NavTopbar /> */}
        <div>
          {/* <NavPane /> */}
          <div style={{ display: "flex", flex: 1, minHeight: winHeight }}>
            <Routes>
              <Route element={<NavPane />}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/allFiles" element={<AllFiles />} />
                <Route path="/shared" element={<SharedWithMe />} />
                <Route path="/starred" element={<Starred />} />
                <Route path="/trash" element={<Trash />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
              <Route path="/admin" element={<AdminNavPane />}>
                <Route path="/admin" element={<Navigate to="/admin/adminHome" />} />
                <Route path="/admin/adminHome" element={<AdminHomePage />} />
                <Route path="/admin/adminUserManagement" element={<AdminUserManagementPage />} />
                <Route path="/admin/adminAnalytics" element={<AdminAnalyticsPage />} />
                <Route path="/admin/adminNotification" element={<AdminNotificationsPage />} />
                <Route path="/admin/adminSettings" element={<AdminSettingsPage />} />
                <Route path="/admin/adminLogin" element={<AdminLoginPage />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
