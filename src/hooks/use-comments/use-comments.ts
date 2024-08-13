import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect } from 'react';
import { fetchComments } from '../../store/comments';

export const useComments = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchComments({id}));
    }
  },[dispatch, id]);

  const comments = useAppSelector((state) => state.comments.comments);

  return { comments };
};
