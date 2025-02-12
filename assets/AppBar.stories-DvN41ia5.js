import{j as r,a as S}from"./DefaultPropsProvider-mMqPhAz4.js";import{w as x,u as h}from"./index-ZIyp8o0e.js";import{A as T}from"./TelicentMark-C5iLy6vt.js";import"./DataSetIcon-Be5MVSv8.js";import"./UserIcon-Dnfx85jE.js";import{U}from"./UserStatus-DWA_AXzP.js";import{U as v}from"./UserProfile-BapVZ_sB.js";import{T as t}from"./Text-D0yBQujI.js";import"./Chip-C1kB__FQ.js";import"./TreeView-DF6vTG9G.js";import"./UserProfileContent-CL7-SJ5i.js";import"./FlexBox-DBC_blm8.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./styled-Coa2-1Nt.js";import"./SvgIcon-9htPR1de.js";import"./generateUtilityClasses-CjU4Pey7.js";import"./FlexGrid-CF3-QHHR.js";import"./styled-BLcKEFBG.js";import"./useTheme-Dc11I-P9.js";import"./useThemeProps-B38RGH21.js";import"./useTheme-Dl-fNHlA.js";import"./Container-Db-Htp1t.js";import"./index-mSkvzYyn.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./ButtonBase-odUV3zMF.js";import"./Box-DOOM5p70.js";import"./Typography-RFRigqiF.js";import"./Paper-BpSJjDAT.js";import"./index-DzKG53lc.js";import"./Popover-RATKuaxW.js";import"./utils-CXnKKwNB.js";import"./index-BXZwOzqJ.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-k3y9_sX-.js";import"./colorManipulator-BnJ1IiY5.js";const ar={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
