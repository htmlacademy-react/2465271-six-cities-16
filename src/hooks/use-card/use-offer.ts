import { useAppDispatch, useAppSelector } from '../store/store';
import { setActiveId } from '../../store/offers';

export const useCard = () => {
  const activeId = useAppSelector((state) => state.offers.setActiveId);
  const dispatch = useAppDispatch();
  const setId = (id: typeof activeId) => dispatch(setActiveId(id));
  return {setId};
};
