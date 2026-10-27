import MUIStack from "@mui/material/Stack";
import React, { PropsWithChildren } from "react";

const UserProfileContent: React.FC<PropsWithChildren> = ({ children }) => <MUIStack rowGap={2}>{children}</MUIStack>;

export default UserProfileContent;
