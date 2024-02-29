import * as d3 from "d3";
import { IconStyle } from "../../contexts/OntologyStyles";
export interface HierarchyBase {
  name: string;
  id?: string;
  ontology?: Required<IconStyle>;
  yPos?: number;
  startLeft?: number;
  hOrderPosition?: number;
  descendantCount?: number;
  _children?: d3.HierarchyNode<HierarchyBase>[];
  children?: d3.HierarchyNode<HierarchyBase>[] | HierarchyBase[];
}

export const resetDragData = (
  svg:  d3.Selection<null, unknown, null, undefined> | undefined,
  d: d3.HierarchyNode<HierarchyBase>,
  rowHeight: number,
  instanceId: string,
  clickEvent?: (nodeId: string) => void) => {
  // define startingXPosition - where mouse is in relation to the icon
  const iconPosition = (d.data.startLeft || 0)  - 2.5 + (d.depth === 1 ? rowHeight - 3 : rowHeight - 6);
  // reset auto width and set starting positions
  d3.select(`#dragDiv${instanceId}`)
    .style("cursor", clickEvent ? "pointer" : "grab")
    .style("visibility", "visible")
    .style("left", `${iconPosition}px`)
    .style("top", `${(d.data.yPos || 0) + 2}px`)
    .on("click", () => {
      if(clickEvent){
        clickEvent(d.data.id || "");
      }
    })

  d3.select(`#dragIcon${instanceId}`)
    .attr("text-anchor", "middle")
    .attr("x", 10)
    .attr("class", `${!d.data.ontology ? "" : d.data.ontology.faIcon}`)
    .attr("y",  12)
    .style("fill", !d.data.ontology ? "" :d.data.ontology.color)
    .text( d.data.ontology ? d.data.ontology.faUnicode : "");

  d3.select(`#dragIconLabel${instanceId}`)
    .attr("x",  22.5)
    .attr("y",  12)
    .text(d.data.name)

  const dragElement = document?.getElementById(`dragDiv${instanceId}`)?.getBoundingClientRect();
  d3.select(`#dragSvg${instanceId}`).style("height", "16px");

  if(dragElement && svg){
    d3.select(`#dragSvg${instanceId}`)
      .attr("width", dragElement.right + 5);
  }
  return  JSON.stringify({
    nodeShape: !d.data.ontology ? "" : d.data.ontology.shape,
    label: d.data.name,
    namespace: "",
    id: d.data.id,
    ontology: d.data.ontology
  });

};

export const setDragElementStyles = (instanceId: string) => {
  d3.select(`#dragDiv${instanceId}`)
    .style("padding","0px")
    .style("background-color", "transparent")
    .style("position", "absolute")
    .style("height", "auto")
    .style("z-index", 150)
    .style("width", "auto")
    .style("line-height", "12px");

  d3.select(`#dragSvg${instanceId}`)
    .style("height", "0px")
    .style("background-color", "none");

  d3.select(`#dragIcon${instanceId}`)
    .attr("pointer-events", "none")
    .attr("font-size", 10);

  d3.select(`#dragIconLabel${instanceId}`)
    .attr("pointer-events", "none")
    .attr("font-size", 12)
    .attr("fill","white");
}
export const prepareTreeData = (chartData:  d3.HierarchyNode<HierarchyBase>, margin: {[key: string]: number}, depthTab:  number, rowHeight: number) => {

  let treeData = chartData.descendants().filter((f) => f.depth > 0);
  treeData = treeData.sort((a, b) => d3.ascending(a.data.hOrderPosition, b.data.hOrderPosition))

  treeData.forEach((d, i: number) => {
    d.data.startLeft = margin.left + ((d.depth - 1) * depthTab);
    d.data.yPos = margin.top + (i * rowHeight)
  })
  return treeData
}
export const addHierarchy = (data: HierarchyBase,startingDepth: number, baseKey: string, filterIds: string[]) => {

  let hierarchyData = d3.hierarchy(data);

  if(baseKey !== ""){
    // baseKey starts the hierarchy at a different base if it exists
    const baseKeyNode = hierarchyData.descendants().find((f) => f.data.id === baseKey);
    if(!baseKeyNode){
      // console.error(`no matching id for baseKey: ${baseKey}`)
    } else {
      hierarchyData = baseKeyNode;
    }
  } else if (filterIds.length > 0){
    // filterIds filters the data to only include to only show roots of ids provided
    const filteredData: string[] = [];
    // can only do one or the other, baseKey defaults to priority
    filterIds.forEach((d) => {
      const filterIdNode = hierarchyData.descendants().find((f) => f.data.id === d);
      if(!filterIdNode){
        // console.error(`no matching id for filterId: ${d}`)
      } else {
        // add ancestors (which includes this node) to filteredData if not there already
        filterIdNode.ancestors().forEach((a) => {
          if(!filteredData.some((s) => s === a.data.id)){
            filteredData.push(a.data.id || "");
          }
        })
      }
    })
     hierarchyData.descendants().forEach((d) => {
      if(d.children){
        d.children = d.children.filter((f) => filteredData.includes(f.data.id || ""));
        if(d.children.length === 0){
          // reset 0 length to undefined so tree works as anticipated
          d.children = undefined;
        }
      }
      })
  }
  hierarchyData.eachBefore((d,i) => {
    // eslint-disable-next-line no-param-reassign
    d.data.hOrderPosition = i;
    d.data.descendantCount =  d.descendants().length - 1;
  })
  hierarchyData.descendants().forEach((d) => {
    if(d.children){
      if(d.depth > startingDepth){
        d.data._children = d.children;
        d.children = undefined;
      }
    }
  })

  return hierarchyData;
}

export const checkOntology = (iconType: string,  findIcon: (classUri: string) => IconStyle) => {
  const flatOntology = findIcon(iconType);

  if(!flatOntology.faUnicode){
    flatOntology.faIcon = "";
    flatOntology.faUnicode = flatOntology.iconFallbackText;
    flatOntology.shape = "roundrectangle";
  }
  return flatOntology as Required<IconStyle>;
}
