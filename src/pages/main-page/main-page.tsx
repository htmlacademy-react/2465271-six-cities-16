import Header from '../../components/header/header';
import MainLocationList from '../../components/main-location-list/main-location-list';
import PlacesMainContainer from '../../components/places-main-container/places-main-container';
import { Offer } from '../../types/offer-type';
import { CITIES, SortList, Sign } from '../../const';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

type MainPageProps = {
  cities: typeof CITIES;
  sortType: typeof SortList;
  offers: Offer[];
  sign: typeof Sign;
  isActive?: boolean;
}

function MainPage ({cities, sortType, sign, offers, isActive = true}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const handleActiveCardChange = (card: Offer | null) => {
    setActiveCard(card);
    return activeCard;
  };
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <Header sign={sign} isActive={isActive}/>
      <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainLocationList cities={cities} />
        <PlacesMainContainer sortType={sortType} offers={offers} onActiveCardHover={handleActiveCardChange}/>
      </main>
    </div>
  );
}

export default MainPage;
