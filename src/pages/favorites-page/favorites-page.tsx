import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesMainContainer from '../../components/favorites-main-container/favorites-main-container';

function FavoritePage (): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <FavoritesMainContainer/>
      <Footer/>
    </div>
  );
}

export default FavoritePage;
