import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

/* =====================
   CREATE BOOKING (FARMER)
===================== */
export const createBooking = createAsyncThunk(
  "booking/create",
  async (bookingData, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/checkout", bookingData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/* =====================
   FARMER BOOKINGS
===================== */
export const fetchMyBookings = createAsyncThunk(
  "booking/my",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/api/booking/my");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/* =====================
   OWNER BOOKINGS
===================== */
export const fetchBookingsForEquipment = createAsyncThunk(
  "booking/equipment",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`/api/booking/my`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/* =====================
   SLICE
===================== */
const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    addBooking: (state, action) => {
      // Add new booking to state
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder

      // CREATE BOOKING
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // MY BOOKINGS
      .addCase(fetchMyBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMyBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // BOOKINGS FOR EQUIPMENT (OWNER)
      .addCase(fetchBookingsForEquipment.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookingsForEquipment.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBookingsForEquipment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
