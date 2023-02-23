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
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../logo.svg";

export const Home = () => {
  const history = useNavigate();
  const [title, setTitle] = useState("Oikos");

  return (
    <>
      <header>
        <h1>{title}</h1>
        <nav>
          <div className="navigator">
            <Link to="/" onClick={() => setTitle("Oikos")}>
              Home
            </Link>
          </div>
          <div className="navigator">
            <Link to="/purchases" onClick={() => setTitle("Compras")}>
              Compras
            </Link>
          </div>
          <div className="navigator">
            <Link to="/production" onClick={() => setTitle("Produção")}>
              Produção
            </Link>
          </div>
          <div className="navigator">
            <Link to="/recipes" onClick={() => setTitle("Receitas")}>
              Receitas
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <section>
          {/* {!Outlet ? (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        ) : (
        )} */}
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
