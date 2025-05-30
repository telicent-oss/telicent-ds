import{j as r,a as H}from"./DefaultPropsProvider-ZTfV1Zta.js";import{w as j,u as L}from"./index-ZIyp8o0e.js";import{A as V}from"./Divider-U0HyYZdi.js";import"./DataSetIcon-CHIrb2GC.js";import"./UserIcon-DmjklXFK.js";import{U as E,A as O}from"./FeatureMap-CzXANP9p.js";import{U as P}from"./UserProfile-pLaLHjzb.js";import{T as a}from"./Text-CGNagbCi.js";import"./Chip-Bi37CbO4.js";import"./TreeView-lHYan-nM.js";import"./UserProfileContent-B92njon_.js";import"./FlexBox-DADmAnZF.js";import{B as k}from"./Button-D3scS8V2.js";import{appList as R}from"./AppSwitch.stories-CHWCyfKC.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./SvgIcon-DM7CEwi3.js";import"./styled-jMWuTdIG.js";import"./generateUtilityClasses-DD2dCBy1.js";import"./FlexGrid-CLKmKS3u.js";import"./styled-NI2V6uj_.js";import"./useTheme-BusmB1QR.js";import"./useThemeProps-BdYmkKoE.js";import"./useTheme-DUKUC1WO.js";import"./Container-C8J4gsN5.js";import"./Box-DBuGxpzg.js";import"./Paper-BtR36xUR.js";import"./iframe-BwjqXAZ9.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-BXfJmZRt.js";import"./colorManipulator-CwxWA58Q.js";import"./index-A9x96Awu.js";import"./ButtonBase-B36byFIM.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Popover-CxoUVLIl.js";import"./utils-4IBA19w2.js";import"./LinearProgress-ChpUz72G.js";import"./Card-BfV-nf9i.js";import"./CardActions-C19l4eM5.js";import"./index-_4_hgnnR.js";import"./Popover-C2trNH_s.js";import"./Button-DC-CYhQc.js";import"./createSvgIcon-B0Qv8yy1.js";const Er={title:"Surfaces/AppBar",component:V,tags:["autodocs"],parameters:{docs:{description:{component:"The AppBar component provides a top navigation bar that supports branding, actions, and more."}},layout:"fullscreen"}},t={},e={args:{appName:"Design System"}},o={args:{...e.args,endChild:r(P,{fullName:"Han Solo",children:H(E,{fullName:"Han Solo",children:[r(a,{variant:"subtitle1",children:"Roles"}),r(a,{children:"Smuggler"}),r(a,{children:"Scoundrel"}),r(a,{children:"Hero"})]})})},play:async({canvasElement:D})=>{const I=j(D);await L.click(I.getByRole("button",{name:"user-profile"}))}},s={args:{appName:"Design System",version:"1.2.0"}},n={args:{...e.args,endChild:r(k,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},i={args:{...e.args,startChild:r(O,{apps:R}),endChild:r(k,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},p={args:{...e.args,disableBrand:!0,startChild:r(O,{apps:R}),endChild:r(P,{fullName:"Han Solo",children:H(E,{fullName:"Han Solo",children:[r(a,{variant:"subtitle1",children:"Roles"}),r(a,{children:"Smuggler"}),r(a,{children:"Scoundrel"}),r(a,{children:"Hero"})]})})}};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
