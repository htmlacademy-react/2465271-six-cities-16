import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './offers';
import activeCityReducer from './active-city';
import sortOffersReducer from './sort-offers';

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    activeCity: activeCityReducer,
    sortOffers: sortOffersReducer,
  }
});
