import HeaderLogo from '../header-logo/header-logo';
import HeaderNavigation from '../header-navigation/header-navigation';
import { Sign } from '../../const';

type HeaderProps = {
  sign: typeof Sign;
  isActive?: true | false;
  isLogin?: true | false;
}

function Header ({sign, isActive = false, isLogin = false}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {isLogin ?
            <HeaderLogo isActive={isActive}/> :
            <>
              <HeaderLogo isActive={isActive}/>
              <HeaderNavigation sign={sign}/>
            </>}
        </div>
      </div>
    </header>
  );
}

export default Header;
