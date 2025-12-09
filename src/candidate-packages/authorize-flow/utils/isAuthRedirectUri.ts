import { AuthServerOAuth2ClientConfig } from "@telicent-oss/fe-auth-lib";
import { matchCurrentUri } from "./matchCurrentUrl";

export type IsAuthRedirectArgs = {
  config: AuthServerOAuth2ClientConfig;
  url: string | URL;
};

export const isAuthRedirect = ({
  config,
  url,
}: IsAuthRedirectArgs): boolean => {
  const needles = [config.redirectUri, config.popupRedirectUri];
  return needles.some((needle) => matchCurrentUri(needle, url));
};
