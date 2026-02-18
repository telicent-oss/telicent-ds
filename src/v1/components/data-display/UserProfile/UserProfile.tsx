import React, { PropsWithChildren, useState } from "react";
import MUIStack from "@mui/material/Stack";
import MUIIconButton from "@mui/material/IconButton";
import MUIAvatar from "@mui/material/Avatar";
import MUIMenu from "@mui/material/Menu";

import Text from "../Text/Text";
import UserIcon from "../Icons/UserIcon";
import DownArrowIcon from "../FontAwesomeIcons/DownArrowIcon";

export type UserProfileProps = PropsWithChildren & {
  fullName: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ fullName, children }) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MUIStack
        onClick={handleClick}
        width="max-content"
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ cursor: "pointer" }}
      >
        <Text
          variant="subtitle1"
          sx={{
            display: { xs: "none", sm: "block" },
            maxWidth: {
              sm: "clamp(130px, 15vw, 360px)",
              md: "clamp(160px, 22vw, 360px)",
              lg: "clamp(240px, 25vw, 600px)",
              xl: "clamp(240px, calc(25vw + 80px), 600px)",
            },
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          title={fullName}
        >
          {fullName}
        </Text>
        <MUIAvatar variant="circular-outlined" sx={{ width: 32, height: 32, borderColor: "inherit" }}>
          <UserIcon color="inherit" />
        </MUIAvatar>
        <MUIIconButton aria-label="user-profile" color="inherit">
          <DownArrowIcon rotation={open ? 180 : undefined} size="sm" color="primary" />
        </MUIIconButton>
      </MUIStack>
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
              padding: 2.5,
              width: 300,
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {children}
      </MUIMenu>
    </>
  );
};

export default UserProfile;
