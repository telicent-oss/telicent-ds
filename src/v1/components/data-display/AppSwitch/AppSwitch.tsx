import React from "react";
import zod from "zod";
import MUIMenu from "@mui/material/Menu";
import MUIMenuItem from "@mui/material/MenuItem";

import { Text } from "../Text/Text";
import IconButton from "../../inputs/Button/IconButton";
import GridIcon from "../Icons/GridIcon";
import FlexBox from "../../layout/FlexBox";
import MUITypography from "@mui/material/Typography";
import MUIListItemIcon from "@mui/material/ListItemIcon";
import MUIListItemText from "@mui/material/ListItemText";
import { useExtendedTheme } from "../../../../export";

export const AppSwitchLibrarySchema = zod.object({
  id: zod.string(),
  name: zod.string(),
  url: zod.string(),
  icon: zod.string(),
});

export type AppSwitchLibraryType = zod.infer<typeof AppSwitchLibrarySchema>[];

const AppSwitch: React.FC<{ apps: AppSwitchLibraryType }> = ({ apps }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useExtendedTheme();
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
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#ffffff",
          },
        }}
      >
        {apps.map((app, index) => {
          const validateAppsSchema = AppSwitchLibrarySchema.safeParse(app);

          if (!validateAppsSchema.success) {
            const formattedErrors = validateAppsSchema.error.issues.map((issue) => {
              return `${issue.path.toString().replace(",", " > ")}: ${issue.message}`;
            });
            const errorMsg = formattedErrors.join("\n");
            return (
              <FlexBox key={errorMsg} role="menuitem">
                <Text>
                  Misconfiguration error: App Switch library {app?.id ? `for id ${app.id}` : `at index ${index}`}
                </Text>
                <Text>{errorMsg}</Text>
              </FlexBox>
            );
          }

          return (
            <MUIMenuItem
              key={app.id}
              onClick={() => {
                window.open(app.url, "_blank");
                handleClose();
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                marginX: 1,
                borderRadius: "4px",
                border: "1px solid rgba(0, 0, 0, 0)",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark" ? theme.palette.background.default : "rgba(0, 0, 0, 0.04)",
                  border: `1px solid ${theme.palette.primary.main}`,
                },
              }}
            >
              <MUIListItemIcon>
                <img src={app.icon} alt={`${app.name} icon`} css={{ width: 25, height: 25 }} />
              </MUIListItemIcon>
              <MUIListItemText>
                <MUITypography
                  variant="h1"
                  sx={{
                    marginTop: 0.5,
                    fontFamily: "Figtree",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "primary",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {app.name.toUpperCase()}
                </MUITypography>
              </MUIListItemText>
            </MUIMenuItem>
          );
        })}
      </MUIMenu>
    </div>
  );
};

export default AppSwitch;
