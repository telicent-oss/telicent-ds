import{j as r,a as S}from"./DefaultPropsProvider-DNbgpcUu.js";import{w as x,u as h}from"./index-ZIyp8o0e.js";import{A as T}from"./TelicentMark-O0gx9z2S.js";import"./DataSetIcon-DIlyQdTH.js";import"./UserIcon-DwazrBOr.js";import{U}from"./UserStatus-Dn2Ky5kj.js";import{U as v}from"./UserProfile-C3zC9RxZ.js";import{T as t}from"./Text-Ahx6-q7X.js";import"./Chip-CyBXFftR.js";import"./TreeView-DHCao6gM.js";import"./UserProfileContent-yoIvuCQa.js";import"./FlexBox-BJwfCYMI.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./styled-CnbWPWMk.js";import"./SvgIcon-f13RXC8a.js";import"./generateUtilityClasses-BwpiFGlX.js";import"./FlexGrid-6cs-9T32.js";import"./styled-CJCnePQF.js";import"./useTheme-DL-c3i-n.js";import"./useThemeProps-BJjG5po3.js";import"./useTheme-DwzLSGxO.js";import"./Container-C9brU7ym.js";import"./index-mSkvzYyn.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./ButtonBase-DmgBfAJK.js";import"./Box-DvRWFL1p.js";import"./Paper-Ckbq7hqr.js";import"./index-Be18FJgs.js";import"./Popover-CeXxOtTV.js";import"./utils-BZ12QECu.js";import"./index-BXZwOzqJ.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-CmhKvED9.js";import"./colorManipulator-CrJ3UZt4.js";const or={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,p,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ar=["Example","WithAppName","WithUserProfile"];export{o as Example,e as WithAppName,a as WithUserProfile,ar as __namedExportsOrder,or as default};
