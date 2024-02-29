import React from "react";

type NavProps = JSX.IntrinsicElements["nav"];

export interface TeliHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  children?: React.ReactNode;
  /**
   * Attributes to add to the nav component
   */
  navProps?: NavProps;
}

const TeliHeader: React.FC<TeliHeaderProps> = ({
  navProps,
  children,
  ...headerProps
}: TeliHeaderProps) => (
  <header {...headerProps}>
    <nav {...navProps}>{children}</nav>
  </header>
);

export default TeliHeader;
