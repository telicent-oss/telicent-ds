import { AUTO_LOGGED_OUT } from '../constants';

export function removeAutoLoggedOut() {
  window.sessionStorage.removeItem(AUTO_LOGGED_OUT);
}
