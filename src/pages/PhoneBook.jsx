import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/operations';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader.styled';

export default function PhoneBookApp() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
  <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && !error && (
        <Loader/>
      )}
        <ContactList />
        <ToastContainer autoClose={2500} limit={3} />
  </div>

  );
}