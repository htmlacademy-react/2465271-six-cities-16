import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { cities, SortList, RATING, AppRoute, AuthorizationStatus, Sign} from '../../const';
import { Offer } from '../../types/offer-type';
import { OfferComment } from '../../types/offer-type';
import { IncomingOffer } from '../../types/offer-type';
import { useState } from 'react';

type AppProps = {
  citiesWithLocation: typeof cities;
  sortType: typeof SortList;
  offers: Offer[];
  incomingOffer: IncomingOffer;
  offerComments: OfferComment[];
  rating: typeof RATING;
  sign: typeof Sign;
}

function App ({citiesWithLocation, sortType, sign, offers, incomingOffer, offerComments, rating}: AppProps): JSX.Element {

  const [activeCard, setActiveCard] = useState<Offer | undefined>();

  const handleActiveCardChange = (card: Offer | undefined) => {
    setActiveCard(card);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage citiesWhitLocation={citiesWithLocation} sortType={sortType} sign={sign} onActiveCardHover={handleActiveCardChange} selectedPoint={activeCard}/>}
          />
          <Route
            path={`${AppRoute.Offer}:id`}
            element={<OfferPage sign={sign} incomingOffer={incomingOffer} offerComments={offerComments} rating={rating} offers={offers} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritePage sign={sign} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage sign={sign}/>}
          />
          <Route
            path='*'
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
