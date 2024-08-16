import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect } from 'react';
import { fetchIncommingOffer } from '../../store/incoming-offer';

export const useOffer = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchIncommingOffer({id}));
    }
  },[dispatch, id]);

  const incomingOffer = useAppSelector((state) => state.incomingOffer.incommingOffer);

  return { incomingOffer };
};
