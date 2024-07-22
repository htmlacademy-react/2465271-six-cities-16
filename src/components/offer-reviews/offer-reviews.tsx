import OfferReviewList from '../offer-review-list/offer-review-list';
import OfferReviewForm from '../offer-review-form/offer-review-form';
import { offerComments } from '../../mocks/offer-comments';
import { RATING } from '../../const';
import { user } from '../../mocks/user';

type OfferReviewProps = {
  offerCommentsProps: typeof offerComments;
  ratingProps: typeof RATING;
}

function OfferReviews ({offerCommentsProps, ratingProps}: OfferReviewProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerCommentsProps.length}</span></h2>
      <OfferReviewList offerCommentsProps={offerCommentsProps}/>
      {user.email && <OfferReviewForm ratingProps={ratingProps}/>}
    </section>
  );
}

export default OfferReviews;
