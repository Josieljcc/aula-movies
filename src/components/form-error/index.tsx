import { VscError } from "react-icons/vsc";

type FormErrorProps = {
  children: string;
};

const FormError = ({ children }: FormErrorProps) => {
  return (
    <div className="text-red-600 flex items-center justify-center gap-1">
      <VscError />
      <p>{children}</p>
    </div>
  );
};

export default FormError;
