import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmptyContainer from '../favorites-empty-container/favorites-empty-container';
// import { placesOffers } from '../../mocks/places-offers';
// import { checkMassiveLength } from '../../utils';
import { useAppSelector } from '../../hooks/store/store';
import { selectFavorites } from '../../services/selectors';

function FavoritesMainContainer (): JSX.Element {
  const favorites = useAppSelector(selectFavorites);
  return (
    <main className={`page__main page__main--favorites ${favorites.length === 0 ? 'page__main--favorites-empty' : ''}`}>
      <div className="page__favorites-container container">
        <section className={`favorites ${favorites.length === 0 ? 'favorites--empty' : ''}`}>
          <h1 className={`${favorites.length !== 0 ? 'favorites__title' : 'visually-hidden'}`}>{`${favorites.length !== 0 ? 'Saved listing' : 'Favorites (empty)'}`}</h1>
          {
            favorites?.length !== 0
              ? <FavoritesList/>
              : <FavoritesEmptyContainer/>
          }
        </section>
      </div>
    </main>
  );
}

export default FavoritesMainContainer;
