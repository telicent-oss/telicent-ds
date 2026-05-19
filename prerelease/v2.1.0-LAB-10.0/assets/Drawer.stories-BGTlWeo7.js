import{j as r,a as y,F as C}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{R as v}from"./index-CTjT7uj6.js";import{D as b,u as k,a as B,P as R}from"./AuthModal-Du-gkYTW.js";import{B as a}from"./Box-vAbK_4PI.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-DOFQHH6y.js";import"./Typography-Dt5bLYJQ.js";import"./identifier-NKQQRePw.js";import"./styled-CjWt8UVi.js";import"./generateUtilityClasses-B2BBkElw.js";import"./DefaultPropsProvider-DtThQIVP.js";import"./constants-KYtGOcw0.js";import"./iframe-BLoGSFSA.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DPnT8y_r.js";import"./useTheme-Ke1uTKsJ.js";import"./GlobalStyles-vI--UIQO.js";import"./GlobalStyles-sLZUO0b6.js";import"./useThemeProps-C2Iq9OHP.js";import"./useThemeProps-nZW5Papo.js";import"./ButtonBase-DFf65YyL.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-5fkkG_Vc.js";import"./Select-gRzCjZbZ.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-3f11im9F.js";import"./utils-B1Pnwxg8.js";import"./Paper-CLsLNy44.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DvZHek-i.js";import"./ListItem-DAm1IJrN.js";import"./UserIcon-CYDlAMM8.js";import"./Container-hm5vFygi.js";import"./styled-VzSze10G.js";import"./createStyled-Bvwk-_EE.js";import"./Stack-CY4EFDZz.js";import"./AppBar-DsGNkIzs.js";import"./Toolbar-CWAIilLy.js";import"./Chip-CMxnGK95.js";import"./IconButton-Bo7QGuUx.js";import"./Switch-7uPqVfWJ.js";import"./MenuItem-nMzlburO.js";import"./dividerClasses-BU2gZmHL.js";import"./UIThemeProvider-Brj0zjMt.js";import"./colorManipulator-BRsEHmOt.js";import"./ThemeProvider-un6kJHlG.js";import"./Chip-BRwbwVbv.js";import"./Card-D8BkeIZl.js";import"./Divider-CKsZbUR-.js";import"./Card-BG9kVIdx.js";import"./TreeView-BkIoI9QN.js";import"./LinearProgress-CUuKFvvX.js";import"./LinearProgress-BfvI3P-T.js";import"./Spinner-DTNXzZM5.js";import"./Dialog-IWHBpnq2.js";import"./DialogContent-BwRvQmzV.js";import"./Button-ZGJdOyfv.js";import"./MapToggleButtonPresentational-DMcR06l5.js";import"./Remove-ORZ2Ffdu.js";import"./TextField-_IJI58oT.js";import"./TextField-C5Vpu56G.js";import"./Select-B2EkDVMA.js";import"./Switch-nwTgaDx0.js";import"./DatePicker-Cd3EM856.js";import"./AdapterDayjs-Kn4cdtM7.js";import"./DateTimePicker-DGWs0BNw.js";import"./Tabs-DRIhGf0U.js";import"./LinkButton-aT7Hu3l6.js";import"./Paper-Bl82cnKL.js";import"./ErrorFallback-CGP1zAVd.js";import"./ErrorFallbackText-D-_xaRa8.js";import"./ErrorFallbackWrapper-H8jVUQSn.js";import"./Brand-lXzjEeMF.js";import"./Edit-C1ZXnIQP.js";const Zr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=v.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return y(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=v.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return y(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const $r=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,$r as __namedExportsOrder,Zr as default};
