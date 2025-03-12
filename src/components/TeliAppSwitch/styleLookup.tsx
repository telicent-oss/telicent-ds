import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNodes,
  faLayerGroup,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { TeliSearchIcon } from "../TeliIcons";

interface IAppLookUp {
  icon: React.ReactNode;
  colour: string;
}

const styleLookUp: Record<string, IAppLookUp> = {
  graph: {
    icon: <FontAwesomeIcon icon={faCircleNodes} />,
    colour: "text-graph-app-color",
  },
  geo: {
    icon: <FontAwesomeIcon icon={faMapLocationDot} />,
    colour: "text-geo-app-color",
  },
  live: {
    icon: <i className="ri-pulse-line" />,
    colour: "text-admin-app-color",
  },
  search: {
    icon: <TeliSearchIcon />,
    colour: "text-document-app-color",
  },
  paralog: {
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
    colour: "text-geo-app-color",
  },
};

export default styleLookUp;
