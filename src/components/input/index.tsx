type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
};

const Input = ({
  type,
  placeholder,
  value,
  className,
  setValue,
}: InputProps) => {
  return (
    <input
      className={`w-full rounded-sm ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
