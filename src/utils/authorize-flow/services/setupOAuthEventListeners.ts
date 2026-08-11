import AuthServerOAuth2Client from "@telicent-oss/fe-auth-lib";

export const extractRedirectFromState = (url: URL) => {
  const rawState = new URLSearchParams(url.search).get("state");
  if (!rawState) return { redirect: undefined, url };

  const [csrf, encodedUrl] = rawState.split(".");
  url.searchParams.set("state", csrf);
  let redirectUrl: URL | undefined;
  if (encodedUrl) {
    redirectUrl = new URL(
      atob(encodedUrl.replace(/-/g, "+").replace(/_/g, "/"))
    );
  }

  return { redirect: redirectUrl, url };
};

export interface OAuthListenerOptions {
  /**
   * Consume-once guard for callback processing: return true to process the
   * given authorization code, false to skip (already consumed). Without this,
   * a double-dispatched callback event (React StrictMode double effects,
   * duplicated CustomEvents) exchanges the same code twice — the requests
   * race and the loser invalidates the session the winner just created.
   */
  shouldProcessCallback?: (code: string) => boolean;
}

export const setupOAuthEventListeners = (
  OAuth2Client: AuthServerOAuth2Client,
  onAuthSuccess?: (redirect?: URL) => void,
  onAuthError?: (error?: Error) => void,
  options: OAuthListenerOptions = {}
): (() => void) => {
  const handleOAuthSuccess = () => {
    console.log("OAuth success event received");
    onAuthSuccess?.();
  };

  const handleOAuthError = () => {
    console.log("OAuth error event received");
    onAuthError?.();
  };

  const handleOAuthCallback = async (event: Event) => {
    const customEvent = event as CustomEvent;
    console.log("OAuth callback event received", customEvent.detail);

    try {
      const callbackUrl = customEvent.detail.callbackUrl;
      console.log("Processing callback URL:", callbackUrl);

      const code = new URL(callbackUrl).searchParams.get("code");
      if (code && options.shouldProcessCallback && !options.shouldProcessCallback(code)) {
        console.log("Callback code already consumed — skipping duplicate event");
        return;
      }

      const { redirect, url } = extractRedirectFromState(new URL(callbackUrl));

      const callbackResult = await OAuth2Client.handleCallback(
        new URL(url).search
      );
      console.log("Callback processed successfully:", callbackResult);
      onAuthSuccess?.(redirect);
    } catch (error) {
      console.error("Callback processing failed:", error);
      onAuthError?.(error instanceof Error ? error : new Error(String(error)));
    }
  };

  window.addEventListener(
    AuthServerOAuth2Client.OAUTH_SUCCESS,
    handleOAuthSuccess
  );
  window.addEventListener(AuthServerOAuth2Client.OAUTH_ERROR, handleOAuthError);
  window.addEventListener("oauth-callback", handleOAuthCallback); // Move into client?

  return function cleanup() {
    window.removeEventListener(
      AuthServerOAuth2Client.OAUTH_SUCCESS,
      handleOAuthSuccess
    );
    window.removeEventListener(
      AuthServerOAuth2Client.OAUTH_ERROR,
      handleOAuthError
    );
    window.removeEventListener("oauth-callback", handleOAuthCallback);
  };
};
