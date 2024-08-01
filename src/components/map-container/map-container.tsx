import Map from '../map/map';
import { Offer } from '../../types/offer-type';
import { Locations } from '../../const';

type MapContainerProps = {
  offers: Offer[];
  selectedPoint?: Offer;
  activeCity: keyof typeof Locations;
}

function MapContainer ({offers, selectedPoint, activeCity}: MapContainerProps): JSX.Element {
  return (
    <section className="cities__map map">
      <Map offers={offers} selectedPoint={selectedPoint} activeCity={activeCity}/>
    </section>
  );
}

export default MapContainer;
