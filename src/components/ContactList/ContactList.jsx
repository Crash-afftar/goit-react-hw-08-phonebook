import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ButtonDelete, WarningText } from './ContactList.styled';
import { selectContactsList } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  
  const defaultMessage = contacts.length === 0;
  return (
      <>
    <List>
      {defaultMessage && (
        <WarningText>There are currently no contacts in your Phonebook</WarningText>
      )}

      {contacts.map(({ name, phone, id }) => (
        <ListItem key={id}>
          <span>{`${name}: ${phone}`}</span>
          <ButtonDelete
            type="button"
            onClick={() => {
              dispatch(deleteContacts(id));
            }}
          >
            X
          </ButtonDelete>
        </ListItem>
      ))}
      </List>
      </>
      );
      
};

export default ContactList;