// import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
// import LoginPage from '../../pages/login-page/login-page';
// import { CITIES, SortList } from '../../const';
import { OfferRequest } from '../../mocks/offer-request';
import { offerComments } from '../../mocks/offer-comments';
import { RAITING } from '../../const';

type AppProps = {
  // city: typeof CITIES;
  // sortType: typeof SortList;
  offerContainerProps: typeof OfferRequest;
  offerCommentsProps: typeof offerComments;
  ratingProps: typeof RAITING;
}

function App ({offerContainerProps, offerCommentsProps, ratingProps}: AppProps): JSX.Element {

  return (
    // <MainPage
    //   city = {city}
    //   sortType={sortType}
    // />
    <OfferPage
      offerContainerProps={offerContainerProps}
      offerCommentsProps={offerCommentsProps}
      ratingProps={ratingProps}
    />
  );
}

export default App;
