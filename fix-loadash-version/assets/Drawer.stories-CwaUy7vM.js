import{j as r,a as y,F as C}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{R as v}from"./index-CTjT7uj6.js";import{D as b,u as k,a as B,P as R}from"./AuthModal-INY1J062.js";import{B as a}from"./Box-BmQrrWB5.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-DWuU5NOi.js";import"./Typography-jxiy5gAQ.js";import"./identifier-ubkqThfq.js";import"./styled-CeNrfZN8.js";import"./generateUtilityClasses-rmcueE__.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-DKuHcIkI.js";import"./iframe-s2GvGjGy.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./useThemeProps-ErBa_dZ_.js";import"./useThemeProps-BQrQzAVn.js";import"./ButtonBase-BS_9IN6p.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Select-BMyBEyBj.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-BAZTFLL2.js";import"./utils-EYY7_thZ.js";import"./Paper-CX7OniPZ.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DI4ErmOj.js";import"./AdapterDayjs-B1noBw_N.js";import"./TextField-Dd-W-Nbe.js";import"./createStyled-MF3orRa4.js";import"./IconButton-B40nmrRW.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BA_D-pD1.js";import"./Button-D5FpgyXB.js";import"./Chip-CpBBya1C.js";import"./UserIcon-C_uMuWNI.js";import"./Container-THkL10Ux.js";import"./styled-D52li5_j.js";import"./Stack-BXkbJ8_X.js";import"./MenuItem-C70p-rzV.js";import"./dividerClasses-BqGj-Wnd.js";import"./UIThemeProvider-Y3o75pQS.js";import"./ThemeProvider-BnKwSnOu.js";import"./Chip-BmTc0fFj.js";import"./Card-AawNb1ZT.js";import"./Divider-OL1fE4_m.js";import"./TreeView-DoStf2cx.js";import"./LinearProgress-D_UfVP6h.js";import"./Spinner-BatD7ajz.js";import"./Dialog-BCXWohbq.js";import"./MapToggleButtonPresentational-C-P2Xz9W.js";import"./Remove-VTXboCXe.js";import"./TextField-xy8B6PxM.js";import"./Select-Ovpwa_Do.js";import"./Switch-CFTT8Jub.js";import"./DatePicker-x8e043oY.js";import"./DateTimePicker-B10t8APv.js";import"./LinkButton-BaH7xTw3.js";import"./Paper-CPoUKSxJ.js";import"./ErrorFallback-ysz_C47v.js";import"./ErrorFallbackText-CR-qweg6.js";import"./ErrorFallbackWrapper-D_1cbupt.js";import"./Brand-npN9D4Uu.js";import"./Edit-DJ67vPjx.js";const Gr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=v.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return y(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=v.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return y(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Jr=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Jr as __namedExportsOrder,Gr as default};
