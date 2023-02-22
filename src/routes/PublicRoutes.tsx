import { Route, Routes } from "react-router-dom";
import { Home, Purchases } from "../pages";
import { Production } from "../pages/Production";
import { Recipes } from "../pages/Recipes";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="purchases" element={<Purchases />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="production" element={<Production />} />
      </Route>
    </Routes>
  );
};
