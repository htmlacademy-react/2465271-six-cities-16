const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

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

const setRating = (rating: number): number => {
  const multiplicateNumber = 20;
  const roundRating = Math.round(rating);
  return roundRating * multiplicateNumber;
};

export { capitalizeFirstLetter, checkMassiveLength, getDateFormat, getDateToLocaleFormat, setRating };
