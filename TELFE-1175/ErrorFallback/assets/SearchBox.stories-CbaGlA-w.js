import{f as e,w as n,u as o}from"./index-ZIyp8o0e.js";import{S as s}from"./FeatureMap-Bwaf79Hw.js";import"./DefaultPropsProvider-BSWuto10.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./iframe-CrtBRLm1.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-WG7A9Agw.js";import"./colorManipulator-BzVklsQt.js";import"./useTheme-DqUUtKyf.js";import"./ThemeProvider-D44tmZDD.js";import"./index-BqeinIc9.js";import"./UserProfile-DjzvMCHd.js";import"./Text-Lb7f3cNw.js";import"./Typography-Ccepgalm.js";import"./styled-BrIIThlA.js";import"./generateUtilityClasses-D9eTBXKL.js";import"./UserIcon-BB6Q81eU.js";import"./SvgIcon-Bf2yV0bL.js";import"./index-_4_hgnnR.js";import"./useTheme-D8w0kg7X.js";import"./FlexBox-DHo5zb4e.js";import"./styled-C9Vn0W8F.js";import"./useThemeProps-B57Xyf65.js";import"./createSvgIcon-Ciwc8VzQ.js";import"./Popover-G0nBJInY.js";import"./utils-wFC7UK9Z.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Paper-BLsXTBnp.js";import"./ButtonBase-BTGFTk3s.js";import"./TreeView-BjYYmfXW.js";import"./Divider-DI2hROvX.js";import"./FlexGrid-DspDwyzG.js";import"./Container-DjeFMLBs.js";import"./Box-DgiOPB4O.js";import"./DataSetIcon-DNkwuXqd.js";import"./Chip-AKyoKhvy.js";import"./UserProfileContent-z8bbLtAI.js";import"./LinearProgress-CTXa14kf.js";import"./Button-Ry6T39J5.js";import"./Button-DVJTHr7w.js";import"./Card-yePQ2Hsf.js";import"./CardActions-D4NK6-su.js";import"./Popover-C3uATu_3.js";import"./ErrorFallback-BkGNXVlU.js";import"./ErrorFallbackText-BHFGb7nB.js";import"./ErrorFallbackWrapper-Dp8Qdhpd.js";const pt={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:e()}},t={args:{placeholder:"Search all"},play:async({canvasElement:i})=>{const r=n(i);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
