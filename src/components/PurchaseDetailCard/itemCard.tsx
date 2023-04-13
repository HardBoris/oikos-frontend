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
        <div className="item__title">
          <div>{ingrediente}</div>
          <div>{qty}</div>
          <div>{unit}</div>
          <div>{costo}</div>
        </div>
        <button className="eliminator-button" onClick={eliminator}>
          X
        </button>
      </div>
    </>
  );
};
