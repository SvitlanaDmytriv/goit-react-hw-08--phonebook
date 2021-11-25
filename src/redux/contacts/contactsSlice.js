import { createReducer, createSlice } from '@reduxjs/toolkit';

import { changeFilter } from './contactsAction';

import {
  fetchContactsAll,
  addContact,
  deleteContact,
} from './contactsOperations';

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const initialStateContacts = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,

  extraReducers: {
    [fetchContactsAll.pending]: (state, _) => {
      state.loading = true;
      state.error = null;
    },
    [fetchContactsAll.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchContactsAll.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [addContact.pending]: (state, _) => ({ ...state, loading: true }),
    [addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.loading = false;
      state.error = null;
    },
    [addContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteContact.pending]: (state, _) => {
      state.loading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.loading = false;
      state.error = null;
    },
    [deleteContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
