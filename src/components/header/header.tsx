import HeaderLogo from '../header-logo/header-logo';
import HeaderNavigation from '../header-navigation/header-navigation';
import { Sign } from '../../const';

type HeaderProps = {
  sign: typeof Sign;
}

function Header ({sign}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <HeaderNavigation sign={sign}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
