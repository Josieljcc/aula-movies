import { useEffect, useState } from "react";
import Button from "../../../../components/button";
import Input from "../../../../components/input";
import FormError from "../../../../components/form-error";

type errorType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<errorType>({
    password: "Informe um email ou número de telefone válido.",
    email: "A senha deve ter entre 4 e 60 caracteres.",
  });

  const validatePassword = () => {
    if (!(password.length >= 4 && password.length <= 60)) {
      setError({
        ...error,
        password: "A senha deve ter 4 e 60 caracteres.",
      });
      return;
    }
    setError({ ...error, password: "" });
  };

  const validateEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(email)) {
      setError({
        ...error,
        email: "Informe um email ou número de telefone válido.",
      });
      return;
    }
    setError({ ...error, email: "" });
  };
  useEffect(() => {
    validatePassword();
  }, [password]);

  useEffect(() => {
    validateEmail();
  }, [email]);

  const isFormValid = !error.email && !error.password;

  return (
    <div className="  text-white bg-black h-[70%] w-[28.125rem] opacity-70 flex flex-col gap-2 p-16">
      <h2>Entrar</h2>
      <form className="flex flex-col gap-2  items-center">
        <Input
          className="text-gray-500"
          value={email}
          setValue={setEmail}
          type="texto"
          placeholder="Email ou numero de celular"
        />
        {error.email && <FormError>{error.email}</FormError>}
        <Input
          className="text-gray-500"
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Senha"
        />
        {error.password && <FormError>{error.password}</FormError>}
        <Button
          color="bg-red-500"
          disabled={!isFormValid}
          onClick={() => alert("Clicou")}
        >
          Entrar
        </Button>
        <p>OU</p>
        <Button color="bg-gray-500" onClick={() => alert("Clicou")}>
          Usar um código de acesso
        </Button>
        <a href="#">Esquece a senha?</a>
        <div className="flex flex-col">
          <div className="flex gap-1 mb-3">
            <input className="form-checkbox h-5 w-5" type="checkbox" />
            <p> Lembre-se de mim</p>
          </div>
          <div className="flex gap-1 items-center mb-3">
            <p>Novo por aqui?</p>
            <a className="font-bold cursor-pointer">Assine agora.</a>
          </div>
          <p className="text-sm">
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô.{" "}
            <a className="text-blue-600 cursor-pointer">Saiba mais.</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
