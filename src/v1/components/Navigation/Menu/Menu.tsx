import * as React from "react";
import MUIMenu from "@mui/material/Menu";
import MUIMenuItem from "@mui/material/MenuItem";
import MUIDivider from "@mui/material/Divider";
import MUIListItemIcon from "@mui/material/ListItemIcon";
import MUIListItemText from "@mui/material/ListItemText";

export type MenuOption = {
  id: string;
  label: React.ReactNode;
  onClick?: () => void;

  disabled?: boolean;
  icon?: React.ReactNode;

  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  dividerAbove?: boolean;
  selected?: boolean;
};

type MenuProps = {
  "aria-label"?: string;

  button: (props: {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    "aria-controls": string | undefined;
    "aria-haspopup": true;
    "aria-expanded": boolean | undefined;
  }) => React.ReactNode;

  options: MenuOption[];

  onSelect?: (option: MenuOption) => void;
  onOpenChange?: (open: boolean) => void;

  menuId?: string;
  anchorOrigin?: React.ComponentProps<typeof MUIMenu>["anchorOrigin"];
  transformOrigin?: React.ComponentProps<typeof MUIMenu>["transformOrigin"];
  autoFocusSelected?: boolean;
};

export const Menu: React.FC<MenuProps> = ({
  "aria-label": ariaLabel,
  button,
  options,
  onSelect,
  onOpenChange,
  menuId = "menu",
  anchorOrigin = { vertical: "bottom", horizontal: "right" },
  transformOrigin = { vertical: "top", horizontal: "right" },
  autoFocusSelected = true,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const selectedIndex = React.useMemo(() => options.findIndex((o) => o.selected), [options]);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    onOpenChange?.(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onOpenChange?.(false);
  };

  const ariaControls = open ? menuId : undefined;

  return (
    <>
      {button({
        onClick: handleOpen,
        "aria-controls": ariaControls,
        "aria-haspopup": true,
        "aria-expanded": open ? true : undefined,
      })}

      <MUIMenu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        MenuListProps={{
          "aria-label": ariaLabel,
          ...(autoFocusSelected && selectedIndex >= 0 ? { autoFocusItem: true } : {}),
        }}
      >
        {options.map((opt, idx) => (
          <React.Fragment key={opt.id}>
            {opt.dividerAbove && <MUIDivider />}
            <MUIMenuItem
              disabled={opt.disabled}
              selected={Boolean(opt.selected)}
              autoFocus={autoFocusSelected && idx === selectedIndex}
              aria-selected={opt.selected ? "true" : undefined}
              onClick={() => {
                if (opt.href) window.open(opt.href, opt.target ?? "_self");

                opt.onClick?.();
                onSelect?.(opt);
                handleClose();
              }}
            >
              {opt.icon ? <MUIListItemIcon>{opt.icon}</MUIListItemIcon> : null}
              <MUIListItemText>{opt.label}</MUIListItemText>
            </MUIMenuItem>
          </React.Fragment>
        ))}
      </MUIMenu>
    </>
  );
};
