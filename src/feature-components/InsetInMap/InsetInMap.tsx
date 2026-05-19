import React from "react";
import {
  workspace,
} from "./components/components";
export {
  workspace as insetInMap,
} from "./components/components";
import { BoxProps } from "@mui/material";

const { Background, Content, ControlArea } = workspace;

// TODO don't limit to Div
export type Scrollable = HTMLDivElement | (Window & typeof globalThis);

export type Position =
  | "topLeft"
  | "top"
  | "topRight"
  | "right"
  | "bottomRight"
  | "bottom"
  | "bottomLeft"
  | "left"
  | "center";

type RootPropsType = Omit<BoxProps, 'children' | 'content'>;

export const InsetInMap: React.FC<RootPropsType & {
  content: React.ReactNode;
  children?: React.ReactNode;
  controlArea?: Partial<Record<Position, React.ReactNode>>;
}> = ({ content, controlArea = {}, sx, children, ...rest }) => {
  return (
    <Background sx={sx} {...rest}>
      <Content>{content}</Content>
      {(Object.entries(controlArea) as [Position, React.ReactNode][]).map(([position, node]) => (
        <ControlArea position={position} key={position}>
          {node}
        </ControlArea>
      ))}
      {children}
    </Background>
  );
};
