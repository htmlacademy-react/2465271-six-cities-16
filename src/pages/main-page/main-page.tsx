import Header from '../../components/header/header';
import MainLocationList from '../../components/main-location-list/main-location-list';
import PlacesMainContainer from '../../components/places-main-conteiner/places-main-container';
import { CITIES, SortList } from '../../const';

type MainPageProps = {
  city: typeof CITIES;
  sortType: typeof SortList;
}

function MainPage ({city, sortType}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <h1 className="visually-hidden">Cities</h1>
      <Header/>
      <MainLocationList cities = {city} />
      <div className="cities">
        <PlacesMainContainer sortType={sortType}/>
      </div>
    </div>
  );
}

export default MainPage;
