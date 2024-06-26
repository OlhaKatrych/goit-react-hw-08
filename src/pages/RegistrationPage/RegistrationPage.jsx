import css from "./RegistrationPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

function RegistrationPage() {
  return (
    <div>
      <PageTitle>Please, register your account:</PageTitle>
      <RegisterForm />
    </div>
  );
}

export default RegistrationPage;
