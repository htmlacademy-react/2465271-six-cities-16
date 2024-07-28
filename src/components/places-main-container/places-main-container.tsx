import PlacesFound from '../places-found/places-found';
import PlacesSorting from '../places-sorting/places-sorting';
import PlacesCardContainer from '../places-card-container/places-card-container';
import MapContainer from '../map-container/map-container';
import EmptyPlaces from '../../components/empty-places/empty-places';
import { Offer } from '../../types/offer-type';
import { SortList } from '../../const';

type PlacesMainContainerProps = {
  sortType: typeof SortList;
  offers: Offer[];
  onActiveCardHover?: (card: Offer | null) => void;
  activeCity: string;
  onContainerItemHover?: (evt: string) => void;
  selectedPoint?: string;
}

function PlacesMainContainer ({sortType, offers, onActiveCardHover, activeCity, onContainerItemHover, selectedPoint}: PlacesMainContainerProps): JSX.Element {
  return (
    <div className="cities">
      {offers.length === 0 ?
        <EmptyPlaces/> :
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesFound activeCity={activeCity} offers={offers}/>
            <PlacesSorting sortType={sortType}/>
            <PlacesCardContainer offers={offers} onActiveCardHover={onActiveCardHover} onContainerItemHover={onContainerItemHover}/>
          </section>
          <div className="cities__right-section">
            <MapContainer offers={offers} selectedPoint={selectedPoint}/>
          </div>
        </div>}
    </div>
  );
}

export default PlacesMainContainer;
