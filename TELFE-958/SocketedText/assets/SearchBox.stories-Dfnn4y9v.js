import{f as i,w as n,u as o}from"./index-ZIyp8o0e.js";import{S as s}from"./SearchBox-D0AMvOqc.js";import"./DefaultPropsProvider-mMqPhAz4.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./PrimaryButton-BJTYkPlf.js";import"./Button-B6d-5iSa.js";import"./styled-Coa2-1Nt.js";import"./generateUtilityClasses-CjU4Pey7.js";import"./ButtonBase-odUV3zMF.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./TelicentMark-DH32O44n.js";import"./SvgIcon-9htPR1de.js";import"./FlexGrid-CF3-QHHR.js";import"./styled-BLcKEFBG.js";import"./useTheme-Dc11I-P9.js";import"./useThemeProps-B38RGH21.js";import"./useTheme-Dl-fNHlA.js";import"./Container-Db-Htp1t.js";import"./FlexBox-DBC_blm8.js";import"./index-UccViGix.js";import"./Text-D0yBQujI.js";import"./Typography-RFRigqiF.js";import"./UserIcon-Dnfx85jE.js";import"./index-DzKG53lc.js";import"./Popover-RATKuaxW.js";import"./utils-CXnKKwNB.js";import"./index-BXZwOzqJ.js";import"./Paper-BpSJjDAT.js";import"./Box-DOOM5p70.js";import"./DataSetIcon-Be5MVSv8.js";import"./UserStatus-Bncr81G0.js";import"./UserProfile-BapVZ_sB.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-k3y9_sX-.js";import"./Chip-C1kB__FQ.js";import"./TreeView-DF6vTG9G.js";import"./colorManipulator-BnJ1IiY5.js";import"./UserProfileContent-CL7-SJ5i.js";import"./InputBase-CfzJDZPv.js";import"./GlobalStyles-XDDu4tWV.js";const Y={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:m})=>{const r=n(m);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,p,e;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
