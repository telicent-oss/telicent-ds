import{a as r,R as y,b as v,F as C}from"./iframe-AFxgTgVh.js";import{v as b,w as k,x as B,P as R}from"./DropdownButton-CmjCz-up.js";import{B as i}from"./Box-BAyptZb_.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-Coc8f085.js";import"./SvgIcon-CgCZoLsz.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BsI0-Lki.js";import"./extendSxProp-BD-Y0mPz.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-CbdznVAQ.js";import"./Box-oVOzhj2X.js";import"./Container-Br5OlP2Q.js";import"./styled-BADavTd0.js";import"./createStyled-C-Iq8mjg.js";import"./useThemeProps-ChNg2e9b.js";import"./FlexBox-D3oDiYJs.js";import"./Stack-DmXgS0Zc.js";import"./Typography-DFz7k-kI.js";import"./Paper-CbgL2EIb.js";import"./CogIcon-DC6KQaAP.js";import"./InfoIcon-lSIhMqt2.js";import"./ExpandMoreIcon-CZhJx08f.js";import"./ThemeSwitchRow-C4g2Xynz.js";import"./index-CpoxvXIl.js";import"./Text-DXLE4G_s.js";import"./AdapterDayjs-DZVAbh7i.js";import"./useThemeProps-DHndbiQK.js";import"./Modal-qRAMf-Nc.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CXXJO1FV.js";import"./resolveComponentProps-BAwsKLAE.js";import"./index-4IveHujF.js";import"./utils-C0JGDBoq.js";import"./Popover-BsgVjdIR.js";import"./TextField-DxwO5kEU.js";import"./useFormControl-Bg5crxJM.js";import"./FormControl-B_dJc-MU.js";import"./ListContext-DytnD_x2.js";import"./useControlled-B8RTFtfz.js";import"./createSvgIcon-Dpm5xP5l.js";import"./FormHelperText-DMGyUIz_.js";import"./IconButton-DBTDpe9N.js";import"./ButtonBase-Be1Z9iU4.js";import"./DialogContent-DJzRyI5L.js";import"./Button-BVSqHqLN.js";import"./Chip-CLw8XhUv.js";import"./MenuItem-ksmP0_yb.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-3UG3pSje.js";import"./Chip-C6eTFzcU.js";import"./Divider-CiTbO13G.js";import"./Divider-Cs_qNx3V.js";import"./TreeView-Q7eAtxGU.js";import"./Collapse-CgizZByK.js";import"./useSlot-JMCK8GCP.js";import"./AppInfoRow-DaJEEGeD.js";import"./AppSettings-Bxrh47vJ.js";import"./SvgIcon-B1EPKKW1.js";import"./TableRow-CvYZ37P_.js";import"./LinearProgress-CpwNTlvx.js";import"./Spinner-rNhXcUyc.js";import"./Dialog-kpJLggSC.js";import"./MapToggleButtonPresentational-BeBKKkmg.js";import"./Remove-BR_Tqlmz.js";import"./Alert-B0IPru6R.js";import"./ToggleButton-DmIMHj3V.js";import"./LinkButton-DEB6LEJn.js";import"./TextField-B1Gh1rGr.js";import"./Switch-C_vcwcW1.js";import"./LabeledSwitch-BxWut5tD.js";import"./DatePicker-D23KJK8d.js";import"./DateTimePicker-CGr0SUDo.js";import"./FormControl-BEoO9Wxu.js";import"./FormHelperText-ByrV8KMP.js";import"./MenuItem-CSRF0Uv2.js";import"./AccordionDetails-5vciIkwG.js";import"./Paper-DERQ4Oel.js";import"./ErrorFallback-efIZsijd.js";import"./ErrorFallbackText-rPp7xJ4J.js";import"./ErrorFallbackWrapper-BFBmLnXB.js";import"./Brand-BuZzOnWw.js";import"./Edit-CnWyMZY6.js";const ie={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=y.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
