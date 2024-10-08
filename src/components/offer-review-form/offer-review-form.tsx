import { RATING } from '../../const';
import React, { Fragment, useState } from 'react';

type OfferReviewFormProps = {
  ratings: typeof RATING;
}

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

function OfferReviewForm ({ratings}: OfferReviewFormProps): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const handleCommentValue = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => setComment(evt.currentTarget.value);
  const handleRatingValue = (evt: React.FormEvent<HTMLInputElement>) => setRating(Number(evt.currentTarget.value));
  const isButtonActive = comment.length >= MIN_COMMENT_LENGTH && comment.length <= MAX_COMMENT_LENGTH && rating > 0;
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div
        className="reviews__rating-form form__rating"
        defaultValue={rating}
      >
        {ratings.map((ratingValue) => (
          <Fragment key={ratingValue}>
            <input
              onChange={handleRatingValue}
              className="form__rating-input visually-hidden"
              name="rating"
              value={ratingValue}
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
        <button className="reviews__submit form__submit button" type="submit" disabled={!isButtonActive}>Submit</button>
      </div>
    </form>
  );
}

export default OfferReviewForm;
