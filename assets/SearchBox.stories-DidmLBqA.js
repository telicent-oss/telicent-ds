import{f as i,w as n,u as o}from"./index-R3fZrLBo.js";import{S as s}from"./SearchBox-DbeVrl_a.js";import"./DefaultPropsProvider-BXx8Lxdp.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./PrimaryButton-CS5XDf_-.js";import"./Button-CHvfK-Sl.js";import"./styled-CsMkIDyT.js";import"./generateUtilityClasses-DUdad9y1.js";import"./ButtonBase-Ds7yUReY.js";import"./useTheme-BLQURKm4.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./TelicentMark-BdsZTeAB.js";import"./SvgIcon-Cq6PF86G.js";import"./useTheme-BwmRXO23.js";import"./Container-esCjEV6P.js";import"./styled-B1p8gUNN.js";import"./useThemeProps-CoIeOuDd.js";import"./UserIcon-BvSIIGLn.js";import"./index-DXqQCM1T.js";import"./Text-mT4dy15X.js";import"./Menu-Bg9HOTiE.js";import"./index-CwoBbyUx.js";import"./Popover-DDsTovIT.js";import"./utils-DLK7DDdD.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-wJjsJM5R.js";import"./Paper-DPZwIbCZ.js";import"./DataSetIcon-FNIYQS_l.js";import"./UserStatus-D7FRWyvs.js";import"./UserProfile-Uv-GgKh0.js";import"./index-D3eZ-H7s.js";import"./UserProfileContent-cvJ4RGHp.js";import"./createSvgIcon-B5EEX4Vz.js";import"./Chip-CW_ChayI.js";import"./TreeView-DvhyyXg0.js";import"./colorManipulator-BmdrHEzF.js";import"./InputBase-u4bJcWG2.js";import"./GlobalStyles-CxIrBmt2.js";const Y={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:m})=>{const r=n(m);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,e;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
