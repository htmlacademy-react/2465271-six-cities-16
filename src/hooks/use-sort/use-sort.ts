import { useAppDispatch, useAppSelector } from '../store/store';
import { offersSort } from '../../store/sort-offers';
import { SortType } from '../../types/sort-type';

export const useSort = () => {
  const sortOffers = useAppSelector((state) => state.sortOffers.sortOffers);

  const dispatch = useAppDispatch();

  const setSort = (sortType: SortType[number]) => dispatch(offersSort(sortType));

  return { sortOffers, setSort };
};
