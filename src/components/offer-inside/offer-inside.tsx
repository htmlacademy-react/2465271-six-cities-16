import { IncomingOffer } from '../../types/offer-type';

type OfferInsideProps = {
  incomingOffer: IncomingOffer | null;
}

type OfferGoodsElementProps = {
  offerGood: string;
}

function OfferGoodsElement ({offerGood}:OfferGoodsElementProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {offerGood}
    </li>
  );
}

function OfferInside ({incomingOffer}: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {incomingOffer?.goods.map((offerGood) => (
          <OfferGoodsElement key={offerGood} offerGood={offerGood}/>
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
