import{a as r,R as x,b as C,F as v}from"./iframe-BOxWlwg5.js";import{y as b,z as k,G as B,H as R}from"./UserProfileContent-dZ7zWbX5.js";import{B as i}from"./Box-CvHBf5NP.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-RST7cKYM.js";import"./clsx-B-dksMZM.js";import"./styled-BgVBpEwg.js";import"./extendSxProp-CVzwORHv.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Fpsrv8av.js";import"./TransitionGroupContext-s9Ly73kI.js";import"./MapToggleButtonPresentational-BdOPS_HS.js";import"./Remove-q51AYkkp.js";import"./createSvgIcon-Cbav5LI2.js";import"./SvgIcon-BuYUPz_9.js";import"./IconButton-Dau69Om4.js";import"./Paper-sf9JWptJ.js";import"./XIcon-DBA19TI9.js";import"./Stack-CawfPr20.js";import"./styled-DO2oWJWU.js";import"./createStyled-BNm24LSV.js";import"./useThemeProps-Bxv5NIts.js";import"./Typography-CFlIo-Q1.js";import"./Box-DtSH4RJf.js";import"./Container-DHBouHEB.js";import"./FlexBox-Cv8f2Kgf.js";import"./Brand-XnqjgZ4f.js";import"./IconButton-LgOVvbaj.js";import"./LinkButton-D8kcuh6P.js";import"./AppInfoRow-CANQsy5u.js";import"./_IconPopover-OfVEyw5R.js";import"./Popover-DE_4eFiH.js";import"./utils-C3dOeq5Z.js";import"./index-CNcMevBU.js";import"./index-DGC1M5ns.js";import"./Modal-BhqwZZig.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-vB5A6xUp.js";import"./useSlotProps-Cg0GMwyG.js";import"./InfoIcon-BG9JhvZK.js";import"./Text-dB-e86oS.js";import"./AppSettings-DiZ0JEr4.js";import"./CogIcon-B7SI9pu3.js";import"./Badge-BGOsj2Ca.js";import"./Badge-DI9NlIAf.js";import"./Chip-8tQb7tBt.js";import"./Chip-iuAj1t61.js";import"./Divider-kspxcsBA.js";import"./Divider-w9MV6g0K.js";import"./dividerClasses-B5mKUAOo.js";import"./ThemeSwitchRow--QYarRG2.js";import"./Skeleton-O_rn9M7d.js";import"./Skeleton-DiHIX88t.js";import"./TextField-B-iZ9q_3.js";import"./useFormControl-CqEKaJO6.js";import"./FormControl-CNCCIB7H.js";import"./ListContext-3BYol91A.js";import"./useControlled-Crd973ZW.js";import"./FormHelperText-Cdu7wh-n.js";import"./MenuItem-DCjm5sxk.js";import"./ExpandMoreIcon-cR278gH1.js";import"./ListItem-sx5uYsfj.js";import"./Toolbar-BDm5sDas.js";import"./Close-CIRg-aOw.js";import"./Popper-BZv-1Yvv.js";import"./FormControlLabel-oASRYr7v.js";import"./Edit-Crc51dG7.js";import"./SvgIcon-BtF96WW6.js";import"./TableRow-B9BSqYVz.js";import"./TableCell-kr0lx5yP.js";import"./TreeView-BwV_15o1.js";import"./useThemeProps-CkA-ZwoX.js";import"./index-DHZDPTGE.js";import"./Collapse-CJdJ3uyR.js";import"./Dialog-MZhmu3-0.js";import"./DialogContent-CR-wXjtm.js";import"./Alert-bOjTzR4W.js";import"./useSlot-ljNNkbcn.js";import"./LinearProgress-B2bHkg80.js";import"./LinearProgress-CX8da3qz.js";import"./Spinner-COCl1drt.js";import"./CircularProgress-BHwLWokq.js";import"./TextField-DIbPruU-.js";import"./FormControl-Dwd6rDK_.js";import"./FormHelperText-BIWFhEJH.js";import"./LabeledSwitch-C8YuLEMm.js";import"./Switch-CUBlLIbd.js";import"./Switch-9odXMQM9.js";import"./RadioGroup-OVsHCzkT.js";import"./ToggleButton-CsoQZQ9x.js";import"./ToggleButton-DfWGuPF5.js";import"./ToggleButtonGroup-BIYFhty6.js";import"./MenuItem-Bh_ocaUE.js";import"./Tabs-BsBGmFx0.js";import"./AccordionSummary-DWx619cH.js";import"./Paper-B8YjvAvG.js";import"./ErrorFallback-z7nRQ4o7.js";import"./ErrorFallbackText-x_QK0bvY.js";import"./ErrorFallbackWrapper-CSs0BRCk.js";const xe={title:"Component Library/InsetDrawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"**Deprecated.** Use `Drawer` (Surfaces/Drawer), the controlled side sheet.\n\nPersistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=x.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=x.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}},Ce=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
