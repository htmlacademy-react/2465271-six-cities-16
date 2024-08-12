import { Offer } from './types/offer-type';

const capitalizeFirstLetter = (str: string | undefined) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

const checkMassiveLength = <T, K extends keyof T> (massive: T[], key: K) => massive.filter((element) => element[key]);

const getDateFormat = (dateString: string): string => {
  const date = new Date(dateString).toISOString().slice(0, 10);
  return date;
};

const getDateToLocaleFormat = (dateString: string): string => {
  const date: Date = new Date(dateString);
  const option: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };

  const formatedDate = date.toLocaleDateString('en-US', option);
  return formatedDate;
};

const setRating = (rating: number | undefined): number | undefined => {
  if(rating) {
    const multiplicateNumber = 20;
    const roundRating = Math.round(rating);
    return roundRating * multiplicateNumber;
  }
};

const setBedroomsEnding = (bedroom: number | undefined): string | undefined => {
  if (bedroom) {
    return bedroom > 1 ? 'Bedrooms' : 'Bedroom';
  }
};

const sortByRating = (offers: Offer[]) => [...offers].sort((leftPoint, rightPoint) => rightPoint.rating - leftPoint.rating);

const sortByHighToLow = (offers: Offer[]) => [...offers].sort((leftPoint, rightPoint) => rightPoint.price - leftPoint.price);

const sortByLowToHigh = (offers: Offer[]) => [...offers].sort((leftPoint, rightPoint) => leftPoint.price - rightPoint.price);

export {
  capitalizeFirstLetter,
  checkMassiveLength,
  getDateFormat,
  getDateToLocaleFormat,
  setRating,
  sortByRating,
  sortByLowToHigh,
  sortByHighToLow,
  setBedroomsEnding
};
