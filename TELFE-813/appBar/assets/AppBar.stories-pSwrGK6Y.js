import{j as r,a as T}from"./DefaultPropsProvider-DNbgpcUu.js";import{w,u as E}from"./index-ZIyp8o0e.js";import{A as U}from"./TelicentMark-De15Myf3.js";import"./DataSetIcon-DIlyQdTH.js";import"./UserIcon-DwazrBOr.js";import{U as W}from"./UserStatus-xp9I05CO.js";import{U as A}from"./UserProfile-C3zC9RxZ.js";import{T as t}from"./Text-Ahx6-q7X.js";import"./Chip-CyBXFftR.js";import"./TreeView-DHCao6gM.js";import"./UserProfileContent-yoIvuCQa.js";import"./FlexBox-BJwfCYMI.js";import{B as k}from"./Button-C0Yj0oP_.js";import"./MiniSearchAutocomplete-DirmUy_q.js";import"./SearchBox-B1T5si3A.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./styled-CnbWPWMk.js";import"./SvgIcon-f13RXC8a.js";import"./generateUtilityClasses-BwpiFGlX.js";import"./FlexGrid-6cs-9T32.js";import"./styled-CJCnePQF.js";import"./useTheme-DL-c3i-n.js";import"./useThemeProps-BJjG5po3.js";import"./useTheme-DwzLSGxO.js";import"./Container-C9brU7ym.js";import"./index-mSkvzYyn.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./ButtonBase-DmgBfAJK.js";import"./Box-DvRWFL1p.js";import"./Paper-Ckbq7hqr.js";import"./index-Be18FJgs.js";import"./Popover-CeXxOtTV.js";import"./utils-BZ12QECu.js";import"./index-BXZwOzqJ.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-CmhKvED9.js";import"./colorManipulator-CrJ3UZt4.js";import"./PrimaryButton-Bk2zQLuP.js";import"./Button-BtgnMJoT.js";import"./OutlinedInput-DHvNKshi.js";import"./InputBase-BnzlV8k3.js";import"./GlobalStyles-BCFt_Ksp.js";const Nr={title:"Surfaces/AppBar",component:U,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={},a={args:{appName:"Design System"}},o={args:{...a.args,action:r(A,{fullName:"Han Solo",children:T(W,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:i})=>{const m=w(i);await E.click(m.getByRole("button",{name:"user-profile"}))}},s={args:{appName:"Search",version:"1.2.0"}},n={args:{...a.args,action:r(k,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})},play:async({canvasElement:i})=>{const m=w(i);await E.click(m.getByRole("button",{name:"user-profile"}))}};var p,c,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var f,S,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    action: <UserProfile fullName="Han Solo">
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
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var v,y,N;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appName: "Search",
    version: "1.2.0"
  }
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var x,B,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    action: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "user-profile"
    }));
  }
}`,...(b=(B=n.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const xr=["Example","WithAppName","WithUserProfile","WithVersionNumber","WithSignOutButton"];export{e as Example,a as WithAppName,n as WithSignOutButton,o as WithUserProfile,s as WithVersionNumber,xr as __namedExportsOrder,Nr as default};
