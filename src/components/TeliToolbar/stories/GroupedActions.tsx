import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faMap } from "@fortawesome/free-solid-svg-icons";

import TeliBasicMenu from "../../TeliMenu/TeliBasicMenu";
import TeliSwitch from "../../TeliSwitch/TeliSwitch";
import { ToolbarStory } from "../TeliToolbar.stories";
import TeliToolbar from "../TeliToolbar";

const GroupedActionsExample = () => {
  const [showHeat, setShowHeat] = useState(true);
  const [showFloodStations, setShowFloodStations] = useState(false);

  const toggleHeat = () => {
    setShowHeat((prev) => !prev);
  };

  const toggleFloodStations = () => {
    setShowFloodStations((prev) => !prev);
  };

  return (
    <TeliToolbar>
      <TeliBasicMenu
        label={<FontAwesomeIcon icon={faMap} />}
        tooltip="Map styles"
        variant="basic"
        yPlacement="top"
        menuItems={[
          { id: "Dark", label: "Dark" },
          { id: "Satellite", label: "Satellite" },
        ]}
      />
      <TeliBasicMenu
        label={<FontAwesomeIcon icon={faLayerGroup} />}
        tooltip="Map layers"
        variant="basic"
        yPlacement="top"
        menuItems={[
          {
            id: "Tools",
            label: (
              <TeliSwitch
                id="flood-stations-toggle-switch"
                label="Flood stations"
                labelPlacement="start"
                edge="end"
                size="small"
                checked={showFloodStations}
                onChange={toggleFloodStations}
              />
            ),
          },
          {
            id: "Heatmap",
            label: (
              <TeliSwitch
                id="heatmap-toggle-switch"
                label="Heatmap"
                labelPlacement="start"
                edge="end"
                size="small"
                checked={showHeat}
                onChange={toggleHeat}
              />
            ),
          },
        ]}
      />
    </TeliToolbar>
  );
};

const GroupedActions: ToolbarStory = {
  render: () => <GroupedActionsExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Similar actions can be grouped together to reduce visual clutter.",
      },
      source: {
        code: `
<TeliToolbar>
  <TeliBasicMenu
    label={<FontAwesomeIcon icon={faMap} />}
    tooltip="Map styles"
    variant="basic"
    yPlacement="top"
    menuItems={[
      { id: "Dark", children: "Dark" },
      { id: "Satellite", children: "Satellite" },
    ]}
  />
  <TeliBasicMenu
    label={<FontAwesomeIcon icon={faLayerGroup} />}
    tooltip="Map layers"
    variant="basic"
    yPlacement="top"
    menuItems={[
      {
        id: "Tools",
        children: (
          <TeliSwitch
            id="flood-areas-toggle-switch"
            label="Flood areas"
            switchPosition="end"
            className="ml-auto"
            checked={showHeat}
            onChange={toggleHeat}
          />
        ),
      },
      {
        id: "Heatmap",
        children: (
          <TeliSwitch
            id="heatmap-toggle-switch"
            label="Heatmap"
            switchPosition="end"
            className="ml-auto"
            checked={showHeat}
            onChange={toggleHeat}
          />
        ),
      },
    ]}
  />
</TeliToolbar>
      `,
      },
    },
  },
};

export default GroupedActions;
