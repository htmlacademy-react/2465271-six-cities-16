import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { placesOffers } from '../mocks/places-offers';
import { Offer } from '../types/offer-type';

type OffersState = {
  offers: Offer[];
};

const initialState: OffersState = {
  offers: placesOffers
};

export const OffersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
  },
});

export const { load: offersLoaded} = OffersSlice.actions;

export default OffersSlice.reducer;
