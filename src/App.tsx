import { useEffect, type JSX } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
      <div style={{ minHeight: winHeight, fontFamily: "Arial"}}>
        {/* <NavTopbar /> */}
        {/* <div style={{ display: "flex", minHeight: winHeight - 80}}> */}
        <div style={{ display: "flex", minHeight: winHeight }}>
          <NavPane />
          <div style={{ flex: 1, height: winHeight }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/allFiles" element={<AllFiles />} />
              <Route path="/shared" element={<SharedWithMe />} />
              <Route path="/starred" element={<Starred />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
