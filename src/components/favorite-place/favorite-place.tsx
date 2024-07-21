import PlaceCard from '../place-card/place-card';
import { placesOffers } from '../../mocks/places-offers';

type FavoritePlacesProps = {
  city: string;
  offers: typeof placesOffers;
  isFavoriteCard?: true | false;
}
function FavoritePlace ({city, offers, isFavoriteCard = true}: FavoritePlacesProps): JSX.Element {
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

export default FavoritePlace;
