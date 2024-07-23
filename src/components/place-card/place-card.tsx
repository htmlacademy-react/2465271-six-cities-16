import { AppRoute } from '../../const';
import { Offer } from '../../types/offer-type';
import { capitalizeFirstLetter } from '../../utils';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  placeCard: Offer;
  isMainCard?: boolean;
  isFavoriteCard?: boolean;
  isOfferCard?: boolean;
  handleActiveCardChange?: (arg?: Offer | null) => void;
}

function PlaceCard ({placeCard, isMainCard = false, isFavoriteCard = false, isOfferCard = false, handleActiveCardChange}: PlaceCardProps): JSX.Element {
  const handleMouseEnter = () => {
    if(handleActiveCardChange) {
      handleActiveCardChange(placeCard);
    }
  };

  const handleMouseLeave = () => {
    if (handleActiveCardChange) {
      handleActiveCardChange(null);
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
      { placeCard.isPremium && (
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
        <Link to={`${AppRoute.Offer}${placeCard.id}`}>
          <img className="place-card__image" src={ placeCard.previewImage } width={`${isFavoriteCard ? '150' : '260'}`} height={`${isFavoriteCard ? '110' : '200'}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${isFavoriteCard ? 'favorites__card-info' : 'place-card__info'}`}>
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
          <Link to={`${AppRoute.Offer}/${placeCard.id}`}>{ placeCard.title }</Link>
        </h2>
        <p className="place-card__type">{ capitalizeFirstLetter(placeCard.type) }</p>
      </div>
    </article>
  );
}

export default PlaceCard;
