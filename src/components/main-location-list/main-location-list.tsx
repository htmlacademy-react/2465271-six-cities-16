import { AppRoute, CITIES, Locations } from '../../const';
import { Link } from 'react-router-dom';

type MainLocationListProps = {
  cities: typeof CITIES;
  activeCity: keyof typeof Locations;
  onActiveCityClick: (city: keyof typeof Locations) => void;
}

type MainLocationElementProps = {
  city: keyof typeof Locations;
  activeCity: keyof typeof Locations;
  onActiveCityClick: (city: keyof typeof Locations) => void;
}

function MainLocationElement ({city, activeCity, onActiveCityClick}: MainLocationElementProps): JSX.Element {
  const handleCityClick = () => {
    if (onActiveCityClick) {
      onActiveCityClick(city);
    }
  };

  return (
    <li
      onClick={handleCityClick}
      className="locations__item"
    >
      <Link
        to={AppRoute.Main}
        className={`${city === activeCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}`}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

function MainLocationList ({cities, activeCity, onActiveCityClick}: MainLocationListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <MainLocationElement key={city} city={city} activeCity={activeCity} onActiveCityClick={onActiveCityClick}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainLocationList;
