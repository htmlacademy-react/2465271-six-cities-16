import Header from '../components/header/header';
import MainLocationList from '../components/main-location-list/main-location-list';
import PlacesFound from '../components/places-found/places-found';
import PlacesSorting from '../components/places-sorting/places-sorting';
import PlacesContainer from '../components/places-container/places-container';
import PlaceMapContainer from '../components/place-map-container/place-map-container';
import { CITIES, SortList } from '../const';

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
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesFound/>
            <PlacesSorting sortType={sortType}/>
            <PlacesContainer/>
          </section>
          <PlaceMapContainer/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
