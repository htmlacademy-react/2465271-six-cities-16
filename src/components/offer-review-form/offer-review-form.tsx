import { RAITING } from '../../const';

type RatingProps = {
  ratingProps: typeof RAITING;
}

type RatingValue = {
  ratingValue: string;
}

function RaitingValue ({ratingValue}: RatingValue): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={ratingValue} id={`${ratingValue}-stars`} type="radio"/>
      <label htmlFor={`${ratingValue}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function OfferRaiting ({ratingProps}: RatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {ratingProps.map((ratingValue) => (
        <RaitingValue key={ratingValue} ratingValue={ratingValue}/>
      ))}
    </div>
  );
}

function OfferReviewForm ({ratingProps}: RatingProps): JSX.Element {
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <OfferRaiting key={ratingProps[0]} ratingProps={ratingProps}/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default OfferReviewForm;
