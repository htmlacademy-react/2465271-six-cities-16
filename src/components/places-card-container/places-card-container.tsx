import { Offer } from '../../types/offer-type';
import PlaceCard from '../place-card/place-card';

type PlacesOffersProps = {
  offers: Offer[];
  isMainCard?: boolean;
  onActiveCardHover?: (card: Offer | null) => void;
  onContainerItemHover?: (evt: string) => void;
}

function PlacesCardContainer ({offers, isMainCard = true, onActiveCardHover, onContainerItemHover}: PlacesOffersProps): JSX.Element {

  // const filterOffers = offers.filter((offer) => offer.city.name === activeCity);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((placeCard) => (
        <PlaceCard key={placeCard.id} placeCard={placeCard} isMainCard={isMainCard} onActiveCardHover={onActiveCardHover} onContainerItemHover={onContainerItemHover}/>
      ))}
    </div>
  );
}

export default PlacesCardContainer;
