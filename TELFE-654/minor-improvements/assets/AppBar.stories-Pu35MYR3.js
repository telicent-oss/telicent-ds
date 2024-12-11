import{j as r,a as S}from"./DefaultPropsProvider-d5Yg5iWD.js";import{w as x,u as h}from"./index-BYX12aAs.js";import{A as T}from"./TelicentMark-DFAXVDfB.js";import"./DataSetIcon-DnVia0td.js";import"./UserIcon-RqCC6dbb.js";import{U}from"./UserStatus-Cl_CYyeD.js";import{U as v}from"./UserProfile-BCkoix6Z.js";import{T as t}from"./Text-Cbj1DL2Z.js";import"./Chip-Ltw8UzT3.js";import"./TreeView-9MLn2xQ-.js";import"./UserProfileContent-Cir61d2T.js";import"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";import"./styled-Cd9OY9py.js";import"./SvgIcon-Bb1DILl7.js";import"./generateUtilityClasses-BeBiso4Q.js";import"./FlexGrid-MRj-uZJ0.js";import"./styled-CtDozGU3.js";import"./useTheme-DmEqPdBI.js";import"./useThemeProps-DiuEeoPc.js";import"./useTheme-BGtMGxNE.js";import"./Container-D4oPmSnh.js";import"./index-DXqQCM1T.js";import"./Menu-TaxySTk9.js";import"./ButtonBase-CMKap0Uh.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./index-CCPe48A9.js";import"./Popover-B0rHy99r.js";import"./utils-CDqwsCRL.js";import"./index-Db_96rXO.js";import"./resolveComponentProps-Br404nvz.js";import"./Paper-DALXAofg.js";import"./Box-CiTSDCSY.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-DpCKqr1J.js";import"./colorManipulator-C5G8MKjI.js";const ar={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
