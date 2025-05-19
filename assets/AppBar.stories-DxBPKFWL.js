import{j as r,a as H}from"./DefaultPropsProvider-ZjhccZnB.js";import{w as j,u as L}from"./index-ZIyp8o0e.js";import{A as V}from"./Divider-CN8sNTUF.js";import"./DataSetIcon-BOfCbmrC.js";import"./UserIcon-B6OSrQE1.js";import{U as E,A as O}from"./FeatureMap-zJ-Kwwn6.js";import{U as P}from"./UserProfile-DMI248yj.js";import{T as a}from"./Text-Chcp7No1.js";import"./Chip-DHeIEnT7.js";import"./TreeView-DJcHSySb.js";import"./UserProfileContent-DXjV8-O8.js";import"./FlexBox-B-k7Myue.js";import{B as k}from"./Button-DE4S1_XH.js";import{appList as R}from"./AppSwitch.stories-B8nnaDip.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./SvgIcon-0MOxWfTP.js";import"./styled-BT4RjJzR.js";import"./generateUtilityClasses-Ope_UxWr.js";import"./FlexGrid-Y8kMg0vc.js";import"./styled-DYky2rJa.js";import"./useTheme-BAsjQMSl.js";import"./useThemeProps-BAuVkQ7A.js";import"./useTheme-DIIM1Wcn.js";import"./Container-CDaxYc3T.js";import"./Box-DVpyV88R.js";import"./Paper-Cul9nzd-.js";import"./iframe-CRgqt1zL.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-CdpnkA_M.js";import"./colorManipulator-zO1DXvwL.js";import"./index-B47g9DW4.js";import"./ButtonBase-GdOU_fqa.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Popover-rSPSjYHH.js";import"./utils-C6E22oQ1.js";import"./LinearProgress-DD-ZDPzk.js";import"./Card-BHi_PHH0.js";import"./CardActions-C035-885.js";import"./index-_4_hgnnR.js";import"./Popover-Dnj75uG4.js";import"./Button-DG02f22Q.js";import"./createSvgIcon-DQcKRcx_.js";const Er={title:"Surfaces/AppBar",component:V,tags:["autodocs"],parameters:{docs:{description:{component:"The AppBar component provides a top navigation bar that supports branding, actions, and more."}},layout:"fullscreen"}},t={},e={args:{appName:"Design System"}},o={args:{...e.args,endChild:r(P,{fullName:"Han Solo",children:H(E,{fullName:"Han Solo",children:[r(a,{variant:"subtitle1",children:"Roles"}),r(a,{children:"Smuggler"}),r(a,{children:"Scoundrel"}),r(a,{children:"Hero"})]})})},play:async({canvasElement:D})=>{const I=j(D);await L.click(I.getByRole("button",{name:"user-profile"}))}},s={args:{appName:"Design System",version:"1.2.0"}},n={args:{...e.args,endChild:r(k,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},i={args:{...e.args,startChild:r(O,{apps:R}),endChild:r(k,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},p={args:{...e.args,disableBrand:!0,startChild:r(O,{apps:R}),endChild:r(P,{fullName:"Han Solo",children:H(E,{fullName:"Han Solo",children:[r(a,{variant:"subtitle1",children:"Roles"}),r(a,{children:"Smuggler"}),r(a,{children:"Scoundrel"}),r(a,{children:"Hero"})]})})}};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,S,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var N,x,v;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    appName: "Design System",
    version: "1.2.0"
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var T,B,b;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(b=(B=n.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var A,W,y;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    startChild: <AppSwitch apps={appList} />,
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var w,U,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    disableBrand: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: <UserProfile fullName="Han Solo">
        <UserStatus fullName="Han Solo">
          <Text variant="subtitle1">Roles</Text>
          <Text>Smuggler</Text>
          <Text>Scoundrel</Text>
          <Text>Hero</Text>
        </UserStatus>
      </UserProfile>
  }
}`,...(C=(U=p.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};const Or=["Example","WithAppName","WithUserProfile","WithVersionNumber","WithSignOutButton","WithAppSwitch","WithNoBrand"];export{t as Example,e as WithAppName,i as WithAppSwitch,p as WithNoBrand,n as WithSignOutButton,o as WithUserProfile,s as WithVersionNumber,Or as __namedExportsOrder,Er as default};
