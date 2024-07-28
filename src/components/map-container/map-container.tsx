import Map from '../map/map';
import { Offer } from '../../types/offer-type';

type Offers = {
  offers: Offer[];
  selectedPoint?: string;
}

function MapContainer ({offers, selectedPoint}: Offers): JSX.Element {
  return (
    <section className="cities__map map">
      <Map offers={offers} selectedPoint={selectedPoint}/>
    </section>
  );
}

export default MapContainer;
