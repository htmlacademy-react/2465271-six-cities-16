import Header from '../../components/header/header';
import MainLocationList from '../../components/main-location-list/main-location-list';
import PlacesMainContainer from '../../components/places-main-container/places-main-container';
import { Offer } from '../../types/offer-type';
import { CITIES, SortList, Sign, Locations } from '../../const';
import { Helmet } from 'react-helmet-async';

type MainPageProps = {
  cities: typeof CITIES;
  sortType: typeof SortList;
  offers: Offer[];
  sign: typeof Sign;
  isActive?: boolean;
  onActiveCardHover?: (card: Offer | undefined) => void;
  onActiveCityClick: (city: keyof typeof Locations) => void;
  activeCity: keyof typeof Locations;
  selectedPoint: Offer | undefined;
}

function MainPage ({cities, sortType, sign, offers, isActive = true, onActiveCityClick, onActiveCardHover, activeCity, selectedPoint}: MainPageProps): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <Header sign={sign} isActive={isActive}/>
      <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainLocationList cities={cities} activeCity={activeCity} onActiveCityClick={onActiveCityClick}/>
        <PlacesMainContainer sortType={sortType} offers={offers} onActiveCardHover={onActiveCardHover} activeCity={activeCity} selectedPoint={selectedPoint} />
      </main>
    </div>
  );
}

export default MainPage;
