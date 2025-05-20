import { AUTO_LOGGED_OUT } from '../constants';

function get() {
  return window.sessionStorage.getItem(AUTO_LOGGED_OUT);
}

function remove() {
  window.sessionStorage.removeItem(AUTO_LOGGED_OUT);
}


function set(val: number) {
  window.sessionStorage.setItem(AUTO_LOGGED_OUT, `${val}`);
}


export const autoLoggedOut = {sessionStorage: { get, set, remove }};
