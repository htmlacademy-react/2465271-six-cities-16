import OfferReviewList from '../offer-review-list/offer-review-list';
import OfferReviewForm from '../offer-review-form/offer-review-form';
import { OfferComment } from '../../types/offer-type';
import { RATING } from '../../const';
import { user } from '../../mocks/user';

type OfferReviewsProps = {
  offerComments: OfferComment[];
  rating: typeof RATING;
}

function OfferReviews ({offerComments, rating}: OfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerComments.length}</span></h2>
      <OfferReviewList offerComments={offerComments}/>
      {user.email && <OfferReviewForm ratings={rating}/>}
    </section>
  );
}

export default OfferReviews;
