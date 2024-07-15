import { placesOffers } from '../../mocks/places-offers';

function PlacesFound ():JSX.Element {
  return (
    <b className="places__found">{placesOffers.length} places to stay in Amsterdam</b>
  );
}

export default PlacesFound;
