// import { City } from '../../const';
import { CITIES } from '../../const';

type MainLocationProps = {
  cities: typeof CITIES;
}

type City = {
  city: string;
}

function MainLocationElement ({city}: City): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

function MainLocationList ({cities}: MainLocationProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <MainLocationElement key={city} city={city} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainLocationList;
