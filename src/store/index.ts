import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './offers';
import activeCityReducer from './active-city';

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    activeCity: activeCityReducer,
  }
});
