import { useAppDispatch, useAppSelector } from '../store/store';
import { City } from '../../types/offer-type';
import { cityChanged } from '../../store/active-city';

export const useCities = () => {
  const {activeCity, offers} = useAppSelector((state) => ({
    activeCity: state.activeCity,
    offers: state.offers
  }));

  const activeOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  const dispatch = useAppDispatch();

  const setCity = (city: City) => dispatch(cityChanged(city));

  return [ activeCity, activeOffers, setCity];
};
