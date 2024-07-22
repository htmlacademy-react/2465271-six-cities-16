import Header from '../../components/header/header';
import MainLocationList from '../../components/main-location-list/main-location-list';
import PlacesMainContainer from '../../components/places-main-container/places-main-container';
import { placesOffers } from '../../mocks/places-offers';
import { CITIES, SortList, Sign } from '../../const';
import { Helmet } from 'react-helmet-async';

type MainPageProps = {
  cities: typeof CITIES;
  sortType: typeof SortList;
  placesOffersProps: typeof placesOffers;
  sign: typeof Sign;
  isActive?: boolean;
}

function MainPage ({cities, sortType, sign, placesOffersProps, isActive = true}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <Header sign={sign} isActive={isActive}/>
      <main className={`page__main page__main--index ${placesOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainLocationList cities={cities} />
        <PlacesMainContainer sortType={sortType} placesOffersProps={placesOffersProps} />
      </main>
    </div>
  );
}

export default MainPage;
