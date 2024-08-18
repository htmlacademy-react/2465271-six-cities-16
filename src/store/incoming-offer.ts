import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Offer, IncomingOffer } from '../types/offer-type';
import { APIRoute, RequestStatus } from '../const';
import { AxiosInstance } from 'axios';

type IncomingOffersState = {
  incommingOffer: IncomingOffer | null;
  status: RequestStatus;
  hasError: boolean;
};

const initialState: IncomingOffersState = {
  incommingOffer: null,
  hasError: false,
  status: RequestStatus.LOADING,
};

export const fetchIncommingOffer = createAsyncThunk<IncomingOffer, {id: Offer['id'] | null}, {extra: AxiosInstance}> (
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
        state.incommingOffer = null;
        state.hasError = false;
        state.status = RequestStatus.LOADING;
      })
      .addCase(fetchIncommingOffer.fulfilled, (state, action) => {
        state.incommingOffer = action.payload;
        state.status = RequestStatus.SUCCESS;
      })
      .addCase(fetchIncommingOffer.rejected, (state) => {
        state.incommingOffer = null;
        state.hasError = true;
        state.status = RequestStatus.ERROR;
      });
  },
});

export default IncomingOfferSlice.reducer;
