import{f as i,w as n,u as o}from"./index-BYX12aAs.js";import{S as s}from"./SearchBox-CzktpEcz.js";import"./DefaultPropsProvider-wYCywQOd.js";import"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";import"./PrimaryButton-DZsoRjXv.js";import"./Button-DyDxAnkG.js";import"./styled-ChcWa6mF.js";import"./generateUtilityClasses-pp8e96Oj.js";import"./ButtonBase-DcPSPA3-.js";import"./useTheme-BjBMDFrD.js";import"./TransitionGroupContext-DFEdpA_P.js";import"./TelicentMark-BD5NecVa.js";import"./SvgIcon-BxldJtJX.js";import"./useTheme-CY03VFFQ.js";import"./Container-D-vVbSn2.js";import"./styled-CCBLWc3l.js";import"./useThemeProps-CJNGtWNs.js";import"./UserIcon-BGtgVsRY.js";import"./index-DXqQCM1T.js";import"./Text-_cnSIpXZ.js";import"./Menu-DCFAtxym.js";import"./index-Dm3RFQs3.js";import"./Popover-d8D_jjQY.js";import"./utils-BliZeF-y.js";import"./index-C5xsJX-I.js";import"./resolveComponentProps-C3Ck13wz.js";import"./Paper-oIsZ1tmm.js";import"./DataSetIcon-B3OWU2WU.js";import"./UserStatus-D_UtrutO.js";import"./UserProfile-Bbz3Ervh.js";import"./index-D3eZ-H7s.js";import"./UserProfileContent-Bjn6beKg.js";import"./createSvgIcon-BOXpFpC1.js";import"./Chip-tNF-LRXo.js";import"./TreeView-CH7EENZ2.js";import"./colorManipulator-BptLWYZN.js";import"./InputBase-DunGkvl2.js";import"./GlobalStyles-DzjJZCP3.js";const W={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:m})=>{const r=n(m);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,e,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(e=t.parameters)==null?void 0:e.docs)==null?void 0:p.source}}};const X=["Example"];export{t as Example,X as __namedExportsOrder,W as default};
