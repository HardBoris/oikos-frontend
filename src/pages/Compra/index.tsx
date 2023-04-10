import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Formulario } from "../../components/Form";
import { Input } from "../../components/Input";
import { usePurchase } from "../../context/PurchaseContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";

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
  const [video, setVideo] = useState([]);
  const params = useParams();
  const { itemCompra, shoppingList, tata } = usePurchase();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ingredientData>({ resolver: yupResolver(signInSchema) });

  const sender = (data: ingredientData) => {
    setVideo([...video, data]);
    itemCompra(data, params.id);
    handleForm();
    console.log(video);
  };

  useEffect(() => {
    shoppingList(params.id);
    setVideo(tata.purchaseDetails);
  }, []);

  // console.log(tata);
  let detalles = tata.purchaseDetails;

  const handleForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <>
      {detalles ? (
        <div>
          <h1>lista de compras</h1>
          <button onClick={() => setOpenForm(true)}>otro ingrediente</button>
          {detalles.map((item) => (
            <div key={item.purchaseDetailId}>
              <p>{item.ingredientName}</p>
              <p>{item.ingredientQty}</p>
              <p>{item.ingredientPrice}</p>
            </div>
          ))}
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
