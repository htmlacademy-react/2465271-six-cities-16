import { Offer } from '../../types/offer-type';

type PlacesFoundProps = {
  activeCity: string;
  offers: Offer[];
}

function PlacesFound ({activeCity, offers}: PlacesFoundProps):JSX.Element {
  return (
    <b className="places__found">{offers.length} places to stay in {activeCity}</b>
  );
}

export default PlacesFound;
