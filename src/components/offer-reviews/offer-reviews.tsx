import OfferReviewList from '../offer-review-list/offer-review-list';
import OfferReviewForm from '../offer-review-form/offer-review-form';
import { OfferComment } from '../../types/offer-type';
import { RATING } from '../../const';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/store/store';
import { selectAuthStatus } from '../../services/selectors';

type OfferReviewsProps = {
  comments: OfferComment[];
  rating: typeof RATING;
}

function OfferReviews ({comments, rating}: OfferReviewsProps): JSX.Element {
  const authCheck = useAppSelector(selectAuthStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments?.length}</span></h2>
      <OfferReviewList comments={comments}/>
      {authCheck === AuthorizationStatus.Auth && <OfferReviewForm ratings={rating}/>}
    </section>
  );
}

export default OfferReviews;
