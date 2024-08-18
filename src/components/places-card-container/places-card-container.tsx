import { useCities } from '../../hooks/use-cities/use-cities';
// import { Offer } from '../../types/offer-type';
import PlaceCard from '../place-card/place-card';

type PlacesCardContainerProps = {
  isMainCard?: boolean;
  // onActiveCardHover?: (card: Offer | undefined) => void;
}

function PlacesCardContainer ({isMainCard = true}: PlacesCardContainerProps): JSX.Element {
  const { activeOffers } = useCities();
  return (
    <div className="cities__places-list places__list tabs__content">
      {activeOffers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} isMainCard={isMainCard}/>
      ))}
    </div>
  );
}

export default PlacesCardContainer;
