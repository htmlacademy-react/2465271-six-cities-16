// import { IncommingOffer } from '../../types/offer-type';
import { OfferRequest } from '../../mocks/offer-request';
import OfferInside from '../offer-inside/offer-inside';
import OffersHost from '../offer-host/offers-host';
import OfferReviews from '../offer-reviews/offer-reviews';
import { offerComments } from '../../mocks/offer-comments';
import { RAITING } from '../../const';
import { capitalizeFirstLetter } from '../../utils';

type OfferContainerProps = {
  offerContainerProps: typeof OfferRequest;
  offerCommentsProps: typeof offerComments;
  ratingProps: typeof RAITING;
}

function OfferContainer ({offerContainerProps, offerCommentsProps, ratingProps}: OfferContainerProps): JSX.Element {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {offerContainerProps.isPremium && (
          <div className="offer__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {offerContainerProps.title}
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
          <span className="offer__rating-value rating__value">{offerContainerProps.rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {capitalizeFirstLetter(offerContainerProps.type)}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {`${offerContainerProps.bedrooms} Bedrooms`}
          </li>
          <li className="offer__feature offer__feature--adults">
            {`Max ${offerContainerProps.maxAdults} adults`}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{offerContainerProps.price}</b>
          <span className="offer__price-text">&nbsp; night</span>
        </div>
        <OfferInside key={offerContainerProps.type} offerList={offerContainerProps}/>
        <OffersHost/>
        <OfferReviews
          offerCommentsProps={offerCommentsProps}
          ratingProps={ratingProps}
        />
      </div>
    </div>
  );
}

export default OfferContainer;
