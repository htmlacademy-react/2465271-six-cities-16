import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

function HeaderLogo (): JSX.Element {
  return (
    <div className="header__left">
      <NavLink to={AppRoute.Main} className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </NavLink>
    </div>
  );
}

export default HeaderLogo;
