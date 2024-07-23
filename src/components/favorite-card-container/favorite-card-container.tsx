import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer-type';

type FavoritePlacesProps = {
  city: string;
  offers: Offer[];
  isFavoriteCard?: boolean;
}
function FavoriteCardContainer ({city, offers, isFavoriteCard = true}: FavoritePlacesProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((placeCard) => (
          <PlaceCard key={placeCard.id} placeCard={placeCard} isFavoriteCard={isFavoriteCard}/>
        ))}
      </div>
    </li>
  );
}

export default FavoriteCardContainer;
