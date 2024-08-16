import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Error = {
  error: string | null;
}

const initialState: Error = {
  error: null
};

export const ErrorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const {setError: setError } = ErrorSlice.actions;

export default ErrorSlice.reducer;
