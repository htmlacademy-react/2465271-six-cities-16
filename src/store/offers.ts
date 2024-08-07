import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
// import { placesOffers } from '../mocks/places-offers';
import { Offer } from '../types/offer-type';
import { APIRoute } from '../const';
import { AxiosInstance } from 'axios';

type OffersState = {
  offers: Offer[];
};

const initialState: OffersState = {
  offers: []
};

export const fetchOffers = createAsyncThunk<Offer[], undefined, {extra: AxiosInstance}>(
  'offers/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  }
);

export const OffersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchOffers.fulfilled, (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    });
  },
});

export const { load: offersLoaded} = OffersSlice.actions;

export default OffersSlice.reducer;
