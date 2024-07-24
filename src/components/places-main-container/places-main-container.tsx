import PlacesFound from '../places-found/places-found';
import PlacesSorting from '../places-sorting/places-sorting';
import PlacesCardContainer from '../places-card-container/places-card-container';
import PlaceMapContainer from '../place-map-container/place-map-container';
import EmptyPlaces from '../../components/empty-places/empty-places';
import { Offer } from '../../types/offer-type';
import { SortList } from '../../const';

type PlacesMainContainerProps = {
  sortType: typeof SortList;
  offers: Offer[];
  onActiveCardHover?: (arg?: Offer | null) => void;
}

function PlacesMainContainer ({sortType, offers, onActiveCardHover}: PlacesMainContainerProps): JSX.Element {
  return (
    <div className="cities">
      {offers.length === 0 ?
        <EmptyPlaces/> :
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesFound/>
            <PlacesSorting sortType={sortType}/>
            <PlacesCardContainer offers={offers} onActiveCardHover={onActiveCardHover}/>
          </section>
          <PlaceMapContainer/>
        </div>}
    </div>
  );
}

export default PlacesMainContainer;
