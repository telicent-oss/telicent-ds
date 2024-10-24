import{j as r,a as S}from"./DefaultPropsProvider-BXx8Lxdp.js";import{w as x,u as h}from"./index-R3fZrLBo.js";import{A as T}from"./TelicentMark-BdsZTeAB.js";import"./DataSetIcon-FNIYQS_l.js";import"./UserIcon-BvSIIGLn.js";import{U}from"./UserStatus-D7FRWyvs.js";import{U as v}from"./UserProfile-Uv-GgKh0.js";import{T as t}from"./Text-mT4dy15X.js";import"./Chip-CW_ChayI.js";import"./TreeView-DvhyyXg0.js";import"./UserProfileContent-cvJ4RGHp.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./styled-CsMkIDyT.js";import"./SvgIcon-Cq6PF86G.js";import"./generateUtilityClasses-DUdad9y1.js";import"./useTheme-BwmRXO23.js";import"./useTheme-BLQURKm4.js";import"./Container-esCjEV6P.js";import"./styled-B1p8gUNN.js";import"./useThemeProps-CoIeOuDd.js";import"./index-DXqQCM1T.js";import"./Menu-Bg9HOTiE.js";import"./ButtonBase-Ds7yUReY.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CwoBbyUx.js";import"./Popover-DDsTovIT.js";import"./utils-DLK7DDdD.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-wJjsJM5R.js";import"./Paper-DPZwIbCZ.js";import"./index-D3eZ-H7s.js";import"./createSvgIcon-B5EEX4Vz.js";import"./colorManipulator-BmdrHEzF.js";const ar={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
