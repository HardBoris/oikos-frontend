import { useEffect, useState } from "react";
import {
  Purchase,
  usePurchase,
  PurchaseDetail,
} from "../../context/PurchaseContext";
import { ItemCard } from "./itemCard";
import "./style.css";

/* interface IPurchaseDetailCardProps {
  handler: () => void;
} */

export const PurchaseDetailCard =
  (/* { handler }: IPurchaseDetailCardProps */) => {
    const { thisPurchase, eliminaCompra, Shopping } = usePurchase();
    const [thisShoppingList, setThisShoppingList] = useState<PurchaseDetail[]>(
      thisPurchase.purchaseDetails
    );
    const Deletar = (id: string) => {
      eliminaCompra(id);
      // setMiLista(miLista.filter((item) => item.purchaseId !== id));
      // handler();
    };

    useEffect(() => {
      Shopping();
      // setMiLista(purchases);
    }, []);

    return (
      <div className="purchases__list">
        {thisShoppingList ? (
          thisShoppingList.map((item) => (
            <ItemCard
              key={item.purchaseDetailId}
              ingrediente={item.ingredientName}
              qty={item.ingredientQty}
              unit={item.measurementUnit}
              costo={item.ingredientPrice}
              eliminator={() => console.log("boton para deletar ingrediente")}
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
