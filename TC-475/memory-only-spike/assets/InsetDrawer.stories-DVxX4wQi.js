import{a as r,R as x,b as C,F as v}from"./iframe-RnQnoQX8.js";import{y as b,z as k,G as B,H as R}from"./UserProfileContent-CMKr3g_m.js";import{B as i}from"./Box-Bw31xyk6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cv-t7gt4.js";import"./clsx-B-dksMZM.js";import"./styled-CHUqJEZN.js";import"./extendSxProp-CBh2QTe4.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DI6HdjXk.js";import"./TransitionGroupContext-CBVDQk4P.js";import"./MapToggleButtonPresentational-Da4cOXhB.js";import"./Remove-7Y2EcPpw.js";import"./createSvgIcon-DEQxKW2j.js";import"./SvgIcon-BvuMPYna.js";import"./IconButton--ocr3Hbq.js";import"./Paper-_jcYEZaX.js";import"./XIcon-CCibX9oC.js";import"./Stack-CrylB_Fp.js";import"./styled-eZ5xdzZ3.js";import"./createStyled-CPPTetpG.js";import"./useThemeProps-CmFLLsEv.js";import"./Typography-DBvs_soa.js";import"./Box-W8ovBlmy.js";import"./Container-BwVzxpaS.js";import"./FlexBox-DsO7ubDs.js";import"./Brand-D9g93ilS.js";import"./IconButton-B6c5afDL.js";import"./LinkButton-BUW8XXKD.js";import"./AppInfoRow-BeFe7p8y.js";import"./_IconPopover-CobC4KUZ.js";import"./Popover-MwJ0-EW_.js";import"./utils-bvnqZ63E.js";import"./index-DRTkc6c-.js";import"./index-BNYStkyE.js";import"./Modal-v8QLfI2w.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-FxkCCCo6.js";import"./useSlotProps-DgvSFONu.js";import"./InfoIcon-D6Exs_Xw.js";import"./Text-ByuSSYGz.js";import"./AppSettings-D5gbX9uT.js";import"./CogIcon-CIdE7un1.js";import"./Badge-DKp5H5jh.js";import"./Badge-Dkt0jcpj.js";import"./Chip-XC4RVids.js";import"./Chip-Dl-4X4p2.js";import"./Divider-dOkWtiDQ.js";import"./Divider-D4m18Epw.js";import"./dividerClasses-CbcYRHVe.js";import"./ThemeSwitchRow-CTIMiD2z.js";import"./Skeleton-DCTvNfgq.js";import"./Skeleton-C0XYBYTl.js";import"./TextField-C1cT5Aao.js";import"./useFormControl-BDkUgp4y.js";import"./FormControl-DuXM5IYN.js";import"./ListContext-BvKyAyz9.js";import"./useControlled-BiJlVKlY.js";import"./FormHelperText-Cnr2UHSD.js";import"./MenuItem-BAkMVuqq.js";import"./ExpandMoreIcon-BSEHq4MR.js";import"./ListItem-CZpNJal7.js";import"./Toolbar-BU64nVx5.js";import"./Close-B1WU-_xu.js";import"./Popper-DO2lmnhT.js";import"./FormControlLabel-vRc02SQa.js";import"./Edit-WtWCEqSy.js";import"./SvgIcon-C0tF2EOt.js";import"./TableRow-BLgmD9P-.js";import"./TableCell-Cmmt5y6X.js";import"./TreeView-BqpNoiiq.js";import"./useThemeProps-Gx6XDnDx.js";import"./index-BAXa6WLZ.js";import"./Collapse-DT_Z5Ga5.js";import"./Dialog-hrhG2Ut0.js";import"./DialogContent-D2_KaIGY.js";import"./Alert-C_oszVvC.js";import"./useSlot-DqjjmsZB.js";import"./LinearProgress-CyEm_RB3.js";import"./LinearProgress-BAZ9C-Px.js";import"./Spinner-sBOybquN.js";import"./CircularProgress-ChGQDyoU.js";import"./TextField-DraT1S6N.js";import"./FormControl-DbhJZSNC.js";import"./FormHelperText-Ce917Gi3.js";import"./LabeledSwitch-Cd6X1CbS.js";import"./Switch-BQR1ScOG.js";import"./Switch-khoc8YVO.js";import"./RadioGroup-CSCckcNR.js";import"./ToggleButton-id5d8vke.js";import"./ToggleButton-BHbbn58Z.js";import"./ToggleButtonGroup-CIB7dpuM.js";import"./MenuItem-CLiTILFp.js";import"./Tabs-SnAko9mR.js";import"./AccordionSummary-D36Wvqua.js";import"./Paper-xZIfXiq-.js";import"./ErrorFallback-3sgzHsBs.js";import"./ErrorFallbackText-_T9Q39fP.js";import"./ErrorFallbackWrapper-rfGejkDn.js";const xe={title:"Component Library/InsetDrawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"**Deprecated.** Use `Drawer` (Surfaces/Drawer), the controlled side sheet.\n\nPersistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=x.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=x.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}},Ce=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
