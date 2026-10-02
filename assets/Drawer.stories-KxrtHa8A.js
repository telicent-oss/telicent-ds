import{a as r,R as y,b as v,F as C}from"./iframe-pSdNPpsj.js";import{v as b,w as k,x as B,P as R}from"./DropdownButton-PfYIilVr.js";import{B as i}from"./Box-BoiUcmPE.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-8kjnvaru.js";import"./SvgIcon-BonYN8Aw.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BV2hxUmf.js";import"./extendSxProp-DB41LN08.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DVtKZHc7.js";import"./Box-CBjBaWaN.js";import"./Container-2KzmGqL8.js";import"./styled-DydIvW0v.js";import"./createStyled-BCHR6s5i.js";import"./useThemeProps-CYWg9EgA.js";import"./FlexBox-hv-hpSGA.js";import"./Stack-Bs31Dqc4.js";import"./Typography-xJSRyULv.js";import"./Paper-CaOTbWnl.js";import"./CogIcon-BfeV780C.js";import"./InfoIcon-CvY1jMPl.js";import"./ExpandMoreIcon-k57z5o9e.js";import"./ThemeSwitchRow-BPScvN64.js";import"./index-DpDMCIG9.js";import"./Text-C8xYhcTn.js";import"./AdapterDayjs-Dder9SCv.js";import"./useThemeProps-xIwPk4zG.js";import"./Modal-Bours3kv.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-DQVEqSZG.js";import"./resolveComponentProps-DPCNAT4d.js";import"./index-CxGjzryR.js";import"./utils-BwusbXFX.js";import"./Popover-BBnSYe1Z.js";import"./TextField-nhnGPtzx.js";import"./useFormControl-CUuOM4EU.js";import"./FormControl-BvmTFN4D.js";import"./ListContext-vhA9Ec2W.js";import"./useControlled-CTRf4Kyy.js";import"./createSvgIcon-DQJUL0l4.js";import"./FormHelperText-C4G4-bY5.js";import"./IconButton-sbMpLibE.js";import"./ButtonBase-12w3s8A9.js";import"./DialogContent-6bzIhVp6.js";import"./Button-C4RV-peR.js";import"./Chip-BlG_pkiR.js";import"./MenuItem-CaHZacD4.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-Dbgx90FC.js";import"./Chip-CoSGGU0m.js";import"./Divider-BiRkEI1F.js";import"./Divider-C_qV4GnK.js";import"./TreeView-B43DTxN_.js";import"./Collapse-DCgMY-AU.js";import"./useSlot-D8cXYJ0o.js";import"./AppInfoRow-CmmXVQhw.js";import"./AppSettings-DiAaHAeX.js";import"./SvgIcon-Dk67ihyJ.js";import"./TableRow-BbcetRBz.js";import"./LinearProgress-4g4fQEVB.js";import"./Spinner-BhDP1jI-.js";import"./Dialog-HQr-WHjL.js";import"./MapToggleButtonPresentational-B3hG9Xgp.js";import"./Remove-C7Qh0rfw.js";import"./Alert-D6vFGcfN.js";import"./ToggleButton-DYJg3xc1.js";import"./LinkButton-CCaJDHCZ.js";import"./TextField-D6oyfCHl.js";import"./Switch-PrjoLUoj.js";import"./LabeledSwitch-BdwUyAoI.js";import"./DatePicker-BkGr75tM.js";import"./DateTimePicker-CPfgqStp.js";import"./FormControl-DGv8wv7P.js";import"./FormHelperText-c9msRWby.js";import"./MenuItem-Rg5Kc0O5.js";import"./AccordionDetails-xCw9eoCi.js";import"./Paper-DVNzQMfL.js";import"./ErrorFallback-aVzTS4kp.js";import"./ErrorFallbackText-C0CAwCyb.js";import"./ErrorFallbackWrapper-GQ-Y6ktD.js";import"./Brand-Bitp_hZv.js";import"./Edit-BGaDb461.js";const ie={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=y.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const ae=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,ae as __namedExportsOrder,ie as default};
