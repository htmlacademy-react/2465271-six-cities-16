import { placesOffers } from '../../mocks/places-offers';
import PlaceCard from '../place-card/place-card';

type PlacesOffersProps = {
  placesOffersProps: typeof placesOffers;
}

function PlacesCardContainer ({placesOffersProps}: PlacesOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {placesOffersProps.map((placeCard) => (
        <PlaceCard key={placeCard.id} placeCard={placeCard} />
      ))}
    </div>
  );
}

export default PlacesCardContainer;
