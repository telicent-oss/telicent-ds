// import * as d3 from "d3";
// import { HierarchyBase, addHierarchy, resetDragData, prepareTreeData } from "./OntologyHierarchyFunctions";

// const sampleOntology = {
//   backgroundColor: "black",
//   color: "white",
//   icon: "",
//   faIcon: "",
//   faUnicode: "N",
//   shape:"roundrectangle",
//   alt: "",
//   iconFallbackText: "",
//   classUri: ""
// };

// describe("resetDragData function", () => {
//   test("returns correct values when under dot limit", () => {
//     const sampleData: HierarchyBase = {name: "myName", id: "myNameId"}
//     const mySampleData = d3.hierarchy(sampleData).descendants()[0];
//     const result = resetDragData(undefined, mySampleData,12,"myInstance");
//     expect(result).toStrictEqual("{\"nodeShape\":\"\",\"label\":\"myName\",\"namespace\":\"\",\"id\":\"myNameId\"}");
//   });
// })

// describe("addHierarchy + baseKey function", () => {
//   test("returns valid data with correct root with valid baseKey", () => {
//     const baseKey = "myBaseKeyId";
//     const sampleHierarchyData: HierarchyBase = {name: "starting name", id:"myid", ontology: sampleOntology, children:[{name: 'myName', id: 'myBaseKeyId',ontology: sampleOntology}]}
//     const result = addHierarchy(sampleHierarchyData, 0,baseKey,[]);
//     expect(result.descendants().length).toBe(1);
//     expect(result.descendants()[0].data.id).toBe("myBaseKeyId");
//   })
//   test("returns original data and error if invalid baseKey", () => {
//     const logSpy = jest.spyOn(global.console, 'error');
//     const sampleHierarchyData: HierarchyBase = {name: "starting name", id:"myid", ontology: sampleOntology, children:[{name: 'myName', id: 'myBaseKeyId',ontology: sampleOntology}]}
//     const baseKey = "doesNotExist";
//     const result = addHierarchy(sampleHierarchyData, 0,baseKey,[]);
//     expect(result.descendants().length).toBe(2);
//     expect(result.descendants()[0].data.id).toBe("myid");
//   })
// })

// describe("addHierarchy + filterids function", () => {
//   test("returns correct data if list contains one valid id, depth 1", () => {
//     const filterIds = ["myBaseKeyId"];
//     const sampleHierarchyData: HierarchyBase = {name: "starting name", id:"myid", ontology: sampleOntology, children:[{name: 'myName', id: 'myBaseKeyId',ontology: sampleOntology}]}
//     const result = addHierarchy(sampleHierarchyData, 0,"",filterIds);
//     expect(result.descendants().length).toBe(2);
//     expect(result.descendants()[0].data.id).toBe("myid");
//     expect(result.descendants()[1].data.id).toBe("myBaseKeyId");

//   })
//   test("returns correct data if one valid id,depth 1 and one invalid id", () => {
//     const logSpy = jest.spyOn(global.console, 'error');
//     const filterIds = ["myBaseKeyId", "doesNotExist"];
//     const sampleHierarchyData: HierarchyBase = {name: "starting name", id:"myid", ontology: sampleOntology, children:[{name: 'myName', id: 'myBaseKeyId',ontology: sampleOntology}]}
//     const result = addHierarchy(sampleHierarchyData, 0,"",filterIds);
//     expect(result.descendants().length).toBe(2);
//     expect(result.descendants()[0].data.id).toBe("myid");
//     expect(result.descendants()[1].data.id).toBe("myBaseKeyId");
//   })
//   test("returns correct data if one valid id,depth 3 and one invalid id", () => {
//     const logSpy = jest.spyOn(global.console, 'error');
//     const filterIds = ["myBaseKeyIdChild", "doesNotExist"];
//     // basic - root has one child which has one child
//     const sampleHierarchyData: HierarchyBase = {name: "starting name", id:"myid", ontology: sampleOntology,
//       children:[
//         {name: 'myName', id: 'myBaseKeyId',ontology: sampleOntology,
//           children:[{name: 'myNameChild', id: 'myBaseKeyIdChild',ontology: sampleOntology}]}]}
//     const result = addHierarchy(sampleHierarchyData, 0,"",filterIds);
//     expect(result.descendants().length).toBe(2);
//     expect(result.descendants()[0].data.id).toBe("myid");
//     expect(result.descendants()[1].data.id).toBe("myBaseKeyId");
//     const depth1Children = result.descendants()[1].data._children;
//     if(depth1Children){
//       expect(depth1Children.length).toBe(1);
//       const depth2Children = d3.sum(depth1Children, (d) => !d.data._children ? 0 : d.data._children.length)
//       expect(depth2Children).toBe(0);
//     }
//   })
//   test("returns correct data if several valid ids, over several depths", () => {
//     const filterIds = ["myBaseKeyIdChild", "myid","myExtraChildId", "myExtraChildDepth3Id", "myExtraChild2Depth2Id"];
//     // basic - root has one child which has one child (on the list)
//     const sampleHierarchyData: HierarchyBase = {name: "starting name", id:"myid", ontology: sampleOntology,
//       children:[{name: "myName", id: "myBaseKeyId",ontology: sampleOntology,
//         children:[{name: "myNameChild", id: "myBaseKeyIdChild",ontology: sampleOntology}]}]}
//     // extraChild - root has 2 children (one not on list, one on the list, final child has children that should be filtered out)
//     const extraChild: any = {name: "myExtraChild", id: "myExtraChildId",ontology: sampleOntology,
//       children:[{name: "shouldNotBeShown", id: "shouldNotBeShownId",ontology: sampleOntology},
//         {name: "myExtraChildDepth2", id: "myExtraChildDepth2Id",ontology: sampleOntology,
//           children:[{name: "myExtraChildDepth3", id: "myExtraChildDepth3Id",ontology: sampleOntology, children: [{name: "shouldNotBeShown2", id: "shouldNotBeShown2Id",ontology: sampleOntology}]}]}]};
//     // extraChild2 - root has 1 child (on list) which has 1 child which should be filtered out
//     const extraChild2: any = {name: "myExtraChild2", id: "myExtraChild2Id",ontology: sampleOntology,
//       children:[{name: "myExtraChild2Depth2", id: "myExtraChild2Depth2Id",ontology: sampleOntology,
//         children:[{name: "shouldNotBeShown3", id: "shouldNotBeShown3Id",ontology: sampleOntology}]}]};
//     // add extra children
//     if(sampleHierarchyData.children){
//       sampleHierarchyData.children.push(extraChild);
//       sampleHierarchyData.children.push(extraChild2);
//     }
//     const result = addHierarchy(sampleHierarchyData, 0,"",filterIds);
//     expect(result.descendants().length).toBe(4);
//     // basic root
//     expect(result.descendants()[0].data.id).toBe("myid");
//     // basic root's child
//     expect(result.descendants()[1].data.id).toBe("myBaseKeyId");
//     // extraChild
//     expect(result.descendants()[2].data.id).toBe("myExtraChildId");
//     // extraChild2
//     expect(result.descendants()[3].data.id).toBe("myExtraChild2Id");
//     const depth0Children = result.descendants()[0].data.children;
//     expect(depth0Children).toBeDefined();
//     if(depth0Children){
//       expect(depth0Children.length).toBe(3);
//       // 3 children above
//     }
//     const basicDepth1Children = result.descendants()[1].data._children;
//     expect(basicDepth1Children).toBeDefined();
//     if(basicDepth1Children){
//       expect(basicDepth1Children.length).toBe(1);
//       expect(basicDepth1Children[0].data.id).toBe("myBaseKeyIdChild");
//       // basic root child's child (as seen on the list)
//     }
//     const extraChildDepth1Children = result.descendants()[2].data._children;
//     expect(extraChildDepth1Children).toBeDefined();
//     if(extraChildDepth1Children){
//       // shouldNotBeShown has been filtered out
//       expect(extraChildDepth1Children.length).toBe(1);
//       expect(extraChildDepth1Children[0].data.id).toBe("myExtraChildDepth2Id");
//       // extraChild's child (as seen on the list)
//       // shouldNotBeShown has been filtered out
//       const extraChildDepth2Children = extraChildDepth1Children[0].data._children;
//       expect(extraChildDepth2Children).toBeDefined();
//       if(extraChildDepth2Children){
//         expect(extraChildDepth2Children.length).toBe(1);
//         expect(extraChildDepth2Children[0].data.id).toBe("myExtraChildDepth3Id");
//         expect(extraChildDepth2Children[0].data._children).toBe(undefined);
//         // shouldNotBeShown2 has been filtered out
//       }
//     }
//     const extraChild2Depth1Children = result.descendants()[3].data._children;
//     expect(extraChild2Depth1Children).toBeDefined();
//     if(extraChild2Depth1Children){
//       // shouldNotBeShown has been filtered out
//       expect(extraChild2Depth1Children.length).toBe(1);
//       expect(extraChild2Depth1Children[0].data.id).toBe("myExtraChild2Depth2Id");
//       const extraChild2Depth2Children = extraChild2Depth1Children[0].data._children;
//       expect(extraChild2Depth2Children).toBeUndefined();
//     }

//   })
// })
// describe("addHierarchy + prepareTreeData function", () => {
//   test("returns correct values when 1 child", () => {
//     const sampleHierarchyData: HierarchyBase = {name: "starting name", id:"myid", ontology: sampleOntology, children:[{name: 'myName', id: 'myName',ontology: sampleOntology}]}
//     const result = addHierarchy(sampleHierarchyData, 0,"",[]);
//     expect(result.data._children).toStrictEqual(undefined);
//     expect(result.depth).toStrictEqual(0);
//     expect(result.data.hOrderPosition).toStrictEqual(0);
//     expect(result.height).toStrictEqual(1);
//     expect(result.parent).toStrictEqual(null);
//     if(result.children){
//       expect(result.children.length).toStrictEqual(1);
//       expect(result.children[0].data).toStrictEqual({"descendantCount": 0, "hOrderPosition": 1, "id": "myName", "name": "myName", "ontology": {"alt": "", "backgroundColor": "black", "classUri": "", "color": "white", "faIcon": "", "faUnicode": "N", "icon": "", "iconFallbackText": "", "shape": "roundrectangle"}});
//       expect(result.children[0].depth).toStrictEqual(1);
//       expect(result.children[0].data.hOrderPosition).toStrictEqual(1);
//       expect(result.children[0].height).toStrictEqual(0);
//     }
//     const prepareTreeResult = prepareTreeData(result,{left: 5, top: 5}, 10, 10);
//     expect(prepareTreeResult.length).toStrictEqual(1);
//     expect(prepareTreeResult[0].data.startLeft).toStrictEqual(5);
//     expect(prepareTreeResult[0].data.yPos).toStrictEqual(5);
//     });
//   test("returns correct values when 2 children", () => {
//     const sampleHierarchyData: HierarchyBase = {name: "starting name", id: "startingNameId", ontology: sampleOntology, children:[{name: 'myName', id: 'myName',ontology: sampleOntology},{name: "another one", id: "another one id", ontology: sampleOntology, children: [{name: "child 1", id:"child1Id", ontology: sampleOntology}]}]}
//     const result = addHierarchy(sampleHierarchyData, 0,"",[]);
//     expect(result.data._children).toStrictEqual(undefined);
//     expect(result.depth).toStrictEqual(0);
//     expect(result.data.hOrderPosition).toStrictEqual(0);
//     expect(result.height).toStrictEqual(2);
//     expect(result.parent).toStrictEqual(null);
//     if(result.children){
//       expect(result.children.length).toStrictEqual(2);
//       expect(result.children[0].data).toStrictEqual({"descendantCount": 0, "hOrderPosition": 1, "id": "myName", "name": "myName", "ontology": {"alt": "", "backgroundColor": "black", "classUri": "", "color": "white", "faIcon": "", "faUnicode": "N", "icon": "", "iconFallbackText": "", "shape": "roundrectangle"}});
//       expect(result.children[0].depth).toStrictEqual(1);
//       expect(result.children[0].data.hOrderPosition).toStrictEqual(1);
//       expect(result.children[1].height).toStrictEqual(1);
//       expect(result.children[1].depth).toStrictEqual(1);
//       expect(result.children[1].data.hOrderPosition).toStrictEqual(2);
//       expect(result.children[1].data.name).toStrictEqual("another one");
//       expect(result.children[1].height).toStrictEqual(1);
//     }
//     const prepareTreeResult = prepareTreeData(result,{left: 5, top: 5}, 10, 10);
//     expect(prepareTreeResult.length).toStrictEqual(2);
//     expect(prepareTreeResult[0].data.startLeft).toStrictEqual(5);
//     expect(prepareTreeResult[0].data.yPos).toStrictEqual(5);
//     expect(prepareTreeResult[1].data.startLeft).toStrictEqual(5);
//     expect(prepareTreeResult[1].data.yPos).toStrictEqual(15);
//   });
// })
