import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../const';
import styles from './error.module.css';

function Error (): JSX.Element {
  return (
    <>
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundElement} >
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
          <span className={styles.notFoundLink}>Вернуться на главную страницу</span>
        </Link>
      </div>
      <Footer/>
    </>
  );
}

export default Error;
