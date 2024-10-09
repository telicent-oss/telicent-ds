import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Icon, { TeliIconProps } from "./Icon";

const TeliCloseIcon: React.FC<Partial<TeliIconProps>> = (props) => (
  <Icon faIcon={faXmark} {...props} />
);

export default TeliCloseIcon;
