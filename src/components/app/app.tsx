import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { CITIES, SortList, RAITING, AppRoute, AuthorizationStatus, Sign} from '../../const';
import { offerComments } from '../../mocks/offer-comments';
import { OfferRequest } from '../../mocks/offer-request';
import { placesOffers } from '../../mocks/places-offers';


type AppProps = {
  city: typeof CITIES;
  sortType: typeof SortList;
  placesOffersProps: typeof placesOffers;
  offerContainerProps: typeof OfferRequest;
  offerCommentsProps: typeof offerComments;
  ratingProps: typeof RAITING;
  sign: typeof Sign;
}

function App ({city, sortType, sign, placesOffersProps, offerContainerProps, offerCommentsProps, ratingProps}: AppProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage city={city} sortType={sortType} sign={sign} placesOffersProps={placesOffersProps} />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage sign={sign} offerContainerProps={offerContainerProps} offerCommentsProps={offerCommentsProps} ratingProps={ratingProps} />}
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
