import { SORTING_METHODS } from './constants';

export const sortCurrencies = (currencies: Array<Currencie>, sortMethod: string) => {
  switch (sortMethod) {
    case SORTING_METHODS.SORTING_BY_RATE.ASC:
      return currencies.sort((a, b) => a.rate_float - b.rate_float);
    case SORTING_METHODS.SORTING_BY_RATE.DESC:
      return currencies.sort((a, b) => b.rate_float - a.rate_float);
    case SORTING_METHODS.SORTING_BY_NAME.ASC:
      return currencies.sort((a, b) => a.code.localeCompare(b.code));
    case SORTING_METHODS.SORTING_BY_NAME.DESC:
      return currencies.sort((a, b) => b.code.localeCompare(a.code));
    default:
      return currencies;
  }
};
