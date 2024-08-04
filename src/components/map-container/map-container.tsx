import Map from '../map/map';
import { Offer, City } from '../../types/offer-type';

type MapContainerProps = {
  offers: Offer[];
  selectedPoint?: Offer;
  activeCity: City;
}

function MapContainer ({offers, selectedPoint, activeCity}: MapContainerProps): JSX.Element {
  return (
    <section className="cities__map map">
      <Map offers={offers} selectedPoint={selectedPoint} activeCity={activeCity}/>
    </section>
  );
}

export default MapContainer;
