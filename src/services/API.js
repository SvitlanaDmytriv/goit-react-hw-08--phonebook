import axios from 'axios';

export const fetchContacts = () => {
  return axios.get('/contacts');
};

export const addContacts = contact => {
  return axios.post('/contacts', contact);
};

export const deleteContacts = id => {
  return axios.delete(`/contacts/${id}`);
};
