import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
// import { FavoritesType } from '../types/favorites-type';
import { Offer, IncomingOffer } from '../types/offer-type';

type FavoritesState = {
  favorites: Offer[];
  favoritesWithStatus: IncomingOffer | null;
};

const initialState: FavoritesState = {
  favorites: [],
  favoritesWithStatus: null,
};

export const fetchFavorites = createAsyncThunk<Offer[], undefined, {extra: AxiosInstance}> (
  'favorites/fetchFavorites',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

export const changeFavoriteStatus = createAsyncThunk<IncomingOffer, { id: Offer['id'] | undefined; status: number}, { extra: AxiosInstance}> (
  'favorites/changeStatus',
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<IncomingOffer>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  }
);

export const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.favorites = [];
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.favorites = [];
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.favoritesWithStatus = null;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        state.favoritesWithStatus = action.payload;
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.favoritesWithStatus = null;
      });
  },
});

// export const { updateFavorite: updateFavorite } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
