import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon, { TeliIconProps } from "./Icon";

const TeliAddIcon: React.FC<Partial<TeliIconProps>> = (props) => (
  <Icon faIcon={faPlus} {...props} />
);

export default TeliAddIcon;
