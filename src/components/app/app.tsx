import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { cities, SortList, RATING, AppRoute, Sign } from '../../const';
import { useAppSelector } from '../../hooks/store/store';
import { selectAuthStatus } from '../../services/selectors';

type AppProps = {
  citiesWithLocation: typeof cities;
  sortType: typeof SortList;
  rating: typeof RATING;
  sign: typeof Sign;
}

function App ({citiesWithLocation, sortType, sign, rating}: AppProps): JSX.Element {

  const authCheck = useAppSelector(selectAuthStatus);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage citiesWhitLocation={citiesWithLocation} sortType={sortType} sign={sign} />}
          />
          <Route
            path={`${AppRoute.Offer}:id`}
            element={<OfferPage sign={sign} rating={rating} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authCheck}
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
