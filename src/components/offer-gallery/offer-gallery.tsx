import { IncomingOffer } from '../../types/offer-type';

type OfferGalleryProps = {
  incomingOffer: IncomingOffer | null;
}

type OfferImageProps = {
  placeImage: string;
}

function OfferImage ({placeImage}: OfferImageProps):JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={placeImage} alt="Photo studio"/>
    </div>
  );
}

function OfferGallery ({incomingOffer}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {incomingOffer?.images.map((placeImage) => (
          <OfferImage key={placeImage} placeImage={placeImage}/>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
