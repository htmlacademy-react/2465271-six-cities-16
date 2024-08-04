import {useRef, useEffect} from 'react';
import {Icon, LayerGroup, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import { Offer, City } from '../../types/offer-type';
import {Markers} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  activeCity: City;
  offers: Offer[];
  selectedPoint?: Offer;
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
  const {activeCity, offers, selectedPoint} = props;
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
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer.current);
      });
    }
  }, [map, offers, selectedPoint]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
