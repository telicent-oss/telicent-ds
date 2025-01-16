import * as d3 from "d3";
import { FlattenedStyleType } from "@telicent-oss/ontologyservice";

export interface HierarchyBase {
  name: string;
  id?: string;
  ontology?: FlattenedStyleType;
  yPos?: number;
  startLeft?: number;
  hOrderPosition?: number;
  descendantCount?: number;
  expandLabel?: string;
  labelWidth?: number;
  highlight?:boolean;
  _children?: d3.HierarchyNode<HierarchyBase>[];
  children?: d3.HierarchyNode<HierarchyBase>[] | HierarchyBase[];
}



const measureWidth = (measureText: string , measureFontSize: number) => {
  const tempSvg = d3.select("body").append("svg");
  const tempText = tempSvg.append("text")
      .attr("font-size", measureFontSize)
      .text(measureText);
  const tryTextWidth = tempText.node()?.getComputedTextLength();
  const textWidth: number = tryTextWidth ?? 0;
  tempSvg.remove();
  return textWidth
};
export const prepareTreeData = (chartData:  d3.HierarchyNode<HierarchyBase>, margin: {[key: string]: number}, depthTab:  number, rowHeight: number, descendantCount: boolean) => {

  let treeData = chartData.descendants().filter((f) => f.depth > 0);
  treeData = treeData.sort((a, b) => d3.ascending(a.data.hOrderPosition, b.data.hOrderPosition))

  treeData.forEach((d, i: number) => {
    d.data.startLeft = margin.left + ((d.depth - 1) * depthTab);
    d.data.yPos = margin.top + (i * rowHeight);
    d.data.expandLabel = d.data.name + (descendantCount && (d.data.descendantCount || 0) > 0  ? ` (${d.data.descendantCount})`: "");
    d.data.labelWidth = 35 + measureWidth(d.data.expandLabel, 12);
  })
  return treeData
}


export const addHierarchy = (data: HierarchyBase,startingDepth: number, baseKey: string, filterIds: string[], expandAll: boolean, expandElement: boolean) => {

  // convert to full hierarchy
  let hierarchyData = d3.hierarchy(data);

  if(expandAll){
    // if expandAll - find max depth in full hierarchy
    startingDepth = d3.max(hierarchyData, (d) => d.depth) || startingDepth;
  }
  if(baseKey !== "" && filterIds.length > 0){
    console.error("baseKey and filterIds cannot be used together - baseKey takes priority, filterIds will be ignored");
  }
  if(baseKey !== ""){
    // baseKey starts the hierarchy at a different base if it exists
    // each d3.HierarchyNode is a hierarchy in itself, so you just have to replace it
    const baseKeyNode = hierarchyData.descendants().find((f) => f.data.id === baseKey);
    if(baseKeyNode){
      hierarchyData = baseKeyNode;
    }
  } else if (filterIds.length > 0){
    // filterIds filters the data to only include ids (if they exist) and their ancestors
    const filteredData: string[] = [];
    // collect filter nodes + ancestors
    filterIds.forEach((d) => {
      const filterIdNode = hierarchyData.descendants().find((f) => f.data.id === d);
      if(filterIdNode){
        // add ancestors (which includes this node) to filteredData if not there already
        filterIdNode.ancestors().forEach((a) => {
          if(!filteredData.some((s) => s === a.data.id)){
            filteredData.push(a.data.id || "");
          }
        })
      }
    })
    // filter all children to only include filterIds
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
  // loop through and let hOrderPosition and descendant count
  // these will not change when the user interacts with the component
  hierarchyData.eachBefore((d,i) => {
    // eslint-disable-next-line no-param-reassign
    d.data.hOrderPosition = i;
    d.data.descendantCount =  d.descendants().length - 1;
  })
  // set data so children over the startingDepth are 'collapsed' (_children)
  hierarchyData.descendants().forEach((d) => {
    if(d.children){
      if(d.depth > startingDepth){
        d.data._children = d.children;
        d.children = undefined;
      }
    }
  });
  if(expandElement && expandAll){
    console.error("expandAll and expandElement cannot be used together - expandAll takes priority, expandElement will be ignored")
  }
  if(expandElement  && !expandAll){
    // custom expand for OntologyApp - assumes that Element is at depth 0 and therefore expandable
    const elementNode = hierarchyData.descendants()
        .find((f) => f.data.id === "http://ies.data.gov.uk/ontology/ies4#Element");
    if(elementNode){
      elementNode.children = elementNode.data._children;
    }
  }


  return hierarchyData;
}

export const checkOntology = (iconType: string,  findIcon: (classUri: string) => FlattenedStyleType) => {
  const flatOntology = findIcon(iconType);

  if(!flatOntology.faUnicode){
    flatOntology.faIcon = "";
    flatOntology.faUnicode = flatOntology.iconFallbackText;
    flatOntology.shape = "roundrectangle";
  }
  return flatOntology as FlattenedStyleType;
}
