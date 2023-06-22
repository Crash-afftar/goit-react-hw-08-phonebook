import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ButtonDelete, WarningText } from './ContactList.styled';
import { selectContactsList, selectFilter  } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContactsList);

  const filtredContacts = useMemo(() => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [contacts, filter]);
  
  const defaultMessage = contacts.length === 0;
  return (
      <>
    <List>
      {defaultMessage && (
        <WarningText>There are currently no contacts in your Phonebook</WarningText>
      )}

      {filtredContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <span>{`${name}: ${number}`}</span>
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