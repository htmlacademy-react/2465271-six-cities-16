import { AppRoute, CITIES } from '../../const';
import { Link } from 'react-router-dom';

type MainLocationListProps = {
  cities: typeof CITIES;
  activeCity: string;
  onActiveCityClick: (evt: React.MouseEvent<HTMLSpanElement>) => void;
}

type MainLocationElementProps = {
  city: string;
  activeCity: string;
  onActiveCityClick: (evt: React.MouseEvent<HTMLSpanElement>) => void;
}

function MainLocationElement ({city, activeCity, onActiveCityClick}: MainLocationElementProps): JSX.Element {
  return (
    <li
      onClick={onActiveCityClick}
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
