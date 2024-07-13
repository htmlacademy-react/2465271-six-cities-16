type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};

type Id = string;

type Rating = number;

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
  id: Id;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: Rating;
  previewImage: string;
  };

export type {
  Location,
  City,
  Id,
  Rating,
  Description,
  Bedrooms,
  Goods,
  Host,
  Images,
  MaxAdults,
  Offer
};
