import { Offer } from '../../types/offer-type';
import { CitiesWhitLocations } from '../../const';

type PlacesFoundProps = {
  activeCity: keyof typeof CitiesWhitLocations;
  offers: Offer[];
}

function PlacesFound ({activeCity, offers}: PlacesFoundProps):JSX.Element {
  return (
    <b className="places__found">{offers.length} places to stay in {activeCity}</b>
  );
}

export default PlacesFound;
