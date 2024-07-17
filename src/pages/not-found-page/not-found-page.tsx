import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../const';

function NotFoundPage (): JSX.Element {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'block', paddingTop: '20px'}} >
          <Link to={AppRoute.Main}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </Link>
        </div>
      </div>
      <div>
        <div className="favorites__status-wrapper">
          <h1 className="favorites__status"><b>Error 404</b></h1>
          <h1 className="favorites__status">Page Not Found</h1>
        </div>
        <Link to={AppRoute.Main}>
          <span className='back_main_link' style={{display: 'block', textAlign: 'center', marginTop: '20px', color: 'purple', fontStyle: 'italic', fontSize: '14px'}}>Вернуться на главную страницу</span>
        </Link>
      </div>
      <Footer/>
    </>
  );
}

export default NotFoundPage;
