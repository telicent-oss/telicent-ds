import React from "react";
import zod from "zod";
import MUIMenu from "@mui/material/Menu";
import MUIMenuItem from "@mui/material/MenuItem";

import { Text } from "../Text/Text";
import IconButton from "../../inputs/Button/IconButton";
import GridIcon from "../Icons/GridIcon";
import FlexBox from "../../layout/FlexBox";

export const AppSwitchLibrarySchema = zod.object({
  id: zod.string(),
  name: zod.string(),
  url: zod.string(),
  icon: zod.string(),
});

export type AppSwitchLibraryType = zod.infer<typeof AppSwitchLibrarySchema>[];

const AppSwitch: React.FC<{ apps: AppSwitchLibraryType }> = ({ apps }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="app-switch"
        aria-controls={open ? "app-switch-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="primary"
      >
        <GridIcon />
      </IconButton>
      <MUIMenu
        id="app-switch-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "app-switch-button",
        }}
      >
        {apps.map((app, index) => {
          const validateAppsSchema = AppSwitchLibrarySchema.safeParse(app);

          if (!validateAppsSchema.success) {
            const formattedErrors = validateAppsSchema.error.issues.map(
              (issue) => {
                return `${issue.path.toString().replace(",", " > ")}: ${issue.message}`;
              }
            );
            const errorMsg = formattedErrors.join("\n");
            return (
              <FlexBox key={errorMsg} role="menuitem">
                <Text>
                  Misconfiguration error: App Switch library{" "}
                  {app?.id ? `for id ${app.id}` : `at index ${index}`}
                </Text>
                <Text>{errorMsg}</Text>
              </FlexBox>
            );
          }

          return (
            <MUIMenuItem key={app.id} onClick={handleClose}>
              <a
                href={app.url}
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  rowGap: 4,
                  width: "100%"
                }}
              >
                <img
                  src={app.icon}
                  alt={`${app.name} icon`}
                  css={{ width: 25, height: 25 }}
                />
                {app.name}
              </a>
            </MUIMenuItem>
          );
        })}
      </MUIMenu>
    </div>
  );
};

export default AppSwitch;
