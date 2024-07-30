// import { offerRequest } from '../../mocks/offer-request';
import { IncomingOffer } from '../../types/offer-type';

type PlacesImageProps = {
  placesImage: IncomingOffer;
}

type PlaceImageProps = {
  placeImage: string;
}

function OfferImage ({placeImage}: PlaceImageProps):JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={placeImage} alt="Photo studio"/>
    </div>
  );
}

function OfferGallery ({placesImage}: PlacesImageProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {placesImage.images.map((placeImage) => (
          <OfferImage key={placeImage} placeImage={placeImage}/>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
