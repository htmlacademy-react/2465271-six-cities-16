const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const SortList = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

const RAITING = ['5', '4', '3', '2', '1'] as const;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'

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

const IsActive = true;

export {
  CITIES,
  SortList,
  RAITING,
  AppRoute,
  AuthorizationStatus,
  Sign,
  IsActive
};
