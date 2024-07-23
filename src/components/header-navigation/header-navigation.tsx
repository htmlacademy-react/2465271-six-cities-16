import { Link, NavLink } from 'react-router-dom';
import { AppRoute, Sign } from '../../const';
import { placesOffers } from '../../mocks/places-offers';
import { user } from '../../mocks/user';
import { checkMassiveLength } from '../../utils';

type HeaderNavigationProps = {
  sign: typeof Sign;
}

function HeaderSignOut ({sign}: HeaderNavigationProps): JSX.Element {
  return (
    <li className="header__nav-item">
      <NavLink to={AppRoute.Login} className="header__nav-link">
        <span className="header__signout">{sign.SignOut}</span>
      </NavLink>
    </li>
  );
}

function HeaderNavigation ({sign}: HeaderNavigationProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {user ?
              <>
                <span className="header__user-name user__name">{user.email}</span>
                <span className="header__favorite-count">{checkMassiveLength(placesOffers, 'isFavorite').length}</span>
              </> :
              <span className="header__login">{sign.SignIn}</span>}
          </Link>
        </li>
        {user && <HeaderSignOut sign={sign}/>}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
