import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferContainer from '../../components/offer-container/offer-container';
import OfferCard from '../../components/offer-card/offer-card';
import { OfferRequest } from '../../mocks/offer-request';
import { offerComments } from '../../mocks/offer-comments';
import { placesOffers } from '../../mocks/places-offers';
import { RAITING } from '../../const';
import { Helmet } from 'react-helmet-async';

type OfferPageProps = {
  offerContainerProps: typeof OfferRequest;
  offerCommentsProps: typeof offerComments;
  ratingProps: typeof RAITING;
}

function OfferPage ({offerContainerProps, offerCommentsProps, ratingProps}: OfferPageProps):JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Предложения</title>
      </Helmet>
      <Header/>

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
                <OfferCard key={offerCard.id} offerCard={offerCard}/>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
