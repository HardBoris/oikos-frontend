import { useEffect } from "react";
import { usePurchase } from "../../context/PurchaseContext";
import { ItemCard } from "./itemCard";
import "./style.css";

interface IPurchaseCardProps {
  handler: () => void;
}

export const PurchaseCard = ({ handler }: IPurchaseCardProps) => {
  const { purchases, eliminaCompra, Shopping } = usePurchase();
  const Deletar = (id: string) => {
    eliminaCompra(id);
    handler();
  };

  useEffect(() => {
    Shopping();
  }, [purchases]);

  return (
    <div className="aside__list">
      {purchases.length !== 0 ? (
        purchases.map((item) => (
          <ItemCard
            key={item.purchaseId}
            eliminator={() => Deletar(item.purchaseId)}
            fecha={item.purchaseDate.split("T")[0]}
            id={item.purchaseId}
          />
        ))
      ) : (
        <div className="aside__msg">
          <p>Nada</p>
        </div>
      )}
    </div>
  );
};
