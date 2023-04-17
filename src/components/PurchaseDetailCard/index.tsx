import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    const params = useParams();
    const { thisPurchase, eliminaCompra, Shopping, shoppingList } =
      usePurchase();
    const [thisShoppingList, setThisShoppingList] = useState<PurchaseDetail[]>(
      thisPurchase.purchaseDetails
    );
    // const [purchaseCost, setPurchaseCost] = useState(0);
    const Deletar = (id: string) => {
      eliminaCompra(id);
      // setMiLista(miLista.filter((item) => item.purchaseId !== id));
      // handler();
    };

    /* if (thisShoppingList.length !== 0) {
      setPurchaseCost(
        thisShoppingList.reduce((a, b) => a + b.ingredientPrice, 0)
      );
    } */

    useEffect(() => {
      shoppingList(params.id);
      // setMiLista(purchases);
    }, [params.id]);

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
        {/* <div>{purchaseCost}</div> */}
      </div>
    );
  };
