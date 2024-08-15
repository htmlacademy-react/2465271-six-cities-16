import { setError } from './error';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { TIMEOUT_SHOW_ERROR } from '../const';

export const clearErrorAction = createAsyncThunk(
  'error/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
