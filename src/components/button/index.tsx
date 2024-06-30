interface ButtonProps {
  children: string;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, color, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-xs w-full rounded-sm py-1.5 disabled:bg-gray-500 disabled:cursor-not-allowed ${color}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
