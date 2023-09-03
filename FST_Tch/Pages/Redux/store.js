// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './SepetSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
