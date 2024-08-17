import { RootState } from '../types/store';

const selectOffers = (state: RootState) => state.offers.offers;
const selectIncomingOffer = (state: RootState) => state.incomingOffer.incommingOffer;
const selectAuthStatus = (state: RootState) => state.user.authStatus;
const selectSortOffers = (state: RootState) => state.sortOffers.sortOffers;
const selectActiveCity = (state: RootState) => state.activeCity.activeCity;
const selectComments = (state: RootState) => state.comments.comments;
const selectNearbyOffers = (state: RootState) => state.nearbyOffers.nearbyOffers;
const selectFavorites = (state: RootState) => state.favorites.favorites;
const selectEmail = (state: RootState) => state.user.user?.email;

export {
  selectOffers,
  selectIncomingOffer,
  selectAuthStatus,
  selectSortOffers,
  selectActiveCity,
  selectComments,
  selectNearbyOffers,
  selectFavorites,
  selectEmail,
};
