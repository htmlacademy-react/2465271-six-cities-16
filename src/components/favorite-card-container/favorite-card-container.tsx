import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer-type';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavoriteCardContainerProps = {
  city: string;
  offers: Offer[];
  isFavoriteCard?: boolean;
}
function FavoriteCardContainer ({city, offers, isFavoriteCard = true}: FavoriteCardContainerProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Main} className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} isFavoriteCard={isFavoriteCard}/>
        ))}
      </div>
    </li>
  );
}

export default FavoriteCardContainer;
