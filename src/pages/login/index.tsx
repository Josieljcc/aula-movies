import LoginForm from "./component/form";

const Login = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center ">
      <img
        className="absolute h-full w-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/6b27d791-2d75-4ed0-9387-a776827fbdf3/BR-pt-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Plano de fundo com capa de varias filmes"
      />
      <LoginForm />
    </div>
  );
};

export default Login;
