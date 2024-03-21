/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import hierarchy from "./data/hierarchy";
import OntologyHierarchy from "./OntologyHierarchy";

const OntologyHierarchyDisplay = (inputs: { instanceId: string }) => {
  const { instanceId } = inputs;
  // Element is the root of everything
  // entire dataset must be passed in.

  const [data, setData] = useState<string>();

  const handleDrag = (nodeId: string) => {
    setData(nodeId);
    // console.log("My test", nodeId);
  };

  console.log({ data });

  return (
    <div className="cMenuDiv relative flex grow flex-col bg-black-100">
      <OntologyHierarchy
        instanceId={instanceId}
        data={hierarchy}
        // expandElement
        clickEvent={handleDrag}
        isClickable
        // baseKey="http://ies.data.gov.uk/ontology/ies4#Element"
        filterIds={[
            "http://ies.data.gov.uk/ontology/ies4#RealEstate",
            "http://ies.data.gov.uk/ontology/ies4#RealEstate",
            "http://ies.data.gov.uk/ontology/ies4#State",
            "http://ies.data.gov.uk/ontology/ies4#AccountState",
            "http://ies.data.gov.uk/ontology/ies4#OnlineAccountState",
            "http://ies.data.gov.uk/ontology/ies4#CommunicationsAccountState",
            "http://ies.data.gov.uk/ontology/ies4#AssetState",
            "http://ies.data.gov.uk/ontology/ies4#DeviceState",
            "http://ies.data.gov.uk/ontology/ies4#RealEstate",
            "http://ies.data.gov.uk/ontology/ies4#VehicleState",
            "http://ies.data.gov.uk/ontology/ies4#VesselState",
            "http://ies.data.gov.uk/ontology/ies4#ActorState",
            "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState",
            "http://ies.data.gov.uk/ontology/ies4#PersonState",
            "http://ies.data.gov.uk/ontology/ies4#BirthState",
            "http://ies.data.gov.uk/ontology/ies4#DeathState",
            "http://ies.data.gov.uk/ontology/ies4#OrganisationState",
            "http://ies.data.gov.uk/ontology/ies4#PostState",
            "http://ies.data.gov.uk/ontology/ies4#SystemState",
            "http://ies.data.gov.uk/ontology/ies4#ContinuousState",
            "http://ies.data.gov.uk/ontology/ies4#BoundingState",
            "http://ies.data.gov.uk/ontology/ies4#BirthState",
            "http://ies.data.gov.uk/ontology/ies4#DeathState",
            "http://ies.data.gov.uk/ontology/ies4#DiscontinuousState",
            "http://ies.data.gov.uk/ontology/ies4#WebResourceState",
            "http://ies.data.gov.uk/ontology/ies4#LocationState",
            "http://ies.data.gov.uk/ontology/ies4#RealEstate",
            "http://ies.data.gov.uk/ontology/ies4#EventState",
            "http://ies.data.gov.uk/ontology/ies4#ReligionState",
            "http://ies.data.gov.uk/ontology/ies4#ClassOfState",
            "http://ies.data.gov.uk/ontology/ies4#ClassOfResponsibleActorState",
            "http://ies.data.gov.uk/ontology/ies4#ClassOfPersonState"
        ]}
      />
    </div>
  );
};
export default OntologyHierarchyDisplay;
