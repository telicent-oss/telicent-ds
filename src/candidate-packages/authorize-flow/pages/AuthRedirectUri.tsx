import React, { FC } from "react";
import AuthServerOAuth2Client, { AuthServerOAuth2ClientConfig } from "@telicent-oss/fe-auth-lib";
import { FlexBox, Text } from "../../../export";

interface AuthRedirectUriProps {
  config: AuthServerOAuth2ClientConfig
}

export const AuthRedirectUri: FC<AuthRedirectUriProps> = ({ config }) => {
  React.useEffect(() => {
    if (!config || Object.values(config).length === 0) return;
    const client = new AuthServerOAuth2Client(config);
    client.finishPopupFlow()
  }, [config])

  return (
    <FlexBox gap={2} sx={{ marginX: 5 }}>
      <FlexBox>
        <Text variant="body1">Processing login...</Text>
      </FlexBox>
    </FlexBox>
  );
};
