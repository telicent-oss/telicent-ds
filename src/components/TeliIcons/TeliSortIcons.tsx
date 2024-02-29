import React from "react";
import { faArrowUpAZ, faArrowUpZA } from "@fortawesome/free-solid-svg-icons";
import Icon, { TeliIconProps } from "./Icon";

const TeliSortAZIcon: React.FC<Partial<TeliIconProps>> = (props) => (
  <Icon faIcon={faArrowUpAZ} {...props} />
);

const TeliSortZAIcon: React.FC<Partial<TeliIconProps>> = (props) => (
  <Icon faIcon={faArrowUpZA} {...props} />
);

export { TeliSortAZIcon, TeliSortZAIcon };
