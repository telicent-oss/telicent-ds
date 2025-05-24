import{f as i,w as n,u as o}from"./index-ZIyp8o0e.js";import{S as s}from"./FeatureMap-BpWwNR6i.js";import"./DefaultPropsProvider-ZjhccZnB.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./iframe-B1AqCF5U.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-CdpnkA_M.js";import"./colorManipulator-zO1DXvwL.js";import"./useTheme-BAsjQMSl.js";import"./index-B47g9DW4.js";import"./UserProfile-DMI248yj.js";import"./Text-Chcp7No1.js";import"./styled-BT4RjJzR.js";import"./generateUtilityClasses-Ope_UxWr.js";import"./UserIcon-B6OSrQE1.js";import"./SvgIcon-0MOxWfTP.js";import"./index-_4_hgnnR.js";import"./useTheme-DIIM1Wcn.js";import"./FlexBox-B-k7Myue.js";import"./styled-DYky2rJa.js";import"./useThemeProps-BAuVkQ7A.js";import"./createSvgIcon-DQcKRcx_.js";import"./Popover-rSPSjYHH.js";import"./utils-C6E22oQ1.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Paper-Cul9nzd-.js";import"./ButtonBase-GdOU_fqa.js";import"./TreeView-DJcHSySb.js";import"./Divider-CN8sNTUF.js";import"./FlexGrid-Y8kMg0vc.js";import"./Container-CDaxYc3T.js";import"./Box-DVpyV88R.js";import"./DataSetIcon-BOfCbmrC.js";import"./Chip-DHeIEnT7.js";import"./UserProfileContent-DXjV8-O8.js";import"./LinearProgress-DD-ZDPzk.js";import"./Button-DE4S1_XH.js";import"./Button-DG02f22Q.js";import"./Card-BHi_PHH0.js";import"./CardActions-C035-885.js";import"./Popover-Dnj75uG4.js";const $={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:e})=>{const r=n(e);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    placeholder: "Search all"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("searchbox"), "data catalog");
    await userEvent.click(canvas.getByRole("button", {
      name: "search"
    }));
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const tt=["Example"];export{t as Example,tt as __namedExportsOrder,$ as default};
