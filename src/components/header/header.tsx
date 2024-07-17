import HeaderLogo from '../header-logo/header-logo';
import HeaderNavigation from '../header-navigation/header-navigation';

function Header () {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo/>
          <HeaderNavigation/>
        </div>
      </div>
    </header>
  );
}

export default Header;
