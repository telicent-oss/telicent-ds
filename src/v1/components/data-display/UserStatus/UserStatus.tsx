import React, { PropsWithChildren } from "react";
import MUIAvatar from "@mui/material/Avatar";
import MUIGrid from "@mui/material/Grid";
import MUIBox from "@mui/material/Box";

import Text, { H2 } from "../Text/Text";
import UserIcon from "../Icons/UserIcon";

export type UserStatusProps = PropsWithChildren & {
  fullName: string;
};

const UserStatus: React.FC<UserStatusProps> = ({ fullName, children }) => (
  <MUIGrid container>
    <MUIBox sx={{ width: "100%" }} marginBottom={2}>
      <H2 variant="h4">User Status</H2>
    </MUIBox>
    <MUIGrid container columns={6} alignItems="center">
      <MUIGrid item xs={1}>
        <MUIAvatar variant="circular-outlined" sx={{ width: 32, height: 32 }}>
          <UserIcon color="primary" />
        </MUIAvatar>
      </MUIGrid>
      <MUIGrid item xs={5}>
        <Text variant="subtitle1">{fullName}</Text>
      </MUIGrid>
    </MUIGrid>
    <MUIGrid container columns={6}>
      <MUIGrid item xs={1} />
      <MUIGrid item xs={5}>
        {children}
      </MUIGrid>
    </MUIGrid>
  </MUIGrid>
);

export default UserStatus;
