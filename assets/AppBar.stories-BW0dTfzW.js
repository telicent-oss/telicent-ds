import{j as r,a as S}from"./DefaultPropsProvider-CCTKYLI5.js";import{w as x,u as h}from"./index-R3fZrLBo.js";import{A as T}from"./TelicentMark-FWLN8l0J.js";import"./DataSetIcon-DkWUFR7X.js";import"./UserIcon-DKSQbTWz.js";import{U}from"./UserStatus-CNBIhQI8.js";import{U as v}from"./UserProfile-D2afB5Fh.js";import{T as t}from"./Text-Bdpz0hNF.js";import"./Chip-CX7AHr5i.js";import"./TreeView-BzdUw-b2.js";import"./UserProfileContent-D4jv_867.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./styled-DM1eSaGT.js";import"./SvgIcon-CuDVGt8p.js";import"./generateUtilityClasses-C2NGeXhi.js";import"./useTheme-K53Y7m-L.js";import"./useTheme-DuiTjpwn.js";import"./Container-Dr9IOSAC.js";import"./styled-DZ6MJxE4.js";import"./useThemeProps-DN-sF8k0.js";import"./index-DXqQCM1T.js";import"./Menu-D3xmr7gS.js";import"./ButtonBase-BqsTvKzc.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CUgaF5q8.js";import"./Popover-BCeiGNac.js";import"./utils-CEb430w8.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-Czjqrhj_.js";import"./Paper-ak1QantU.js";import"./index-D3eZ-H7s.js";import"./createSvgIcon-D9Qcjewg.js";import"./colorManipulator-D9TaW8UO.js";const ar={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,u,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const sr=["Example","WithAppName","WithUserProfile"];export{o as Example,e as WithAppName,a as WithUserProfile,sr as __namedExportsOrder,ar as default};
