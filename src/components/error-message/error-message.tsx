import { useAppSelector } from '../../hooks/store/store';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import { AppRoute } from '../../const';
import styles from './error-message.module.css';

function ErrorMessage (): JSX.Element | null {
  const error = useAppSelector((state) => state.error.error);

  return (error) ?
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
          <h1 className="favorites__status"><b>{error}</b></h1>
        </div>
        <Link to={AppRoute.Main}>
          <span className={styles.notFoundLink}>Вернуться на главную страницу</span>
        </Link>
      </div>
      <Footer/>
    </>
    : null;
}

export default ErrorMessage;
