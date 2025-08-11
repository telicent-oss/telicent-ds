import React, { forwardRef } from "react";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import MUIBox from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

type LinkButtonProps = Omit<MUIButtonProps, "variant" | "color">;

const Link = forwardRef<HTMLButtonElement, LinkButtonProps>((buttonProps, ref) => {
  const theme = useTheme();

  return (
    <MUIBox sx={{ width: "fit-content" }}>
      <MUIButton
        ref={ref}
        variant="text"
        color="primary"
        {...buttonProps}
        disableRipple
        sx={{
          minWidth: "fit-content",
          padding: 0,
          ":hover": { backgroundColor: "transparent" },
          ":not(.Mui-disabled):hover + .ButtonLinkLine": {
            opacity: 1,
            width: "100%",
          },
        }}
      >
        {buttonProps.children}
      </MUIButton>
      <MUIBox
        className="ButtonLinkLine"
        borderTop={1.5}
        borderColor={theme.palette.primary.main}
        sx={{
          opacity: 0,
          width: 0,
          marginLeft: "auto",
          marginRight: "auto",
          transitionDuration: "400ms",
          transitionProperty: "width, opacity",
          transitionTimingFunction: "cubic-bezier(0.39, 0.58, 0.57, 1)",
        }}
      />
    </MUIBox>
  );
});

export default Link;
