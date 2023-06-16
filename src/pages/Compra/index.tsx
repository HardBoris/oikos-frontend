import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Formulario } from "../../components/Form";
import { Input } from "../../components/Input";
import { PurchaseDetail, usePurchase } from "../../context/PurchaseContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { PurchaseDetailCard } from "../../components/PurchaseDetailCard";
import "./compra.style.css";

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

export const ListaDeCompras = () => {
  const [openForm, setOpenForm] = useState(false);
  const params = useParams();
  const { itemCompra, shoppingList, thisPurchase, ingredient } = usePurchase();
  const [estaLista, setEstaLista] = useState<PurchaseDetail[]>(
    thisPurchase.purchaseDetails
  );

  useEffect(() => {
    shoppingList(params.id);
  }, []);

  console.log(params);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ingredientData>({ resolver: yupResolver(signInSchema) });

  const sender = (data: ingredientData) => {
    console.log(data);
    itemCompra(data, params.id);
    shoppingList(params.id);
    handleForm();
  };

  const handleForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <>
      {estaLista ? (
        <div className="compra">
          <h1>lista de compras</h1>
          <button onClick={() => setOpenForm(true)}>otro ingrediente</button>
          <PurchaseDetailCard />
          <div>
            Total de esta compra:{" "}
            {estaLista.reduce((a, b) => a + b.ingredientPrice, 0).toFixed(2)}
          </div>
        </div>
      ) : (
        <div>karen</div>
      )}
      <Modal isOpen={openForm} setIsOpen={handleForm}>
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
      </Modal>
    </>
  );
};
