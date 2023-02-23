import { LoginForm } from "./loginForm";
import { LoginIntro } from "./loginIntro";
import "./style.css";
import "../../styles/layout.css";

export const LogIn = () => {
  return (
    <div className="group">
      <div className="form__group">
        <div className="login-intro">
          <LoginIntro />
        </div>
        <div className="login-form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
