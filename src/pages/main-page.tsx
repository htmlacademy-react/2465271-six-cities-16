import Header from '../components/header/header';
import MainLocationList from '../components/main-location-list/main-location-list';
import { CITIES } from '../const';

type MainPageProps = {
  city: typeof CITIES;
}

function MainPage ({city}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <h1 className="visually-hidden">Cities</h1>
      <Header/>
      <MainLocationList cities = {city} />
    </div>
  );
}

export default MainPage;
