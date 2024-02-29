import React from "react";
import { MenuItem } from "./TeliBasicMenu";
import { MenuItem as MUIMenuItem, MenuList } from "@mui/material";

interface TeliMenuProps1 {
  buttonId?: any;
  children?: React.ReactNode;
  emptyMessage?: string;
  listId?: any;
  menuItems?: MenuItem[];
  open?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  onMenuItemClick: (
    onClick?: (event?: Event | React.SyntheticEvent) => void
  ) => (event: Event | React.SyntheticEvent) => void;
}

const BasicMenuContents: React.FC<TeliMenuProps1> = ({
  buttonId,
  listId,
  emptyMessage = "Nothing found",
  menuItems = [],
  open,
  onKeyDown,
  onMenuItemClick,
  children,
}) => {
  if (children || menuItems?.length > 0) {
    return (
      <>
        {children && <div className="teli-menu-contents">{children}</div>}
        {menuItems?.length > 0 && (
          <MenuList
            autoFocusItem={open}
            id={listId}
            aria-labelledby={buttonId}
            onKeyDown={onKeyDown}
          >
            {menuItems.map((item) => (
              <MUIMenuItem
                key={item.id}
                onClick={onMenuItemClick(item.onClick)}
              >
                {item?.startIcon}
                {item?.label}
                {item?.endIcon}
              </MUIMenuItem>
            ))}
          </MenuList>
        )}
      </>
    );
  }

  return (
    <p className="teli-menu-contents teli-empty-menu-contents">
      {emptyMessage}
    </p>
  );
};

export default BasicMenuContents;
