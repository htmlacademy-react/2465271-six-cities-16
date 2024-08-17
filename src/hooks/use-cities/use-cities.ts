import { useAppDispatch, useAppSelector } from '../store/store';
import { City } from '../../types/offer-type';
import { SortType } from '../../types/sort-type';
import { cityChanged } from '../../store/active-city';
import { selectSortOffers, selectOffers, selectActiveCity } from '../../services/selectors';
import { sortByHighToLow, sortByLowToHigh, sortByRating } from '../../utils';

export const useCities = () => {

  const activeCity = useAppSelector(selectActiveCity);

  const offers = useAppSelector(selectOffers);

  const sortOffers = useAppSelector(selectSortOffers);

  const setOffersBySorting = (sorter: SortType[number]) => {
    switch (sorter) {
      case 'Price: high to low':
        return sortByHighToLow(offers);
      case 'Price: low to high':
        return sortByLowToHigh(offers);
      case 'Top rated first':
        return sortByRating(offers);
      default:
        return offers;
    }
  };

  const sortedOffers = setOffersBySorting(sortOffers);

  const activeOffers = sortedOffers.filter((offer) => offer.city.name === activeCity.name);

  const dispatch = useAppDispatch();

  const setCity = (city: City) => dispatch(cityChanged(city));

  return {activeCity, activeOffers, setCity};
};
