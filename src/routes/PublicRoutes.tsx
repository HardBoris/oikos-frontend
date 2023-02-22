import { Navigate, Route, Routes } from "react-router-dom";
import { Home, LogIn, SignUp } from "../pages";
import {} from "../pages/LogIn";
import {} from "../pages/SignUp";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
