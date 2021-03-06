import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchContacts, addContacts, deleteContacts } from '../../services/API';

export const fetchContactsAll = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      const { data } = response;
      if (response.status === 404) {
        return rejectWithValue();
      } else {
        return data;
      }
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await addContacts(contact);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContacts(id);

      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
