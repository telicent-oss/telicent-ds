import React, { useEffect } from "react";
import { onAuthEvent } from "./broadcastChannelService";
import { AuthEvent } from "./broadcastChannelService";
import { QueryClient } from "@tanstack/react-query";

export const registerAuthSync = (queryClient: QueryClient) =>
  onAuthEvent((event) => {
    switch (event) {
      case AuthEvent.AUTHENTICATED:
      case AuthEvent.REAUTHENTICATED:
        queryClient.refetchQueries({ stale: true });
        break;
      case AuthEvent.USER_CHANGED:
        window.location.reload();
        break;
    }
  });

export const useAuthSync = (queryClient: QueryClient) => {
  useEffect(() => {
    const unsubscribe = registerAuthSync(queryClient);
    return unsubscribe;
  }, [queryClient]);
};
