import{a as r,R as x,b as C,F as v}from"./iframe-BjrXztvy.js";import{y as b,z as k,G as B,H as R}from"./UserProfileContent-YwxxBLO1.js";import{B as i}from"./Box-F47BA0Hn.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-dBpFgvsm.js";import"./clsx-B-dksMZM.js";import"./styled-CZSAv6ph.js";import"./extendSxProp-Bthi1mip.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DKC4tNwY.js";import"./TransitionGroupContext-Bkt8ykp0.js";import"./MapToggleButtonPresentational-bfG7yowY.js";import"./Remove-gsWyX-Lp.js";import"./createSvgIcon-CPBnrQiH.js";import"./SvgIcon-B5isJYog.js";import"./IconButton-Bn9Hma8U.js";import"./Paper-BZgZdenZ.js";import"./XIcon-ZQ00GxhK.js";import"./Stack-K8HBDx6V.js";import"./styled-OzlqGBn7.js";import"./createStyled-ChpmfdhO.js";import"./useThemeProps-Ggzu69aw.js";import"./Typography-WZdIHWv0.js";import"./Box-D4Yea7CC.js";import"./Container-Dz0UBrhB.js";import"./FlexBox-C2m_hHiB.js";import"./Brand-C4AyXs8s.js";import"./IconButton-BZNX4IRe.js";import"./LinkButton-BiG5XURl.js";import"./AppInfoRow-QQUqARHA.js";import"./_IconPopover-DMkjh4MO.js";import"./Popover-CHGOs9uC.js";import"./utils-BtEp1Xpe.js";import"./index-BxB4E5u0.js";import"./index-D0p7aeEW.js";import"./Modal-Cwfc4HGx.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BF5TirMe.js";import"./useSlotProps-BNqAOz95.js";import"./InfoIcon-D83JWA8r.js";import"./Text-BkX1azto.js";import"./AppSettings-D0R77tUT.js";import"./CogIcon-DausHvAi.js";import"./Badge-CijpDrIE.js";import"./Badge-ChEc66ZK.js";import"./Chip-C4L73zbZ.js";import"./Chip-Cehwhsrm.js";import"./Divider-CEsBrrMM.js";import"./Divider-D90yCN7B.js";import"./dividerClasses-CmrggnBC.js";import"./ThemeSwitchRow-CzgtAJPj.js";import"./Skeleton-Cnro9Ssf.js";import"./Skeleton-YERebpLh.js";import"./TextField-Be_m1itn.js";import"./useFormControl-BXFuf1AA.js";import"./FormControl-CpIrVJXG.js";import"./ListContext-BbQ-ELWI.js";import"./useControlled-B3nW4gSi.js";import"./FormHelperText-DriOhB8T.js";import"./MenuItem-9AWDicSn.js";import"./ExpandMoreIcon-Drhp9NBW.js";import"./ListItem-BQbfhaNb.js";import"./Toolbar-NHe4wN1N.js";import"./Close-PYRyZLFk.js";import"./Popper-BP6_mYu6.js";import"./FormControlLabel-uXfgMOYb.js";import"./Edit-D7Wj015S.js";import"./SvgIcon-C9kKGRGN.js";import"./TableRow-BEr1GK-h.js";import"./TableCell-CKU-Sz5Y.js";import"./TreeView-C6Uvz5eX.js";import"./useThemeProps-DBqV773e.js";import"./index-fBdo_AAp.js";import"./Collapse-zg8g8jza.js";import"./Dialog-FcaLo1D3.js";import"./DialogContent-Cgw15Yeq.js";import"./Alert-DObdqKgJ.js";import"./useSlot-BZ0PDpI2.js";import"./LinearProgress-BPc8EmDZ.js";import"./LinearProgress-CzGVD_iw.js";import"./Spinner-CqnH8Z1g.js";import"./CircularProgress-BVSVe6Bz.js";import"./TextField-PgPe3GS0.js";import"./FormControl-CpHzLQRo.js";import"./FormHelperText-DGEG7tzH.js";import"./LabeledSwitch-CTvl5H5e.js";import"./Switch-CDvU1aS9.js";import"./Switch-DaX5OEsQ.js";import"./RadioGroup-MrifhHnI.js";import"./ToggleButton-CW3SCIEP.js";import"./ToggleButton-COzVB-Rg.js";import"./ToggleButtonGroup-CxQmKDVQ.js";import"./MenuItem-DfJXPFQL.js";import"./Tabs-UNb_SPs_.js";import"./AccordionSummary-cUjWgv_9.js";import"./Paper-BL8jtYAu.js";import"./ErrorFallback-DxZnaklR.js";import"./ErrorFallbackText-CBSkGSIV.js";import"./ErrorFallbackWrapper-2Ab5_OqS.js";const xe={title:"Component Library/InsetDrawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"**Deprecated.** Use `Drawer` (Surfaces/Drawer), the controlled side sheet.\n\nPersistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=x.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=x.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}},Ce=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var P,f,y;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Ce as __namedExportsOrder,xe as default};
