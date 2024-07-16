import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { CITIES, SortList, RAITING, AppRoute } from '../../const';
import { offerComments } from '../../mocks/offer-comments';
import { OfferRequest } from '../../mocks/offer-request';


type AppProps = {
  city: typeof CITIES;
  sortType: typeof SortList;
  offerContainerProps: typeof OfferRequest;
  offerCommentsProps: typeof offerComments;
  ratingProps: typeof RAITING;
}

function App ({city, sortType, offerContainerProps, offerCommentsProps, ratingProps}: AppProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage city={city} sortType={sortType}/>}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offerContainerProps={offerContainerProps} offerCommentsProps={offerCommentsProps} ratingProps={ratingProps} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={<FavoritePage/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
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
