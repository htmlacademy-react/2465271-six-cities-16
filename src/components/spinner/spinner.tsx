import Footer from '../../components/footer/footer';
import styles from './not-found-page.module.css';

function Spinner (): JSX.Element {
  return (
    <>
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundElement} >
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
        </div>
      </div>
      <div>
        <div className="favorites__status-wrapper">
          <h1 className="favorites__status"><b>Loading...</b></h1>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Spinner;
