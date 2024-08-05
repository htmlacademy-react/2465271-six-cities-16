import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { cities } from '../const';
import { City } from '../types/offer-type';

type ActiveCityState = {
  activeCity: City;
};

const initialState: ActiveCityState = {
  activeCity: cities[0]
};

export const ActiveCitySlice = createSlice({
  name: 'activeCity',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<City>) => {
      state.activeCity = action.payload;
    },
  },
});

export const { change: cityChanged } = ActiveCitySlice.actions;

export default ActiveCitySlice.reducer;
