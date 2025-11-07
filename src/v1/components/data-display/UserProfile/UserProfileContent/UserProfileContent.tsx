import React, { PropsWithChildren } from "react";
import MUIStack from "@mui/material/Stack";
import {
  pickDataAriaRoleProps,
  WithDataAriaRole,
} from "../../../utils/DomAttrProps";

export type UserProfileContentProps = WithDataAriaRole<
  typeof MUIStack,
  PropsWithChildren
>;

const UserProfileContent: React.FC<UserProfileContentProps> = ({
  children,
  ...rest
}) => (
  <MUIStack rowGap={2} {...pickDataAriaRoleProps(rest)}>
    {children}
  </MUIStack>
);

export default UserProfileContent;
