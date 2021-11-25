import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const signupEdpoint = '/users/signup';
const loginEdpoint = '/users/login';
const logoutEdpoint = '/users/logout';
const currentEdpoint = '/users/current';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signupUser = createAsyncThunk(
  'user/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${signupEdpoint}`, user);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(loginEdpoint, user);

      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const currentUser = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return rejectWithValue();
    } else {
      token.set(persistedToken);
      try {
        const { data } = await axios.get(currentEdpoint);

        return data;
      } catch (error) {
        rejectWithValue(error);
      }
    }
  },
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(logoutEdpoint);

      token.unset();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
