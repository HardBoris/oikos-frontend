import { useEffect, useState } from "react";
import { Purchase, usePurchase } from "../../context/PurchaseContext";
import { ItemCard } from "./itemCard";
import "./style.css";

interface IPurchaseCardProps {
  handler: () => void;
}

export const PurchaseCard = ({ handler }: IPurchaseCardProps) => {
  const { purchases, eliminaCompra, Shopping } = usePurchase();
  const [miLista, setMiLista] = useState(purchases);
  const Deletar = (id: string) => {
    eliminaCompra(id);
    setMiLista(miLista.filter((item) => item.purchaseId !== id));
    handler();
  };

  useEffect(() => {
    Shopping();
    setMiLista(purchases);
  }, []);

  return (
    <div className="purchases__list">
      {miLista.length !== 0 ? (
        miLista.map((item) => (
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
