import React from "react";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Icon, { TeliIconProps } from "./Icon";

const ClockRotateLeft: React.FC<Partial<TeliIconProps>> = (props) => (
  <Icon faIcon={faClockRotateLeft} {...props} />
);

export default ClockRotateLeft;
