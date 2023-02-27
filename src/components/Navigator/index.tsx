import { Link } from "react-router-dom";
import "./navigator.style.css";

export const Navigator = ({ setTitle, handleOut }: any) => {
  return (
    <nav>
      <div className="navigator">
        <Link to="/" onClick={() => setTitle("Oikos")}>
          <span>DashBoard</span>
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
      <div className="navigator">
        <Link to="/" onClick={() => handleOut()}>
          Sair
        </Link>
      </div>
    </nav>
  );
};
