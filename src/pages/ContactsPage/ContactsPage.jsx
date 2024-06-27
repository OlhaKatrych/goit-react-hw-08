import css from "./ContactsPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBar from "../../components/SearchBar/SearchBar";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectContacts } from "../../redux/contacts/selectors";

function ContactsPage() {
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBar />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default ContactsPage;
