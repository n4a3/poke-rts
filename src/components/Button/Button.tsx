import React from "react";
import Btn from "./Button.styles";

interface Props {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
