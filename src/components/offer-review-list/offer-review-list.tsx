import { OfferComment } from '../../types/offer-type';

type OfferCommentsProps = {
  offerComments: OfferComment[];
}

type OfferCommentElement = {
  offerCommentElement: OfferComment;
}

function OfferReview ({offerCommentElement}: OfferCommentElement): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {offerCommentElement.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">{offerCommentElement.rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {offerCommentElement.comment}
        </p>
        <time className="reviews__time" dateTime={offerCommentElement.date}>{offerCommentElement.date}</time>
      </div>
    </li>
  );
}

function OfferReviewList ({offerComments}: OfferCommentsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {offerComments.map((offerCommentElement) => (
        <OfferReview key={offerCommentElement.id} offerCommentElement={offerCommentElement}/>
      ))}
    </ul>
  );
}

export default OfferReviewList;
