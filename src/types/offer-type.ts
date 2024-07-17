type Id = string;

type Rating = number;

type Comment = string;

type Description = string;

type Bedrooms = number;

type Goods = string[];

type IsFavorite = true | false;

type Images = string[];

type MaxAdult = number;

type Date = string;

type Type = string;

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
  isPro?: boolean;
};


type Offer = {
  id: Id;
  title: string;
  type: Type;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: Rating;
  previewImage: string;
  };

type OfferComment = {
  id?: Id;
  date: Date;
  user: User;
  comment: Comment;
  rating: Rating;
}

type IncommingOffer = {
    id: Id;
    title: string;
    type: Type;
    price: number;
    city: City;
    location: Location;
    isFavorite: IsFavorite;
    isPremium: IsFavorite;
    rating: Rating;
    description: Description;
    bedrooms: Bedrooms;
    goods: Goods;
    host: User;
    images: [string];
    maxAdults: MaxAdult;
  }

export type {
  Location,
  City,
  Id,
  Rating,
  Comment,
  Description,
  Bedrooms,
  Goods,
  User,
  Images,
  MaxAdult,
  Date,
  Type,
  Offer,
  OfferComment,
  IsFavorite,
  IncommingOffer
};
