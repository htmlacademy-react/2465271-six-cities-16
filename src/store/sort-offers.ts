import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { SortList } from '../const';
import { SortType } from '../types/sort-type';

type SortOffersState = {
  sortOffers: SortType[number];
};

const initialState: SortOffersState = {
  sortOffers: SortList[0]
};

export const sortOffersSlice = createSlice({
  name: 'sortOffers',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortType[number]>) => {
      state.sortOffers = action.payload;
    },
  },
});

export const { setSort: offersSort } = sortOffersSlice.actions;

export default sortOffersSlice.reducer;
