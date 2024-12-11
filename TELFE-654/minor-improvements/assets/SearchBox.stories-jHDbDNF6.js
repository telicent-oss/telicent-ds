import{f as i,w as n,u as o}from"./index-BYX12aAs.js";import{S as s}from"./SearchBox-D-ZiMxBr.js";import"./DefaultPropsProvider-d5Yg5iWD.js";import"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";import"./PrimaryButton-DSKPXw_K.js";import"./Button-CXDsjVp7.js";import"./styled-Cd9OY9py.js";import"./generateUtilityClasses-BeBiso4Q.js";import"./ButtonBase-CMKap0Uh.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./TelicentMark-DFAXVDfB.js";import"./SvgIcon-Bb1DILl7.js";import"./FlexGrid-MRj-uZJ0.js";import"./styled-CtDozGU3.js";import"./useTheme-DmEqPdBI.js";import"./useThemeProps-DiuEeoPc.js";import"./useTheme-BGtMGxNE.js";import"./Container-D4oPmSnh.js";import"./UserIcon-RqCC6dbb.js";import"./index-DXqQCM1T.js";import"./Text-Cbj1DL2Z.js";import"./Menu-TaxySTk9.js";import"./index-CCPe48A9.js";import"./Popover-B0rHy99r.js";import"./utils-CDqwsCRL.js";import"./index-Db_96rXO.js";import"./resolveComponentProps-Br404nvz.js";import"./Paper-DALXAofg.js";import"./Box-CiTSDCSY.js";import"./DataSetIcon-DnVia0td.js";import"./UserStatus-Cl_CYyeD.js";import"./UserProfile-BCkoix6Z.js";import"./index-_4_hgnnR.js";import"./UserProfileContent-Cir61d2T.js";import"./createSvgIcon-DpCKqr1J.js";import"./Chip-Ltw8UzT3.js";import"./TreeView-9MLn2xQ-.js";import"./colorManipulator-C5G8MKjI.js";import"./InputBase-dTwDVS7x.js";import"./GlobalStyles-Cz20pgr8.js";const Y={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:m})=>{const r=n(m);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,e;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
