import { Navigate, Route, Routes } from "react-router-dom";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/user" />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
