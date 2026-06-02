import React, { PropsWithChildren } from "react";
import MUIStack from "@mui/material/Stack";

const UserProfileContent: React.FC<PropsWithChildren> = ({ children }) => <MUIStack rowGap={2}>{children}</MUIStack>;

export default UserProfileContent;
