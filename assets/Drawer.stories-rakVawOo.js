import{a as r,R as y,b as v,F as C}from"./iframe-C6HBQyGm.js";import{t as b,v as k,w as B,x as R}from"./DropdownButton-D6ogJQev.js";import{B as i}from"./Box-Bum79u3V.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-CJuxEYmQ.js";import"./SvgIcon-CBUaLZyl.js";import"./clsx-B-dksMZM.js";import"./styled-CtHiKU2t.js";import"./extendSxProp-BpLVaWYK.js";import"./composeClasses-fLhin0tj.js";import"./Box-BORlsoOy.js";import"./Container-Cs0fA1rR.js";import"./styled-Ddo_soiw.js";import"./createStyled-BurZqg4B.js";import"./useThemeProps-OSLHsrLr.js";import"./FlexBox-shtAMDc9.js";import"./Stack-CMijSaHm.js";import"./Typography-BYEU65Ir.js";import"./Paper-DexiaJH7.js";import"./CogIcon-BXwRS_AX.js";import"./InfoIcon-CWUfQGMy.js";import"./ExpandMoreIcon-ClqhjkE_.js";import"./ThemeSwitchRow-DXzWXa9p.js";import"./index-B4fT1DFN.js";import"./Text-wXQO4nHE.js";import"./AdapterDayjs-CJVXf95i.js";import"./useThemeProps-BN8Oei1L.js";import"./Modal-BhU-sf-u.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-DNiDcEw8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-DShg_lcf.js";import"./index-U2Ve87U_.js";import"./utils-BtrWCNj7.js";import"./Popover-CqWusbsy.js";import"./InputAdornment-DoxUPrGH.js";import"./useFormControl-DFXGdURu.js";import"./TextField-Tbuu-gB1.js";import"./FormControl-szbfKHSS.js";import"./ListContext-5L6Z3S72.js";import"./useControlled-Cv5AimIh.js";import"./createSvgIcon-C3fIw0nA.js";import"./FormHelperText-BhBJtXut.js";import"./IconButton-DOLNhRve.js";import"./ButtonBase--3OMYxia.js";import"./DialogContent-kJfS09mU.js";import"./Button-T3gn82zd.js";import"./Chip-QwFDNXa1.js";import"./DataGrid-B9Ws_hxt.js";import"./index-BqpemGyj.js";import"./Switch-D5vwKWe7.js";import"./FormControlLabel-D5xYv0-x.js";import"./Skeleton-Bh14KwXQ.js";import"./MenuItem-DvEMZLtB.js";import"./dividerClasses-DKxjOi43.js";import"./LinearProgress-CYKUds7Q.js";import"./Divider-CuhHNWiA.js";import"./CircularProgress-py9IL6Xb.js";import"./Close-W1rtBwZ4.js";import"./Tabs-BxaLLPSP.js";import"./TableCell-DCDAnFJ5.js";import"./ToggleButton-B7VOnyAi.js";import"./_IconPopover-DVtF3Nsu.js";import"./Chip-DcDaGxBc.js";import"./Divider-DrCyeUWn.js";import"./TreeView-BzicdKaq.js";import"./Collapse-mPDdtelE.js";import"./useSlot-CYuUL_sL.js";import"./AppInfoRow-DeGsYz0Q.js";import"./AppSettings-BMRsMdd0.js";import"./SvgIcon-DN3G9e_T.js";import"./TableRow-DVUU-_Rr.js";import"./LinearProgress-BybMB8rs.js";import"./Spinner-DaulITM1.js";import"./Dialog-10P_WSlv.js";import"./MapToggleButtonPresentational-C-2_SKgs.js";import"./Remove-sOidiwEB.js";import"./Alert-bNEVirSp.js";import"./ToggleButton-DJ3QCC9g.js";import"./ToggleButtonGroup-zjK0cDs4.js";import"./LinkButton-5Hl7qjTo.js";import"./TextField-Dsp6pCob.js";import"./Switch-Dftj6GoN.js";import"./LabeledSwitch-xW5OK_eY.js";import"./DatePicker-DkkjSWe9.js";import"./DateTimePicker-D2Mk4LF5.js";import"./LocalizationProvider-BX7xAa0J.js";import"./RadioGroup-k1kHuSHq.js";import"./FormControl-DPsKVFX9.js";import"./FormHelperText-DzFlHg6J.js";import"./MenuItem-C9rqg35p.js";import"./AccordionDetails-C87shBW_.js";import"./Paper-D0Bm4wLe.js";import"./ErrorFallback-Ba6XGdtl.js";import"./ErrorFallbackText-D3ICAgi3.js";import"./ErrorFallbackWrapper-Cznrrj0A.js";import"./Brand-Cr9Yp0DV.js";import"./Edit-DmCTBJQu.js";const fe={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=y.useRef(null),{toggleDrawer:p,drawerProps:s}=k({ref:a,initialOpen:!1});return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...s,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=y.useRef(null),p=k({ref:a,initialOpen:!1}),{onToggle:s,...T}=p.drawerProps;return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const xe=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,xe as __namedExportsOrder,fe as default};
