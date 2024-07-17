import PlacesFound from '../places-found/places-found';
import PlacesSorting from '../places-sorting/places-sorting';
import PlacesCardContainer from '../places-card-container/places-card-container';
import PlaceMapContainer from '../place-map-container/place-map-container';
import { SortList } from '../../const';

type PlacesMainContainerProps = {
  sortType: typeof SortList;
}

function PlacesMainContainer ({sortType}: PlacesMainContainerProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <PlacesFound/>
        <PlacesSorting sortType={sortType}/>
        <PlacesCardContainer/>
      </section>
      <PlaceMapContainer/>
    </div>
  );
}

export default PlacesMainContainer;
