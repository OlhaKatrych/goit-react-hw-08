import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";

function LoginPage() {
  return (
    <div>
      <PageTitle>Please, enter your email and password: </PageTitle>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
