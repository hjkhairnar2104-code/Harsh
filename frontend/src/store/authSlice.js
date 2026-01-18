import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

/* ===== REGISTER ===== */
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/auth/register", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Register failed");
    }
  }
);

/* ===== LOGIN ===== */
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/auth/login", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Invalid credentials");
    }
  }
);

/* ===== LOGOUT ===== */
export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.clear();
});

/* ===== SLICE ===== */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    error: null,
  },
  reducers: {
    logoutState: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
    }
  },
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOG
  },
});

export const { logoutState } = authSlice.actions;
export default authSlice.reducer;
