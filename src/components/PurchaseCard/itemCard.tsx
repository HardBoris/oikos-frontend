import { useNavigate } from "react-router-dom";

interface ICardProps {
  fecha: string;
  id: string;
  eliminator: () => void;
  total: number;
}

export const ItemCard = ({ eliminator, fecha, id, total }: ICardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="list__item">
        <div className="item__description">
          <div
            role="button"
            onClick={() => navigate(`/purchases/${id}`)}
            className="item__date"
          >
            {fecha}
          </div>
          <div className="item__total">R$ {total.toFixed(2)}</div>
        </div>
        <button className="eliminator-button" onClick={eliminator}>
          X
        </button>
      </div>
    </>
  );
};
