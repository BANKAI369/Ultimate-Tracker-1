import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axios";
import SignUp from "../../pages/SignUp";

export const loginUser = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    const res = await API.post("/auth/login", data);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || "Login failed");
  }
});

export const signupUser = createAsyncThunk("auth/signup", async (data, { rejectWithValue }) => {
  try {
    const res = await API.post("/auth/signup", data);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || "Signup failed");
  }
});

const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: token || null,
    loading: false,
    error: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export { SignUp };