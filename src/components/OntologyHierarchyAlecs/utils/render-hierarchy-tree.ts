import * as d3 from "d3";
import { IconStyle } from "../../../contexts/OntologyStyles";
import createTreeData from "./create-tree-data";

export type onDragEnd = (
  event: React.DragEvent<HTMLDivElement>,
  node: d3.HierarchyNode<Required<EnrichedData>>
) => void;

export type EnrichedData = {
  name: string;
  id: string;
  ontology: Required<IconStyle>;
  children: EnrichedData[];
} & Partial<{
  expanded: boolean;
  depth: number;
  hOrderPosition: number;
  descendantCount: number;
  startLeft: number;
  yPos: number;
  label: string;
  labelWidth: number;
}>;

type RenderTreeHierarchyOptions = {
  onExpand: (event: React.MouseEvent<SVGCircleElement>, nodeId: string) => void;
  onDragEnd: onDragEnd;
} & Partial<{
  baseNode: string;
  clickable: boolean;
  draggable: boolean;
  rowHeight: number;
  showDescendantCount: boolean;
}>;

const margin = { left: 10, right: 30, top: 10, bottom: 10 };
const treeGroupTestId = "treeGroupTestId";

const renderHierarchyTree = (
  container: SVGSVGElement,
  hierarchyData: d3.HierarchyNode<EnrichedData>,
  rootListId: string,
  expandedNodes: Set<string>,
  options: RenderTreeHierarchyOptions
) => {
  const {
    baseNode,
    clickable = false,
    draggable = false,
    rowHeight = 20,
    onExpand,
    showDescendantCount = true,
  } = options;

  const circleRadius = rowHeight * 0.25;

  const svg = d3.select(container);

  const treeData = createTreeData(hierarchyData, expandedNodes, {
    rowHeight,
    showDescendantCount,
    marginLeft: margin.left,
    marginTop: margin.top,
  });

  const chartHeight =
    (treeData.length - (baseNode ? 0 : 1)) * rowHeight + margin.top + margin.bottom + 20;
  svg.attr("height", chartHeight);

  const chartWidth = document.getElementById(rootListId)?.getBoundingClientRect().width;
  svg.attr("width", (chartWidth || 0) + margin.left + margin.right);

  const treeGroup = svg
    .select(`#${rootListId}`)
    .selectAll(`.${treeGroupTestId}`)
    .data(treeData)
    .join((group) => {
      const enter = group.append("g").attr("class", treeGroupTestId);
      enter.append("line").attr("class", "expandHorizontalLine");
      enter.append("line").attr("class", "expandVerticalLine");
      const dragSvg = enter
        .append("foreignObject")
        .attr("class", "dragObject")
        .append("xhtml:div")
        .attr("class", "dragDiv")
        .append("svg")
        .attr("class", "dragSvg");
      enter.append("circle").attr("class", "expandCircle");
      enter.append("text").attr("class", "expandCircleIcon fa-solid");

      dragSvg.append("text").attr("class", "expandLabel");
      dragSvg.append("text").attr("class", "expandLabelIcon");
      return enter;
    });

  treeGroup
    .select(".dragObject")
    .attr(
      "transform",
      (d) =>
        `translate(${
          (d.data.startLeft || 0) + (d.depth === 1 ? rowHeight - 3 : rowHeight - 6) - 2
        },${d.data.yPos || 0})`
    )
    .attr("width", (d) => d.data.labelWidth || 0)
    .attr("height", rowHeight);

  treeGroup
    .select(".dragDiv")
    .attr("draggable", draggable)
    .on("mouseover", (event: React.MouseEvent<HTMLDivElement>) => {
      if (draggable || clickable) {
        d3.select(event.currentTarget)
          .select(".expandLabel")
          .attr("font-weight", "500")
          .attr("cursor", "grab");
      }
    })
    .on("mouseout", () => {
      svg.selectAll(".expandLabel").attr("font-weight", "400");
    })
    .on("dragstart", (event: React.DragEvent<HTMLDivElement>) => {
      // event.dataTransfer.setData("application/reactflow", currentDragData.current);
      // event.dataTransfer.effectAllowed = "move";
      d3.select(event.currentTarget).style("cursor", "grabbing");
    })
    .on("dragend", (event: React.DragEvent<HTMLDivElement>, node) => {
      d3.select(event.currentTarget).style("cursor", "default");
      options.onDragEnd(event, node);
    });

  treeGroup
    .select(".dragSvg")
    .attr("width", (d) => d.data.labelWidth)
    .attr("height", rowHeight)
    .style("background-color", "transparent");

  treeGroup.attr("data-testid", (d, i: number) => `${treeGroupTestId}${i}`);
  // .attr("cursor", "default"); //Need to disable highlighting
  // .attr("cursor", (d) => (d.children === undefined ? "default" : "pointer"));

  treeGroup
    .select(".expandCircle")
    .attr("cx", (d) => d.data.startLeft + circleRadius)
    .attr("cy", (d) => d.data.yPos + rowHeight / 2)
    .attr("r", (d) => (!d.children ? 0 : circleRadius))
    .attr("stroke", (d) => d.data.ontology?.color || "")
    .attr("fill", (d) => (!d.data.ontology ? "" : d.data.ontology.backgroundColor))
    .attr("stroke-width", 1)
    .style("cursor", "pointer")
    .on("click", (event: React.MouseEvent<SVGCircleElement>, node) => {
      onExpand(event, node.data.id);
    });

  treeGroup
    .select(".expandHorizontalLine")
    .attr("pointer-events", "none")
    .attr("x1", (d) => d.data.startLeft + circleRadius)
    .attr(
      "x2",
      (d) => d.data.startLeft + circleRadius + (d.children === undefined ? circleRadius : 0)
    )
    .attr("y1", (d) => d.data.yPos + rowHeight / 2)
    .attr("y2", (d) => {
      let descendantHeight = 0;
      if(d.data.expanded){
        let visibleDescendantCount = d.children ? d.children.length : 0;
        const allButLastChildren = d.children && d.children.length > 1 ?
            d.children.filter((f,i) => i < (visibleDescendantCount - 1)) : [];
        const allButLastDescendants = d3.sum(allButLastChildren, (s) =>
        d3.sum(s.descendants(), (c) =>
            c.parent && c.children && c.parent.data.expanded ? c.children.length : 0))
        console.log(d.data.id, visibleDescendantCount, allButLastDescendants - 1);
      }
      return (
        (d.data.yPos || 0) +
        rowHeight / 2 + descendantHeight
      );
    })
    .attr("stroke", "white")
    .attr("stroke-width", 0.5);

  treeGroup
    .select(".expandVerticalLine")
    .attr("pointer-events", "none")
    .attr("x1", (d) => d.data.startLeft + circleRadius)
    .attr("x2", (d) => d.data.startLeft + circleRadius - (d.depth === 1 ? 0 : rowHeight / 2))
    .attr("y1", (d) => d.data.yPos + rowHeight / 2)
    .attr("y2", (d) => d.data.yPos + rowHeight / 2)
    .attr("stroke", "white")
    .attr("stroke-width", 0.5);

  treeGroup
    .select(".expandCircleIcon")
    .attr("pointer-events", "none")
    .attr("x", (d) => d.data.startLeft + circleRadius)
    .attr("y", (d) => d.data.yPos + rowHeight / 2 + 3)
    .attr("text-anchor", "middle")
    .attr("font-size", 8)
    .attr("fill", "white")
    .text((d) => {
      const plus = "\uf068";
      const minus = "\u002b";
      if (!d.children) return "";
      return d.data.expanded ? plus : minus;
    });

  treeGroup
    .select(".expandLabel")
    // .attr("pointer-events", "none") Need to remove this to enable cursor styling
    .attr("font-weight", "400")
    .attr("x", 22)
    .attr("y", 4 + rowHeight / 2)
    .attr("fill", "white")
    .attr("font-size", 12)
    .text((d) => d.data.label);

  treeGroup
    .select(".expandLabelIcon")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .attr("class", (d) => `expandLabelIcon ${!d.data.ontology ? "" : d.data.ontology.faIcon}`)
    .attr("x", 11)
    .attr(
      "y",
      (d) => (d.data.ontology && d.data.ontology.faUnicode.length === 3 ? 3 : 4) + rowHeight / 2
    )
    .style("fill", (d) => (!d.data.ontology ? "" : d.data.ontology.color))
    .attr("font-size", (d) => (d.data.ontology && d.data.ontology.faUnicode.length === 3 ? 8 : 10))
    .text((d) => (!d.data.ontology ? "" : d.data.ontology.faUnicode));
};

export default renderHierarchyTree;
