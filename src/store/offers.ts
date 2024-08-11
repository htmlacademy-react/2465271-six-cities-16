import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer-type';
import { APIRoute, RequestStatus } from '../const';
import { AxiosInstance } from 'axios';

type OffersState = {
  offers: Offer[];
  status: RequestStatus;
  setActiveId: Offer['id'] | null;
};

const initialState: OffersState = {
  offers: [],
  status: RequestStatus.IDLE,
  setActiveId: null,
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
    setActiveId: (state, action: PayloadAction<Offer['id']>) => {
      state.setActiveId = action.payload;
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

export const { setActiveId: setActiveId } = OffersSlice.actions;

export default OffersSlice.reducer;
