import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

/* ===== FETCH ===== */
export const fetchEquipment = createAsyncThunk(
  "equipment/fetch",
  async () => {
    const res = await api.get("/api/equipment/all");
    return res.data;
  }
);

/* ===== ADD ===== */
export const addEquipment = createAsyncThunk(
  "equipment/add",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(
        "/api/admin/equipment/add",
        data
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Add failed");
    }
  }
);

export const deleteEquipment = createAsyncThunk(
  "equipment/delete",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/admin/equipment/${id}`);
      return id; // return deleted ID
    } catch (err) {
      return rejectWithValue(err.response?.data || "Delete failed");
    }
  }
);

export const searchEquipmentByLocation = createAsyncThunk(
  "equipment/searchByLocation",
  async (location, { rejectWithValue }) => {
    try {
      const res = await api.get(
        `/api/equipment/search?location=${location}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || "Search failed"
      );
    }
  }
);

const equipmentSlice = createSlice({
  name: "equipment",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    bookEquipment: (state, action) => {
      const item = state.list.find(
        (eq) => eq.id === action.payload
      );
      if (item) item.available = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchEquipment.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEquipment.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEquipment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD
      .addCase(addEquipment.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(addEquipment.rejected, (state, action) => {
        state.error = action.payload;
      })
      
      .addCase(deleteEquipment.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(searchEquipmentByLocation.pending, (state) => {
    state.loading = true;
    })
    .addCase(searchEquipmentByLocation.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload; 
    })
    .addCase(searchEquipmentByLocation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    },
});

export default equipmentSlice.reducer;
