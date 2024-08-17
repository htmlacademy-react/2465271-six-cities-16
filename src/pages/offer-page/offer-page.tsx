import { useParams } from 'react-router-dom';
import { useOffer } from '../../hooks/use-offer/use-offer';
import { useComments } from '../../hooks/use-comments/use-comments';
import { useNearby } from '../../hooks/use-nearby/use-nearby';
import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferContainer from '../../components/offer-container/offer-container';
import PlaceCard from '../../components/place-card/place-card';
import MapContainer from '../../components/map-container/map-container';
import { Offer } from '../../types/offer-type';
import { RATING, Sign } from '../../const';
import { Helmet } from 'react-helmet-async';
import Error from '../../components/error/error';


type OfferPageProps = {
  rating: typeof RATING;
  sign: typeof Sign;
  isOfferCard?: boolean;
  selectedPoint?: Offer;
}

function OfferPage ({sign, rating, isOfferCard = true, selectedPoint}: OfferPageProps):JSX.Element {

  const { id } = useParams();

  const { incomingOffer } = useOffer(id);

  const { comments } = useComments(id);

  const { nearbyOffers } = useNearby(id);

  if(!incomingOffer) {
    return < Error />;
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
          <MapContainer offers={nearbyOffers} selectedPoint={selectedPoint} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers?.map((offer) => (
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
