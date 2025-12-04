import { FC } from "react";
import { FlexBox, Text, Button, H3 } from "../../../export";
import { UserInfo } from "@telicent-oss/fe-auth-lib";

interface CallbackProps {
  logout: () => Promise<void>;
  user: UserInfo | null;
}

export const InactiveUser: FC<CallbackProps> = ({ logout, user }) => {
  return (
    <FlexBox gap={2} sx={{ marginX: 5 }} height="100vh" justifyContent="center" alignItems="center">
      <FlexBox>
        <H3>Your profile is currently inactive.</H3>
        <Text sx={{ pt: 4 }}>
          Please contact your system administrator. You cannot continue until your profile is activated and attributes have been set.
        </Text>
        <Text>{`Ensure the correct groups are assigned to ${user?.preferred_name} to see the correct data.Please login to continue.`}</Text>
        <FlexBox ml="auto" mt={2} gap={1} direction="row">
          <Button color="primary" variant="contained" onClick={logout} size="large">
            Logout
          </Button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
