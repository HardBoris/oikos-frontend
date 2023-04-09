import { usePurchase } from "../../context/PurchaseContext";
import "../styles.css";
// import * as yup from "yup";
import "./purchase.style.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { PurchaseCard } from "../../components/PurchaseCard";

/* const signInSchema = yup.object().shape({
  ingredientName: yup.string().required("Campo obrigatório"),
  ingredientQty: yup.string().required("Campo obrigatório"),
  measurementUnit: yup.string().required("Campo obrigatório"),
  ingredientPrice: yup.string().required("Campo obrigatório"),
}); */

/* interface ingredientData {
  ingredientName: string;
  ingredientQty: string;
  measurementUnit: string;
  ingredientPrice: string;
} */

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
      <div className="ambito">
        <h1>hola</h1>
        <button onClick={() => handlecompra()}>nueva compra</button>
        {<PurchaseCard handler={handleElimina} />}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
