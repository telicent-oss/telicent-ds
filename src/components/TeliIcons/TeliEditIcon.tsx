import React from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Icon, { TeliIconProps } from "./Icon";

const TeliEditIcon: React.FC<Partial<TeliIconProps>> = (props) => (
  <Icon faIcon={faPen} {...props} />
);

export default TeliEditIcon;
