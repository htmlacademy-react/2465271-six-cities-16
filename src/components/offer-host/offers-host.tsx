import { OfferHost } from '../../mocks/offer-host';
import { offerDescriptions } from '../../mocks/offer-descriptions';
import { Description } from '../../types/offer-type';

type OfferDescriptionsProps = {
  Descriptions: typeof offerDescriptions;
}

type OfferDescription = {
  offerDescription: Description;
}

function OfferDescription ({offerDescription}: OfferDescription): JSX.Element {
  return (
    <p className="offer__text">
      {offerDescription}
    </p>
  );
}

function OffersHost ({Descriptions}: OfferDescriptionsProps): JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img className="offer__avatar user__avatar" src={OfferHost.avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="offer__user-name">
          {OfferHost.name}
        </span>
        <span className="offer__user-status">
          {OfferHost.isPro}
        </span>
      </div>
      <div className="offer__description">
        {Descriptions.map((offerDescription) => (
          <OfferDescription key={offerDescription} offerDescription={offerDescription}/>
        ))}
      </div>
    </div>
  );
}

export default OffersHost;
