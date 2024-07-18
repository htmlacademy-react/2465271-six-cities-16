import { RAITING } from '../../const';
import React, { Fragment, useState } from 'react';

type RatingProps = {
  ratingProps: typeof RAITING;
}

function OfferReviewForm ({ratingProps}: RatingProps): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const handleCommentValue = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => setComment(evt.currentTarget.value);
  const handleRatingValue = (evt: React.FormEvent<HTMLInputElement>) => setRating(Number(evt.currentTarget.value));
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div
        className="reviews__rating-form form__rating"
        defaultValue={rating}
      >
        {ratingProps.map((ratingValue) => (
          <Fragment key={ratingValue}>
            <input
              onChange={handleRatingValue}
              className="form__rating-input visually-hidden"
              name="rating" value={ratingValue}
              id={`${ratingValue}-stars`}
              type="radio"
            />
            <label htmlFor={`${ratingValue}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea"
        value={comment}
        onChange={handleCommentValue}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
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
