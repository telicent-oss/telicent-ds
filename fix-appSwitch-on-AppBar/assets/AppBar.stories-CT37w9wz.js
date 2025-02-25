import{j as r,a as E}from"./DefaultPropsProvider-DNbgpcUu.js";import{w as T,u as w}from"./index-ZIyp8o0e.js";import{A as U}from"./TelicentMark-BKudAHu1.js";import"./DataSetIcon-DIlyQdTH.js";import"./UserIcon-BcU7B7I5.js";import{U as W}from"./UserStatus-BQiFFPMf.js";import{U as A}from"./UserProfile-BJO54jgr.js";import{T as t}from"./Text-Ahx6-q7X.js";import"./Chip-CyBXFftR.js";import"./TreeView-DHCao6gM.js";import"./UserProfileContent-yoIvuCQa.js";import"./FlexBox-BJwfCYMI.js";import{B as k}from"./Button-C0Yj0oP_.js";import"./MiniSearchAutocomplete-B4_esUTP.js";import"./SearchBox-7_tbsSSQ.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./styled-CnbWPWMk.js";import"./generateUtilityClasses-BwpiFGlX.js";import"./SvgIcon-f13RXC8a.js";import"./FlexGrid-6cs-9T32.js";import"./styled-CJCnePQF.js";import"./useTheme-DL-c3i-n.js";import"./useThemeProps-BJjG5po3.js";import"./useTheme-DwzLSGxO.js";import"./Container-C9brU7ym.js";import"./Box-DvRWFL1p.js";import"./Paper-Ckbq7hqr.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./Popover-DgOg7RQ1.js";import"./utils-BZ12QECu.js";import"./index-BXZwOzqJ.js";import"./ButtonBase-DmgBfAJK.js";import"./index-mSkvzYyn.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-CmhKvED9.js";import"./index-Be18FJgs.js";import"./colorManipulator-CrJ3UZt4.js";import"./PrimaryButton-Bk2zQLuP.js";import"./Button-BtgnMJoT.js";import"./OutlinedInput-mb-vB4Iz.js";import"./InputBase-NQ0YUKgr.js";import"./GlobalStyles-BCFt_Ksp.js";const Nr={title:"Surfaces/AppBar",component:U,tags:["autodocs"],parameters:{docs:{description:{component:"The AppBar component provides a top navigation bar that supports branding, actions, and more."}},layout:"fullscreen"}},a={},e={args:{appName:"Design System"}},o={args:{...e.args,endChild:r(A,{fullName:"Han Solo",children:E(W,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:i})=>{const m=T(i);await w.click(m.getByRole("button",{name:"user-profile"}))}},s={args:{appName:"Design System",version:"1.2.0"}},n={args:{...e.args,endChild:r(k,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})},play:async({canvasElement:i})=>{const m=T(i);await w.click(m.getByRole("button",{name:"user-profile"}))}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,h,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    endChild: <UserProfile fullName="Han Solo">
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
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var v,y,N;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appName: "Design System",
    version: "1.2.0"
  }
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var x,B,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
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
}`,...(b=(B=n.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const xr=["Example","WithAppName","WithUserProfile","WithVersionNumber","WithSignOutButton"];export{a as Example,e as WithAppName,n as WithSignOutButton,o as WithUserProfile,s as WithVersionNumber,xr as __namedExportsOrder,Nr as default};
