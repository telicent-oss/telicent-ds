import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Icon, { TeliIconProps } from "./Icon";

const TeliDeleteIcon: React.FC<Partial<TeliIconProps>> = (props) => (
  <Icon faIcon={faTrash} {...props} />
);

export default TeliDeleteIcon;
