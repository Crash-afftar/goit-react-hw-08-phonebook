import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectContactsList } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const newContatact = { id: nanoid(), name: name, phone: phone };
    if (contacts.find(el => el.phone === phone)) {
      return toast.warn(`${name} is already in contacts.`, {
position: "top-right",
autoClose: 500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
    } else {
      dispatch(addContacts(newContatact));
    }
    form.reset();
  };

  return (
    <><ToastContainer />
    <Form title="Phonebook" onSubmit={handleSubmit}>
      <Label>
        Name:
      <Input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </Label>
       
      <Label>
        Number:
      <Input
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      </Label>

      <Button type="submit">Add contact</Button>
      </Form>
      </>
  );
};

export default ContactForm;

