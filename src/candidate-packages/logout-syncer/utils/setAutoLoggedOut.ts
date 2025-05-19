import { AUTO_LOGGED_OUT } from '../constants';

export function setAutoLoggedOut(val: number) {
  window.sessionStorage.setItem(AUTO_LOGGED_OUT, `${val}`);
}
