import{f as i,w as n,u as o}from"./index-ZIyp8o0e.js";import{S as s}from"./SearchBox-7_tbsSSQ.js";import"./DefaultPropsProvider-DNbgpcUu.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./PrimaryButton-Bk2zQLuP.js";import"./Button-BtgnMJoT.js";import"./styled-CnbWPWMk.js";import"./generateUtilityClasses-BwpiFGlX.js";import"./ButtonBase-DmgBfAJK.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./TelicentMark-BKudAHu1.js";import"./SvgIcon-f13RXC8a.js";import"./FlexGrid-6cs-9T32.js";import"./styled-CJCnePQF.js";import"./useTheme-DL-c3i-n.js";import"./useThemeProps-BJjG5po3.js";import"./useTheme-DwzLSGxO.js";import"./Container-C9brU7ym.js";import"./FlexBox-BJwfCYMI.js";import"./Box-DvRWFL1p.js";import"./Text-Ahx6-q7X.js";import"./Paper-Ckbq7hqr.js";import"./DataSetIcon-DIlyQdTH.js";import"./UserIcon-BcU7B7I5.js";import"./UserStatus-BQiFFPMf.js";import"./UserProfile-BJO54jgr.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-CmhKvED9.js";import"./Popover-DgOg7RQ1.js";import"./utils-BZ12QECu.js";import"./index-BXZwOzqJ.js";import"./index-Be18FJgs.js";import"./index-mSkvzYyn.js";import"./Chip-CyBXFftR.js";import"./TreeView-DHCao6gM.js";import"./colorManipulator-CrJ3UZt4.js";import"./UserProfileContent-yoIvuCQa.js";import"./InputBase-NQ0YUKgr.js";import"./GlobalStyles-BCFt_Ksp.js";const X={title:"Inputs/Search/SearchBox",component:s,tags:["autodocs"],args:{onSearch:i()}},t={args:{placeholder:"Search all"},play:async({canvasElement:m})=>{const r=n(m);await o.type(r.getByRole("searchbox"),"data catalog"),await o.click(r.getByRole("button",{name:"search"}))}};var a,e,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(e=t.parameters)==null?void 0:e.docs)==null?void 0:p.source}}};const Y=["Example"];export{t as Example,Y as __namedExportsOrder,X as default};
