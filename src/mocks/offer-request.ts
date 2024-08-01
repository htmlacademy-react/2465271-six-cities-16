import { IncomingOffer } from '../types/offer-type';

export const offerRequest: IncomingOffer = {
  id: 'c8926a0e-aefb-441f-9de6-6d9a94f866bd',
  title: 'Beautiful & luxurious apartment at great location',
  description:
    'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
  type: 'apartment',
  price: 362,
  images: [
    'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16,
  },
  goods: [
    'Washer',
    'Cable TV',
    'Heating',
    'Wi-Fi',
    'Breakfast',
    'Baby seat',
    'Dishwasher',
    'Air conditioning',
    'Laptop friendly workspace',
    'Washing machine',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl:
      'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 2.8,
  bedrooms: 1,
  maxAdults: 9,
};
