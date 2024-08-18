import {useRef, useEffect} from 'react';
import {Icon, LayerGroup, Marker, layerGroup} from 'leaflet';
import { useAppSelector } from '../../hooks/store/store';
import { selectActiveCard } from '../../services/selectors';
import useMap from '../../hooks/use-map/use-map';
import { Offer } from '../../types/offer-type';
import {Markers} from '../../const';
import 'leaflet/dist/leaflet.css';
import { useCities } from '../../hooks/use-cities/use-cities';

type MapProps = {
  offers: Offer[] | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: Markers.DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: Markers.ACTIVE,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const selectedPoint = useAppSelector(selectActiveCard);
  const { activeCity } = useCities();
  const { offers} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCity);
  const markerLayer = useRef<LayerGroup>(layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([activeCity.location.latitude, activeCity.location.longitude], activeCity.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [activeCity, map]);

  useEffect(() => {
    if (map) {
      offers?.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.id === selectedPoint?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer.current);
      });
    }
  }, [map, offers, selectedPoint]);

  return (
    <section className="cities__map map">
      <div style={{height: '700px'}} ref={mapRef}></div>
    </section>
  );
}

export default Map;
