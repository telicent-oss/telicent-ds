import { ThemeOptions } from "@mui/material";

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
        style: ({ theme }) => ({
          backgroundColor: "transparent",
          border: `2px solid ${theme.palette.primary.main}`,
        }),
      },
    ],
  },
};

export default AVATAR_OVERRIDES;
