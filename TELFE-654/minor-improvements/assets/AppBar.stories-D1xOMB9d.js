import{j as r,a as S}from"./DefaultPropsProvider-D55Wj1Sq.js";import{w as x,u as h}from"./index-3Lpd23TA.js";import{A as T}from"./TelicentMark-D90GhUX1.js";import"./DataSetIcon-DxllRCWx.js";import"./UserIcon-AsBRbcvg.js";import{U}from"./UserStatus-DI5VU-6c.js";import{U as v}from"./UserProfile-BKUliVBo.js";import{T as t}from"./Text-CE-o78-6.js";import"./Chip-CMQyemFA.js";import"./TreeView-0gM7jf_m.js";import"./UserProfileContent-DkFU9lUW.js";import"./jsx-runtime-Dwss98Nb.js";import"./index-Du_IP5cC.js";import"./styled-aipfhsBS.js";import"./SvgIcon-sXCG3KbY.js";import"./generateUtilityClasses-Cw-uw2o7.js";import"./FlexGrid-Ckvfi2hB.js";import"./styled-zinR3__d.js";import"./useTheme-CtImnkTu.js";import"./useThemeProps-DM2VlJkO.js";import"./useTheme-B2MLISHX.js";import"./Container-DApHUUiT.js";import"./index-ans_9-if.js";import"./Menu-qgl2HGHf.js";import"./ButtonBase-DU-mBhfv.js";import"./TransitionGroupContext-DmssZhy-.js";import"./index-DfQQp3ks.js";import"./Popover-COQfAdtM.js";import"./utils-CtVJ-2PG.js";import"./index-DtoIJoF2.js";import"./resolveComponentProps-UrK7gkxe.js";import"./Paper-K73ck01N.js";import"./Box-BykdrlxJ.js";import"./index-Df2kh431.js";import"./createSvgIcon-BfNnQ0Hm.js";import"./colorManipulator-oYQv4ILr.js";const ar={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(v,{fullName:"Han Solo",children:S(U,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
