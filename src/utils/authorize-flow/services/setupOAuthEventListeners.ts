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

export const setupOAuthEventListeners = (
  OAuth2Client: AuthServerOAuth2Client,
  onAuthSuccess?: (redirect?: URL) => void,
  onAuthError?: (error?: Error) => void
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
