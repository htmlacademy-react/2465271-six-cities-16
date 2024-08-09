import { ReactNode } from 'react';
import { useCities } from '../../hooks/use-cities/use-cities';
import Header from '../../components/header/header';
import MainLocationList from '../../components/main-location-list/main-location-list';
import PlacesMainContainer from '../../components/places-main-container/places-main-container';
import { Offer } from '../../types/offer-type';
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

  const {activeOffers} = useCities();

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <Header sign={sign} isActive={isActive}/>
      <main className={`page__main page__main--index ${activeOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainLocationList citiesWhitLocation={citiesWhitLocation} />
        <PlacesMainContainer sortType={sortType} onActiveCardHover={onActiveCardHover} selectedPoint={selectedPoint} />
      </main>
    </div>
  );
}

export default MainPage;
