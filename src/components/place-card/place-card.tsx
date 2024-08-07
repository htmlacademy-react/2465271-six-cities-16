import { AppRoute, ImageSize, SVGSize } from '../../const';
import { Offer } from '../../types/offer-type';
import { capitalizeFirstLetter, setRating } from '../../utils';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  offer: Offer;
  isMainCard?: boolean;
  isFavoriteCard?: boolean;
  isOfferCard?: boolean;
  onActiveCardHover?: (offer: Offer | undefined) => void;
}

function PlaceCard ({offer, isMainCard = false, isFavoriteCard = false, isOfferCard = false, onActiveCardHover}: PlaceCardProps): JSX.Element {
  const {isPremium, isFavorite, id, previewImage, price, type, title, rating} = offer;
  const handleMouseEnter = () => {
    if(onActiveCardHover) {
      onActiveCardHover(offer);
    }
  };

  const handleMouseLeave = () => {
    if (onActiveCardHover) {
      onActiveCardHover(undefined);
    }
  };

  return (
    <article className={
      `${isMainCard ? 'cities__card' : ''}
      ${isFavoriteCard ? 'favorites__card' : ''}
      ${isOfferCard ? 'near-places__card' : ''}
      place-card`
    }
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      { isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={
        `${isMainCard ? 'cities__image-wrapper' : ''}
        ${isFavoriteCard ? 'favorites__image-wrapper' : ''}
        ${isOfferCard ? 'near-places__image-wrapper' : ''}
        place-card__image-wrapper`
      }
      >
        <Link to={`${AppRoute.Offer}${id}`}>
          <img className="place-card__image" src={ previewImage } width={`${isFavoriteCard ? ImageSize.FAVORITE_WIDTH : ImageSize.DEFAULT_WIDTH}`} height={`${isFavoriteCard ? ImageSize.FAVORITE_HEIGHT : ImageSize.DEFAULT_HEIGHT}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${isFavoriteCard ? 'favorites__card-info' : 'place-card__info'}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width={SVGSize.WIDTH} height={SVGSize.HEIGHT}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{ isFavorite ? 'In bookmarks' : 'To bookmarks' }</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style= {{ width: `${setRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${id}`}>{ title }</Link>
        </h2>
        <p className="place-card__type">{ capitalizeFirstLetter(type) }</p>
      </div>
    </article>
  );
}

export default PlaceCard;
