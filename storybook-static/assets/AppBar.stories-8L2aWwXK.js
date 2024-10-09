import{j as r,a as S}from"./DefaultPropsProvider-BtHbA0VU.js";import{w as x,u as h}from"./index-R3fZrLBo.js";import{A as T}from"./TelicentMark-BJIudeOw.js";import"./DataSetIcon-Az5FxROx.js";import"./UserIcon-D68f8n6J.js";import{U}from"./UserProfile-ShHjOo8U.js";import{U as v}from"./UserStatus-cONgZgb9.js";import{T as t}from"./Text-CgkSqo90.js";import"./Chip-BY9InDlU.js";import"./TreeView-8vb6gFvO.js";import"./UserProfileContent-CT_pXXI-.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./styled-BYpVOPyr.js";import"./SvgIcon-BaDrUo6b.js";import"./generateUtilityClasses-BIknaJ37.js";import"./useTheme-D3IlMF1k.js";import"./useTheme-Ckz7wL11.js";import"./Container-nDHQPLDZ.js";import"./styled-BkWK7I8A.js";import"./useThemeProps-2Kac9Ors.js";import"./index-DXqQCM1T.js";import"./Menu-CE8ciUHE.js";import"./ButtonBase-DCYB2nLY.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CB99OiCM.js";import"./Popover-CEasQiDS.js";import"./utils-C0stDFpQ.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-NyHP_ua9.js";import"./Paper-DC39T9uc.js";import"./index-Bres9Iq4.js";import"./createSvgIcon-CveOJVlc.js";import"./colorManipulator-CLgUjkf2.js";const ar={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(U,{fullName:"Han Solo",children:S(v,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
