import React from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
  className: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
