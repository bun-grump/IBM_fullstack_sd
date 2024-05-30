import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; // optional, will gives error if not within the set of value
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
