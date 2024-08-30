import React, { PropsWithChildren } from "react";
import MUIAvatar from "@mui/material/Avatar";
import MUIStack from "@mui/material/Stack";

import { H2 } from "../../Text/Text";
import UserIcon from "../../Icons/UserIcon";

const UserProfileContent: React.FC<PropsWithChildren> = ({ children }) => (
  <MUIStack rowGap={2}>
    <MUIStack direction="row" columnGap={1} alignItems="center">
      <MUIAvatar variant="circular-outlined" sx={{ width: 32, height: 32 }}>
        <UserIcon color="primary" />
      </MUIAvatar>
      <H2 variant="h4">User Profile</H2>
    </MUIStack>
    {children}
  </MUIStack>
);

export default UserProfileContent;
