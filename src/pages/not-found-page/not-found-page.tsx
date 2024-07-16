// import HeaderLogo from '../../components/header-logo/header-logo';
import Footer from '../../components/footer/footer';

function NotFoundPage (): JSX.Element {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'block', paddingTop: '20px'}} >
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
        </div>
      </div>
      <div>
        <div className="favorites__status-wrapper">
          <h1 className="favorites__status"><b>Error 404</b></h1>
          <h1 className="favorites__status">Page Not Found</h1>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default NotFoundPage;
