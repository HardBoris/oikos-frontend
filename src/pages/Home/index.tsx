import { BGLogo } from "../../components/Logo";
import "../../styles/global.css";
import "../../styles/layout.css";

export const Home = () => {
  return (
    <>
      <header>
        <h1>Oikos</h1>
      </header>
      <main></main>
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
