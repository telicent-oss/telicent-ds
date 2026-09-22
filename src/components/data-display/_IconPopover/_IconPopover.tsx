import React, { PropsWithChildren, useState } from "react";

import IconButton from "../../buttons/Button/IconButton";
import { Box } from "../../layout/Box/Box";
import PopOver from "../../surfaces/PopOver/Popover";

// Private DS-internal composition shared by AppInfo and AppSettings. Kept out of
// the public barrel deliberately — the intent-bearing wrappers (`AppInfo`,
// `AppSettings`) are what apps import. If a third consumer emerges, revisit
// whether to promote this into the public surface (see doc/proposals notes).

export type IconPopoverProps = PropsWithChildren<{
  id: string;
  ariaLabel: string;
  icon: React.ReactNode;
  width?: number;
}>;

const IconPopover: React.FC<IconPopoverProps> = ({
  id,
  ariaLabel,
  icon,
  width = 240,
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
        {icon}
      </IconButton>

      <PopOver
        id={`${id}-popover`}
        open={open}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box
          role="dialog"
          aria-label={ariaLabel}
          sx={{ display: "flex", flexDirection: "column", gap: 1, padding: 2, width }}
        >
          {children}
        </Box>
      </PopOver>
    </>
  );
};

export default IconPopover;
