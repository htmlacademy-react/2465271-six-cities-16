import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesMainContainer from '../../components/favorites-main-container/favorites-main-container';
import { Helmet } from 'react-helmet-async';
import { placesOffers } from '../../mocks/places-offers';
import { checkMassiveLength } from '../../utils';

function FavoritePage (): JSX.Element {
  return (
    <div className={`page ${checkMassiveLength(placesOffers, 'isFavorite').length === 0 ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities. Избранное</title>
      </Helmet>
      <Header/>
      <FavoritesMainContainer/>
      <Footer/>
    </div>
  );
}

export default FavoritePage;
