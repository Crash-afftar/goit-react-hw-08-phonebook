import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactList, postContacts, deleteContact } from './API';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async search => {
    const contacts = await fetchContactList(search);
    return contacts.data;
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (data, thunkAPI) => {
    try {
      const contact = await postContacts(data);
      toast.success(`${data.name} is added to the contact list!`);
      return contact;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    const contact = await deleteContact(contactId);
    return contact.contactId;
  }
);

