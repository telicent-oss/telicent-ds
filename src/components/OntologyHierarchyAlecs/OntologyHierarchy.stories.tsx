import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import OntologyHierarchy from "./OntologyHierarchy";
import hierarchy from "./data/hierarchy";

const meta = {
  component: OntologyHierarchy,
  decorators: [(Story) => (<div className="cMenuDiv relative flex grow flex-col bg-black-100"><Story/></div>)],
} satisfies Meta<typeof OntologyHierarchy>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  args: {
    instanceId: "example",
    data: hierarchy
  },
};

export const ExpandElement: Story = {
  args: {
    instanceId: "expandElement",
    data: hierarchy,
    expandElement: true
  },
};

export const Draggable: Story = {
  args: {
    instanceId: "example",
    data: hierarchy,
    isDraggable: true,
    dragEvent: (event: React.DragEvent<HTMLElement>, nodeType: string) => {console.log(event, nodeType)}
  },
};



export const BaseKey: Story = {
  args: {
    instanceId: "example",
    data: hierarchy,
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

export const FilterIdsAndClickable: Story = {
  args: {
    instanceId: "example",
    data: hierarchy,
    isClickable: true,
    clickEvent: (nodeId: string) => {console.log(nodeId)},
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
