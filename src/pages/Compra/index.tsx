import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Formulario } from "../../components/Form";
import { Input } from "../../components/Input";
import { usePurchase } from "../../context/PurchaseContext";
import { useParams } from "react-router-dom";

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
  const params = useParams();
  const { itemCompra } = usePurchase();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ingredientData>({ resolver: yupResolver(signInSchema) });

  const sender = (data: ingredientData) => {
    console.log(params);
    itemCompra(data, params.id);
  };

  return (
    <>
      <div>
        <h1>lista de compras</h1>
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
    </>
  );
};
