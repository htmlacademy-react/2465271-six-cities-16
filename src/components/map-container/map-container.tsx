import Map from '../map/map';
import { Offer } from '../../types/offer-type';
import { selectIncomingOffer, selectOffers } from '../../services/selectors';
import { useAppSelector } from '../../hooks/store/store';

type MapContainerProps = {
  offers: Offer[] | undefined;
}

function MapContainer ({offers}: MapContainerProps): JSX.Element {
  const incomingOffer = useAppSelector(selectIncomingOffer);
  const allOffers = useAppSelector(selectOffers);
  const offersForMap = () => {
    if(incomingOffer && allOffers && offers) {
      const selectedOffers = allOffers.filter((offer) => offer.id === incomingOffer.id);
      return [...offers, ...selectedOffers];
    }
  };

  return (
    <section className="cities__map map">
      <Map offers={offersForMap()} />
    </section>
  );
}

export default MapContainer;
