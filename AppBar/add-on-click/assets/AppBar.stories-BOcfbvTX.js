import{j as r,a as b}from"./DefaultPropsProvider-DNbgpcUu.js";import{w as U,u as W}from"./index-ZIyp8o0e.js";import{A}from"./TelicentMark-B_0gqdE0.js";import"./DataSetIcon-DIlyQdTH.js";import"./UserIcon-BcU7B7I5.js";import{U as w}from"./UserStatus-BQiFFPMf.js";import{U as E}from"./UserProfile-BJO54jgr.js";import{T as t}from"./Text-Ahx6-q7X.js";import"./Chip-CyBXFftR.js";import"./TreeView-DHCao6gM.js";import"./UserProfileContent-yoIvuCQa.js";import"./FlexBox-BJwfCYMI.js";import{B as H}from"./Button-C0Yj0oP_.js";import"./MiniSearchAutocomplete-B4_esUTP.js";import"./SearchBox-Dh_vrcZV.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./styled-CnbWPWMk.js";import"./generateUtilityClasses-BwpiFGlX.js";import"./SvgIcon-f13RXC8a.js";import"./FlexGrid-6cs-9T32.js";import"./styled-CJCnePQF.js";import"./useTheme-DL-c3i-n.js";import"./useThemeProps-BJjG5po3.js";import"./useTheme-DwzLSGxO.js";import"./Container-C9brU7ym.js";import"./Box-DvRWFL1p.js";import"./Paper-Ckbq7hqr.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./Popover-DgOg7RQ1.js";import"./utils-BZ12QECu.js";import"./index-BXZwOzqJ.js";import"./ButtonBase-DmgBfAJK.js";import"./index-mSkvzYyn.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-CmhKvED9.js";import"./index-Be18FJgs.js";import"./colorManipulator-CrJ3UZt4.js";import"./PrimaryButton-Bk2zQLuP.js";import"./Button-BtgnMJoT.js";import"./OutlinedInput-mb-vB4Iz.js";import"./InputBase-NQ0YUKgr.js";import"./GlobalStyles-BCFt_Ksp.js";const xr={title:"Surfaces/AppBar",component:A,tags:["autodocs"],parameters:{docs:{description:{component:"The AppBar component provides a top navigation bar that supports branding, actions, and more."}},layout:"fullscreen"}},a={},e={args:{appName:"Design System"}},o={args:{...e.args,endChild:r(E,{fullName:"Han Solo",children:b(w,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:B})=>{const T=U(B);await W.click(T.getByRole("button",{name:"user-profile"}))}},s={args:{appName:"Design System",version:"1.2.0"}},i={args:{...e.args,endChild:r(H,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}};var n,m,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,g,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,S,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    appName: "Design System",
    version: "1.2.0"
  }
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var v,x,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const yr=["Example","WithAppName","WithUserProfile","WithVersionNumber","WithSignOutButton"];export{a as Example,e as WithAppName,i as WithSignOutButton,o as WithUserProfile,s as WithVersionNumber,yr as __namedExportsOrder,xr as default};
