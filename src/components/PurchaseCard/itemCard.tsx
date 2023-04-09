import { useNavigate } from "react-router-dom";

interface ICardProps {
  fecha: string;
  id: string;
  eliminator: () => void;
}

export const ItemCard = ({ eliminator, fecha, id }: ICardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="list__item">
        <div className="item__title">
          <div
            role="button"
            onClick={() => navigate(`/purchases/${id}`)}
            style={{ cursor: "pointer" }}
          >
            {fecha}
          </div>
        </div>
        <button className="eliminator-button" onClick={eliminator}>
          X
        </button>
      </div>
    </>
  );
};
