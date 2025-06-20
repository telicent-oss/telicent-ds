// AuthModal.tsx
import { useState, useEffect } from "react";
import { H3, Text } from "../../v1/components/data-display/Text/Text";
import { FlexBox, Button, Modal } from "../../export";
import { Box } from "@mui/material";
import { subscribeToAuthState, getAuthState } from "./authStateManager";

interface AuthModalProps {
  signOutUrl: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({ signOutUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('AuthModal.subscribe...');
    const unsubscribe = subscribeToAuthState(({ promise }) => {
      console.log('AuthModal.setIsOpen', promise)
      setIsOpen(!!promise); // Too weird
    });
    console.log('...AuthModal.subscribe DONE');
    
    return unsubscribe;
  }, []);

  const handleLoginClick = () => {
    window.open(signOutUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <Modal hideCloseButton onClose={() => {}} sx={{ m: 2, p: 2 }} open={true}>
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