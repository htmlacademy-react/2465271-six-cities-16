import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect } from 'react';
import { fetchNearbyOffers } from '../../store/nierby-offers';
import { selectNearbyOffers } from '../../services/selectors';

export const useNearby = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchNearbyOffers({id}));
    }
  },[dispatch, id]);

  const nearbyOffers = useAppSelector(selectNearbyOffers);

  return { nearbyOffers };
};
