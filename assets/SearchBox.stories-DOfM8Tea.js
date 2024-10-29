import{f as i,w as n,u as o}from"./index-R3fZrLBo.js";import{S as s}from"./SearchBox-CJnIwXEI.js";import"./DefaultPropsProvider-CCTKYLI5.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./PrimaryButton-C3DkoPa_.js";import"./Button-nE7jradu.js";import"./styled-DM1eSaGT.js";import"./generateUtilityClasses-C2NGeXhi.js";import"./ButtonBase-BqsTvKzc.js";import"./useTheme-DuiTjpwn.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./TelicentMark-FWLN8l0J.js";import"./SvgIcon-CuDVGt8p.js";import"./useTheme-K53Y7m-L.js";import"./Container-Dr9IOSAC.js";import"./styled-DZ6MJxE4.js";import"./useThemeProps-DN-sF8k0.js";import"./UserIcon-DKSQbTWz.js";import"./index-DXqQCM1T.js";import"./Text-Bdpz0hNF.js";import"./Menu-D3xmr7gS.js";import"./index-CUgaF5q8.js";import"./Popover-BCeiGNac.js";import"./utils-CEb430w8.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-Czjqrhj_.js";import"./Paper-ak1QantU.js";import"./DataSetIcon-DkWUFR7X.js";import"./UserStatus-CNBIhQI8.js";import"./UserProfile-D2afB5Fh.js";import"./index-D3eZ-H7s.js";import"./UserProfileContent-D4jv_867.js";import"./createSvgIcon-D9Qcjewg.js";import"./Chip-CX7AHr5i.js";import"./TreeView-BzdUw-b2.js";import"./colorManipulator-D9TaW8UO.js";import"./InputBase-Ba1XK4-_.js";import"./GlobalStyles-CDC_EO1t.js";const Y={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:m})=>{const r=n(m);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,e;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
