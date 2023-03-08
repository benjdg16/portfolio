import { MouseEventHandler, ReactNode } from "react";

import "./Button.css";

interface IButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: "primary" | "secondary" | "warning" | "disable" | "success";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: ReactNode;
}

const Button = ({
  onClick,
  color = "primary",
  type = "button",
  disabled = false,
  children,
}: IButton) => {
  return (
    <button
      className={`btn ${color}`}
      type={type}
      disabled={disabled}
      onClick={onClick ? onClick : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
