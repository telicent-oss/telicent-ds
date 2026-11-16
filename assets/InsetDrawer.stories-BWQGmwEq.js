import{a as r,R as x,b as C,F as v}from"./iframe-DunpSdH6.js";import{y as b,z as k,G as B,H as R}from"./UserProfileContent-D_7QN1X2.js";import{B as i}from"./Box-B-pmLQD1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-stnAc-Tj.js";import"./clsx-B-dksMZM.js";import"./styled-DLhCII3n.js";import"./extendSxProp-DbmafzOS.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-TD2UFsiu.js";import"./TransitionGroupContext-DpYXvT-8.js";import"./MapToggleButtonPresentational-DhL_tRuE.js";import"./Remove-CypNUzA-.js";import"./createSvgIcon-DoUG9alq.js";import"./SvgIcon-DvaLc9-e.js";import"./IconButton-BxRM68Nx.js";import"./Paper-BnYpX6e-.js";import"./XIcon-B-AAlqIS.js";import"./Stack-CGlC5oSp.js";import"./styled-DlfzhkfP.js";import"./createStyled-BLV0Zz4B.js";import"./useThemeProps-BeK64rtS.js";import"./Typography-Cnm5zE5B.js";import"./Box-CCnO3-HF.js";import"./Container-COQeBzQQ.js";import"./FlexBox-DwjKj-U_.js";import"./Brand-D0GB8OW-.js";import"./IconButton-CnZQJMnz.js";import"./LinkButton-BoEmtgzU.js";import"./AppInfoRow-TLJdMOCL.js";import"./_IconPopover-kbbuypBQ.js";import"./Popover-DsC-QvdX.js";import"./utils-W3WhWsKZ.js";import"./index-MiBr_QQr.js";import"./index-DLav748F.js";import"./Modal-d3tziOSd.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-Cq-RMR5j.js";import"./useSlotProps-CVslE_Pq.js";import"./InfoIcon-C6C5JcpY.js";import"./Text-CAHfJU7X.js";import"./AppSettings-CieG7Itn.js";import"./CogIcon-DURisWGj.js";import"./Badge-DfmfDckY.js";import"./Badge-DNThIf1X.js";import"./Chip-ClFjssnv.js";import"./Chip-Cph2lDK-.js";import"./Divider-DOwJyp8h.js";import"./Divider-CZk7lu9D.js";import"./dividerClasses-DaEwxQ2U.js";import"./ThemeSwitchRow-DKnKmbOE.js";import"./Skeleton-OXXt9MRY.js";import"./Skeleton-DeprtIml.js";import"./TextField-Bmgg2D5C.js";import"./useFormControl-DJJUNb1q.js";import"./FormControl-g-yWrPYN.js";import"./ListContext-C9AaZLBf.js";import"./useControlled-D5RrLse2.js";import"./FormHelperText-BuPvD1hT.js";import"./MenuItem-B2bWzFXk.js";import"./ExpandMoreIcon-BIxTqLU3.js";import"./ListItem-BhthYCMo.js";import"./Toolbar-DNoBnjCT.js";import"./Close-Cj-9lqkJ.js";import"./Popper-DYqxq4vL.js";import"./FormControlLabel-oM-7wre-.js";import"./Edit-DCrwz_Eh.js";import"./SvgIcon-DQ2JuKIZ.js";import"./TableRow-D4o3RwxN.js";import"./TableCell-xtN6Kl0n.js";import"./TreeView-BDnoQbge.js";import"./useThemeProps-BitkL5n2.js";import"./index-CZvxb2J0.js";import"./Collapse-WWGG7p11.js";import"./Dialog-CK4_JL4u.js";import"./DialogContent-DkAI-Cl0.js";import"./Alert-CN792Xkl.js";import"./useSlot-CWMKbCxx.js";import"./LinearProgress-aosU5P48.js";import"./LinearProgress-DX42AqMp.js";import"./Spinner-BAHqvCO1.js";import"./CircularProgress-CpVFRLj9.js";import"./TextField-B0XeM5G1.js";import"./FormControl-Bz1Pa-gf.js";import"./FormHelperText-D3Z6WRSy.js";import"./LabeledSwitch-CQiKhy5B.js";import"./Switch-zPa9dcOV.js";import"./Switch-d71D0uBO.js";import"./RadioGroup-DjTHdfvI.js";import"./ToggleButton-wesw0Lhu.js";import"./ToggleButton-DGKJly8H.js";import"./ToggleButtonGroup-DhWfGsgc.js";import"./MenuItem-iCAnPddj.js";import"./Tabs-CIlDC37T.js";import"./AccordionSummary-ChOmO8Ka.js";import"./Paper-CNdqdVGK.js";import"./ErrorFallback-DcOvTajC.js";import"./ErrorFallbackText-DYZvmVRS.js";import"./ErrorFallbackWrapper-rsg5SlDs.js";const xe={title:"Component Library/InsetDrawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"**Deprecated.** Use `Drawer` (Surfaces/Drawer), the controlled side sheet.\n\nPersistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=x.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=x.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}},Ce=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
