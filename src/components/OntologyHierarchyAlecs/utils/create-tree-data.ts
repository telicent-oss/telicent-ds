import { HierarchyNode, ascending, select } from "d3";
import { EnrichedData } from "./render-hierarchy-tree";

type CreateTreeOptions = Partial<{
  showDescendantCount: boolean;
  marginLeft: number;
  marginTop: number;
  rowHeight: number;
  depthTab: number;
}>;

const measureWidth = (measureText: string, measureFontSize: number) => {
  const tempSvg = select("body").append("svg"); //Select this using id instead
  const tempText = tempSvg.append("text").attr("font-size", measureFontSize).text(measureText);
  const tryTextWidth = tempText.node()?.getComputedTextLength();
  const textWidth: number = tryTextWidth ?? 0;
  tempSvg.remove();
  return textWidth;
};

const createTreeData = (
  hierarchyData: HierarchyNode<EnrichedData>,
  expandedNodes: Set<string>,
  options: CreateTreeOptions = {}
) => {
  const {
    showDescendantCount = true,
    marginLeft = 10,
    marginTop = 10,
    depthTab = 10,
    rowHeight = 20,
  } = options;

  return hierarchyData
    .eachBefore((node, index) => {
      node.data.hOrderPosition = index;
      node.data.descendantCount = node.descendants().length - 1;
    })
    .descendants()
    .reduce((children: d3.HierarchyNode<Required<EnrichedData>>[], node) => {
      if (expandedNodes.has(node.data.id) && node.children) {
        return [...children, ...node.children]
          .sort((a, b) => ascending(a.data.hOrderPosition, b.data.hOrderPosition))
          .map((node, index) => {
            const label =
              node.data.name +
              (showDescendantCount && (node.data.descendantCount || 0) > 0
                ? ` (${node.data.descendantCount})`
                : "");

            node.data.startLeft = marginLeft + (node.depth - 1) * depthTab;
            node.data.label = label;
            node.data.yPos = marginTop + index * rowHeight;
            node.data.labelWidth = 30 + measureWidth(label, 12);
            node.data.expanded = expandedNodes.has(node.data.id);

            return node as d3.HierarchyNode<Required<EnrichedData>>;
          });
      }

      return children;
    }, []);
};

export default createTreeData;
