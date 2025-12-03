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
        queryClient.invalidateQueries({ stale: true });
        break;
      case AuthEvent.USER_CHANGED:
        window.location.replace(baseUrl);
        break;
    }
  });
