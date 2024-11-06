import{j as r,a as S}from"./DefaultPropsProvider-_Lew82y0.js";import{w as x,u as h}from"./index-R3fZrLBo.js";import{A as T}from"./TelicentMark-Bi5F1Jok.js";import"./DataSetIcon-DvnsXFdB.js";import"./UserIcon-BW6od35l.js";import{U}from"./UserStatus-mlX5DDKl.js";import{U as v}from"./UserProfile-CDHHUDNw.js";import{T as t}from"./Text-CGTJRmaL.js";import"./Chip-D-qwnX-7.js";import"./TreeView-BepDGeKR.js";import"./UserProfileContent-CJyar8S6.js";import"./extends-l96ZYLL7.js";import"./index-BBkUAzwr.js";import"./styled-BJBODTqz.js";import"./SvgIcon-nOE-MXQL.js";import"./generateUtilityClasses-Dvcw8qpp.js";import"./useTheme-BFzPSdMH.js";import"./useTheme-D3h9sCof.js";import"./Container-CYtt4Xmd.js";import"./styled-CkjOwDsr.js";import"./useThemeProps-Q6_fKbvr.js";import"./index-DXqQCM1T.js";import"./Menu-BEBIUrjS.js";import"./ButtonBase-_xvnSuiZ.js";import"./TransitionGroupContext-BxlS8Jd0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-ChMeXycY.js";import"./Popover-Hcm-BVgZ.js";import"./utils-DO1XUlS6.js";import"./index-COG_gdbT.js";import"./resolveComponentProps-BX18Z20f.js";import"./Paper-Bh8jhr9X.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-6016U0XV.js";import"./colorManipulator-D-wf997I.js";const ar={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
