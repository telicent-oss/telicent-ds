import { AUTO_LOGGED_OUT } from '../constants';
export function getAutoLoggedOut() {
  return window.sessionStorage.getItem(AUTO_LOGGED_OUT);
}
