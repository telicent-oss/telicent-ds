import{f as i,w as n,u as o}from"./index-R3fZrLBo.js";import{S as s}from"./SearchBox-CdSPWAOb.js";import"./DefaultPropsProvider-_Lew82y0.js";import"./extends-l96ZYLL7.js";import"./index-BBkUAzwr.js";import"./PrimaryButton-C4l5l8uh.js";import"./Button-CERsBFR3.js";import"./styled-BJBODTqz.js";import"./generateUtilityClasses-Dvcw8qpp.js";import"./ButtonBase-_xvnSuiZ.js";import"./useTheme-D3h9sCof.js";import"./TransitionGroupContext-BxlS8Jd0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./TelicentMark-Bi5F1Jok.js";import"./SvgIcon-nOE-MXQL.js";import"./useTheme-BFzPSdMH.js";import"./Container-CYtt4Xmd.js";import"./styled-CkjOwDsr.js";import"./useThemeProps-Q6_fKbvr.js";import"./UserIcon-BW6od35l.js";import"./index-DXqQCM1T.js";import"./Text-CGTJRmaL.js";import"./Menu-BEBIUrjS.js";import"./index-ChMeXycY.js";import"./Popover-Hcm-BVgZ.js";import"./utils-DO1XUlS6.js";import"./index-COG_gdbT.js";import"./resolveComponentProps-BX18Z20f.js";import"./Paper-Bh8jhr9X.js";import"./DataSetIcon-DvnsXFdB.js";import"./UserStatus-mlX5DDKl.js";import"./UserProfile-CDHHUDNw.js";import"./index-_4_hgnnR.js";import"./UserProfileContent-CJyar8S6.js";import"./createSvgIcon-6016U0XV.js";import"./Chip-D-qwnX-7.js";import"./TreeView-BepDGeKR.js";import"./colorManipulator-D-wf997I.js";import"./InputBase-Bw5VxE4I.js";import"./GlobalStyles-CZ9BLhYK.js";const Y={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:m})=>{const r=n(m);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,e;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(e=(p=t.parameters)==null?void 0:p.docs)==null?void 0:e.source}}};const Z=["Example"];export{t as Example,Z as __namedExportsOrder,Y as default};
