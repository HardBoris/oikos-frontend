import { usePurchase } from "../../context/PurchaseContext";
import "../styles.css";
// import * as yup from "yup";
import "./purchase.style.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { PurchaseCard } from "../../components/PurchaseCard";
import { Button } from "../../components/Button";

export const Purchases = () => {
  const { purchases, Compra, Shopping } = usePurchase();
  const [counter, setCounter] = useState(purchases.length);

  const handlecompra = () => {
    Compra();
    setCounter(counter + 1);
  };

  const handleElimina = () => {
    Shopping();
    setCounter(counter - 1);
  };

  useEffect(() => {
    Shopping();
  }, [counter]);

  return (
    <>
      <div className="purchases">
        {/* <h1>hola</h1> */}
        <Button className="adicionar" onClick={() => handlecompra()}>
          nueva compra
        </Button>
        {<PurchaseCard handler={handleElimina} />}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
