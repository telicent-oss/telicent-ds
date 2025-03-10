import{j as r,a as b}from"./DefaultPropsProvider-DFY4ak0N.js";import{w as U,u as W}from"./index-ZIyp8o0e.js";import{A}from"./Divider-DpEjpyGo.js";import"./DataSetIcon-BKDYAjaN.js";import"./GridIcon-DjahIitO.js";import"./UserIcon-BBaOMras.js";import{U as w}from"./UserStatus-w2sRt1K6.js";import{U as E}from"./UserProfile-DpZoHZAf.js";import{T as e}from"./Text-CT8Hsbh7.js";import"./AppSwitch-ir5KX2nX.js";import"./Chip-Re9EdDqo.js";import"./TreeView-lTRLpyPE.js";import"./UserProfileContent-BX1sU6gj.js";import"./FlexBox-BeMizPY2.js";import{B as H}from"./Button-DBMYhhyj.js";import"./MiniSearchAutocomplete-OEM6WVFp.js";import"./SearchBox-tlH6q4A8.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./SvgIcon-CLrTMJzm.js";import"./styled-B_l5QWFX.js";import"./generateUtilityClasses-BiAO1vNq.js";import"./FlexGrid-C3XaaJ1g.js";import"./styled-CfhjJ1E8.js";import"./useTheme-C0BBsbhz.js";import"./useThemeProps-BLcls0bU.js";import"./useTheme-BWRXETY3.js";import"./Container-UgwXBVDq.js";import"./Box-BDaEidkD.js";import"./Paper-CPACjhlu.js";import"./Menu-DMXuPVgm.js";import"./ButtonBase-84En7ikD.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./index-Cgu61Deq.js";import"./Popover-T-ssfcJQ.js";import"./utils-CYUpNy-w.js";import"./index-BXZwOzqJ.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-CtD0QUEE.js";import"./index-mSkvzYyn.js";import"./colorManipulator-CBCqAaIV.js";import"./PrimaryButton-CcR-pRuA.js";import"./Button-bPCeHTF6.js";import"./OutlinedInput-BqMo3FkA.js";import"./InputBase-ADzsqtbQ.js";import"./GlobalStyles-BXgVjq2T.js";const Tr={title:"Surfaces/AppBar",component:A,tags:["autodocs"],parameters:{docs:{description:{component:"The AppBar component provides a top navigation bar that supports branding, actions, and more."}},layout:"fullscreen"}},o={},t={args:{appName:"Design System"}},a={args:{...t.args,endChild:r(E,{fullName:"Han Solo",children:b(w,{fullName:"Han Solo",children:[r(e,{variant:"subtitle1",children:"Roles"}),r(e,{children:"Smuggler"}),r(e,{children:"Scoundrel"}),r(e,{children:"Hero"})]})})},play:async({canvasElement:B})=>{const T=U(B);await W.click(T.getByRole("button",{name:"user-profile"}))}},s={args:{appName:"Design System",version:"1.2.0"}},i={args:{...t.args,endChild:r(H,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}};var n,m,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,g,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,S,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const br=["Example","WithAppName","WithUserProfile","WithVersionNumber","WithSignOutButton"];export{o as Example,t as WithAppName,i as WithSignOutButton,a as WithUserProfile,s as WithVersionNumber,br as __namedExportsOrder,Tr as default};
