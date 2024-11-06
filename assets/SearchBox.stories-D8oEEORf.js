import{f as i,w as n,u as o}from"./index-BYX12aAs.js";import{S as s}from"./SearchBox-Cfv2BrkC.js";import"./DefaultPropsProvider-FmOZEx_L.js";import"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";import"./PrimaryButton-IZ6eR54o.js";import"./Button-D1ibog5D.js";import"./styled-CKqgJSB4.js";import"./generateUtilityClasses-DiIBTi47.js";import"./ButtonBase-W-QUno4-.js";import"./useTheme-C43gVfC6.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./TelicentMark-DUG-e8LG.js";import"./SvgIcon-DyVJVZbK.js";import"./useTheme-DvsKo-w_.js";import"./Container-CYb-wCou.js";import"./styled-DWUfan1z.js";import"./useThemeProps-B4wga_l5.js";import"./UserIcon-Bcuf3TR6.js";import"./index-DXqQCM1T.js";import"./Text-Cr0Hr2-l.js";import"./Menu-Bi_XPucy.js";import"./index-B9uXLkjB.js";import"./Popover-CRxjdS_0.js";import"./utils-EQzFzA8f.js";import"./index-Db_96rXO.js";import"./resolveComponentProps-tsvYd0yv.js";import"./Paper-BL2CR90I.js";import"./DataSetIcon-DTgOixlg.js";import"./UserStatus-haWs16zO.js";import"./UserProfile-CAj6mGoY.js";import"./index-_4_hgnnR.js";import"./UserProfileContent-j0bXDFTy.js";import"./createSvgIcon-D_LOMcdM.js";import"./Chip-DTb4MH_T.js";import"./TreeView-DZSNglu2.js";import"./colorManipulator-uiArQTW6.js";import"./InputBase-aNPH8lVW.js";import"./GlobalStyles-CPwkG7iD.js";const W={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:m})=>{const r=n(m);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,e,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
