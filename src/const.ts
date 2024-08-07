const SortList = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

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

const Markers = {
  DEFAULT:  'markup/img/pin.svg',
  ACTIVE: 'markup/img/pin-active.svg'
} as const;

const DEFAULT_CITY = 'Paris' as const;

const ImageSize = {
  DEFAULT_WIDTH: '260',
  FAVORITE_WIDTH: '150',
  DEFAULT_HEIGHT: '200',
  FAVORITE_HEIGHT: '110',

} as const;

const SVGSize = {
  WIDTH: '18',
  HEIGHT: '19'
} as const;

const cities = [
  {
    name: 'Paris',
    location:
    {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location:
    {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location:
    {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location:
    {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location:
    {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
] as const;

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export {
  DEFAULT_CITY,
  SortList,
  RATING,
  AppRoute,
  AuthorizationStatus,
  Sign,
  Markers,
  ImageSize,
  SVGSize,
  cities,
  APIRoute
};
