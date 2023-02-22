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

import { BsCart, BsClipboard, BsJournal } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";

export const Home = () => {
  const history = useNavigate();

  return (
    <>
      <header>
        <h1>Oikos</h1>
      </header>
      <main>
        <aside>
          {/* <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
            <Link to="/purchases">Compras</Link>
            <Link to="/expenses">Expenses</Link>
          </nav> */}

          <div className="operaciones">
            <button onClick={() => history("/purchases")}>
              <BsCart />
            </button>
            Compras
          </div>
          <div className="operaciones">
            <button onClick={() => history("/recipes")}>
              <BsJournal />
            </button>
            Recetas
          </div>
          <div className="operaciones">
            <button onClick={() => history("/production")}>
              <BsClipboard />
            </button>
            Producción
          </div>
        </aside>
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
