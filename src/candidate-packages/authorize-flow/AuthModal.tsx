import { useState, useRef, useCallback, useEffect } from "react";
import { H3, Text } from "../../v1/components/data-display/Text/Text";
import { FlexBox, Button, Modal } from "../../export";
import { Box } from "@mui/material";

interface AuthRedirectModalProps {
  channelName?: string;
  signOutUrl: string;
  debounceMs?: number;
}

export const AuthModal: React.FC<AuthRedirectModalProps> = ({
  channelName = "auth-events",
  signOutUrl,
  debounceMs = 5000,
}) => {
  const bc = new BroadcastChannel(channelName);
  const alreadyTriggered = useRef(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    window.open(signOutUrl, "_blank");
  };

  const handleAuthMessage = useCallback((message: MessageEvent) => {
    if (
      message.data.toLowerCase() === "unauthorized" &&
      !alreadyTriggered.current
    ) {
      setIsOpen(true);
      alreadyTriggered.current = true;
      setTimeout(() => (alreadyTriggered.current = false), debounceMs);
    } else if (message.data.toLowerCase() === "authorized") {
      setIsOpen(false);
      alreadyTriggered.current = false;
    }
  }, []);

  useEffect(() => {
    if (!channelName) return;
    bc.addEventListener("message", handleAuthMessage);
    return () => {
      bc.removeEventListener("message", handleAuthMessage);
      bc.close();
    };
  }, [channelName]);

  return (
    <Modal hideCloseButton onClose={() => {}} sx={{ m: 2, p: 2 }} open={isOpen}>
      <FlexBox sx={{ p: 2 }}>
        <H3>
          <i className="fa-regular fa-circle-exclamation"></i> Your session is
          no longer active
        </H3>
        <Text sx={{ pt: 4 }}>
          Your session may have expired, you may have signed out, or your
          account isn&apos;t active.
        </Text>
        <Text>Please login again to continue.</Text>
        <Text sx={{ pt: 4 }}>
          If you continue to have issues, contact your system administrator.
        </Text>
        <Box ml="auto" mt={2}>
          <Button variant="primary" onClick={handleLoginClick} size="large">
            Login
          </Button>
        </Box>
      </FlexBox>
    </Modal>
  );
};
