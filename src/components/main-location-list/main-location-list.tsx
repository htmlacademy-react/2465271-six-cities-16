import { AppRoute, CITIES } from '../../const';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

type MainLocationProps = {
  cities: typeof CITIES;
}

type City = {
  city: string;
}

function MainLocationElement ({city}: City): JSX.Element {
  const [activeCity, setActiveCity] = useState('locations__item-link tabs__item');
  function handleCityClick () {
    setActiveCity('locations__item-link tabs__item tabs__item--active');
  }

  return (
    <li className="locations__item">
      <NavLink
        to={AppRoute.Main}
        className={activeCity}
        onClick={handleCityClick}
      >
        <span>{city}</span>
      </NavLink>
    </li>
  );
}

function MainLocationList ({cities}: MainLocationProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <MainLocationElement key={city} city={city}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainLocationList;
