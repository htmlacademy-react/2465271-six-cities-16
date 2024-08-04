import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { cities } from '../const';
import { City } from '../types/offer-type';

type ActiveCityState = City;

const initialState: ActiveCityState = cities[0];

export const ActiveCitySlice = createSlice({
  name: 'ActiveCity',
  initialState,
  reducers: {
    changed: (state, action: PayloadAction<City>) => action.payload,
  },
});

export const { changed: cityChanged } = ActiveCitySlice.actions;

export default ActiveCitySlice.reducer;
