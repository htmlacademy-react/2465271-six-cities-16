import { AuthorizationStatus } from '../const';
import { RootState } from '../types/store';

const selectOffers = (state: RootState) => state.offers.offers;
const selectIncomingOffer = (state: RootState) => state.incomingOffer.incommingOffer;
const selectAuthStatus = (state: RootState) => state.user.authStatus;
const selectCheckAuthStatus = (state: RootState) => state.user.authStatus !== AuthorizationStatus.Unknown;
const selectSortOffers = (state: RootState) => state.sortOffers.sortOffers;
const selectActiveCity = (state: RootState) => state.activeCity.activeCity;
const selectComments = (state: RootState) => state.comments.comments;
const selectNearbyOffers = (state: RootState) => state.nearbyOffers.nearbyOffers;
const selectFavorites = (state: RootState) => state.favorites.favorites;
const selectEmail = (state: RootState) => state.user.user?.email;
const selectIncomingErrorStatus = (state: RootState) => state.incomingOffer.hasError;
const selectOffersLoadingStatus = (state: RootState) => state.offers.status;
const selectUserLoadingStatus = (state: RootState) => state.user.requestStatus;
const selectIncomingOfferStatus = (state: RootState) => state.incomingOffer.status;
const selectActiveCard = (state: RootState) => state.offers.setActiveCard;

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
  selectIncomingErrorStatus,
  selectOffersLoadingStatus,
  selectCheckAuthStatus,
  selectUserLoadingStatus,
  selectIncomingOfferStatus,
  selectActiveCard,
};
