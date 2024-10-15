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
    <div className="start-adornments">
      {/* 
        TODO: Remove isLeftAligned
        WHY: Temporary solution - retained right align if there is no user
             profile to avoid unwanted effects on other apps.
        WHEN user profile has been added to all apps using TeliHeader
        OR   TELFE-706 - TeliHeader will become obsolete once v1 components are
             implemented in Graph.
      */}
      {userProfile && <AppSwitch apps={apps} isLeftAligned />}
    </div>
    <TeliBrand appName={appName} beta={beta} />
    <div className="end-adornments">
      {!userProfile && <AppSwitch apps={apps} />}
      {userProfile}
    </div>
  </TeliHeader>
);

export default TeliStandardLayoutHeader;
