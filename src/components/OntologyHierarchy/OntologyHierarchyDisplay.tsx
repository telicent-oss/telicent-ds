/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from "react";
import hierarchy from "./data/hierarchy";
import OntologyHierarchy from "./OntologyHierarchy";

const OntologyHierarchyDisplay = (inputs: { instanceId: string }) => {
  const {instanceId} = inputs;
  // Element is the root of everything
  // entire dataset must be passed in.

  return (
    <div className="cMenuDiv relative flex grow flex-col bg-black-100">
      <OntologyHierarchy
        instanceId={instanceId}
        data={hierarchy}
      />
    </div>
  );
};
export default OntologyHierarchyDisplay;
