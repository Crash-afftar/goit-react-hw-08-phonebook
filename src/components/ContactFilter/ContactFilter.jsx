import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { Label, Input } from './ContactFilter.styled';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  return (
   
      <Label htmlFor="filter">Find contacts by name:
      <Input
        type="text"
        name="filter"
        onChange={handleChange}        
      />
    </Label>
  );
};

export default ContactFilter;
