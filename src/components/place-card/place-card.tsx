import { AppRoute } from '../../const';
import { Offer } from '../../types/offer-type';
import { capitalizeFirstLetter } from '../../utils';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  placeCard: Offer;
  isMainCard?: true | false;
}

function PlaceCard ({placeCard, isMainCard = true}: PlaceCardProps): JSX.Element {
  return (
    <article className={`${isMainCard ? 'cities__card' : 'near-places__card'} place-card`}>
      { placeCard.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${isMainCard ? 'cities__image-wrapper' : 'near-places__image-wrapper'} place-card__image-wrapper`}>
        <Link to={AppRoute.Offer} key={placeCard.id}>
          <img className="place-card__image" src={ placeCard.previewImage } width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ placeCard.price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${placeCard.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{ placeCard.isFavorite ? 'In bookmarks' : 'To bookmarks' }</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style= {{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{ placeCard.title }</a>
        </h2>
        <p className="place-card__type">{ capitalizeFirstLetter(placeCard.type) }</p>
      </div>
    </article>
  );
}

export default PlaceCard;
