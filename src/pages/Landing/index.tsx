import logo from "../../logo.svg";
import "./landing.layout.css";
import { useState } from "react";
import Modal from "../../components/Modal";
import { LogIn } from "../LogIn";
import { SignUp } from "../SignUp";
import { BGLogo } from "../../components/Logo";
// import Carousel from "../../components/Carousel";
import Slider from "../../components/Slider";

export const Landing = () => {
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleLogIn = () => {
    setOpenLogIn(!openLogIn);
  };

  const handleSignUp = () => {
    setOpenSignUp(!openSignUp);
  };
  return (
    <>
      <header>
        <h1>Oikos</h1>
      </header>
      <main>
        {/* <section> */}
        {/* <Carousel /> */}
        <Slider />
        {/* <picture>
          <img src={logo} className="oikos-logo" alt="logo" />
        </picture> */}

        <div className="landing-botonera">
          <button onClick={() => setOpenLogIn(true)}>LogIn</button>
          <button onClick={() => setOpenSignUp(true)}>SignUp</button>
        </div>

        <Modal isOpen={openLogIn} setIsOpen={handleLogIn}>
          <LogIn />
        </Modal>
        <Modal isOpen={openSignUp} setIsOpen={handleSignUp}>
          <SignUp />
        </Modal>
        {/* </section> */}
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
