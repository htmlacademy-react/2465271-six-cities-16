import Header from '../../components/header/header';
import MainLocationList from '../../components/main-location-list/main-location-list';
import PlacesMainContainer from '../../components/places-main-conteiner/places-main-container';
import EmptyPlaces from '../../components/empty-places/empty-places';
import { placesOffers } from '../../mocks/places-offers';
import { CITIES, SortList, Sign } from '../../const';
import { Helmet } from 'react-helmet-async';

type MainPageProps = {
  city: typeof CITIES;
  sortType: typeof SortList;
  placesOffersProps: typeof placesOffers;
  sign: typeof Sign;
}

function MainPage ({city, sortType, sign, placesOffersProps}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <Header sign={sign}/>
      <main className={`page__main page__main--index ${placesOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        {placesOffers.length === 0 ?
          <>
            <MainLocationList cities={city} />
            <EmptyPlaces />
          </> :
          <>
            <MainLocationList cities={city} />
            <PlacesMainContainer sortType={sortType} placesOffersProps={placesOffersProps} />
          </>}
      </main>
    </div>
  );
}

export default MainPage;
