import { AppRoute, CITIES } from '../../const';
import { NavLink } from 'react-router-dom';

type MainLocationProps = {
  cities: typeof CITIES;
}

type City = {
  city: string;
}

function MainLocationElement ({city}: City): JSX.Element {
  return (
    <li className="locations__item">
      <NavLink
        to={AppRoute.Main}
        className={({isActive}) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
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
