import { useState, useRef, useCallback, useEffect } from "react";
import { H3, Text } from "../../v1/components/data-display/Text/Text";
import { FlexBox, Button, Modal } from "../../export";
import { Box } from "@mui/material";
import { AuthEvent, onAuthEvent } from "./broadcastChannelService";

interface AuthRedirectModalProps {
  signOutUrl: string;
  debounceMs?: number;
}

export const AuthModal: React.FC<AuthRedirectModalProps> = ({ signOutUrl, debounceMs = 5000 }) => {
  const alreadyTriggered = useRef(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    window.open(signOutUrl, "_blank");
  };

  useEffect(() => {
    const unsubscribe = onAuthEvent((event) => {
      if (event === AuthEvent.UNAUTHORIZED && !alreadyTriggered.current) {
        setIsOpen(true);
        alreadyTriggered.current = true;
        setTimeout(() => {
          alreadyTriggered.current = false;
        }, debounceMs);
      } else if (event === AuthEvent.AUTHENTICATED || event === AuthEvent.REAUTHENTICATED) {
        setIsOpen(false);
        alreadyTriggered.current = false;
      }
    });

    return unsubscribe;
  }, []);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <Modal hideCloseButton onClose={() => {}} sx={{ m: 2, p: 2 }} open={isOpen}>
      <FlexBox sx={{ p: 2, overflowY: "auto" }}>
        <H3>Your session is no longer active</H3>
        <Text sx={{ pt: 4 }}>
          Your session may have expired, you may have signed out, or your account isn&apos;t active.
        </Text>
        <Text>Please login again to continue.</Text>
        <Text sx={{ pt: 4 }}>If you continue to have issues, contact your system administrator.</Text>
        <FlexBox ml="auto" mt={2} gap={1} direction="row">
          <Button variant="secondary" disableElevation onClick={handleCloseClick} size="large">
            Close
          </Button>
          <Button variant="primary" onClick={handleLoginClick} size="large">
            Login
          </Button>
        </FlexBox>
      </FlexBox>
    </Modal>
  );
};
