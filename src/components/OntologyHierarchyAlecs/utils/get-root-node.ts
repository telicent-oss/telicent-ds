import { HierarchyNode } from "d3";
import { EnrichedData } from "./render-hierarchy-tree";

type GetRootNodeOptions = Partial<{
  baseNode: string;
  filterIds: string[];
}>;

const getRootNode = (
  hierarchyData: HierarchyNode<EnrichedData>,
  options: GetRootNodeOptions = {}
) => {
  if (options.baseNode && options.filterIds) {
    console.error(
      "Telicent-DS: OntologyHierarchy component has baseKey and filterIds. Please use one or the other."
    );
    return hierarchyData;
  }

  if (options.baseNode) {
    const baseRootNode = hierarchyData
      .descendants()
      .find((node) => node.data.id === options.baseNode);
    if (baseRootNode) return baseRootNode;

    console.error(`Base node ${options.baseNode} not found in data provided.`);
    return hierarchyData;
  }

  if (options.filterIds) {
    // filterIds filters the data to only include to only show roots of ids provided
    const filteredData: string[] = [];
    // can only do one or the other, baseKey defaults to priority
    options.filterIds.forEach((d) => {
      const filterIdNode = hierarchyData.descendants().find((f) => f.data.id === d);
      if (!filterIdNode) {
        // console.error(`no matching id for filterId: ${d}`)
      } else {
        // add ancestors (which includes this node) to filteredData if not there already
        filterIdNode.ancestors().forEach((a) => {
          if (!filteredData.some((s) => s === a.data.id)) {
            filteredData.push(a.data.id || "");
          }
        });
      }
    });
    hierarchyData.descendants().forEach((d) => {
      if (d.children) {
        d.children = d.children.filter((f) => filteredData.includes(f.data.id || ""));
        if (d.children.length === 0) {
          // reset 0 length to undefined so tree works as anticipated
          d.children = undefined;
        }
      }
    });

    return hierarchyData;
  }

  return hierarchyData;
};

export default getRootNode;
