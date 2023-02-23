import logo from "../../logo.svg";
import "../../App.css";
import { useState } from "react";
import Modal from "../../components/Modal";
import { LogIn } from "../LogIn";
import { SignUp } from "../SignUp";

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
    <div>
      {/* <h1>Home</h1>
      <p>
        <a href="/login">LogIn</a>
      </p>
      <p>
        <a href="/signup">Cadastro</a>
      </p> */}
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
          <button onClick={() => setOpenLogIn(true)}>LogIn</button>
          <button onClick={() => setOpenSignUp(true)}>SignUp</button>

          <Modal isOpen={openLogIn} setIsOpen={handleLogIn}>
            <LogIn />
          </Modal>
          <Modal isOpen={openSignUp} setIsOpen={handleSignUp}>
            <SignUp />
          </Modal>
        </header>
      </div>
    </div>
  );
};
