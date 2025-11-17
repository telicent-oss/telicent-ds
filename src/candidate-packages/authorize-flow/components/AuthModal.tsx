import { useState, useRef, useEffect } from "react";
import { H3, Text } from "../../../v1/components/data-display/Text/Text";
import { FlexBox, Button, Modal } from "../../../export";
import { AuthEvent, onAuthEvent } from "../services/broadcastChannelService";
import { useAuth } from "../context/useAuth";

interface AuthRedirectModalProps {
  debounceMs?: number;
}

export const AuthModal: React.FC<AuthRedirectModalProps> = ({ debounceMs = 5000 }) => {
  const { login } = useAuth();
  const alreadyTriggered = useRef(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    login();
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
    <Modal hideCloseButton onClose={() => { }} sx={{ m: 2, p: 2 }} open={isOpen}>
      <FlexBox sx={{ p: 2, overflowY: "auto" }}>
        <H3>You are not signed in</H3>
        <Text sx={{ pt: 4 }}>
          Your session may have expired, you may have signed out, or your account isn&apos;t active.
        </Text>
        <Text>Please login to continue.</Text>
        <Text sx={{ pt: 4 }}>If you continue to have issues, contact your system administrator.</Text>
        <FlexBox ml="auto" mt={2} gap={1} direction="row">
          <Button color="primary" variant="outlined" disableElevation onClick={handleCloseClick} size="large">
            Close
          </Button>
          <Button color="primary" variant="contained" onClick={handleLoginClick} size="large">
            Login
          </Button>
        </FlexBox>
      </FlexBox>
    </Modal>
  );
};
