const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const checkMassiveLength = <T, K extends keyof T> (massive: T[], key: K) => massive.filter((element) => element[key]);

export { capitalizeFirstLetter, checkMassiveLength };
