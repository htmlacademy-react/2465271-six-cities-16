import Map from '../map/map';
import { Offer } from '../../types/offer-type';

type MapContainerProps = {
  offers: Offer[];
  selectedPoint?: Offer;
}

function MapContainer ({offers, selectedPoint}: MapContainerProps): JSX.Element {
  return (
    <section className="cities__map map">
      <Map offers={offers} selectedPoint={selectedPoint} />
    </section>
  );
}

export default MapContainer;
