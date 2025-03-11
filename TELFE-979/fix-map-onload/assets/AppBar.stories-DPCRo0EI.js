import{j as r,a as b}from"./DefaultPropsProvider-DFY4ak0N.js";import{w as U,u as W}from"./index-ZIyp8o0e.js";import{A}from"./Divider-5epcxlFX.js";import"./DataSetIcon-BKDYAjaN.js";import"./UserIcon-BBaOMras.js";import{U as w}from"./UserStatus-VnIxDP0V.js";import{U as E}from"./UserProfile-NMAtx-0s.js";import{T as t}from"./Text-CT8Hsbh7.js";import"./Chip-Re9EdDqo.js";import"./TreeView-lTRLpyPE.js";import"./UserProfileContent-BX1sU6gj.js";import"./FlexBox-BeMizPY2.js";import{B as H}from"./Button-DBMYhhyj.js";import"./MiniSearchAutocomplete-D_I6typ4.js";import"./SearchBox-BqTBEfV9.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./SvgIcon-CLrTMJzm.js";import"./styled-B_l5QWFX.js";import"./generateUtilityClasses-BiAO1vNq.js";import"./FlexGrid-C3XaaJ1g.js";import"./styled-CfhjJ1E8.js";import"./useTheme-C0BBsbhz.js";import"./useThemeProps-BLcls0bU.js";import"./useTheme-BWRXETY3.js";import"./Container-UgwXBVDq.js";import"./Box-BDaEidkD.js";import"./Paper-CPACjhlu.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./Popover-Am7Us3VU.js";import"./utils-CYUpNy-w.js";import"./index-BXZwOzqJ.js";import"./ButtonBase-84En7ikD.js";import"./index-mSkvzYyn.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-CtD0QUEE.js";import"./index-Cgu61Deq.js";import"./colorManipulator-CBCqAaIV.js";import"./PrimaryButton-CcR-pRuA.js";import"./Button-bPCeHTF6.js";import"./OutlinedInput-irM7CcaK.js";import"./InputBase-jKBwaCDv.js";import"./GlobalStyles-BXgVjq2T.js";const xr={title:"Surfaces/AppBar",component:A,tags:["autodocs"],parameters:{docs:{description:{component:"The AppBar component provides a top navigation bar that supports branding, actions, and more."}},layout:"fullscreen"}},a={},e={args:{appName:"Design System"}},o={args:{...e.args,endChild:r(E,{fullName:"Han Solo",children:b(w,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:B})=>{const T=U(B);await W.click(T.getByRole("button",{name:"user-profile"}))}},s={args:{appName:"Design System",version:"1.2.0"}},i={args:{...e.args,endChild:r(H,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}};var n,m,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
