import React, { useState, FC } from "react";
import classNames from "classnames";
import styleLookUp from "./styleLookup";
import { TeliMenu } from "../TeliMenu/TeliMenu";

export interface IApps {
  name: string;
  url: string;
}

export interface AppSwitchProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The list of applications to include in the app switcher
   * @default []
   */
  apps?: IApps[];
  className?: string;
}

interface AppIconProps extends IApps {
  icon: React.ReactNode;
  colour: string;
}

const AppSwitch: FC<AppSwitchProps> = ({ apps, ...otherProps }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  if (!apps || apps.length === 0) return null;

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const filteredApps = apps.filter(
    (app) => app.url !== undefined && app.url !== null && app.url.trim() !== ""
  );

  return (
    <>
      <button
        aria-label="apps"
        type="button"
        onClick={handleClick}
        title="apps"
        className={classNames(
          "flex justify-center items-center w-10 h-10 rounded-full hover:bg-black-400 ",
          {
            "bg-black-400 cursor-pointer": isOpen,
          }
        )}
        {...otherProps}
      >
        <i className="ri-layout-grid-2-fill" />
      </button>
      <TeliMenu
        id="appswitch-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        style={{ transform: "translateX(10px)" }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#272727",
              transform: "translateY(-50%) translateX(20%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {filteredApps.map((app) => (
          <AppIcon
            key={app.name}
            name={app.name}
            colour={styleLookUp[app.name.toLowerCase()]?.colour}
            icon={styleLookUp[app.name.toLowerCase()]?.icon}
            url={app.url}
          />
        ))}
      </TeliMenu>
    </>
  );
};

const AppIcon: FC<AppIconProps> = ({ name, colour, icon, url }) => (
  <div className="w-full px-3 py-2 hover:bg-black-100">
    <a title={name.toLowerCase()} href={url} target="_blank">
      <div
        className={classNames(
          "flex flex-col justify-center items-center",
          colour
        )}
      >
        {icon}
        <p className="text-base text-center self-center">
          {name.toLowerCase()}
        </p>
      </div>
    </a>
  </div>
);

export default AppSwitch;
