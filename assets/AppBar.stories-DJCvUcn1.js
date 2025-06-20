import{j as r,a as H}from"./DefaultPropsProvider-BSWuto10.js";import{w as j,u as L}from"./index-ZIyp8o0e.js";import{A as V}from"./Divider-DI2hROvX.js";import"./DataSetIcon-DNkwuXqd.js";import"./UserIcon-BB6Q81eU.js";import{U as E,A as O}from"./FeatureMap-9HsIWX1C.js";import{U as P}from"./UserProfile-DjzvMCHd.js";import{T as t}from"./Text-Lb7f3cNw.js";import"./Chip-AKyoKhvy.js";import"./TreeView-BjYYmfXW.js";import"./UserProfileContent-z8bbLtAI.js";import"./FlexBox-DHo5zb4e.js";import{B as k}from"./Button-Ry6T39J5.js";import{appList as R}from"./AppSwitch.stories-CAT2cptJ.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./SvgIcon-Bf2yV0bL.js";import"./styled-BrIIThlA.js";import"./generateUtilityClasses-D9eTBXKL.js";import"./FlexGrid-DspDwyzG.js";import"./styled-C9Vn0W8F.js";import"./useTheme-DqUUtKyf.js";import"./useThemeProps-B57Xyf65.js";import"./useTheme-D8w0kg7X.js";import"./Container-DjeFMLBs.js";import"./Box-DgiOPB4O.js";import"./Typography-Ccepgalm.js";import"./Paper-BLsXTBnp.js";import"./iframe-CBnKpYjl.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-CX5cjcld.js";import"./colorManipulator-BzVklsQt.js";import"./ThemeProvider-D44tmZDD.js";import"./index-BqeinIc9.js";import"./ButtonBase-BTGFTk3s.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Popover-G0nBJInY.js";import"./utils-wFC7UK9Z.js";import"./LinearProgress-CTXa14kf.js";import"./Card-yePQ2Hsf.js";import"./CardActions-D4NK6-su.js";import"./index-_4_hgnnR.js";import"./Popover-C3uATu_3.js";import"./Button-DVJTHr7w.js";import"./ErrorFallback-BkGNXVlU.js";import"./ErrorFallbackText-BHFGb7nB.js";import"./ErrorFallbackWrapper-Dp8Qdhpd.js";import"./createSvgIcon-Ciwc8VzQ.js";const Dr={title:"Surfaces/AppBar",component:V,tags:["autodocs"],parameters:{docs:{description:{component:"The AppBar component provides a top navigation bar that supports branding, actions, and more."}},layout:"fullscreen"}},e={},a={args:{appName:"Design System"}},o={args:{...a.args,endChild:r(P,{fullName:"Han Solo",children:H(E,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:D})=>{const I=j(D);await L.click(I.getByRole("button",{name:"user-profile"}))}},s={args:{appName:"Design System",version:"1.2.0"}},i={args:{...a.args,endChild:r(k,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},n={args:{...a.args,startChild:r(O,{apps:R}),endChild:r(k,{variant:"primary",startIcon:r("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},p={args:{...a.args,disableBrand:!0,startChild:r(O,{apps:R}),endChild:r(P,{fullName:"Han Solo",children:H(E,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,S,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var T,B,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(b=(B=i.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var A,W,y;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    startChild: <AppSwitch apps={appList} />,
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(y=(W=n.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var w,U,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(U=p.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};const Ir=["Example","WithAppName","WithUserProfile","WithVersionNumber","WithSignOutButton","WithAppSwitch","WithNoBrand"];export{e as Example,a as WithAppName,n as WithAppSwitch,p as WithNoBrand,i as WithSignOutButton,o as WithUserProfile,s as WithVersionNumber,Ir as __namedExportsOrder,Dr as default};
