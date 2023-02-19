import { Navigate, Route, Routes } from "react-router-dom";
import { LogIn } from "../pages/LogIn";
import { SignUp } from "../pages/SignUp";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
