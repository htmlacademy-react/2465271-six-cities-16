import { ReactNode } from 'react';
import { useCities } from '../../hooks/use-cities/use-cities';
import Header from '../../components/header/header';
import MainLocationList from '../../components/main-location-list/main-location-list';
import PlacesMainContainer from '../../components/places-main-container/places-main-container';
import { SortList, Sign, cities, RequestStatus } from '../../const';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/store/store';
import { selectOffers, selectOffersLoadingStatus } from '../../services/selectors';
import Spinner from '../../components/spinner/spinner';
import Error from '../../components/error/error';


type MainPageProps = {
  citiesWhitLocation: typeof cities;
  sortType: typeof SortList;
  sign: typeof Sign;
  isActive?: boolean;
}

function MainPage ({citiesWhitLocation, sortType, sign, isActive = true}: MainPageProps): ReactNode {

  const {activeOffers} = useCities();

  const checkLoadingStatus = useAppSelector(selectOffersLoadingStatus);

  const checkOffers = useAppSelector(selectOffers);

  if(checkLoadingStatus === RequestStatus.LOADING) {
    return (
      <Spinner/>
    );
  }

  if(checkOffers.length === 0) {
    return (
      <Error/>
    );
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <Header sign={sign} isActive={isActive}/>
      <main className={`page__main page__main--index ${activeOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainLocationList citiesWhitLocation={citiesWhitLocation} />
        <PlacesMainContainer sortType={sortType} />
      </main>
    </div>
  );
}

export default MainPage;
