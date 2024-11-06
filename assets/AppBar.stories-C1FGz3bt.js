import{j as r,a as S}from"./DefaultPropsProvider-wYCywQOd.js";import{w as x,u as h}from"./index-BYX12aAs.js";import{A as T}from"./TelicentMark-BD5NecVa.js";import"./DataSetIcon-B3OWU2WU.js";import"./UserIcon-BGtgVsRY.js";import{U}from"./UserStatus-D_UtrutO.js";import{U as v}from"./UserProfile-Bbz3Ervh.js";import{T as t}from"./Text-_cnSIpXZ.js";import"./Chip-tNF-LRXo.js";import"./TreeView-CH7EENZ2.js";import"./UserProfileContent-Bjn6beKg.js";import"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";import"./styled-ChcWa6mF.js";import"./SvgIcon-BxldJtJX.js";import"./generateUtilityClasses-pp8e96Oj.js";import"./useTheme-CY03VFFQ.js";import"./useTheme-BjBMDFrD.js";import"./Container-D-vVbSn2.js";import"./styled-CCBLWc3l.js";import"./useThemeProps-CJNGtWNs.js";import"./index-DXqQCM1T.js";import"./Menu-DCFAtxym.js";import"./ButtonBase-DcPSPA3-.js";import"./TransitionGroupContext-DFEdpA_P.js";import"./index-Dm3RFQs3.js";import"./Popover-d8D_jjQY.js";import"./utils-BliZeF-y.js";import"./index-C5xsJX-I.js";import"./resolveComponentProps-C3Ck13wz.js";import"./Paper-oIsZ1tmm.js";import"./index-D3eZ-H7s.js";import"./createSvgIcon-BOXpFpC1.js";import"./colorManipulator-BptLWYZN.js";const tr={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,p,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,u,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    userProfile: <UserProfile fullName="Han Solo">
        <UserStatus fullName="Han Solo">
          <Text variant="subtitle1">Roles</Text>
          <Text>Smuggler</Text>
          <Text>Scoundrel</Text>
          <Text>Hero</Text>
        </UserStatus>
      </UserProfile>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "user-profile"
    }));
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const or=["Example","WithAppName","WithUserProfile"];export{o as Example,e as WithAppName,a as WithUserProfile,or as __namedExportsOrder,tr as default};
