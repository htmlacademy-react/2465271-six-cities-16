import { placesOffers } from '../../mocks/places-offers';
import PlaceCard from '../place-card/place-card';

function PlacesCardContainer (): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {placesOffers.map((placeCard) => (
        <PlaceCard key={placeCard.id} placeCard={placeCard} />
      ))}
    </div>
  );
}

export default PlacesCardContainer;
