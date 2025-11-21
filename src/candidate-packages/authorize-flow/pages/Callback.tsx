import { FC, useEffect } from "react";
import { FlexBox, Text } from "../../../export";

interface CallbackProps {
  clientId: string;
}
export const Callback: FC<CallbackProps> = ({ clientId }) => {
  useEffect(() => {
    setTimeout(() => {
      const event = new CustomEvent("oauth-callback", {
        detail: {
          callbackUrl: window.location.href,
          clientId: clientId
        },
      });
      window.dispatchEvent(event);
    }, 0)
  }, [clientId]);

  return (
    <FlexBox gap={2} sx={{ marginX: 5 }}>
      <FlexBox>
        <Text variant="body1">Processing login...</Text>
      </FlexBox>
    </FlexBox>
  );
};
