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

export {
  CITIES,
  SortList,
  RATING,
  AppRoute,
  AuthorizationStatus,
  Sign,
};
