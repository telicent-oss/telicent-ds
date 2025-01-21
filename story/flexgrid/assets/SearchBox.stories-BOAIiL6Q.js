import{f as i,w as n,u as o}from"./index-3Lpd23TA.js";import{S as s}from"./SearchBox-DhAQAdKj.js";import"./DefaultPropsProvider-D55Wj1Sq.js";import"./jsx-runtime-Dwss98Nb.js";import"./index-Du_IP5cC.js";import"./PrimaryButton-CNV22jX5.js";import"./Button-C2NOfWvY.js";import"./styled-aipfhsBS.js";import"./generateUtilityClasses-Cw-uw2o7.js";import"./ButtonBase-DU-mBhfv.js";import"./TransitionGroupContext-DmssZhy-.js";import"./TelicentMark-D90GhUX1.js";import"./SvgIcon-sXCG3KbY.js";import"./FlexGrid-Ckvfi2hB.js";import"./styled-zinR3__d.js";import"./useTheme-CtImnkTu.js";import"./useThemeProps-DM2VlJkO.js";import"./useTheme-B2MLISHX.js";import"./Container-DApHUUiT.js";import"./UserIcon-AsBRbcvg.js";import"./index-ans_9-if.js";import"./Text-CE-o78-6.js";import"./Menu-qgl2HGHf.js";import"./index-DfQQp3ks.js";import"./Popover-COQfAdtM.js";import"./utils-CtVJ-2PG.js";import"./index-DtoIJoF2.js";import"./resolveComponentProps-UrK7gkxe.js";import"./Paper-K73ck01N.js";import"./Box-BykdrlxJ.js";import"./DataSetIcon-DxllRCWx.js";import"./UserStatus-DI5VU-6c.js";import"./UserProfile-BKUliVBo.js";import"./index-Df2kh431.js";import"./UserProfileContent-DkFU9lUW.js";import"./createSvgIcon-BfNnQ0Hm.js";import"./Chip-CMQyemFA.js";import"./TreeView-0gM7jf_m.js";import"./colorManipulator-oYQv4ILr.js";import"./InputBase-DLsUdSbh.js";import"./GlobalStyles-DbCXTN5i.js";const Y={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:m})=>{const r=n(m);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,e;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
