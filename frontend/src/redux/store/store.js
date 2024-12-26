import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import bookingReducer from '../slices/bookingSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    bookings: bookingReducer,
  },
});

export default store;
