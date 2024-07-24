import OfferInside from '../offer-inside/offer-inside';
import OffersHost from '../offer-host/offers-host';
import OfferReviews from '../offer-reviews/offer-reviews';
import { IncomingOffer } from '../../types/offer-type';
import { OfferComment } from '../../types/offer-type';
import { RATING } from '../../const';
import { capitalizeFirstLetter } from '../../utils';

type OfferContainerProps = {
  incomingOffer: IncomingOffer;
  offerComments: OfferComment[];
  rating: typeof RATING;
}

function OfferContainer ({incomingOffer, offerComments, rating}: OfferContainerProps): JSX.Element {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {incomingOffer.isPremium && (
          <div className="offer__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {incomingOffer.title}
          </h1>
          <button className="offer__bookmark-button button" type="button">
            <svg className="offer__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{incomingOffer.rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {capitalizeFirstLetter(incomingOffer.type)}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {`${incomingOffer.bedrooms} ${incomingOffer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
          </li>
          <li className="offer__feature offer__feature--adults">
            {`Max ${incomingOffer.maxAdults} adults`}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{incomingOffer.price}</b>
          <span className="offer__price-text">&nbsp; night</span>
        </div>
        <OfferInside key={incomingOffer.type} offerList={incomingOffer}/>
        <OffersHost/>
        <OfferReviews
          offerComments={offerComments}
          rating={rating}
        />
      </div>
    </div>
  );
}

export default OfferContainer;
