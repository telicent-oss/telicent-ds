import React from "react";

type NavProps = JSX.IntrinsicElements["nav"];

export interface TeliHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  children?: React.ReactNode;
  /**
   * Attributes to add to the nav component
   */
  navProps?: NavProps;
}

/**
 * @deprecated TeliHeader is deprecated and will be removed in a future release.
 */
const TeliHeader: React.FC<TeliHeaderProps> = ({ navProps, children, ...headerProps }: TeliHeaderProps) => {
  console.warn("TeliHeader is deprecated and will be removed in a future release.");
  return (
    <header {...headerProps}>
      <nav {...navProps}>{children}</nav>
    </header>
  );
};

export default TeliHeader;
