import { Offer } from '../../types/offer-type';
import PlaceCard from '../place-card/place-card';

type PlacesOffersProps = {
  offers: Offer[];
  isMainCard?: boolean;
  onActiveCardHover?: (card: Offer | null) => void;
  // activeCity: string;
}

function PlacesCardContainer ({offers, isMainCard = true, onActiveCardHover}: PlacesOffersProps): JSX.Element {
  // const filterOffers = offers.filter((offer) => offer.city.name === activeCity);
  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((placeCard) => (
        <PlaceCard key={placeCard.id} placeCard={placeCard} isMainCard={isMainCard} onActiveCardHover={onActiveCardHover}/>
      ))}
    </div>
  );
}

export default PlacesCardContainer;
