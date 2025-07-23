import{j as r,a as C,F as v}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as k}from"./index-Dl6G-zuu.js";import{D as A,u as B,a as x}from"./Drawer-ChvPPhdC.js";import{P as R}from"./Button-w9tbBUtr.js";import{B as a}from"./Box-B1z1Qd0d.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DiFjgoLh.js";import"./DefaultPropsProvider-DokkfWXe.js";import"./SvgIcon-CwSgo-eM.js";import"./styled-Bh4j-phE.js";import"./generateUtilityClasses-BrZc1hjY.js";import"./constants-Cti-p_rp.js";import"./iframe-DjR5Pwc1.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./UserProfile-N6pr5-2m.js";import"./Text-C4zpNQRp.js";import"./Typography-DOS1jQiX.js";import"./UserIcon-Cx-r992D.js";import"./index-BfyspvgH.js";import"./useTheme-Sw6qfmru.js";import"./useTheme-c__JTuJp.js";import"./FlexBox-D2o1BZNO.js";import"./styled-ilcqLD5m.js";import"./useThemeProps-BNFryEOP.js";import"./Popover-jZh0iIOv.js";import"./utils-C-XDAD8M.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DjaG4Kki.js";import"./IconButton-56B7AwOW.js";import"./ButtonBase-Do7AHI9h.js";import"./index-Bg6tHTX3.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-xSzC_QTu.js";import"./FlexGrid-JVYOOaHa.js";import"./Container-bU783VGj.js";import"./DataSetIcon-DGj6m1BG.js";import"./UIThemeProvider-K1iMkQi9.js";import"./colorManipulator-Cuc7me6V.js";import"./ThemeProvider-mIQjSFi-.js";import"./Chip-pzoqvFR6.js";import"./Divider-BQZg7t2N.js";import"./TreeView-gav8i2Kk.js";import"./UserProfileContent-DHz0GTL-.js";import"./LinearProgress-tobgb8oL.js";import"./Card-CACrcWJQ.js";import"./CardActions-ChQ-9HT4.js";import"./Popover-DEe1UNyj.js";import"./Paper-BMhFNqQN.js";import"./Button-D7yzuVoT.js";import"./ErrorFallback-D0Q64ifN.js";import"./ErrorFallbackText-C1J-oAKu.js";import"./ErrorFallbackWrapper-D-KZ366e.js";import"./MapToggleButtonPresentational-CBr8W7gO.js";import"./List-B5LeInEP.js";import"./SecondaryButton-BcPTyAr_.js";const Sr={title:"Component Library/Drawer",component:A,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:400,children:r(a,{p:2,children:"Narrow drawer"})}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=k.useRef(null),{toggleDrawer:s,drawerProps:p}=B(i,!1);return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(x,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=k.useRef(null),s=B(i,!1),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(x,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <Box p={2}>Drawer content</Box>
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,w;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    drawerWidth: 400,
    children: <Box p={2}>Narrow drawer</Box>
  }
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var g,D,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      open,
      toggleDrawer,
      closeDrawer,
      drawerProps
    } = useDrawer(ctrlRef, false);
    return <>
        <PrimaryButton onClick={toggleDrawer}>Toggle Drawer</PrimaryButton>

        <DrawerPresentational {...drawerProps}>
          <Box p={2}>Controlled content</Box>
        </DrawerPresentational>
      </>;
  }
}`,...(h=(D=t.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var P,f,y;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    const drawer = useDrawer(ctrlRef, false);
    const {
      onToggle,
      ...drawerPropsNoToggle
    } = drawer.drawerProps;
    return <>
        <PrimaryButton onClick={onToggle}>Toggle Drawer</PrimaryButton>

        <DrawerPresentational {...drawerPropsNoToggle}>
          <Box p={2}>
            Chevron hidden: onClick unset, so clicking does nothing
          </Box>
        </DrawerPresentational>
      </>;
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const jr=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,jr as __namedExportsOrder,Sr as default};
