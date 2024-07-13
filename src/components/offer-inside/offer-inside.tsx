import { offerGoods } from '../../mocks/offer-goods';

type OfferGoodsProps = {
  offerList: typeof offerGoods;
}

type OfferGood = {
  offerGood: string;
}

function OfferGoodsElement ({offerGood}:OfferGood): JSX.Element {
  return (
    <li className="offer__inside-item">
      {offerGood}
    </li>
  );
}

function OfferInside ({offerList}: OfferGoodsProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {offerList.map((offerGood) => (
          <OfferGoodsElement key={offerGood} offerGood={offerGood}/>
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
