import { useEffect, type JSX } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import NavTopbar from "./components/NavTopBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NavPane from "./components/NavPane";
import useWindowDimensions from "./store/useWindowDirection";

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
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
