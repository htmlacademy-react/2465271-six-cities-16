import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './offers';
import activeCityReducer from './active-city';
import sortOffersReducer from './sort-offers';
import userReducer from './user';
import incomingOfferReducer from './incoming-offer';
import commentsReducer from './comments';
import nearbyOffersReducer from './nierby-offers';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    activeCity: activeCityReducer,
    sortOffers: sortOffersReducer,
    user: userReducer,
    incomingOffer: incomingOfferReducer,
    comments: commentsReducer,
    nearbyOffers: nearbyOffersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
