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

  const [activeCity, setActiveCity] = useState<string>('Amsterdam');

  const [selectedPoint, setSelectedPoint] = useState<string | undefined>('');

  const handleActiveCardChange = (card: Offer | null) => {
    setActiveCard(card);
    return activeCard;
  };

  const handleActiveCityClick = (evt: React.MouseEvent<HTMLSpanElement>) => {
    setActiveCity(evt.currentTarget.innerText);
  };

  const filterOffers = offers.filter((offer) => offer.city.name === activeCity);

  const handleContainerItemHover = (containerItemName: string) => {
    const currentPoint = filterOffers.find((offer) =>
      offer.id === containerItemName,
    );
    setSelectedPoint(currentPoint?.id);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <Header sign={sign} isActive={isActive}/>
      <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainLocationList cities={cities} activeCity={activeCity} onActiveCityClick={handleActiveCityClick}/>
        <PlacesMainContainer sortType={sortType} offers={filterOffers} onActiveCardHover={handleActiveCardChange} activeCity={activeCity} onContainerItemHover={handleContainerItemHover} selectedPoint={selectedPoint}/>
      </main>
    </div>
  );
}

export default MainPage;
