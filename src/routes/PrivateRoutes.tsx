import { Route, Routes } from "react-router-dom";
import { Home, Purchases, Recipes, Production, Dashboard } from "../pages";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<Dashboard />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="production" element={<Production />} />
      </Route>
    </Routes>
  );
};
