import css from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";
import ContactForm from "./components/LoginForm/LoginForm";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchContacts } from "./redux/contacts/contactsOps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);
  useEffect(() => {
   // dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.rootContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <RegisterForm />
      <ContactForm />
      <SearchBar />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ContactList />
    </div>
  );
}

export default App;
