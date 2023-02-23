import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Formulario } from "../../components/Form";
import { useAuth } from "../../context/UserContext";
import { InputPassword } from "../../components/InputPassword";

const signInSchema = yup.object().shape({
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup.string().required("Campo obrigatório"),
  confirmpassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Password must match"),
});

interface txtInfo {
  email: string;
  password: string;
  confirmpassword: string;
}

export const SignForm = () => {
  const history = useNavigate();

  const { signUp } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<txtInfo>({ resolver: yupResolver(signInSchema) });

  const sender = async (data: txtInfo) => {
    const { confirmpassword, ...dataInfo } = data;
    signUp(dataInfo);
    history("/login");
  };

  return (
    <Formulario onSubmit={handleSubmit(sender)}>
      <div className="form-title">
        <h2>Seus Dados</h2>
      </div>
      <div className="fields">
        <Input
          register={register}
          name="email"
          error={errors.email?.message}
          label="Email"
          // placeholder="fulanito@detal.com"
        />

        <InputPassword
          register={register}
          name="password"
          error={errors.password?.message}
          label="Senha"
          type="password"
        />

        <InputPassword
          register={register}
          name="confirmpassword"
          error={errors.confirmpassword?.message}
          label="Confirmar Senha"
          type="password"
        />
      </div>
      <div className="column-actions">
        <button type="submit" className="positivo">
          Cadastrar
        </button>
        {/* <p>
          Já possue uma conta?{" "}
          <span>
            <a href="/login">Faça LogIn!</a>
          </span>
        </p> */}
      </div>
    </Formulario>
  );
};
