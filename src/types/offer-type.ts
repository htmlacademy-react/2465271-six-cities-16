type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};


type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type OfferTemplate = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type Offer = OfferTemplate & {
  previewImage: string;
  };

type OfferComment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

type IncomingOffer = OfferTemplate & {
    description: string;
    bedrooms: number;
    goods: string[];
    host: User;
    images: string[];
    maxAdults: number;
  }

export type {
  Offer,
  City,
  Location,
  OfferComment,
  OfferTemplate,
  IncomingOffer,
};
