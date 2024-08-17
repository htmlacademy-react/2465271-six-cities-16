import { logoutAction } from '../../store/user';
import { useAppDispatch, useAppSelector } from '../../hooks/store/store';
import { selectFavorites, selectAuthStatus, selectEmail } from '../../services/selectors';
import { Link, NavLink } from 'react-router-dom';
import { FormEvent } from 'react';
import { AppRoute, Sign } from '../../const';
import { AuthorizationStatus } from '../../const';

type HeaderNavigationProps = {
  sign: typeof Sign;
}

type HeaderSignProps = {
  sign: typeof Sign;
}

function HeaderSign ({sign}: HeaderSignProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = (evt: FormEvent<HTMLLIElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
  return (
    <li className="header__nav-item" onClick={handleClick}>
      <NavLink to={AppRoute.Login} className="header__nav-link">
        <span className="header__signout">{sign.SignOut}</span>
      </NavLink>
    </li>
  );
}

function HeaderNavigation ({sign}: HeaderNavigationProps): JSX.Element {
  const favotites = useAppSelector(selectFavorites);
  const authCheck = useAppSelector(selectAuthStatus);
  const email = useAppSelector(selectEmail);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {authCheck === AuthorizationStatus.Auth ?
              <>
                <span className="header__user-name user__name">{email}</span>
                <span className="header__favorite-count">{favotites.length}</span>
              </> :
              <span className="header__login">{sign.SignIn}</span>}
          </Link>
        </li>
        {authCheck === AuthorizationStatus.Auth && <HeaderSign sign={sign}/>}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
