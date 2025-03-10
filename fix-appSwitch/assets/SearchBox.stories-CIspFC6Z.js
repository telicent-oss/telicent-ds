import{f as i,w as n,u as o}from"./index-ZIyp8o0e.js";import{S as s}from"./SearchBox-tlH6q4A8.js";import"./DefaultPropsProvider-DFY4ak0N.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./PrimaryButton-CcR-pRuA.js";import"./Button-bPCeHTF6.js";import"./styled-B_l5QWFX.js";import"./generateUtilityClasses-BiAO1vNq.js";import"./ButtonBase-84En7ikD.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./Divider-DpEjpyGo.js";import"./SvgIcon-CLrTMJzm.js";import"./FlexGrid-C3XaaJ1g.js";import"./styled-CfhjJ1E8.js";import"./useTheme-C0BBsbhz.js";import"./useThemeProps-BLcls0bU.js";import"./useTheme-BWRXETY3.js";import"./Container-UgwXBVDq.js";import"./FlexBox-BeMizPY2.js";import"./Box-BDaEidkD.js";import"./Text-CT8Hsbh7.js";import"./Paper-CPACjhlu.js";import"./GridIcon-DjahIitO.js";import"./DataSetIcon-BKDYAjaN.js";import"./UserIcon-BBaOMras.js";import"./UserStatus-w2sRt1K6.js";import"./UserProfile-DpZoHZAf.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-CtD0QUEE.js";import"./Popover-T-ssfcJQ.js";import"./utils-CYUpNy-w.js";import"./index-BXZwOzqJ.js";import"./Menu-DMXuPVgm.js";import"./index-Cgu61Deq.js";import"./AppSwitch-ir5KX2nX.js";import"./index-mSkvzYyn.js";import"./Chip-Re9EdDqo.js";import"./TreeView-lTRLpyPE.js";import"./colorManipulator-CBCqAaIV.js";import"./UserProfileContent-BX1sU6gj.js";import"./InputBase-ADzsqtbQ.js";import"./GlobalStyles-BXgVjq2T.js";const $={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:e})=>{const r=n(e);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
