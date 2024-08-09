import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { UserType } from '../types/user-type';

type UserState = UserType;

const initialState: UserState = {
  name: null,
  avatarUrl: null,
  isPro: false,
  email: null,
  token: null,
};

export const fetchUser = createAsyncThunk<UserState, undefined, {extra: AxiosInstance}> (
  'user/fetchUser',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<UserState>(APIRoute.Login);
    return data;
  }
);

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // user: (state, action: PayloadAction<UserState>) => {
    //   state.avatarUrl = action.payload.avatarUrl;
    //   state.email = action.payload.email;
    //   state.isPro = action.payload.isPro;
    //   state.name = action.payload.name;
    //   state.token = action.payload.token;
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.avatarUrl = null;
        state.email = null;
        state.isPro = false;
        state.name = null;
        state.token = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.avatarUrl = action.payload.avatarUrl;
        state.email = action.payload.email;
        state.isPro = action.payload.isPro;
        state.name = action.payload.name;
        state.token = action.payload.token;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.avatarUrl = null;
        state.email = null;
        state.isPro = false;
        state.name = null;
        state.token = null;
      });
  },
});

// export const { authorization: userAuthorization } = UserSlice.actions;

export default UserSlice.reducer;
