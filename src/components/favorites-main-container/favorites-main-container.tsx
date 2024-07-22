import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmptyContainer from '../favorites-empty-container/favorites-empty-container';
import { placesOffers } from '../../mocks/places-offers';
import { checkMassiveLength } from '../../utils';

function FavoritesMainContainer (): JSX.Element {
  return (
    <main className={`page__main page__main--favorites ${checkMassiveLength(placesOffers, 'isFavorite').length === 0 ? 'page__main--favorites-empty' : ''}`}>
      <div className="page__favorites-container container">
        <section className={`favorites ${checkMassiveLength(placesOffers, 'isFavorite').length === 0 ? 'favorites--empty' : ''}`}>
          <h1 className="favorites__title">{`${checkMassiveLength(placesOffers, 'isFavorite').length !== 0 ? 'Saved listing' : 'Favorites (empty)'}`}</h1>
          {
            checkMassiveLength(placesOffers, 'isFavorite').length !== 0
              ? <FavoritesList/>
              : <FavoritesEmptyContainer/>
          }
        </section>
      </div>
    </main>
  );
}

export default FavoritesMainContainer;
