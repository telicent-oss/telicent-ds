import{j as r,a as y,F as C}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as v}from"./index-Dl6G-zuu.js";import{D as b,u as k,P as B,a as R}from"./AuthModal-CcTf7jpD.js";import{B as a}from"./Box-BF-qgu-5.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-8Kdc4mds.js";import"./Typography-BrwPcXc_.js";import"./identifier-y0bUoTO6.js";import"./styled-0JAKTnfS.js";import"./generateUtilityClasses-Nvsm4CNa.js";import"./DefaultPropsProvider-5cPhPzqh.js";import"./constants-D6JbaO56.js";import"./iframe-DfdgjJFF.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BzMTtAHJ.js";import"./useTheme-DD-YLZ4_.js";import"./GlobalStyles-vabYxzRP.js";import"./GlobalStyles-CHovE7rY.js";import"./UserProfile-B0RVUakH.js";import"./UserIcon-B9flVcwo.js";import"./SvgIcon-CCVYAiJY.js";import"./index-BfyspvgH.js";import"./FlexBox-CPV3qV_w.js";import"./styled-BJZjZNjA.js";import"./createStyled-CQbojMn1.js";import"./useThemeProps-dlg6X6gD.js";import"./createSvgIcon-CHKs_KBR.js";import"./Popover-lQsAd3LZ.js";import"./utils-CMxZCPCo.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DSYDI967.js";import"./IconButton-CJWQDxju.js";import"./ButtonBase-BPGrtmaq.js";import"./Menu-DOiAulci.js";import"./index-CGpTQFWu.js";import"./TextField-BXJNoCm8.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs--Bc0--O2.js";import"./useThemeProps-Dn9YwK3s.js";import"./colorManipulator-_kX1Zyzf.js";import"./Button-C78fFQkL.js";import"./Chip-Dals-zk3.js";import"./TelicentHorizontalSVG-CQqo1iNz.js";import"./FlexGrid-BXR2iRV0.js";import"./Container-Bt7wgl8Z.js";import"./DataSetIcon-DHhYydZc.js";import"./DateTimePicker-BfS6ExPs.js";import"./Divider-ByP1puSd.js";import"./UIThemeProvider-Yl8oZnWo.js";import"./ThemeProvider-bcdU8uNZ.js";import"./IconButton-B3KtzcW5.js";import"./Chip-DwEDWKOc.js";import"./Divider-D5viUhla.js";import"./TreeView-Cv9rbGZ0.js";import"./UserProfileContent-Be3-9Jzl.js";import"./LinearProgress-DXAYFx38.js";import"./Button-BUdKq2Nf.js";import"./LinkButton-D3-RYoWb.js";import"./TextField-PJfMD1VO.js";import"./DatePicker-CBr8yT-u.js";import"./Card-DEzO0riq.js";import"./CardActions-B8gFKj_f.js";import"./Popover-DMDv2fuJ.js";import"./Paper-DkOGDDl7.js";import"./ErrorFallback-BQDrKlpt.js";import"./ErrorFallbackText-D0ectygn.js";import"./ErrorFallbackWrapper-Drru2TWq.js";import"./MapToggleButtonPresentational-DDiBoo1Q.js";import"./Remove-ABIIxDNk.js";import"./Edit-ClXqq_Xi.js";const Mr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=v.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return y(C,{children:[r(B,{onClick:s,children:"Toggle Drawer"}),r(R,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=v.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return y(C,{children:[r(B,{onClick:p,children:"Toggle Drawer"}),r(R,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <Box p={2}>Drawer content</Box>
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    drawerWidth: 200,
    children: <Box p={2} height={400}>
        Narrow drawer & custom PaperSx
      </Box>,
    PaperSx: {
      outline: \`dashed 3px yellow\`,
      bgcolor: \`dodgerblue\`
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,h,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Presentational + useDrawer",
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates imperative API via \\\`useDrawer\\\` hook and \\\`DrawerPresentational\\\`.\`
      }
    }
  },
  render: () => {
    // uses hook internally; no ref forwarding for presentational
    const ctrlRef = React.useRef<DrawerController>(null);
    const {
      toggleDrawer,
      drawerProps
    } = useDrawer({
      ref: ctrlRef,
      initialOpen: false
    });
    return <>
        <PrimaryButton onClick={toggleDrawer}>Toggle Drawer</PrimaryButton>

        <DrawerPresentational {...drawerProps}>
          <Box p={2}>Controlled content</Box>
        </DrawerPresentational>
      </>;
  }
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var P,f,x;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Presentational + useDrawer: Imperative api only",
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates imperative API via \\\`useDrawer\\\` without a onToggle set (and thus no toggle button).\`
      }
    }
  },
  render: () => {
    // uses hook internally; no ref forwarding for presentational
    const ctrlRef = React.useRef<DrawerController>(null);
    const drawer = useDrawer({
      ref: ctrlRef,
      initialOpen: false
    });
    const {
      onToggle,
      ...drawerPropsNoToggle
    } = drawer.drawerProps;
    return <>
        <PrimaryButton onClick={onToggle}>Toggle Drawer</PrimaryButton>

        <DrawerPresentational {...drawerPropsNoToggle}>
          <Box p={2}>Chevron hidden: onClick unset, so clicking does nothing</Box>
        </DrawerPresentational>
      </>;
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Qr=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Qr as __namedExportsOrder,Mr as default};
