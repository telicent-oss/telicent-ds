export const requestWipe = () => {
  if (navigator.serviceWorker?.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'sign-out-request' });
  } else {
    console.error('Expected navigator.serviceWorker.controller, instead undefined; Thus cannot run requestWipe()')
  }
}