import * as d3 from "d3";
import React, { useEffect, useRef } from "react";
import { IconStyle } from "../../contexts/OntologyStyles";
import { HierarchyBase, resetDragData, addHierarchy, prepareTreeData, setDragElementStyles} from "./OntologyHierarchyFunctions";

export interface OntologyInputHierarchy {
  name: string;
  id: string;
  ontology: IconStyle,
  children?: OntologyInputHierarchy[]
}
export interface OntologyHierarchyProps {
  instanceId: string;
  data: OntologyInputHierarchy;
  expandElement?: boolean;
  isDraggable?: boolean;
  isClickable?: boolean;
  dragEvent?: (event: React.DragEvent<HTMLElement>, nodeType: string) => void;
  clickEvent?: (nodeId: string) => void;
  filterIds?: string[];
  baseKey?: string;
  descendantCount?: boolean;
}
const OntologyHierarchy: React.FC<OntologyHierarchyProps> = ({
                                                           instanceId,
                                                           data,
                                                           expandElement = false,
                                                           isDraggable = false,
                                                           isClickable = false,
                                                           dragEvent = () => "" ,
                                                           clickEvent = () => "",
                                                           filterIds = [],
                                                           baseKey = "",
                                                           descendantCount = true}) => {

  const ref = useRef(null);

  //  properties which could be customisable.
  const rowHeight = 20;
  const currentDragData: React.MutableRefObject<string> = useRef("");
   // I have left these here as can't work out how to pass in additional arguments
  // currentDragData.current AND dragEvent
 const divDragStart = (event:  React.DragEvent<HTMLElement>) => {
    if(event){
      d3.select(`#dragDiv${instanceId}`)
        .style("cursor", "grabbing")
        .style("visibility", "visible");
    }
  };
  const divDragDrop = (event:  React.DragEvent<HTMLElement>) => {
    if(dragEvent){
      event.dataTransfer.setData("application/reactflow", currentDragData.current);
      event.dataTransfer.effectAllowed = "move";
      d3.select(`#dragDiv${instanceId}`)
        .style("cursor", "default")
        .style("visibility", "hidden");
      dragEvent(event, currentDragData.current);
    }
  };

  useEffect(() => {
    //  define svg and dimensions
    const svg = d3.select(ref.current);
    const svgNode = svg.node();
    if (!svgNode) {
      return;
    }
    const { parentElement } = svgNode as HTMLElement;
    if (!parentElement) {
      return;
    }
    if(!data){
      return;
    }
    const clonedData = JSON.parse(JSON.stringify(data));
    const margin = { left: 10, right: 30, top: 10, bottom: 10 };
    const startingDepth = 0;
    const circleRadius = rowHeight * 0.25;
    const depthTab = 10;
    const chartData = addHierarchy(clonedData,startingDepth, baseKey, filterIds);

    if(expandElement){
      const elementNode = chartData.descendants()
        .find((f) => f.data.id === "http://ies.data.gov.uk/ontology/ies4#Element");
      if(elementNode){
        elementNode.children = elementNode.data._children;
      }
    }

    setDragElementStyles(instanceId);

    const drawChart = () => {

      const chartHeight = ((chartData.descendants().length - (baseKey ? 0 : 1)) * rowHeight) + margin.top + margin.bottom;
       svg.attr("height", chartHeight);

      const treeData: d3.HierarchyNode<HierarchyBase> [] = prepareTreeData(chartData,margin,depthTab,rowHeight);

      const treeGroupTestId = "treeGroupTestId";

      const treeGroup = svg
        .select(`#chartGroup${instanceId}`)
        .selectAll(`.${treeGroupTestId}`)
        .data(treeData)
        .join((group) => {
          const enter = group.append("g").attr("class", treeGroupTestId);
          enter.append("line").attr("class", "expandHorizontalLine");
          enter.append("line").attr("class", "expandVerticalLine");
          enter.append("circle").attr("class", "expandCircle");
          enter.append("text").attr("class", "expandCircleIcon fa-solid");
          enter.append("text").attr("class", "expandLabel");
          enter.append("text").attr("class", "expandLabelIcon");
          return enter
        })

      treeGroup
        .attr("data-testid", (d, i: number) => `${treeGroupTestId}${i}`)
        .attr("cursor", (d) => d.children === undefined ? "default" : "pointer")
        .on("mouseover",  (event, d) => {
          if(isDraggable || (isClickable && d.data.id && filterIds.includes(d.data.id))){
            currentDragData.current = resetDragData(svg,d, rowHeight, instanceId, isClickable ? clickEvent : undefined);
          } else {
            d3.select(`#dragSvg${instanceId}`).style("height", "0px");
          }
        })

      treeGroup.select(".expandCircle")
        .attr("cx", (d) => (d.data.startLeft || 0) + circleRadius)
        .attr("cy", (d) => (d.data.yPos || 0) + rowHeight/2)
        .attr("r",(d) => !d.children && !d.data._children? 0 : circleRadius)
        .attr("stroke", (d) => d.data.ontology?.color || "")
        .attr("fill", (d) => !d.data.ontology ? "" : d.data.ontology.backgroundColor)
        .attr("stroke-width", 1)
        .style("cursor", "pointer")
        .on("click", (event, d) => {
          d3.select(`#dragSvg${instanceId}`).style("height", "0px");
          if(!d.children  && d.data._children){
            d.children = d.data._children;
            d.data._children = undefined;
            drawChart();
          } else if (d.children !== undefined){
            d.data._children = d.children;
            d.children = undefined;
            drawChart();
          }
        })
      ;

      treeGroup.select(".expandHorizontalLine")
        .attr("pointer-events","none")
        .attr("x1", (d) => (d.data.startLeft || 0) + circleRadius)
        .attr("x2", (d) => (d.data.startLeft || 0) + circleRadius + (d.children === undefined ? circleRadius/2 : 0))
        .attr("y1", (d) => (d.data.yPos || 0) + rowHeight/2 )
        .attr("y2", (d) => {
          const myChildren = d.children;
          const myLastChildChildren = myChildren?.[myChildren.length - 1].children;
          return (d.data.yPos || 0) + rowHeight/2
            + (!myChildren ? 0 :
              (((d.descendants().length - 1) - (!myLastChildChildren ? 0 : myLastChildChildren.length)) * rowHeight))
           }
        )
        .attr("stroke", "white")
        .attr("stroke-width", 0.5);

      treeGroup.select(".expandVerticalLine")
        .attr("pointer-events","none")
        .attr("x1", (d) => (d.data.startLeft || 0) + circleRadius)
        .attr("x2", (d) => (d.data.startLeft || 0) + circleRadius - (d.depth === 1 ? 0 : rowHeight/2))
        .attr("y1", (d) => (d.data.yPos || 0) + rowHeight/2 )
        .attr("y2", (d) => (d.data.yPos || 0) + rowHeight/2 )
        .attr("stroke", "white")
        .attr("stroke-width", 0.5);

      treeGroup.select(".expandCircleIcon")
        .attr("pointer-events","none")
        .attr("x", (d) => (d.data.startLeft || 0) + circleRadius)
        .attr("y", (d) => (d.data.yPos || 0) + rowHeight/2 + 3)
        .attr("text-anchor", "middle")
        .attr("font-size", 8)
        .attr("fill", "white")
        .text((d) => {
          if(!d.children && !d.data._children) {
            return ""
          }
          return d.children !== undefined ? "\uf068" : "\u002b"
        });

      treeGroup.select(".expandLabel")
        .attr("x", (d) => (d.data.startLeft || 0)  + 20 + (d.depth === 1 ? rowHeight - 3 : rowHeight - 6))
        .attr("y", (d) => (d.data.yPos || 0) + 4 +  rowHeight/2)
        .attr("fill", "white")
        .attr("font-size", 12)
        .text((d) => d.data.name + (descendantCount && (d.data.descendantCount || 0) > 0  ? ` (${d.data.descendantCount})`: ""))

      treeGroup.select(".expandLabelIcon")
        .attr("text-anchor", "middle")
        .attr("class", (d) => `expandLabelIcon ${!d.data.ontology ? "" : d.data.ontology.faIcon}`)
        .attr("x", (d) => (d.data.startLeft || 0)  + 7.5 + (d.depth === 1 ? rowHeight - 3 : rowHeight - 6))
        .attr("y", (d) => (d.data.yPos || 0) + 4 +  rowHeight/2)
        .style("fill", (d) => !d.data.ontology ? "" : d.data.ontology.color)
        .attr("font-size", 10)
        .text((d) => !d.data.ontology ? "" : d.data.ontology.faUnicode);

      const chartWidth = document.getElementById(`chartGroup${instanceId}`)?.getBoundingClientRect().width;
      svg.attr("width", (chartWidth || 0) + margin.left + margin.right);
    }
    drawChart();

  }, [data, isDraggable, isClickable,instanceId, dragEvent, clickEvent, baseKey,descendantCount,filterIds]);
  return (
    <>
      <div id={`dragDiv${instanceId}`} onDragStart={divDragStart} onDragLeave={divDragDrop}  draggable={isDraggable}>
        <svg id={`dragSvg${instanceId}`}>
          <text id={`dragIcon${instanceId}`} className="fa-solid"/>
          <text id={`dragIconLabel${instanceId}`}/>
        </svg>
        </div>
      <div className="teliscapeTooltip" id={instanceId} />
      {/* eslint-disable-next-line react/self-closing-comp */}
      <svg id = {`svg_${instanceId}`} ref={ref}>
        <g id={`chartGroup${instanceId}`} data-testid = {instanceId}/>
      </svg>
    </>
  );
};

export default OntologyHierarchy
