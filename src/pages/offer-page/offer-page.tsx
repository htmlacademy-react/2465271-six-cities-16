import { useParams } from 'react-router-dom';
import { useOffer } from '../../hooks/use-offer/use-offer';
import { useComments } from '../../hooks/use-comments/use-comments';
import { useNearby } from '../../hooks/use-nearby/use-nearby';
import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferContainer from '../../components/offer-container/offer-container';
import PlaceCard from '../../components/place-card/place-card';
import MapContainer from '../../components/map-container/map-container';
import { RATING, RequestStatus, Sign } from '../../const';
import { Helmet } from 'react-helmet-async';
import Error from '../../components/error/error';
import { selectIncomingErrorStatus, selectIncomingOfferStatus } from '../../services/selectors';
import { useAppSelector } from '../../hooks/store/store';
import Spinner from '../../components/spinner/spinner';


type OfferPageProps = {
  rating: typeof RATING;
  sign: typeof Sign;
  isOfferCard?: boolean;
}

function OfferPage ({sign, rating, isOfferCard = true}: OfferPageProps):JSX.Element {

  const checkIncomingOfferLoadingStatus = useAppSelector(selectIncomingOfferStatus);
  const checkErrorStatus = useAppSelector(selectIncomingErrorStatus);

  const { id } = useParams();

  const { incomingOffer } = useOffer(id);

  const { comments } = useComments(id);

  const { nearbyOffers } = useNearby(id);

  const offersOnMap = nearbyOffers?.slice(0, 3);

  if(checkIncomingOfferLoadingStatus === RequestStatus.LOADING) {
    return <Spinner/>;
  }

  if(checkErrorStatus) {
    return <Error />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Предложения</title>
      </Helmet>
      <Header sign={sign} />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery incomingOffer={incomingOffer}/>
          <OfferContainer
            incomingOffer={incomingOffer}
            comments={comments}
            rating={rating}
          />
          <MapContainer offers={offersOnMap} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersOnMap?.map((offer) => (
                <PlaceCard key={offer.id} offer={offer} isOfferCard={isOfferCard} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
