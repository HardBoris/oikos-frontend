import { BGLogo } from "../../components/Logo";
import "../../styles/global.css";
import "../../styles/layout.css";
import "./style.css";
/* import {
  FaBuyNLarge,
  FaCar,
  FaCashRegister,
  FaSignOutAlt,
  FaXRay,
} from "react-icons/fa"; */

// import { BsCart, BsClipboard, BsJournal } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { useState } from "react";
// import logo from "../../logo.svg";
import { useAuth } from "../../context/UserContext";
import { Navigator } from "../../components/Navigator";
import { Dashboard } from "../Dashboard";

export const Home = () => {
  const { signOut } = useAuth();
  const [title, setTitle] = useState("Oikos");
  const handleOut = () => {
    setTitle("Oikos");
    signOut();
  };

  return (
    <>
      <header>
        <h1>{title}</h1>
        <Navigator setTitle={setTitle} handleOut={handleOut} />
      </header>
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <footer>
        <div id="barney">
          Powered by{" "}
          <span id="bg__logo">
            <BGLogo />
          </span>
        </div>
      </footer>
    </>
  );
};
