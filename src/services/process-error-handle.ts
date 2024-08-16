import { store } from '../store';
import { setError } from '../store/error';
import { clearErrorAction } from '../store/clear-error';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
