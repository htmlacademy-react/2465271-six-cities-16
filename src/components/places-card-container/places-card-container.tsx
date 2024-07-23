import { Offer } from '../../types/offer-type';
import PlaceCard from '../place-card/place-card';

type PlacesOffersProps = {
  offersProps: Offer[];
  isMainCard?: boolean;
  handleActiveCardChange?: (arg?: Offer | null) => void;
}

function PlacesCardContainer ({offersProps, isMainCard = true, handleActiveCardChange}: PlacesOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content" >
      {offersProps.map((placeCard) => (
        <PlaceCard key={placeCard.id} placeCard={placeCard} isMainCard={isMainCard} handleActiveCardChange={handleActiveCardChange}/>
      ))}
    </div>
  );
}

export default PlacesCardContainer;
