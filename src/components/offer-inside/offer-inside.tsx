import { offerRequest } from '../../mocks/offer-request';

type OfferInsideProps = {
  offerList: typeof offerRequest;
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

function OfferInside ({offerList}: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {offerList.goods.map((offerGood) => (
          <OfferGoodsElement key={offerGood} offerGood={offerGood}/>
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
