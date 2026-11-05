import AuthServerOAuth2Client from "@telicent-oss/fe-auth-lib";
import axios from "axios";

import { withSessionHandling } from "./services/withSessionHandling";
import { RequestApi, SessionHandlingConfig } from "./types";
export { setupOAuthEventListeners } from "./services/setupOAuthEventListeners";

export const createRequestApi = (
  baseURL?: string,
  authClient?: AuthServerOAuth2Client
): RequestApi => {
  const instance = axios.create({
    baseURL,
    withCredentials: true, // Ensure cookies are always sent
  });

  const requestApi: RequestApi = {
    instance,
    withSessionHandling: (config: SessionHandlingConfig) => {
      withSessionHandling(instance, config, authClient);
      return requestApi;
    },
    build: () => ({ instance }),
  };

  return requestApi;
};

// Backward compatibility alias
export const createApi = createRequestApi;
