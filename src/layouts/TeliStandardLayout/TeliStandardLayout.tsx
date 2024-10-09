import React from "react";
import classNames from "classnames";

import TeliStandardLayoutHeader, {
  TeliStandardLayoutHeaderProps,
} from "../../components/TeliHeader/TeliStandardLayoutHeader";
import { LayoutProviders } from "../../providers";

import "../layout.css";

type MainProps = JSX.IntrinsicElements["main"];
export type TeliStandardLayoutProps = TeliStandardLayoutHeaderProps & MainProps;

const TeliStandardLayout: React.FC<TeliStandardLayoutProps> = ({
  appName,
  beta,
  apps,
  userProfile,
  className: mainClassName,
  children,
  ...mainProps
}) => (
  <LayoutProviders>
    <TeliStandardLayoutHeader
      appName={appName}
      beta={beta}
      apps={apps}
      userProfile={userProfile}
    />
    <main
      className={classNames(
        "relative layout-content w-full p-2",
        mainClassName
      )}
      {...mainProps}
    >
      {children}
    </main>
  </LayoutProviders>
);

export default TeliStandardLayout;
