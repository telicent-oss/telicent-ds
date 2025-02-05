import{j as r,a as S}from"./DefaultPropsProvider-DW_T1ksU.js";import{w as x,u as h}from"./index-3Lpd23TA.js";import{A as T}from"./TelicentMark-CfEBkPGs.js";import"./DataSetIcon-CVKUnWQK.js";import"./UserIcon-D8df-UA-.js";import{U}from"./UserStatus-DkY_p60F.js";import{U as v}from"./UserProfile-X2kTYwXJ.js";import{T as t}from"./Text-DRT_rUFN.js";import"./Chip-DdEDmb-F.js";import"./TreeView-CUjnqCrH.js";import"./UserProfileContent-D76CJzOi.js";import"./FlexBox-BEh4lK-b.js";import"./jsx-runtime-Dwss98Nb.js";import"./index-Du_IP5cC.js";import"./styled-CO2r5wNb.js";import"./SvgIcon-lXQO74Uo.js";import"./generateUtilityClasses-CBYfpbff.js";import"./FlexGrid-C-avbzk2.js";import"./styled-BGngFW9-.js";import"./useTheme-B6WcV9Bx.js";import"./useThemeProps-Crm_2MCc.js";import"./useTheme-CDFymf_6.js";import"./Container-Q3w3iETf.js";import"./index-ans_9-if.js";import"./ButtonBase-k7dNn2-f.js";import"./TransitionGroupContext-DmssZhy-.js";import"./Box-BBaP0q4U.js";import"./Paper-BMQlMfdy.js";import"./index-BqGG8BWX.js";import"./Popover-DAcwxwo2.js";import"./utils-BoXeEJVK.js";import"./index-DtoIJoF2.js";import"./index-Df2kh431.js";import"./createSvgIcon-DqkZKPix.js";import"./colorManipulator-LZ4hLfs5.js";const or={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,p,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ar=["Example","WithAppName","WithUserProfile"];export{o as Example,e as WithAppName,a as WithUserProfile,ar as __namedExportsOrder,or as default};
