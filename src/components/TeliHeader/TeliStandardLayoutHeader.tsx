import React from "react";
import TeliHeader from "./TeliHeader";
import TeliBrand, { TeliBrandProps } from "../TeliBrand/TeliBrand";
import AppSwitch, { AppSwitchProps } from "../AppSwitch/AppSwitch";

import "./standard-layout-header.css";

export interface TeliStandardLayoutHeaderProps {
  /**
   * The list of applications to include in the app switcher
   */
  apps?: AppSwitchProps["apps"];
  /**
   * The telicent application name
   */
  appName: TeliBrandProps["appName"];
  /**
   * Has the application moved into its second phase of testing and is ready for external use by customers or clients?
   * @default false
   */
  beta?: TeliBrandProps["beta"];
  /**
   * TeliUserProfile component
   */
  userProfile?: React.ReactNode;
}

const TeliStandardLayoutHeader: React.FC<TeliStandardLayoutHeaderProps> = ({
  apps = [],
  appName,
  beta,
  userProfile = null,
}) => (
  <TeliHeader className="teli-standard-layout-header">
    <TeliBrand appName={appName} beta={beta} />
    <div className="end-adornments">
      <AppSwitch apps={apps} />
      {userProfile}
    </div>
  </TeliHeader>
);

export default TeliStandardLayoutHeader;
