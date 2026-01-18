import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import equipmentReducer from "./equipmentSlice";
import bookingReducer from "./bookingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    equipment: equipmentReducer,
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
