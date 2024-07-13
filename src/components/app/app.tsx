import MainPage from '../../pages/main-page/main-page';
import { CITIES, SortList } from '../../const';

type AppProps = {
  city: typeof CITIES;
  sortType: typeof SortList;
}

function App ({city, sortType}: AppProps): JSX.Element {

  return (
    <MainPage
      city = {city}
      sortType={sortType}
    />
  );
}

export default App;
