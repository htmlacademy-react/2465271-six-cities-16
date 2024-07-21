import { placesOffers } from '../../mocks/places-offers';
import PlaceCard from '../place-card/place-card';

type PlacesOffersProps = {
  placesOffersProps: typeof placesOffers;
  isMainCard?: boolean;
}

function PlacesCardContainer ({placesOffersProps, isMainCard = true}: PlacesOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content" >
      {placesOffersProps.map((placeCard) => (
        <PlaceCard key={placeCard.id} placeCard={placeCard} isMainCard={isMainCard}/>
      ))}
    </div>
  );
}

export default PlacesCardContainer;
