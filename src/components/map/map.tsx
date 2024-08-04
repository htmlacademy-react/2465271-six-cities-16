import {useRef, useEffect} from 'react';
import {Icon, LayerGroup, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import { Offer, Location } from '../../types/offer-type';
import {CitiesWhitLocations, Markers} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  activeCity: keyof typeof CitiesWhitLocations;
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
  const cityWithLocation: Location = CitiesWhitLocations[activeCity];
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityWithLocation);
  const markerLayer = useRef<LayerGroup>(layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([cityWithLocation.latitude, cityWithLocation.longitude], cityWithLocation.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [cityWithLocation, map]);

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
