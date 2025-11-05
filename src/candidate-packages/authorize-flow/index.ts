import axios from "axios";
import { RequestApi, SessionHandlingConfig } from "./types";
import { withSessionHandling } from "./withSessionHandling";
import AuthServerOAuth2Client from "@telicent-oss/fe-auth-lib";
export { setupOAuthEventListeners } from './setupOAuthEventListeners';
export { AuthV2ConfigSchema, type AuthV2Config } from './AuthV2ConfigSchema';

export const createRequestApi = (baseURL?: string, authClient?: AuthServerOAuth2Client): RequestApi => {
  const instance = axios.create({
    baseURL,
    withCredentials: true // Ensure cookies are always sent
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
