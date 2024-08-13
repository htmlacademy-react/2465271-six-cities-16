import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Offer, IncomingOffer } from '../types/offer-type';
import { APIRoute } from '../const';
import { AxiosInstance } from 'axios';

type IncomingOffersState = {
  incommingOffer: IncomingOffer | undefined;
};

const initialState: IncomingOffersState = {
  incommingOffer: undefined,
};

export const fetchIncommingOffer = createAsyncThunk<IncomingOffer, {id: Offer['id'] | undefined}, {extra: AxiosInstance}> (
  'incommingOffer/fetchOffer',
  async ({id}, { extra: api }) => {
    const {data} = await api.get<IncomingOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const IncomingOfferSlice = createSlice({
  name: 'incomingOffer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchIncommingOffer.pending, (state) => {
        state.incommingOffer = undefined;
      })
      .addCase(fetchIncommingOffer.fulfilled, (state, action) => {
        state.incommingOffer = action.payload;
      })
      .addCase(fetchIncommingOffer.rejected, (state) => {
        state.incommingOffer = undefined;
      });
  },
});

export default IncomingOfferSlice.reducer;
