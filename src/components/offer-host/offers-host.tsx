import { offerRequest } from '../../mocks/offer-request';

function OfferDescription (): JSX.Element {
  return (
    <p className="offer__text">
      {offerRequest.description}
    </p>
  );
}

function OffersHost (): JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${offerRequest.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={offerRequest.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="offer__user-name">
          {offerRequest.host.name}
        </span>
        {offerRequest.host.isPro && (
          <span className="offer__user-status">
            Pro
          </span>
        )}
      </div>
      <div className="offer__description">
        <OfferDescription/>
      </div>
    </div>
  );
}

export default OffersHost;
