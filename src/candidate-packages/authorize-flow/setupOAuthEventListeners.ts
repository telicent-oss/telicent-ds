import AuthServerOAuth2Client from "@telicent-oss/fe-auth-lib";

export const setupOAuthEventListeners = (
  OAuth2Client: AuthServerOAuth2Client,
  onAuthSuccess?: () => void,
  onAuthError?: (error?: any) => void
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
      const callbackResult = await OAuth2Client.handleCallback(
        new URL(callbackUrl).search
      );
      console.log("Callback processed successfully:", callbackResult);
      onAuthSuccess?.();
    } catch (error) {
      console.error("Callback processing failed:", error);
      onAuthError?.(error);
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
