import React, { FC } from "react";
import AuthServerOAuth2Client, { AuthServerOAuth2ClientConfig } from "@telicent-oss/fe-auth-lib";
import { FlexBox, Text } from "../../../export";

interface AuthRedirectUriProps {
  config: AuthServerOAuth2ClientConfig
}

export const AuthRedirectUri: FC<AuthRedirectUriProps> = ({ config }) => {
  React.useEffect(() => {
    if (!config || Object.values(config).length === 0) {
      console.log(
        "[auth-popup] Missing OAuth config on callback page, skipping finishPopupFlow"
      );
      return;
    }

    const hasOpener = typeof window !== "undefined" && !!window.opener;
    const isPopup =
      hasOpener || (typeof window !== "undefined" && window.parent !== window);

    if (typeof window !== "undefined") {
      console.log("[auth-popup] Callback loaded", {
        href: window.location.href,
        search: window.location.search,
        hasOpener,
        isPopup,
      });
    }

    try {
      const client = new AuthServerOAuth2Client(config);
      console.log("[auth-popup] Calling finishPopupFlow");
      client.finishPopupFlow();
      console.log("[auth-popup] finishPopupFlow returned");
    } catch (err) {
      console.error("[auth-popup] finishPopupFlow threw", err);
    }
  }, [config]);

  return (
    <FlexBox gap={2} sx={{ marginX: 5 }}>
      <FlexBox>
        <Text variant="body1">Processing login...</Text>
      </FlexBox>
    </FlexBox>
  );
};
