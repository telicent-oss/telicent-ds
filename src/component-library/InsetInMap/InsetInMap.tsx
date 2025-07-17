import React from "react";
import {
  workspace,
} from "./components/components";
import { BoxProps } from "@mui/material";

const { Background, Content, ControlArea } = workspace;

// TODO don't limit to Div
export type Scrollable = HTMLDivElement | (Window & typeof globalThis);

type RootPropsType = Omit<BoxProps, 'children' | 'content'>;

export const InsetInMap: React.FC<RootPropsType & {
  content: React.ReactNode;
  controlArea: {
    left: React.ReactNode;
    topRight: React.ReactNode;
    bottomRight: React.ReactNode;
  };
}>  = ({ content, controlArea: { left, topRight, bottomRight }, sx, ...rest}) => {
  return (
    <Background sx={sx} {...rest}>
      <Content>{content}</Content>
      <ControlArea position="left">{left}</ControlArea>
      <ControlArea position="top-right">{topRight}</ControlArea>
      <ControlArea position="bottom-right">{bottomRight}</ControlArea>
    </Background>
  );
};
