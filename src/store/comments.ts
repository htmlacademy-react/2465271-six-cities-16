import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { OfferComment, Offer } from '../types/offer-type';
import { APIRoute } from '../const';
import { AxiosInstance } from 'axios';

type CommentsState = {
  comments: OfferComment[];
};

const initialState: CommentsState = {
  comments: [],
};

export const fetchComments = createAsyncThunk<OfferComment[], {id: Offer['id'] | undefined}, {extra: AxiosInstance}> (
  'comments/fetchComments',
  async ({id}, { extra: api }) => {
    const {data} = await api.get<OfferComment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const CommentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.comments = [];
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.comments = [];
      });
  },
});

export default CommentsSlice.reducer;
