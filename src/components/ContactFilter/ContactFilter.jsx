import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { Label, Input } from './ContactFilter.styled';
import { selectFilter } from 'redux/contacts/selectors';

const ContactFilter = () => {
  
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  return (
   
      <Label htmlFor="filter">Find contacts by name:
      <Input
        id="filter"
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilterChange}
        required
      />
    </Label>
  );
};

export default ContactFilter;