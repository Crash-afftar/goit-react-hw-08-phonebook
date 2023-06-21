import axios from "axios";

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export async function fetchContactList(search) {
  const contacts = await axios.get(`/contacts`, {
    params: { search },
  });
  return contacts;
}

export const postContacts = async (newContact) => {
  try {
    const { data } = await axios.post('/contacts', newContact);
    return data;
  } catch (error) {
    throw new Error('Oops. Something is wrong. Please try again!');
  }
};

export async function deleteContact(contactId) {
  const contact = await axios.delete(`/contacts/${contactId}`);
  return contact;
}