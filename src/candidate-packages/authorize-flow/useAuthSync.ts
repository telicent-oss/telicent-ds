import React, { useEffect } from "react";
import { onAuthEvent } from "./broadcastChannelService";
import { AuthEvent } from "./broadcastChannelService";
import { QueryClient } from "@tanstack/react-query";

export const useAuthSync = (queryClient: QueryClient) => {
  useEffect(() => {
    const unsubscribe = onAuthEvent((event) => {
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

    return unsubscribe;
  }, [queryClient]);
};
