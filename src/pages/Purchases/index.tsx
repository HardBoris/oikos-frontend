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
  const { purchases, Compra } = usePurchase();
  // const compra = purchases[0];
  const fecha = (objeto: Purchase) => objeto.purchaseDate.split("T")[0];

  // console.log(fecha);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ingredientData>({ resolver: yupResolver(signInSchema) });

  const sender = (data: ingredientData) => {
    Compra(data);
  };

  return (
    <>
      <div>
        <h1>hola</h1>
        <div>
          {purchases.map((item) => (
            // <div key={item.purchaseId}>{item.purchaseDate.split("T")[0]}</div>
            <div key={item.purchaseId}>{fecha(item)}</div>
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
        {/* <table>
          <thead>
            <tr>
              <td>23/02/2023</td>
            </tr>
          </thead>
          <tbody>
            <table>
              <thead>
                <tr>
                  <th>ingrediente</th>
                  <th>Unidade de medida</th>
                  <th>Quantidade</th>
                  <th>Valor do ingrediente</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>trigo</td>
                  <td>kg</td>
                  <td>10</td>
                  <td>56</td>
                </tr>
                <tr>
                  <td>açúcar</td>
                  <td>kg</td>
                  <td>10</td>
                  <td>45</td>
                </tr>
              </tbody>
            </table>
          </tbody>
        </table> */}
      </div>
      <div></div>
    </>
  );
};
