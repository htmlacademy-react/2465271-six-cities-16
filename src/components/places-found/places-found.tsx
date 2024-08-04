import { Offer, City } from '../../types/offer-type';

type PlacesFoundProps = {
  activeCity: City;
  offers: Offer[];
}

function PlacesFound ({activeCity, offers}: PlacesFoundProps):JSX.Element {
  return (
    <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
  );
}

export default PlacesFound;
