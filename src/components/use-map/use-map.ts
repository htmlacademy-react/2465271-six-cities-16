import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import { Offer } from '../../types/offer-type';

// type UseMapProps = {
//   mapRef: React.MutableRefObject<null>;
//   city: Offer;
// }

function useMap(mapRef: React.MutableRefObject<null>, city: Offer) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.city.location.latitude,
          lng: city.city.location.longitude,
        },
        zoom: city.city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
