import { SignForm } from "./signForm";
import { SignIntro } from "./signIntro";
import "../../styles/layout.css";

export const SignUp = () => {
  return (
    <div className="group">
      <div className="form__group sign-set">
        <div className="sign-intro">
          <SignIntro />
        </div>
        <div className="sign-form">
          <SignForm />
        </div>
      </div>
    </div>
  );
};
