import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { HierarchyNode, hierarchy } from "d3";
import { IconStyle } from "../../contexts/OntologyStyles";
import renderHierarchyTree, { EnrichedData, onDragEnd } from "./utils/render-hierarchy-tree";
import getRootNode from "./utils/get-root-node";

export interface OntologyInputHierarchy {
  name: string;
  id: string;
  ontology: IconStyle;
  children?: OntologyInputHierarchy[];
}
export interface OntologyHierarchyProps {
  instanceId: string;
  data: OntologyInputHierarchy;
  expandElement?: boolean;
  collapseUri?: string;
  isDraggable?: boolean;
  isClickable?: boolean;
  dragEvent?: (event: React.DragEvent<HTMLElement>, nodeType: string) => void;
  clickEvent?: (nodeId: string) => void;
  filterIds?: string[];
  baseKey?: string;
  descendantCount?: boolean;
  expanded?: string[];
}

const OntologyHierarchy: React.FC<OntologyHierarchyProps> = ({
  instanceId,
  data,
  expandElement = false,
  isDraggable = false,
  isClickable = false,
  dragEvent = () => "",
  clickEvent = () => "",
  filterIds,
  baseKey,
  descendantCount = true,
}) => {
  const ref = useRef(null);

  const expanded = useMemo(() => {
    const defaultExpanded = ["root"];

    if (expandElement) {
      defaultExpanded.push("http://ies.data.gov.uk/ontology/ies4#Element");
    }

    return defaultExpanded;
  }, [expandElement]);

  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set([...expanded]));

  const rootNode: HierarchyNode<EnrichedData> = useMemo(() => {
    const hierarchyData = hierarchy(structuredClone(data) as EnrichedData);

    return getRootNode(hierarchyData, {
      baseNode: baseKey,
      filterIds,
    });
  }, [data, baseKey, filterIds]);

  const handleToggle = useCallback((event: React.MouseEvent<SVGCircleElement>, nodeId: string) => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }

    setExpandedNodes((prevExpandedNodes) => {
      const newExpandedNodes = new Set(prevExpandedNodes);
      if (newExpandedNodes.has(nodeId)) {
        newExpandedNodes.delete(nodeId);
      } else {
        newExpandedNodes.add(nodeId);
      }
      return newExpandedNodes;
    });

    if (clickEvent) clickEvent(nodeId);
  }, []);

  const handleDragEnd: onDragEnd = useCallback((event, node) => {
    const data = JSON.stringify({
      nodeShape: !node.data.ontology ? "" : node.data.ontology.shape,
      label: node.data.name,
      namespace: "",
      id: node.data.id,
      ontology: node.data.ontology,
    });

    if (dragEvent) dragEvent(event, data);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    renderHierarchyTree(ref.current, rootNode, `chartGroup${instanceId}`, expandedNodes, {
      onExpand: handleToggle,
      onDragEnd: handleDragEnd,
      draggable: isDraggable,
      clickable: isClickable,
      showDescendantCount: descendantCount,
    });
  }, [
    ref.current,
    rootNode,
    expandedNodes,
    isDraggable,
    isClickable,
    descendantCount,
    handleToggle,
    handleDragEnd,
  ]);

  return (
    <svg id={`svg_${instanceId}`} ref={ref}>
      <g id={`chartGroup${instanceId}`} data-testid={instanceId} />
    </svg>
  );
};

export default OntologyHierarchy;
