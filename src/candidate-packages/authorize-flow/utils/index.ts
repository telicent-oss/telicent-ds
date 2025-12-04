import { QueryClient } from "@tanstack/react-query";
import { AuthEvent, onAuthEvent } from "../services/broadcastChannelService";

export const registerAuthSync = (
  queryClient: QueryClient,
  baseUrl: string = ""
) =>
  onAuthEvent((event) => {
    switch (event) {
      case AuthEvent.AUTHENTICATED:
      case AuthEvent.REAUTHENTICATED:
        queryClient.refetchQueries({ stale: true });
        break;
      case AuthEvent.USER_CHANGED:
        window.location.replace(baseUrl);
        break;
    }
  });

export const clearAuthSessionFromStorage = () => {
  sessionStorage.removeItem("oauth_state");
  sessionStorage.removeItem("oauth_code_verifier");
  sessionStorage.removeItem("oauth_nonce");
  sessionStorage.removeItem("oauth_redirect");
};
