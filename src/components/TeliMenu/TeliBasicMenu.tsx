import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  Paper,
  Popper,
} from "@mui/material";
import classNames from "classnames";
import { PopperPlacementType } from "@mui/base";

import TeliButton from "../TeliButton/TeliButton";
import BasicMenuContents from "./BasicMenuContents";
import "./telibasicmenu.css";

export interface MenuItem {
  id: string;
  onClick?: (event?: Event | React.SyntheticEvent) => void;
  label?: string | React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export interface TeliBasicMenuProps {
  /**
   * The id of the Button element.
   */
  buttonId?: string;
  /**
   * The menu contents.
   */
  children?: React.ReactNode;
  /**
   * If true, the component is initially open. Use when the component open state
   * is not controlled (i.e. the open prop is not defined).
   */
  defaultOpen?: boolean;
  /** If true, the component will be displayed in a disabled state */
  disabled?: boolean;
  /**
   * The message to be displayed when menu items are empty.
   */
  emptyMessage?: string;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * The id of the MenuList component.
   */
  listId?: string;
  /**
   * The content of the Button component.
   */
  label: string | React.ReactNode;
  /**
   * Menu content items.
   */
  menuItems?: MenuItem[];
  /**
   * If true, the menu component will be shown.
   */
  open?: boolean;
  /**
   * Callback fired when the component requests to be opened. Use it for
   * controlled mode.
   */
  onOpen?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Callback fired when the component requests to be closed. Use it for
   * controlled mode.
   */
  onClose?: (event: MouseEvent | TouchEvent) => void;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * Tooltip contents refer to [Button component](/?path=/docs/components-telibutton--docs).
   */
  tooltip?: string;
  /**
   * The variant to use.
   */
  variant?: "tertiary" | "basic";
  /**
   * Width of the menu component.
   */
  width?: number;
  /**
   * Vertical menu placement.
   */
  xPlacement?: PopperPlacementType;
  /**
   * Horizontal menu placement.
   */
  yPlacement?: PopperPlacementType;
}

const TeliBasicMenu: React.FC<TeliBasicMenuProps> = ({
  buttonId,
  label,
  listId,
  menuItems = [],
  defaultOpen = false,
  disabled = false,
  emptyMessage,
  open,
  tooltip,
  startIcon,
  endIcon,
  width,
  variant = "tertiary",
  yPlacement = "bottom",
  xPlacement = yPlacement,
  onOpen,
  onClose,
  children,
}) => {
  const { current: isMenuControlled } = useRef(open !== undefined);
  const [isOpen, setIsOpen] = useState(false);
  const isMenuOpen = isMenuControlled ? open : isOpen;
  const anchorRef = useRef<HTMLButtonElement>(null);
  const prevOpen = useRef(isMenuOpen);

  const setValueIfUncontrolled = useCallback((newValue: boolean) => {
    if (!isMenuControlled) {
      setIsOpen(newValue);
    }
  }, []);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setValueIfUncontrolled(false);
  };

  const handleMenuItemClick =
    (onMenuItemClick?: (event?: Event | React.SyntheticEvent) => void) =>
    (event: Event | React.SyntheticEvent) => {
      if (onMenuItemClick) {
        onMenuItemClick();
      }
      handleClose(event);
    };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setValueIfUncontrolled(false);
    } else if (event.key === "Escape") {
      setValueIfUncontrolled(false);
    }
  };

  useEffect(() => {
    prevOpen.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    if (defaultOpen) {
      setValueIfUncontrolled(true);
    }
  }, []);

  useEffect(() => {
    if (disabled && isMenuOpen) {
      setIsOpen(false);
      return;
    }
  }, [disabled]);

  return (
    <div className="teli-basic-menu">
      <TeliButton
        ref={anchorRef}
        id={buttonId}
        variant={variant}
        tooltip={tooltip}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        aria-controls={isMenuOpen ? "composition-menu" : undefined}
        aria-expanded={isMenuOpen ? "true" : undefined}
        aria-haspopup="true"
        onClick={onOpen ?? handleToggle}
        className={classNames({
          "bg-teli-black-600": isMenuOpen,
        })}
      >
        {label}
      </TeliButton>
      <Popper
        transition
        disablePortal
        open={isMenuOpen ?? defaultOpen}
        anchorEl={anchorRef.current}
        placement={yPlacement}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
        ]}
        sx={{ width }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: xPlacement ?? placement,
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={onClose ?? handleClose}>
                <div>
                  <BasicMenuContents
                    open={isMenuOpen ?? defaultOpen}
                    menuItems={menuItems}
                    emptyMessage={emptyMessage}
                    buttonId={buttonId}
                    listId={listId}
                    onKeyDown={handleListKeyDown}
                    onMenuItemClick={handleMenuItemClick}
                  >
                    {children}
                  </BasicMenuContents>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default TeliBasicMenu;
