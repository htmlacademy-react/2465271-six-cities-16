import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES, SortList, RATING, Sign } from './const';
import { placesOffers } from './mocks/places-offers';
import { offerRequest } from './mocks/offer-request';
import { offerComments } from './mocks/offer-comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cities={CITIES} sortType={SortList} sign={Sign} offers={placesOffers} incomingOffer={offerRequest} offerComments={offerComments} rating={RATING} />
  </React.StrictMode>
);
