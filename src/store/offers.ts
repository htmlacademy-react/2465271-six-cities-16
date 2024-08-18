import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer-type';
import { APIRoute, RequestStatus } from '../const';
import { AxiosInstance } from 'axios';

type OffersState = {
  offers: Offer[];
  status: RequestStatus;
  setActiveCard: Offer | null;
};

const initialState: OffersState = {
  offers: [],
  status: RequestStatus.LOADING,
  setActiveCard: null,
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
    setActiveCard: (state, action: PayloadAction<Offer | null>) => {
      state.setActiveCard = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.status = RequestStatus.LOADING;
        state.offers = [];
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = RequestStatus.SUCCESS;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.status = RequestStatus.ERROR;
        state.offers = [];
      });
  },
});

export const { setActiveCard: setActiveCard } = OffersSlice.actions;

export default OffersSlice.reducer;
