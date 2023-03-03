import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { localApi as api } from "../services/api";
// import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  userId: string;
  userName: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserContextData {
  user: User;
  token: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  signUp: (info: SignInCredentials) => void;
  // mensaje: string;
  email: string;
  // status: number;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  // const [messageError, setMessageError] = useState("");
  // const [status, setStatus] = useState(0);

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Oikos:token");
    const user = localStorage.getItem("@Oikos:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = async ({ email, password }: SignInCredentials) => {
    const aviso = toast.loading("Por Favor espere...");
    await api
      .post("/oikos-api/users/login", { email, password })
      .then((response) => {
        const { user, token } = response.data;
        console.log(user);
        localStorage.setItem("@Oikos:token", token);
        localStorage.setItem("@Oikos:user", JSON.stringify(user));
        setData({ user, token });
        toast.update(aviso, {
          render: "Bem-Vindo a Oikos!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((error) => {
        toast.update(aviso, {
          render: error.response.data.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  const signUp = async ({ email, password }: SignInCredentials) => {
    const aviso = toast.loading("Por Favor espere...");
    await api
      .post("/oikos-api/users/register", { email, password })
      .then((response) => {
        console.log(response.data);
        const { email } = response.data;
        setEmail(email);
        toast.update(aviso, {
          render: "Novo usuário cadastrado!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      })
      .then(() => history("/login"))
      .catch((error) => {
        toast.update(aviso, {
          render: error.response.data.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  const signOut = () => {
    localStorage.removeItem("@Oikos:token");
    localStorage.removeItem("@Oikos:user");

    setData({} as AuthState);
    setEmail("");
  };

  return (
    <UserContext.Provider
      value={{
        token: data.token,
        user: data.user,
        signIn,
        signOut,
        signUp,
        // mensaje,
        email,
        // status,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useAuth };
