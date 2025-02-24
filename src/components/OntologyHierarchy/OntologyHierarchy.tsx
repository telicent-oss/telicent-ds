import * as d3 from "d3";
import React, { useEffect, useRef } from "react";
import { HierarchyBase,  addHierarchy, prepareTreeData} from "./OntologyHierarchyFunctions";
import { IconStyle } from "./types";


export interface OntologyInputHierarchy {
  name: string;
  id: string;
  ontology: IconStyle,
  children?: OntologyInputHierarchy[]
}
export interface OntologyHierarchyProps {
  instanceId: string;
  data: OntologyInputHierarchy;
  descendantCount?: boolean;
  isDraggable?: boolean;
  dragEvent?: (event: React.DragEvent<HTMLElement>, nodeType: string) => void;
  isClickable?: boolean;
  clickEvent?: (nodeId: string) => void;
  baseKey?: string;
  filterIds?: string[];
  expandAll?: boolean;
  expandElement?: boolean;
}
const OntologyHierarchy: React.FC<OntologyHierarchyProps> = ({
                                                           instanceId,
                                                           data,
                                                           descendantCount = true,
                                                           isDraggable = false,
                                                           dragEvent = () => "" ,
                                                           isClickable = false,
                                                           clickEvent = () => "",
                                                           baseKey = "",
                                                           filterIds = [],
                                                           expandAll = false,
                                                           expandElement = false,}) => {

  const ref = useRef(null);

  //  properties which could be customisable.
  const rowHeight = 20;
  // fix to stop re-rendering while component refactor in progress
  const currentBaseKey: React.MutableRefObject<string | undefined> = useRef(undefined);
  const currentFilterIds: React.MutableRefObject<string[] | undefined> = useRef(undefined);
  const currentDescendantCount: React.MutableRefObject<boolean | undefined> = useRef(undefined);
  const currentExpandElement: React.MutableRefObject<boolean | undefined> = useRef(undefined);
  const currentExpandAll: React.MutableRefObject<boolean | undefined> = useRef(undefined);

  useEffect(() => {

      if(
          baseKey === currentBaseKey.current &&
          JSON.stringify(filterIds) === JSON.stringify(currentFilterIds.current) &&
          descendantCount === currentDescendantCount.current &&
          expandElement === currentExpandElement.current &&
          expandAll === currentExpandAll.current
      ){
          // no change so don't re-render
          return
      } else {
          currentFilterIds.current = filterIds;
          currentBaseKey.current = baseKey;
          currentDescendantCount.current = descendantCount;
          currentExpandElement.current = expandElement;
          currentExpandAll.current = expandAll;
      }
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
    const margin = { left: 10, right: 40, top: 10, bottom: 10 };
    const startingDepth = 0;
    const circleRadius = rowHeight * 0.25;
    const depthTab = 10;
    const chartData = addHierarchy(clonedData,startingDepth, baseKey, filterIds,expandAll,expandElement);

    const drawChart = (hierarchyData: d3.HierarchyNode<HierarchyBase>) => {

      const chartHeight = ((chartData.descendants().length - (baseKey ? 0 : 1)) * rowHeight) + margin.top + margin.bottom;
       svg.attr("height", chartHeight);

      const treeData: d3.HierarchyNode<HierarchyBase> [] = prepareTreeData(hierarchyData,margin,depthTab,rowHeight, descendantCount);

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
            const dragSvg =   enter.append("foreignObject").attr("class", "dragObject")
                .append("xhtml:div").attr("class","dragDiv")
                .append("svg").attr("class", "dragSvg");
            dragSvg.append("text").attr("class", "expandLabel");
            dragSvg.append("text").attr("class", "expandLabelIcon");
          return enter
        })

        treeGroup.select(".dragObject")
            .attr("transform", (d) =>
                `translate(${((d.data.startLeft || 0) + (d.depth === 1 ? rowHeight - 3 : rowHeight - 6)) - 2 },${(d.data.yPos || 0) })`)
            .attr("width", (d) => d.data.labelWidth || 0)
            .attr("height", rowHeight);

        treeGroup.select(".dragDiv")
            .attr("draggable", isDraggable)
            .style("cursor", isDraggable ? "grab" : "default")
            .on("mouseover", (event: React.MouseEvent<HTMLElement>) => {
                if(isDraggable || isClickable){
                    d3.select(event.currentTarget)
                        .select(".expandLabel")
                        .attr("font-weight", 500);
                }
            })
            .on("mouseout", () => {
                svg.selectAll(".expandLabel")
                    .attr("font-weight", 400);

            })
            .on("click", (event, d) => {
                clickEvent(d.data.id || "");
            })
            .on("dragstart", (event: React.DragEvent<HTMLElement>, d) => {
                if(isDraggable){
                    const dragString =  JSON.stringify({
                        nodeShape: !d.data.ontology ? "" : d.data.ontology.shape,
                        label: d.data.name,
                        namespace: "",
                        id: d.data.id,
                        ontology: d.data.ontology
                    })
                    dragEvent(event, dragString);
                    svg.selectAll(".dragDiv")
                        .style("cursor", "grabbing");
                }
            })
            .on("drag", () => {
                if(isDraggable){
                    svg.selectAll(".dragDiv")
                        .style("cursor", "grabbing");
                }
            })
            .on("dragend", (event: React.DragEvent<HTMLElement>, d) => {
                if(isDraggable){
                    const dragString =  JSON.stringify({
                        nodeShape: !d.data.ontology ? "" : d.data.ontology.shape,
                        label: d.data.name,
                        namespace: "",
                        id: d.data.id,
                        ontology: d.data.ontology
                    })
                    svg.selectAll(".dragDiv")
                        .style("cursor", "grab");
                    dragEvent(event, dragString);
                }
            })

        treeGroup.select(".dragSvg")
            .attr("width", (d) => d.data.labelWidth || 0)
            .attr("height", rowHeight)
            .style("background-color", "transparent");

      treeGroup
        .attr("id", (d, i: number) => `${treeGroupTestId}${i}`);

      treeGroup.select(".expandCircle")
        .attr("cx", (d) => (d.data.startLeft || 0) + circleRadius)
        .attr("cy", (d) => (d.data.yPos || 0) + rowHeight/2)
        .attr("r",(d) => !d.children && !d.data._children? 0 : circleRadius)
        .attr("stroke", (d) => d.data.ontology?.color || "")
        .attr("fill", (d) => !d.data.ontology ? "" : d.data.ontology.backgroundColor)
        .attr("stroke-width", 1)
        .style("cursor", "pointer")
        .on("click", (event, d) => {
          if(!d.children  && d.data._children){
            d.children = d.data._children;
            d.data._children = undefined;
            // add react trigger
              drawChart(hierarchyData)
          } else if (d.children !== undefined){
            d.data._children = d.children;
            d.children = undefined;
            //add react trigger
              drawChart(hierarchyData)
          }
        })
      ;

      treeGroup.select(".expandHorizontalLine")
        .attr("pointer-events","none")
        .attr("x1", (d) => (d.data.startLeft || 0) + circleRadius)
        .attr("x2", (d) => (d.data.startLeft || 0) + circleRadius + (d.children === undefined ? circleRadius : 0))
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
          .attr("pointer-events", "none")
          .attr("font-weight", 400)
          .attr("x",  22)
          .attr("y",  4 + rowHeight/2)
          .attr("fill", (d) => d.data.id && d.data.ontology && filterIds.includes(d.data.id) ? d.data.ontology.color : "white")
          .attr("font-size", 12)
          .text((d) => d.data.expandLabel || "")

      treeGroup.select(".expandLabelIcon")
          .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .attr("class", (d) => `expandLabelIcon ${!d.data.ontology ? "" : d.data.ontology.faIcon}`)
        .attr("x",  11)
        .attr("y", (d) =>  (d.data.ontology &&  d.data.ontology.faUnicode.length === 3 ? 3 : 4) +  rowHeight/2)
        .style("fill", (d) => !d.data.ontology ? "" : d.data.ontology.color)
        .attr("font-size", (d) => d.data.ontology?.faUnicode.length === 3 ? 8 : 10)
        .text((d) => !d.data.ontology ? "" : d.data.ontology.faUnicode);

      const chartWidth = document.getElementById(`chartGroup${instanceId}`)?.getBoundingClientRect().width;
      svg.attr("width", (chartWidth || 0) + margin.left + margin.right);
    }
    drawChart(chartData);

  }, [data, isDraggable, isClickable,instanceId, dragEvent, clickEvent, baseKey,descendantCount,filterIds]);
  return (
    <>
      {/* eslint-disable-next-line react/self-closing-comp */}
      <svg id = {`svg_${instanceId}`} ref={ref}>
        <g id={`chartGroup${instanceId}`} data-testid = {instanceId}/>
      </svg>
    </>
  );
};

export default OntologyHierarchy
