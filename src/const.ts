const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const SortList = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

const RATING = ['5', '4', '3', '2', '1'] as const;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/'

}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const Sign = {
  SignIn: 'Sign in',
  SignOut: 'Sign out'
} as const;

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const Locations = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  },
};

export {
  CITIES,
  SortList,
  RATING,
  AppRoute,
  AuthorizationStatus,
  Sign,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  Locations
};
