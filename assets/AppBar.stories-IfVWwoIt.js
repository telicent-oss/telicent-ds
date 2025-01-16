import{j as r,a as S}from"./DefaultPropsProvider--lJPAVOf.js";import{w as x,u as h}from"./index-3Lpd23TA.js";import{A as T}from"./TelicentMark-BfOjK1gM.js";import"./DataSetIcon-DtNNSIik.js";import"./UserIcon-VQcL6Cr3.js";import{U}from"./UserStatus-aWKV4nC1.js";import{U as v}from"./UserProfile-CnsTjZhi.js";import{T as t}from"./Text-CJDA79D9.js";import"./Chip-B4tbm-ra.js";import"./TreeView-C9a-TDyP.js";import"./UserProfileContent-C0M4KfJU.js";import"./jsx-runtime-Dwss98Nb.js";import"./index-Du_IP5cC.js";import"./styled-BSeuGzyp.js";import"./SvgIcon-DJ7HZSEs.js";import"./generateUtilityClasses-MMAG8yM0.js";import"./useTheme-tLVpAwB4.js";import"./useTheme-DqTbxjpC.js";import"./Container-UA9HJrBd.js";import"./styled-DBIzsiFI.js";import"./useThemeProps-CgZ-XvV1.js";import"./index-ans_9-if.js";import"./Menu-CIfbVCM2.js";import"./ButtonBase-DOatf38x.js";import"./TransitionGroupContext-DmssZhy-.js";import"./index-DATKX0av.js";import"./Popover-DS4PCjva.js";import"./utils-CRH9CwAG.js";import"./index-DtoIJoF2.js";import"./resolveComponentProps-DNRE6Age.js";import"./Paper-pczEKBOb.js";import"./index-Df2kh431.js";import"./createSvgIcon-BEbM4De7.js";import"./colorManipulator-I8CETreN.js";const tr={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,p,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
