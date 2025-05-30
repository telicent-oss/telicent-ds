import{f as i,w as n,u as o}from"./index-ZIyp8o0e.js";import{S as s}from"./FeatureMap-CzXANP9p.js";import"./DefaultPropsProvider-ZTfV1Zta.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./iframe-BwjqXAZ9.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-BXfJmZRt.js";import"./colorManipulator-CwxWA58Q.js";import"./useTheme-BusmB1QR.js";import"./index-A9x96Awu.js";import"./UserProfile-pLaLHjzb.js";import"./Text-CGNagbCi.js";import"./styled-jMWuTdIG.js";import"./generateUtilityClasses-DD2dCBy1.js";import"./UserIcon-DmjklXFK.js";import"./SvgIcon-DM7CEwi3.js";import"./index-_4_hgnnR.js";import"./useTheme-DUKUC1WO.js";import"./FlexBox-DADmAnZF.js";import"./styled-NI2V6uj_.js";import"./useThemeProps-BdYmkKoE.js";import"./createSvgIcon-B0Qv8yy1.js";import"./Popover-CxoUVLIl.js";import"./utils-4IBA19w2.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Paper-BtR36xUR.js";import"./ButtonBase-B36byFIM.js";import"./TreeView-lHYan-nM.js";import"./Divider-U0HyYZdi.js";import"./FlexGrid-CLKmKS3u.js";import"./Container-C8J4gsN5.js";import"./Box-DBuGxpzg.js";import"./DataSetIcon-CHIrb2GC.js";import"./Chip-Bi37CbO4.js";import"./UserProfileContent-B92njon_.js";import"./LinearProgress-ChpUz72G.js";import"./Button-D3scS8V2.js";import"./Button-DC-CYhQc.js";import"./Card-BfV-nf9i.js";import"./CardActions-C19l4eM5.js";import"./Popover-C2trNH_s.js";const $={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:e})=>{const r=n(e);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
