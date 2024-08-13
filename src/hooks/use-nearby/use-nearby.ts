import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect } from 'react';
import { fetchNearbyOffers } from '../../store/nierby-offers';

export const useNearby = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchNearbyOffers({id}));
    }
  },[dispatch, id]);

  const nearbyOffers = useAppSelector((state) => state.nearbyOffers.nearbyOffers);

  return { nearbyOffers };
};
