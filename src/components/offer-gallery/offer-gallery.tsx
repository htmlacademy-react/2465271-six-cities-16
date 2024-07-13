import { PLACESIMAGE } from '../../mocks/places-image';

type PlacesImageProps = {
  placesImage: typeof PLACESIMAGE;
}

type PlaceImage = {
  placeImage: string;
}

function OfferImage ({placeImage}: PlaceImage):JSX.Element {
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
        {placesImage.map((placeImage) => (
          <OfferImage key={placeImage} placeImage={placeImage}/>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
