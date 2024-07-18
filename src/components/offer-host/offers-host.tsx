import { OfferRequest } from '../../mocks/offer-request';

type OfferDescriptionsProps = {
  offersDescriptions: typeof OfferRequest;
}

type Description = {
  description: string;
}

function OfferDescription ({description}: Description): JSX.Element {
  return (
    <p className="offer__text">
      {description}
    </p>
  );
}

function OffersHost ({offersDescriptions}: OfferDescriptionsProps): JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${offersDescriptions.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={offersDescriptions.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="offer__user-name">
          {offersDescriptions.host.name}
        </span>
        {offersDescriptions.host.isPro && (
          <span className="offer__user-status">
            Pro
          </span>
        )}
      </div>
      <div className="offer__description">
        {offersDescriptions.description.map((description) => (
          <OfferDescription key={description} description={description}/>
        ))}
      </div>
    </div>
  );
}

export default OffersHost;
