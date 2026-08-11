import React, { PropsWithChildren, useState } from "react";

import IconButton from "../../buttons/Button/IconButton";
import { Box } from "../../layout/Box/Box";
import PopOver from "../../surfaces/PopOver/Popover";
import InfoIcon from "../Icons/InfoIcon";

export type AppInfoProps = PropsWithChildren<{
  id?: string;
  ariaLabel?: string;
}>;

const AppInfo: React.FC<AppInfoProps> = ({
  id = "app-info",
  ariaLabel = "App information",
  children,
}) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

  return (
    <>
      <IconButton
        id={`${id}-trigger`}
        aria-label={ariaLabel}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={(e) => setAnchor(e.currentTarget)}
        color="inherit"
        size="large"
      >
        <InfoIcon fontSize="medium" sx={{ fontSize: 24 }} />
      </IconButton>

      <PopOver
        id={`${id}-popover`}
        open={open}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        width={240}
      >
        <Box
          role="dialog"
          aria-label={ariaLabel}
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          {children}
        </Box>
      </PopOver>
    </>
  );
};

export default AppInfo;
