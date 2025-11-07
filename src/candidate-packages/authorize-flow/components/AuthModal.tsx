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
    <Modal hideCloseButton onClose={() => { }} sx={{ m: 2, p: 2 }} open={isOpen}
      role="dialog" aria-modal="true" aria-labelledby="auth-modal-title" aria-describedby="auth-modal-desc" data-testid="auth-modal">
      <FlexBox sx={{ p: 2, overflowY: "auto" }}>
        <H3 id="auth-modal-title">Your session is no longer active</H3>
        <Text sx={{ pt: 4 }} id="auth-modal-desc">
          Your session may have expired, you may have signed out, or your account isn&apos;t active.
        </Text>
        <Text>Please login again to continue.</Text>
        <Text sx={{ pt: 4 }}>If you continue to have issues, contact your system administrator.</Text>
        <FlexBox ml="auto" mt={2} gap={1} direction="row">
          <Button color="primary" variant="outlined" disableElevation onClick={handleCloseClick} size="large" data-testid="auth-modal-close">
            Close
          </Button>
          <Button color="primary" variant="contained" onClick={handleLoginClick} size="large" data-testid="auth-modal-login">
            Login
          </Button>
        </FlexBox>
      </FlexBox>
    </Modal>
  );
};
