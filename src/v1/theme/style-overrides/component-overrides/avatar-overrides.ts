import { ThemeOptions } from "@mui/material";
import { common } from "@mui/material/colors";

declare module "@mui/material/Avatar" {
  interface AvatarPropsVariantOverrides {
    "circular-outlined": true;
  }
}

const AVATAR_OVERRIDES: ThemeOptions["components"] = {
  MuiAvatar: {
    variants: [
      {
        props: { variant: "circular-outlined" },
        style: ({ theme }) => {
          const color =
            theme.palette.primary.main === common.white
              ? theme.palette.primary.contrastText
              : theme.palette.primary.main;

          return {
            backgroundColor: "transparent",
            border: `2px solid ${color}`,
            color,
          };
        },
      },
    ],
  },
};

export default AVATAR_OVERRIDES;
