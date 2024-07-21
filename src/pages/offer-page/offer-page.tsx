import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferContainer from '../../components/offer-container/offer-container';
import PlaceCard from '../../components/place-card/place-card';
import { OfferRequest } from '../../mocks/offer-request';
import { offerComments } from '../../mocks/offer-comments';
import { placesOffers } from '../../mocks/places-offers';
import { RAITING, Sign } from '../../const';
import { Helmet } from 'react-helmet-async';

type OfferPageProps = {
  offerContainerProps: typeof OfferRequest;
  offerCommentsProps: typeof offerComments;
  ratingProps: typeof RAITING;
  sign: typeof Sign;
  isOfferCard?: boolean;
}

function OfferPage ({sign, offerContainerProps, offerCommentsProps, ratingProps, isOfferCard = true}: OfferPageProps):JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Предложения</title>
      </Helmet>
      <Header sign={sign} />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery placesImage={offerContainerProps}/>
          <OfferContainer
            offerContainerProps={offerContainerProps}
            offerCommentsProps={offerCommentsProps}
            ratingProps={ratingProps}
          />
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {placesOffers.slice(0,3).map((offerCard) => (
                <PlaceCard key={offerCard.id} placeCard={offerCard} isOfferCard={isOfferCard}/>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
