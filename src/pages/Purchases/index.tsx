// import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { Purchase, usePurchase } from "../../context/PurchaseContext";
import "../styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import "./purchase.style.css";
import { Formulario } from "../../components/Form";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const signInSchema = yup.object().shape({
  ingredientName: yup.string().required("Campo obrigatório"),
  ingredientQty: yup.string().required("Campo obrigatório"),
  measurementUnit: yup.string().required("Campo obrigatório"),
  ingredientPrice: yup.string().required("Campo obrigatório"),
});

interface ingredientData {
  ingredientName: string;
  ingredientQty: string;
  measurementUnit: string;
  ingredientPrice: string;
}

export const Purchases = () => {
  // const [compra, setCompra] = useState({} as Purchase)
  const { purchases, Compra, itemCompra, eliminaCompra, Shopping } =
    usePurchase();
  // const compra = purchases[0];
  const fecha = (objeto: Purchase) => objeto.purchaseDate.split("T")[0];
  // const [shoppingList, setShoppingList] = useState(purchases);

  // console.log(fecha);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ingredientData>({ resolver: yupResolver(signInSchema) });

  const sender = (data: ingredientData) => {
    itemCompra(data);
  };

  const handlecompra = () => {
    Compra();
    Shopping();
  };

  const hendleElimina = (id: string) => {
    eliminaCompra(id);
    Shopping();
    // setShoppingList(shoppingList.filter((item) => item.purchaseId !== id));
  };

  return (
    <>
      <div>
        <h1>hola</h1>
        <button onClick={() => handlecompra()}>nueva compra</button>
        <div className="list-card">
          {purchases.map((item) => (
            <div className="item-card" key={item.purchaseId}>
              <div>{fecha(item)}</div>
              <button
                className="eliminator-button"
                onClick={() => hendleElimina(item.purchaseId)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <Formulario onSubmit={handleSubmit(sender)}>
          <div className="datos">
            <Input
              register={register}
              name="ingredientName"
              error={errors.ingredientName?.message}
              label="Ingrediente"
            />
            <Input
              register={register}
              name="ingredientQty"
              error={errors.ingredientQty?.message}
              label="Cantidad"
            />
            <Input
              register={register}
              name="measurementUnit"
              error={errors.measurementUnit?.message}
              label="Unidad"
            />
            <Input
              register={register}
              name="ingredientPrice"
              error={errors.ingredientPrice?.message}
              label="Precio"
            />
            <div className="accion">
              <Button type="submit">+</Button>
            </div>
          </div>
        </Formulario>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
