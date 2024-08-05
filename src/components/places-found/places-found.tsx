import { useCities } from '../../hooks/use-cities/use-cities';

function PlacesFound ():JSX.Element {
  const { activeCity, activeOffers } = useCities();
  return (
    <b className="places__found">{activeOffers.length} places to stay in {activeCity.name}</b>
  );
}

export default PlacesFound;
