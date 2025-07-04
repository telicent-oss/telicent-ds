import{f as e,w as n,u as o}from"./index-ZIyp8o0e.js";import{S as s}from"./FeatureMap-B0fgVzte.js";import"./DefaultPropsProvider-D0TKvr2r.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./iframe-DlCn82A2.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-CgZ2qZ68.js";import"./colorManipulator-CMgB7LGh.js";import"./useTheme-Dxx0vh99.js";import"./ThemeProvider-A6jUefSh.js";import"./index-DQBVfwdU.js";import"./UserProfile-CtzeDZHV.js";import"./Text-UfnIhWrZ.js";import"./Typography-CYbZWU4W.js";import"./styled-C_kIfZUr.js";import"./generateUtilityClasses-BJi7wJCo.js";import"./UserIcon-CjSGJTuU.js";import"./SvgIcon-DhTOb2oP.js";import"./index-_4_hgnnR.js";import"./useTheme-CEroDfaK.js";import"./FlexBox-DGOTTOBh.js";import"./styled-DYuO2v9q.js";import"./useThemeProps-PRgA7wjr.js";import"./createSvgIcon-vyKw-wJg.js";import"./Popover-Bh0RZbgT.js";import"./utils-rL4B1Bvl.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Paper-CMbjB9GA.js";import"./ButtonBase-BBhFMBvz.js";import"./TreeView-DaBv5O9j.js";import"./Divider-D5n9DrrQ.js";import"./FlexGrid-DdKVSySu.js";import"./Container-DJkxIbTb.js";import"./Box-CeeIJm_P.js";import"./DataSetIcon-DRNY1TGD.js";import"./Chip-CAB14pnD.js";import"./UserProfileContent-ykWcPCsh.js";import"./LinearProgress-lWF5JMRG.js";import"./Button-DsRoEJUk.js";import"./Button-Da6qIdfX.js";import"./Card-66pTiq-p.js";import"./CardActions-CwcmbZpP.js";import"./Popover-BmuZ8Ngm.js";import"./ErrorFallback-6MQAUkRQ.js";import"./ErrorFallbackText-BFmQh512.js";import"./ErrorFallbackWrapper-Dmy6f-WG.js";const pt={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:e()}},t={args:{placeholder:"Search all"},play:async({canvasElement:i})=>{const r=n(i);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const mt=["Example"];export{t as Example,mt as __namedExportsOrder,pt as default};
