import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { placesOffers } from '../../mocks/places-offers';
import { User } from '../../mocks/user';

function HeaderNavigation (): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{User.email}</span>
            <span className="header__favorite-count">{placesOffers.filter((place) => place.isFavorite).length}</span>
          </a>
        </li>
        <li className="header__nav-item">
          <NavLink to={AppRoute.Login} className="header__nav-link">
            <span className="header__signout">Sign out</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
