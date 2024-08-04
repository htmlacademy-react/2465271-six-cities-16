import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { placesOffers } from '../mocks/places-offers';
import { Offer } from '../types/offer-type';

type OffersState = Offer[];

const initialState: OffersState = placesOffers;

export const OffersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    loaded: (state, action: PayloadAction<Offer[]>) => action.payload,
  },
});

export const { loaded: offersLoaded} = OffersSlice.actions;

export default OffersSlice.reducer;
