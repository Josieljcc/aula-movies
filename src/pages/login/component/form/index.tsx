import { useEffect, useState } from "react";
import Button from "../../../../components/button";
import Input from "../../../../components/input";
import FormError from "../../../../components/form-error";
import { useNavigate } from "react-router-dom";

type errorType = {
  email: string;
  password: string;
};

const user = {
  email: "goku@hotmail.com",
  password: "123456",
};

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

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

  const handleLogin = () => {
    if (user.email === email && user.password === password) {
      navigate("/home");
      return;
    } else {
      alert("Login ou senha errada");
    }
  };

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
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <p>OU</p>
        <Button color="bg-gray-500" onClick={() => alert("Clicou")}>
          Usar um código de acesso
        </Button>
        <a href="#">Esquece a senha?</a>
        <div></div>
      </form>
    </div>
  );
};

export default LoginForm;
