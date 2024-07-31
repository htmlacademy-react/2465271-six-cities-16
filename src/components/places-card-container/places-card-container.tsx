import { Offer } from '../../types/offer-type';
import PlaceCard from '../place-card/place-card';

type PlacesCardContainerProps = {
  offers: Offer[];
  isMainCard?: boolean;
  onActiveCardHover?: (card: Offer | undefined) => void;
}

function PlacesCardContainer ({offers, isMainCard = true, onActiveCardHover}: PlacesCardContainerProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} isMainCard={isMainCard} onActiveCardHover={onActiveCardHover}/>
      ))}
    </div>
  );
}

export default PlacesCardContainer;
