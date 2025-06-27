import React, { useEffect } from "react";
import { onAuthEvent } from "./broadcastChannelService";
import { AuthEvent } from "./broadcastChannelService";
import { QueryClient } from "@tanstack/react-query";

export const registerAuthSync = (queryClient: QueryClient, baseUrl:string = '') =>
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

export const useAuthSync = (queryClient: QueryClient, baseUrl:string) => {
  useEffect(() => {
    const unsubscribe = registerAuthSync(queryClient, baseUrl);
    return unsubscribe;
  }, [queryClient, baseUrl]);
};
