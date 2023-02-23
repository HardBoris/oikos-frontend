import { ReactNode } from "react";
import "./style.css";

interface FormularioProps {
  children: ReactNode;
  onSubmit?: () => void;
  border?: string;
}

export const Formulario = ({ children, ...rest }: FormularioProps) => (
  <form {...rest}>{children}</form>
);
