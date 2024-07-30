import Map from '../map/map';
import { Offer } from '../../types/offer-type';
import { Locations } from '../../const';

type Offers = {
  // offer: Offer;
  offers: Offer[];
  selectedPoint?: Offer | undefined;
  activeCity: keyof typeof Locations;
}

function MapContainer ({offers, selectedPoint, activeCity}: Offers): JSX.Element {
  return (
    <section className="cities__map map">
      <Map offers={offers} selectedPoint={selectedPoint} activeCity={activeCity}/>
    </section>
  );
}

export default MapContainer;
