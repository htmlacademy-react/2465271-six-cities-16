import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

type Error = {
  error: AxiosError | null;
}

const initialState: Error = {
  error: null
};

export const ErrorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<AxiosError | null>) => {
      state.error = action.payload;
    }
  }
});

export const {setError: setError } = ErrorSlice.actions;

export default ErrorSlice.reducer;
