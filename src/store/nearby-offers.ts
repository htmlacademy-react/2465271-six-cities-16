import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Offer } from '../types/offer-type';
import { APIRoute } from '../const';
import { AxiosInstance } from 'axios';

type NearbyState = {
  nearbyOffers: Offer[] | undefined;
};

const initialState: NearbyState = {
  nearbyOffers: undefined,
};

export const fetchNearbyOffers = createAsyncThunk<Offer[], {id: Offer['id'] | undefined}, {extra: AxiosInstance}> (
  'nearbyOffers/fetchNearbyOffers',
  async ({id}, { extra: api }) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const NearbyOffersSlice = createSlice({
  name: 'nearbyOffers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.nearbyOffers = undefined;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOffers = undefined;
      });
  },
});

export default NearbyOffersSlice.reducer;
