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
  const [myClassName, setMyClassName] = useState('locations__item-link');

  function SetNewClass(){
    setMyClassName('locations__item-link tabs__item tabs__item--active');
  }

  function SetOldClass() {
    setMyClassName('locations__item-link');
  }

  return (
    <li className="locations__item">
      <NavLink
        to={AppRoute.Main}
        className={myClassName}
        onMouseOver={SetNewClass}
        onMouseOut={SetOldClass}
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
