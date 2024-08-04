import { ReactNode } from 'react';
import { useCities } from '../../hooks/use-cities/use-cities';
import Header from '../../components/header/header';
import MainLocationList from '../../components/main-location-list/main-location-list';
import PlacesMainContainer from '../../components/places-main-container/places-main-container';
import { Offer, City } from '../../types/offer-type';
import { SortList, Sign, cities } from '../../const';
import { Helmet } from 'react-helmet-async';

type MainPageProps = {
  citiesWhitLocation: typeof cities;
  sortType: typeof SortList;
  sign: typeof Sign;
  isActive?: boolean;
  onActiveCardHover?: (card: Offer | undefined) => void;
  selectedPoint?: Offer;
}

function MainPage ({citiesWhitLocation, sortType, sign, isActive = true, onActiveCardHover, selectedPoint}: MainPageProps): ReactNode {

  const {activeCity, activeOffers, setCity} = useCities();

  const handleCityChange = (city: City) => {
    setCity(city);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <Header sign={sign} isActive={isActive}/>
      <main className={`page__main page__main--index ${activeOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainLocationList citiesWhitLocation={citiesWhitLocation} activeCity={activeCity} onCityChange={handleCityChange}/>
        <PlacesMainContainer sortType={sortType} offers={activeOffers} onActiveCardHover={onActiveCardHover} activeCity={activeCity} selectedPoint={selectedPoint} />
      </main>
    </div>
  );
}

export default MainPage;
