import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import OntologyHierarchy from "./OntologyHierarchy";
import hierarchy from "./data/hierarchy";
/**
This is a simple hierarchy menu which features in the telicent-ontology-app.

There are 2 required props:

 - **instanceId**: must be unique within the parent app
 - **data**: complete hierarchical dataset

 Optional props are:
  - **descendantCount**: defaults to false, pass in true and it won't be shown
 - **isDraggable + dragEvent**: if isDraggable, dragEvent will trigger on drag
 - **isClickable + clickEvent**: if isClickable, clickEvent will trigger on click
 - **baseKey**: if you pass in an id which is included in the dataset, the component will reset the data and use this as the base
 - **filterIds**: an array of ids.  Data will be filtered to show only these ids (if valid) and their ancestors, ids will be highlighted
 - **expandAll**: defaults to false, pass in true and the hierarchy will be fully expanded - only advised with small datasets or in conjunction with baseKey or filterIds
 - **expandElement**: custom expand for IES ontology data - will only expand if Element is at depth 0 or 1


 **NB**: baseKey + filterIds cannot be used together - baseKey takes priority, filterIds will be ignored if both provided
 **NB**: expandAll + expandElement cannot be used together - expandAll takes priority, expandElement will be ignored if both provided

 */
const meta = {
  component: OntologyHierarchy,
  decorators: [(Story) => (
    <div className="cMenuDiv relative flex grow flex-col bg-black-100"><Story/></div>)],
} satisfies Meta<typeof OntologyHierarchy>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  args: {
    instanceId: "example",
    data: hierarchy
  },
};

export const Draggable: Story = {
  args: {
    instanceId: "example",
    data: hierarchy,
    isDraggable: true,
    dragEvent: (event: React.DragEvent<HTMLElement>, nodeType: string) => {console.log(`dragging${nodeType}`)}
  },
};

export const ExpandElement: Story = {
  args: {
    instanceId: "expandElement",
    data: hierarchy,
    expandElement: true
  },
};


export const BaseKeyAndExpandAll: Story = {
  args: {
    instanceId: "example",
    data: hierarchy,
    expandAll: true,
    baseKey: "http://ies.data.gov.uk/ontology/ies4#Account"
  },
};

export const NoDescendantCount: Story = {
  args: {
    instanceId: "example",
    data: hierarchy,
    descendantCount: false
  },
};

export const FilterIdsAndClickableAndExpandAll: Story = {
  args: {
    instanceId: "example",
    data: hierarchy,
    isClickable: true,
    clickEvent: (nodeId: string) => {console.log(`clicking${nodeId}`)},
    expandAll: true,
    filterIds: [
      "fakeFilterId",
      "http://ies.data.gov.uk/ontology/ies4#Entity",
      "http://ies.data.gov.uk/ontology/ies4#Crossing",
      "http://ies.data.gov.uk/ontology/ies4#MobileTelephoneAccount",
      "http://ies.data.gov.uk/ontology/ies4#WebResource",
      "http://ies.data.gov.uk/ontology/ies4#PeriodOfTime",
      "http://ies.data.gov.uk/ontology/ies4#SystemState"
    ]
  }
}
