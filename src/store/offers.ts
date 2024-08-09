import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer-type';
import { APIRoute, Status } from '../const';
import { AxiosInstance } from 'axios';

type OffersState = {
  offers: Offer[];
  status: Status;
};

const initialState: OffersState = {
  offers: [],
  status: Status.LOADING
};

export const fetchOffers = createAsyncThunk<Offer[], undefined, {extra: AxiosInstance}>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
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
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.status = Status.LOADING;
        state.offers = [];
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.status = Status.ERROR;
        state.offers = [];
      });
  },
});

// export const { load: offersLoaded} = OffersSlice.actions;

export default OffersSlice.reducer;
