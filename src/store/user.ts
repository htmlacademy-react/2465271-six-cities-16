import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, RequestStatus } from '../const';
import { UserType } from '../types/user-type';
import { AuthType } from '../types/auth-type';

type UserState = {
  user: UserType | null;
  authStatus: AuthorizationStatus;
  requestStatus: RequestStatus;
};

const initialState: UserState = {
  user: null,
  authStatus: AuthorizationStatus.Unknown,
  requestStatus: RequestStatus.IDLE,
};

export const fetchUser = createAsyncThunk<UserType, undefined, {extra: AxiosInstance}> (
  'user/fetchUser',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<UserType>(APIRoute.Login);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserType, undefined, {extra: AxiosInstance}> (
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<UserType>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserType, AuthType, { extra: AxiosInstance}> (
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

function processFulfilled (state: UserState, action: PayloadAction<UserType>) {
  state.user = action.payload;
  state.authStatus = AuthorizationStatus.Auth;
  state.requestStatus = RequestStatus.SUCCESS;
}

function processRejected(state: UserState) {
  state.authStatus = AuthorizationStatus.NoAuth;
  state.requestStatus = RequestStatus.ERROR;
}

function processPending (state: UserState) {
  state.authStatus = AuthorizationStatus.Unknown;
  state.requestStatus = RequestStatus.LOADING;
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, processPending)
      .addCase(checkAuthAction.fulfilled, processFulfilled)
      .addCase(checkAuthAction.rejected, processRejected)
      .addCase(loginAction.pending, processPending)
      .addCase(loginAction.fulfilled, processFulfilled)
      .addCase(loginAction.rejected, processRejected)
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchUser.pending, (state) => {
        state.user = null;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
      })
      .addCase(fetchUser.fulfilled, processFulfilled);
  },
});

// export const { authorization: userAuthorization } = UserSlice.actions;

export default UserSlice.reducer;
