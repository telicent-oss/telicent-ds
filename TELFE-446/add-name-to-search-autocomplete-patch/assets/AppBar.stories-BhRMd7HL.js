import{j as r,a as S}from"./DefaultPropsProvider-FmOZEx_L.js";import{w as x,u as h}from"./index-BYX12aAs.js";import{A as T}from"./TelicentMark-DUG-e8LG.js";import"./DataSetIcon-DTgOixlg.js";import"./UserIcon-Bcuf3TR6.js";import{U}from"./UserStatus-ChR3ofUg.js";import{U as v}from"./UserProfile-5P6p55x6.js";import{T as t}from"./Text-Cr0Hr2-l.js";import"./Chip-DTb4MH_T.js";import"./TreeView-DZSNglu2.js";import"./UserProfileContent-j0bXDFTy.js";import"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";import"./styled-CKqgJSB4.js";import"./SvgIcon-DyVJVZbK.js";import"./generateUtilityClasses-DiIBTi47.js";import"./useTheme-DvsKo-w_.js";import"./useTheme-C43gVfC6.js";import"./Container-CYb-wCou.js";import"./styled-DWUfan1z.js";import"./useThemeProps-B4wga_l5.js";import"./index-DXqQCM1T.js";import"./Menu-Bi_XPucy.js";import"./ButtonBase-W-QUno4-.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./index-B9uXLkjB.js";import"./Popover-CRxjdS_0.js";import"./utils-EQzFzA8f.js";import"./index-Db_96rXO.js";import"./resolveComponentProps-tsvYd0yv.js";import"./Paper-BL2CR90I.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-D_LOMcdM.js";import"./colorManipulator-uiArQTW6.js";const tr={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,p,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,u,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const or=["Example","WithAppName","WithUserProfile"];export{o as Example,e as WithAppName,a as WithUserProfile,or as __namedExportsOrder,tr as default};
