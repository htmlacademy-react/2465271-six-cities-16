import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesMainContainer from '../../components/favorites-main-container/favorites-main-container';
import { Helmet } from 'react-helmet-async';
// import { placesOffers } from '../../mocks/places-offers';
// import { checkMassiveLength } from '../../utils';
import { Sign } from '../../const';
import { useAppSelector } from '../../hooks/store/store';

type FavoritePageProps = {
  sign: typeof Sign;
}

function FavoritePage ({sign}: FavoritePageProps): JSX.Element {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  return (
    <div className={`page ${favorites?.length === 0 ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities. Избранное</title>
      </Helmet>
      <Header sign={sign}/>
      <FavoritesMainContainer/>
      <Footer/>
    </div>
  );
}

export default FavoritePage;
