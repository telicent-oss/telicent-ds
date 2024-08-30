import{j as r}from"./jsx-runtime-CexXSJP5.js";import{w as g,u as S}from"./index-X0cxQbTF.js";import{A as h,U as T}from"./UserStatus-w0F6FOqI.js";import"./DataSetIcon-DalgZNGA.js";import"./FlexBox-B9w_HhTY.js";import{U}from"./UserProfile-DYPsUJ_X.js";import{T as o}from"./Text-D8QQO482.js";import"./Chip-1vDBX2io.js";import"./TreeView-WCJY0fm_.js";import"./index-BP8_t0zE.js";import"./index-DZLKizrv.js";import"./useTheme-CmkBszCQ.js";import"./DefaultPropsProvider-D6MvNwoC.js";import"./createTheme-BI2OWDpv.js";import"./extends-BFqQA52f.js";import"./useTheme-BOvJgVym.js";import"./useThemeWithoutDefault-C3kYH7vc.js";import"./Container-DpRykjJ-.js";import"./styled-CwhWP0k9.js";import"./StyledEngineProvider-CtQ9vdjp.js";import"./styled-B7SqznG2.js";import"./useThemeProps-Cz3Ol-ZY.js";import"./SvgIcon-C5tcZsyu.js";import"./generateUtilityClasses-CPjhs1S_.js";import"./Paper-DEGHyXeH.js";import"./Stack-8PiQyM1k.js";import"./Typography-DE0lXvn2.js";import"./Box-Jzim7HDp.js";import"./index-EaYoR7Ht.js";import"./index-CXPIPAcP.js";import"./Avatar-CynWoDHF.js";import"./createSvgIcon-BSqKsiVD.js";import"./resolveComponentProps-iAOpfAUw.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-rM2yqL0Y.js";import"./IconButton-DDhPeAJG.js";import"./ButtonBase-DxHKNkXA.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./Menu-KaAF1bzu.js";import"./index-BjJ5k6rE.js";import"./Modal-Bd-pgXjw.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./utils-IhZQnaQC.js";import"./index-BVEwUaSm.js";import"./useSlotProps-DmXLjd2q.js";import"./Grow-Dt6YTbxq.js";import"./debounce-Be36O1Ab.js";import"./MenuList-BbY1aGr7.js";import"./List-C23U3F2W.js";import"./Chip-DIAWJyfw.js";import"./useId-DLncWxdO.js";import"./colorManipulator-BpQThoK9.js";const Nr={title:"Surfaces/AppBar",component:h,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={},t={args:{appName:"Design System"}},i={args:{...t.args,userProfile:r.jsx(U,{fullName:"Han Solo",children:r.jsxs(T,{fullName:"Han Solo",children:[r.jsx(o,{variant:"subtitle1",children:"Roles"}),r.jsx(o,{children:"Smuggler"}),r.jsx(o,{children:"Scoundrel"}),r.jsx(o,{children:"Hero"})]})})},play:async({canvasElement:f})=>{const x=g(f);await S.click(x.getByRole("button",{name:"user-profile"}))}};var m,a,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const jr=["Example","WithAppName","WithUserProfile"];export{e as Example,t as WithAppName,i as WithUserProfile,jr as __namedExportsOrder,Nr as default};
