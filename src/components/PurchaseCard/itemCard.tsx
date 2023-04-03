import { useNavigate } from "react-router-dom";
import { Purchase } from "../../context/PurchaseContext";

interface ICardProps {
  setMiCompra: (item: Purchase) => void;
  eliminator: (id: string) => void;
  lista: Purchase[];
}

export const ItemCard = ({ setMiCompra, eliminator, lista }: ICardProps) => {
  const navigate = useNavigate();
  const fecha = (objeto: Purchase) => objeto.purchaseDate.split("T")[0];

  return (
    <>
      {lista.map((item: Purchase) => (
        <div
          className="list__item"
          key={item.purchaseId}
          role="button"
          onClick={() => navigate(`/purchases/${item.purchaseId}`)}
          style={{ cursor: "pointer" }}
        >
          <div className="item__title">
            <p>{fecha(item)}</p>
          </div>
          <button
            className="eliminator-button"
            onClick={() => eliminator(item.purchaseId)}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};
