import PlacesFound from '../places-found/places-found';
import PlacesSorting from '../places-sorting/places-sorting';
import PlacesCardContainer from '../places-card-container/places-card-container';
import Map from '../map/map';
import EmptyPlaces from '../../components/empty-places/empty-places';
import { SortList } from '../../const';
import { useCities } from '../../hooks/use-cities/use-cities';

type PlacesMainContainerProps = {
  sortType: typeof SortList;
}

function PlacesMainContainer ({sortType}: PlacesMainContainerProps): JSX.Element {
  const { activeOffers } = useCities();
  return (
    <div className="cities">
      {activeOffers.length === 0 ?
        <EmptyPlaces /> :
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesFound />
            <PlacesSorting sortType={sortType}/>
            <PlacesCardContainer />
          </section>
          <div className="cities__right-section">
            <Map offers={activeOffers} />
          </div>
        </div>}
    </div>
  );
}

export default PlacesMainContainer;
