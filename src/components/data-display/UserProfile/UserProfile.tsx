import React, { PropsWithChildren, useState } from "react";
import MUIStack from "@mui/material/Stack";
import MUIBox from "@mui/material/Box";
import MUIAvatar from "@mui/material/Avatar";
import MUIMenu from "@mui/material/Menu";

import Text from "../Text/Text";
import UserIcon from "../Icons/UserIcon";
import DownArrowIcon from "../FontAwesomeIcons/DownArrowIcon";

export type UserProfileProps = PropsWithChildren & {
  fullName?: string;
  /** Lands on the trigger button. The menu id is derived as `${id}-menu`. Default `"user-profile"`. */
  id?: string;
  /** Accessible name for the trigger button. Default `"User menu"`. */
  ariaLabel?: string;
};

const UserProfile: React.FC<UserProfileProps> = ({
  fullName,
  children,
  id = "user-profile",
  ariaLabel = "User menu",
}) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);
  const menuId = `${id}-menu`;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MUIStack
        component="button"
        type="button"
        id={id}
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={handleClick}
        width="max-content"
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          background: "none",
          border: "none",
          padding: 0,
          color: "inherit",
          font: "inherit",
          textAlign: "inherit",
          cursor: "pointer",
        }}
      >
        {fullName && (
          <Text
            variant="subtitle1"
            component="h2"
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
        )}
        <MUIAvatar variant="circular-outlined" sx={{ width: 32, height: 32, borderColor: "inherit" }}>
          <UserIcon color="inherit" />
        </MUIAvatar>
        {/* Not IconButton — ButtonBase leaks `role="button"` even with component="span". */}
        <MUIBox
          component="span"
          aria-hidden
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 1,
            borderRadius: 1,
            color: "inherit",
            transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.action.hover,
            },
          }}
        >
          <DownArrowIcon rotation={open ? 180 : undefined} size="sm" color="primary" />
        </MUIBox>
      </MUIStack>
      <MUIMenu
        anchorEl={anchorEl}
        id={menuId}
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
