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
  const [activeCity, setActiveCity] = useState<string>('Paris');
  const handleActiveCardChange = (card: Offer | null) => {
    setActiveCard(card);
    return activeCard;
  };
  const handleActiveCtyClick = (evt: React.MouseEvent<HTMLSpanElement>) => {
    setActiveCity(evt.currentTarget.innerText);
  };
  const filterOffers = offers.filter((offer) => offer.city.name === activeCity);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <Header sign={sign} isActive={isActive}/>
      <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainLocationList cities={cities} activeCity={activeCity} onActiveCityClick={handleActiveCtyClick}/>
        <PlacesMainContainer sortType={sortType} offers={filterOffers} onActiveCardHover={handleActiveCardChange} activeCity={activeCity}/>
      </main>
    </div>
  );
}

export default MainPage;
