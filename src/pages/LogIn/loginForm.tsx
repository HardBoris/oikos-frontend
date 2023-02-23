import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Formulario } from "../../components/Form";
import { useAuth } from "../../context/UserContext";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { InputPassword } from "../../components/InputPassword";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface txtData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const history = useNavigate();

  // const emailRecovered = localStorage.getItem("@Hinario:email");

  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<txtData>({ resolver: yupResolver(signInSchema) });

  const sender = (data: txtData) => {
    console.log(data);
    signIn(data);
    history("/");
  };

  return (
    <Formulario onSubmit={handleSubmit(sender)}>
      <div className="form-title">
        <h2>Login</h2>
      </div>
      <div className="fields">
        <Input
          register={register}
          name="email"
          error={errors.email?.message}
          label="Email"
          placeholder="seu email"
        />

        <InputPassword
          register={register}
          name="password"
          error={errors.password?.message}
          label="Senha"
        />
      </div>
      <div className="column-actions">
        <Button type="submit" className="positivo">
          Entrar
        </Button>
        {/* <p>
          Não tem conta?{" "}
          <span>
            <a href="/signup">Cadastre-se!</a>
          </span>
        </p> */}
      </div>
    </Formulario>
  );
};
