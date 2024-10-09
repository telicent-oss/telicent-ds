import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Icon, { TeliIconProps } from "./Icon";

const TeliSearchIcon: React.FC<Partial<TeliIconProps>> = (props) => (
  <Icon faIcon={faMagnifyingGlass} {...props} />
);

export default TeliSearchIcon;
