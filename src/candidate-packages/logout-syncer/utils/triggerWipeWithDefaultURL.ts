const defaultUrl = new URL('/?autoLoggedOut=true', location.origin);

export function triggerWipeWithDefaultURL(url = defaultUrl) {
  history.replaceState({}, '', url.toString());
  window.location.href = url.toString();
}
