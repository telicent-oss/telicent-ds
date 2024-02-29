import React, { ReactNode } from "react";
import { LayoutProviders } from "../../providers";

export type TeliBasicLayoutProps = Partial<{
  children: ReactNode;
}>;

const TeliBasicLayout: React.FC<TeliBasicLayoutProps> = ({ children }) => (
  <LayoutProviders>{children}</LayoutProviders>
);

export default TeliBasicLayout;
