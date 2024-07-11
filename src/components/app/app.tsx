import MainPage from '../../pages/main-page';
import { CITIES, SortList } from '../../const';

type MainPageProps = {
  city: typeof CITIES;
  sortType: typeof SortList;
}

function App ({city, sortType}: MainPageProps): JSX.Element {

  return (
    <MainPage city = {city} sortType={sortType} />
  );
}

export default App;
