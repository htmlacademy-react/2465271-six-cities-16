import { IncomingOffer } from '../../types/offer-type';

type OfferHostProps = {
  incomingOffer: IncomingOffer | undefined;
}

function OfferDescription ({incomingOffer}: OfferHostProps): JSX.Element {
  return (
    <p className="offer__text">
      {incomingOffer?.description}
    </p>
  );
}

function OffersHost ({incomingOffer}: OfferHostProps): JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${incomingOffer?.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={incomingOffer?.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="offer__user-name">
          {incomingOffer?.host.name}
        </span>
        {incomingOffer?.host.isPro && (
          <span className="offer__user-status">
            Pro
          </span>
        )}
      </div>
      <div className="offer__description">
        <OfferDescription incomingOffer={incomingOffer}/>
      </div>
    </div>
  );
}

export default OffersHost;
