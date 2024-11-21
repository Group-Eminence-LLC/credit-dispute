// src/features/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as yup from 'yup';

// Environment variables
const LOGIN_URL = process.env.REACT_APP_LOGIN_ENDPOINT;
const SIGNUP_URL = process.env.REACT_APP_SIGNUP_ENDPOINT;

// Validation schemas
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const signUpSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string()
  .min(6, 'Password must be at least 6 characters')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
    'Password must contain at least one letter, one number, and one special character'
  )
  .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  acceptTerms: yup.boolean().oneOf([true], 'You must accept the terms and policy'),
});

// Thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginData, { rejectWithValue }) => {
    try {
      // Validate input
      console.log('Login data being validated:', loginData);
      await loginSchema.validate(loginData);
      console.log('Posting login data to:', LOGIN_URL, 'with data:', loginData);
      const response = await axios.post(LOGIN_URL, loginData);
      console.log('Login response:', response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

// Thunk for signup
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (signUpData, { rejectWithValue }) => {
    try {

      // Validate input
      await signUpSchema.validate(signUpData);
      const response = await axios.post(SIGNUP_URL, signUpData);
      return response.data;
    } catch (error) {
      
      return rejectWithValue(error.message || 'Signup failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Signup
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = authSlice.actions;
export default authSlice.reducer;
