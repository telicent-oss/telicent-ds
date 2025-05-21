import { autoLoggedOut } from "./utils/autoLoggedOut";

export const requestWipe = () => {
  if (navigator.serviceWorker?.controller) {
    autoLoggedOut.set(Date.now()); // as this page is signing out - block auto triggerWipe
    navigator.serviceWorker.controller.postMessage({ type: 'sign-out-request' });
  } else {
    console.error('Expected navigator.serviceWorker.controller, instead undefined; Thus cannot run requestWipe()')
  }
}