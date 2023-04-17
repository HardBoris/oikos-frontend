interface IDetailCardProps {
  ingrediente: string;
  qty: number;
  unit: string;
  costo: number;
  eliminator: () => void;
}

export const ItemCard = ({
  ingrediente,
  qty,
  unit,
  costo,
  eliminator,
}: IDetailCardProps) => {
  return (
    <>
      <div className="list__item">
        <div className="item__description">
          <div className="item__name">{ingrediente}</div>
          <div className="cantidad">
            <div className="item__qty">{qty}</div>
            <div className="item__unit">{unit}</div>
          </div>
          <div className="item__cost">R$ {costo.toFixed(2)}</div>
        </div>
        <button className="eliminator-button" onClick={eliminator}>
          X
        </button>
      </div>
    </>
  );
};
