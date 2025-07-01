import{f as e,w as n,u as o}from"./index-ZIyp8o0e.js";import{S as s}from"./FeatureMap-ConD4Chf.js";import"./DefaultPropsProvider-D0TKvr2r.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./iframe-X1Zl1K9U.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-FhR-d7iy.js";import"./colorManipulator-CMgB7LGh.js";import"./useTheme-Dxx0vh99.js";import"./ThemeProvider-A6jUefSh.js";import"./index-DQBVfwdU.js";import"./UserProfile-DTD8vuL9.js";import"./Text--2kP2Hee.js";import"./Typography-BNgSKp3j.js";import"./styled-BnvLNUCt.js";import"./generateUtilityClasses-Col5HTSz.js";import"./UserIcon-iapurhls.js";import"./SvgIcon-CBAK7Tq2.js";import"./index-_4_hgnnR.js";import"./useTheme-CEroDfaK.js";import"./FlexBox-T1h48bRK.js";import"./styled-S0dBxBnq.js";import"./useThemeProps-PRgA7wjr.js";import"./createSvgIcon-BQydvJ91.js";import"./Popover-k2nIQyS4.js";import"./utils-rL4B1Bvl.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Paper-hXWzzs4m.js";import"./ButtonBase-CFxa-Eso.js";import"./TreeView-Cyn4M4bT.js";import"./Divider-BC0mQ412.js";import"./FlexGrid-CRPoQZwE.js";import"./Container-DkGJoHLf.js";import"./Box-DMeDqlBc.js";import"./DataSetIcon-CG5CkLnb.js";import"./Chip-x1iish4i.js";import"./UserProfileContent-sPlenox6.js";import"./LinearProgress-C5K64B9E.js";import"./Button-CV-yCXgq.js";import"./Button-DaXPrWak.js";import"./Card-WooPyQiw.js";import"./CardActions-DwxXivZM.js";import"./Popover-9AMnJeot.js";import"./ErrorFallback-BC9yatu4.js";import"./ErrorFallbackText-BLoFGelS.js";import"./ErrorFallbackWrapper-C5MQXyTY.js";const pt={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:e()}},t={args:{placeholder:"Search all"},play:async({canvasElement:i})=>{const r=n(i);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
