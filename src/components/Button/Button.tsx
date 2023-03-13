import { MouseEventHandler, CSSProperties, ReactNode } from "react";

import "./Button.css";

interface IButton {
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: "primary" | "secondary" | "warning" | "disable" | "success";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: ReactNode;
  styles?: CSSProperties;
}

const Button = ({
  id,
  onClick,
  color = "primary",
  type = "button",
  disabled = false,
  children,
  styles,
}: IButton) => {
  return (
    <button
      id={id}
      className={`btn ${color}`}
      type={type}
      disabled={disabled}
      onClick={onClick ? onClick : undefined}
      style={styles}
    >
      {children}
    </button>
  );
};

export default Button;
