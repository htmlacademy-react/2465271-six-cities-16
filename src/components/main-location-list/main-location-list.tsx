import { City } from '../../types/offer-type';
import { cities } from '../../const';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type MainLocationListProps = {
  citiesWhitLocation: typeof cities;
  activeCity: City;
  onCityChange: (city: City) => void;
}

type MainLocationElementProps = {
  city: City;
  activeCity: City;
  onCityChange: (city: City) => void;
}

function MainLocationElement ({city, activeCity, onCityChange}: MainLocationElementProps): JSX.Element {
  const handleCityClick = () => {
    if (onCityChange) {
      onCityChange(city);
    }
  };

  return (
    <li
      onClick={handleCityClick}
      className="locations__item"
    >
      <Link
        to={AppRoute.Main}
        className={`${city.name === activeCity.name ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}`}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}

function MainLocationList ({citiesWhitLocation, activeCity, onCityChange}: MainLocationListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesWhitLocation.map((city) => (
            <MainLocationElement key={city.name} city={city} activeCity={activeCity} onCityChange={onCityChange}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainLocationList;
