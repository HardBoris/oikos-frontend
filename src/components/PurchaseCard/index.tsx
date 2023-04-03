// import { FaPlay } from "react-icons/fa";
import { Purchase, usePurchase } from "../../context/PurchaseContext";
import { ItemCard } from "./itemCard";
import "./style.css";

interface IPurchaseCardProps {
  setMiCompra: (item: Purchase) => void;
}

export const PurchaseCard = ({ setMiCompra }: IPurchaseCardProps) => {
  const { purchases, eliminaCompra } = usePurchase();
  // const { hinario, mensaje, filteredHymns } = useHymns();

  return (
    <div className="aside__list">
      {purchases.length !== 0 ? (
        <ItemCard
          setMiCompra={setMiCompra}
          lista={purchases}
          eliminator={eliminaCompra}
        />
      ) : (
        <div className="aside__msg">
          <p>Nada</p>
        </div>
      )}
    </div>
  );
};
