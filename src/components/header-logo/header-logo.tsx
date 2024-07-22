import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type HeaderLogoProps = {
  isActive?: boolean;
}

function HeaderLogo ({isActive = false}: HeaderLogoProps): JSX.Element {
  return (
    <div className="header__left">
      <Link to={AppRoute.Main} className={`header__logo-link ${isActive ? 'header__logo-link--active' : ''}`}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export default HeaderLogo;
