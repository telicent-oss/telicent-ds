import{j as r,a as b}from"./DefaultPropsProvider-ZjhccZnB.js";import{w as U,u as W}from"./index-ZIyp8o0e.js";import{A}from"./Divider-B3s3Ycny.js";import"./DataSetIcon-BOfCbmrC.js";import"./UserIcon-B6OSrQE1.js";import{U as w}from"./FeatureMap-Bb3mtyl_.js";import{U as E}from"./UserProfile-rIr5EAoy.js";import{T as t}from"./Text-Chcp7No1.js";import"./Chip-DHeIEnT7.js";import"./TreeView-DJcHSySb.js";import"./UserProfileContent-BjE7fYQQ.js";import"./FlexBox-CHX3w-Ff.js";import{B as H}from"./Button-B_9AedaA.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./SvgIcon-0MOxWfTP.js";import"./styled-BT4RjJzR.js";import"./generateUtilityClasses-Ope_UxWr.js";import"./FlexGrid-Y8kMg0vc.js";import"./styled-DYky2rJa.js";import"./useTheme-BAsjQMSl.js";import"./useThemeProps-BAuVkQ7A.js";import"./useTheme-DIIM1Wcn.js";import"./Container-CDaxYc3T.js";import"./Box-DVpyV88R.js";import"./Paper-Cul9nzd-.js";import"./iframe-fwI_jeFV.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-DeyOpFEN.js";import"./colorManipulator-zO1DXvwL.js";import"./index-B47g9DW4.js";import"./ButtonBase-GdOU_fqa.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Popover-rSPSjYHH.js";import"./utils-C6E22oQ1.js";import"./LinearProgress-DD-ZDPzk.js";import"./Card-BHi_PHH0.js";import"./CardActions-C035-885.js";import"./index-_4_hgnnR.js";import"./Popover-Dnj75uG4.js";import"./Button-DG02f22Q.js";import"./createSvgIcon-DQcKRcx_.js";const xr={title:"Surfaces/AppBar",component:A,tags:["autodocs"],parameters:{docs:{description:{component:"The AppBar component provides a top navigation bar that supports branding, actions, and more."}},layout:"fullscreen"}},a={},e={args:{appName:"Design System"}},o={args:{...e.args,endChild:r(E,{fullName:"Han Solo",children:b(w,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:B})=>{const T=U(B);await W.click(T.getByRole("button",{name:"user-profile"}))}},s={args:{appName:"Design System",version:"1.2.0"}},i={args:{...e.args,endChild:r(H,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}};var n,m,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
