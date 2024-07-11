import MainPage from '../../pages/main-page';
import { CITIES } from '../../const';

type MainPageProps = {
  city: typeof CITIES;
}

function App ({city}: MainPageProps): JSX.Element {

  return (
    <MainPage city = {city} />
  );
}

export default App;
