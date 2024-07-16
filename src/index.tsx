import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES, SortList } from './const';
import { OfferRequest } from './mocks/offer-request';
import { offerComments } from './mocks/offer-comments';
import { RAITING } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App city = {CITIES} sortType={SortList} offerContainerProps={OfferRequest} offerCommentsProps={offerComments} ratingProps={RAITING}/>
  </React.StrictMode>
);
