const defaultUrl = new URL('/?autoLoggedOut=true', location.origin);

export function triggerWipeWithDefaultURL(url = defaultUrl) {
  try {
    // Can fail due to CORs etc
    history.replaceState({}, '', url.toString());
  } catch (error) {
    console.warn('wipe code failed to replace state:', error);
  }
  window.location.href = url.toString();
}
