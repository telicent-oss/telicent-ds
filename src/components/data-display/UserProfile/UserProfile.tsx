import React, { PropsWithChildren, useState } from "react";
import MUIStack from "@mui/material/Stack";
import MUIIconButton from "@mui/material/IconButton";
import MUIAvatar from "@mui/material/Avatar";
import MUIMenu from "@mui/material/Menu";
import MUIGrid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Text from "../Text/Text";
import UserIcon from "../Icons/UserIcon";
import DownArrowIcon from "../FontAwesomeIcons/DownArrowIcon";

export type UserProfileProps = PropsWithChildren & {
  fullName: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ fullName, children }) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MUIStack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{ position: "absolute", top: "50%", right: 16, transform: "translate(0, -50%);" }}
    >
      <Text variant="h6" component="h2">
        {fullName}
      </Text>
      <MUIAvatar variant="circular-outlined" sx={{ width: 32, height: 32 }}>
        <UserIcon color="primary" />
      </MUIAvatar>
      <MUIIconButton aria-label="user-profile" color="primary" onClick={handleClick}>
        <DownArrowIcon rotation={open ? 180 : undefined} size="sm" />
      </MUIIconButton>
      <MUIMenu
        anchorEl={anchorEl}
        id="user-profile-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{ component: "div", sx: { padding: 0 } }}
        slotProps={{
          paper: {
            sx: {
              padding: 3,
              border: `1px solid #8D99E270`,
              width: 300,
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MUIGrid container>
          <Box sx={{ width: "100%" }} marginBottom={2}>
            <Text variant="h4" component="h2">
              User Status
            </Text>
          </Box>
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
      </MUIMenu>
    </MUIStack>
  );
};

export default UserProfile;
