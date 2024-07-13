type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};

type Description = string;

type Bedrooms = number;

type Goods = string[];

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Images = string[];

type MaxAdults = number;

type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  };

export type {
  Location,
  City,
  Description,
  Bedrooms,
  Goods,
  Host,
  Images,
  MaxAdults,
  Offer
};
