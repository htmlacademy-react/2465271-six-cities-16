import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown
};

export const checkAuthAction = createAsyncThunk<AuthorizationStatus, undefined, {extra: AxiosInstance}> (
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<AuthorizationStatus>(APIRoute.Login);
    return data;
  }
);

export const checkAuthSlice = createSlice({
  name: 'checkAuth',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export default checkAuthSlice.reducer;
