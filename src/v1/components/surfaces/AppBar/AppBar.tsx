import React from "react";
import MUIAppBar, { AppBarProps as MUIAppBarProps } from "@mui/material/AppBar";
import MUIBox from "@mui/material/Box";
import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";
import TelicentBrand from "./TelicentBrand";
import TelicentMark from "../../data-display/Icons/TelicentMark";
import useExtendedTheme from "../../../../hooks/useExtendedTheme";

export type AppBarProps = Partial<{
  appName: string;
  beta: boolean;
  startChild: React.ReactNode;
  endChild: React.ReactNode;
  position: MUIAppBarProps["position"];
  version: string;
  href: string;
  target: React.HTMLAttributeAnchorTarget;
  isElevated: boolean;
  disableBrand: boolean;
}>;

const AppBar: React.FC<AppBarProps> = ({
  appName,
  beta = false,
  position = "relative",
  startChild,
  endChild,
  version,
  isElevated = false,
  disableBrand = false,
  href,
  target = "_blank",
}) => {
  const theme = useExtendedTheme();

  const isInteractive = Boolean(href);

  const linkProps = href
    ? {
        component: "a" as const,
        href,
        target,
        rel: "noopener noreferrer",
      }
    : {
        component: "div" as const,
      };

  return (
    <MUIAppBar
      color="inherit"
      position={position}
      elevation={isElevated ? 4 : 0}
      sx={{
        borderRadius: 0,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "#fff",
      }}
    >
      <MUIBox
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          minHeight: 64,
          px: 2,
        }}
      >
        <MUIBox sx={{ justifySelf: "start", minWidth: 0 }}>{startChild}</MUIBox>

        <MUIStack
          {...linkProps}
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            justifySelf: "center",
            cursor: isInteractive ? "pointer" : "default",
            textDecoration: "none",
            color: "inherit",
            position: "relative",
            minWidth: 0,
          }}
        >
          {!disableBrand && (
            <>
              <TelicentMark fontSize="large" />
              <TelicentBrand />
              {appName && (
                <MUITypography
                  variant="h1"
                  component="span"
                  color="primary"
                  sx={{
                    fontFamily: "Figtree",
                    fontSize: 30,
                    fontWeight: 400,
                    pt: "2px",
                  }}
                >
                  {appName.toUpperCase()}
                </MUITypography>
              )}
              {beta && (
                <MUIBox
                  component="span"
                  sx={{
                    px: 0.75,
                    py: 0.25,
                    borderRadius: 1,
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  BETA
                </MUIBox>
              )}
            </>
          )}

          {version && (
            <MUITypography
              component="span"
              variant="caption"
              sx={{
                color: theme.palette.secondary.contrastText,
                whiteSpace: "nowrap",
              }}
            >
              {version}
            </MUITypography>
          )}
        </MUIStack>

        <MUIBox sx={{ justifySelf: "end", minWidth: 0 }}>{endChild}</MUIBox>
      </MUIBox>
    </MUIAppBar>
  );
};

export default AppBar;
