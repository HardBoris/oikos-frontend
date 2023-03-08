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
import { useEffect, useState } from "react";
import { useAuth } from "../../context/UserContext";
import { Navigator } from "../../components/Navigator";
import { usePurchase } from "../../context/PurchaseContext";

export const Home = () => {
  const { signOut } = useAuth();
  const { Shopping } = usePurchase();

  const [title, setTitle] = useState("Oikos");
  const [openDesire, setOpenDesire] = useState(false);

  useEffect(() => {
    Shopping();
  }, []);

  const handleOut = () => {
    handleDesire();
    setTitle("Oikos");
    signOut();
  };

  const handleDesire = () => {
    setOpenDesire(!openDesire);
  };

  return (
    <>
      <header>
        <h1>{title}</h1>
        <Navigator
          setTitle={setTitle}
          handleOut={() => handleOut()}
          openDesire={openDesire}
          setOpenDesire={setOpenDesire}
          handleDesire={() => handleDesire()}
        />
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
