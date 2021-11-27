import { createSlice } from '@reduxjs/toolkit';
import {
  signupUser,
  loginUser,
  currentUser,
  logoutUser,
} from './userOperation';

const initialStateUsers = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoading: false,
  isAuth: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'user',
  initialState: initialStateUsers,
  extraReducers: {
    [signupUser.pending]: (state, _) => {
      state.isLoading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isAuth = true;
        state.error = null;
      } else {
        state.error = { message: 'user with such data is already registered' };
      }
    },
    [signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //////////////
    [loginUser.pending]: state => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action);
      if (action.payload) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isAuth = true;
        state.error = null;
      } else {
        state.error = { message: 'invalid date' };
      }
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    /////////////
    [currentUser.pending]: (state, _) => {
      state.isLoading = true;
    },
    [currentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isAuth = true;
      state.error = null;
    },
    [currentUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.isAuth = false;
    },
    //////////
    [logoutUser.pending]: (state, _) => {
      state.isLoading = true;
    },
    [logoutUser.fulfilled]: (state, _) => {
      state.user = {
        name: null,
        email: null,
      };
      state.isLoading = false;
      state.isAuth = false;
      state.token = null;
      state.error = null;
    },
    [logoutUser.rejected]: (state, action) => {
      state.isLoading = false;

      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
