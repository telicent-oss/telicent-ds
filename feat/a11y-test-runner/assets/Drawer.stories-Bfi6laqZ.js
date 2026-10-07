import{a as r,R as y,b as v,F as C}from"./iframe-EHiispHx.js";import{v as b,w as k,x as B,P as R}from"./DropdownButton-Ch2KHcVV.js";import{B as i}from"./Box-BaAFlwfY.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-jYjB0fJU.js";import"./SvgIcon-DoFYhYUo.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BZtHjZ0T.js";import"./extendSxProp-ChdDfLiy.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-D_CvADku.js";import"./Box-C_PltGBT.js";import"./Container--hMSSlEw.js";import"./styled-Dsi4lrKP.js";import"./createStyled-C1fbm1Mc.js";import"./useThemeProps-BJ2283JF.js";import"./FlexBox-Brwmqgps.js";import"./Stack-BDiVPNv1.js";import"./Typography-u692F7Lr.js";import"./Paper-D5wyd3V2.js";import"./CogIcon-BeV-4FUk.js";import"./InfoIcon-XACXhAsZ.js";import"./ExpandMoreIcon-BYRPKxhi.js";import"./ThemeSwitchRow-CWrDPQ4c.js";import"./index-BM8MsdEI.js";import"./Text-COeFgyG1.js";import"./AdapterDayjs-ByeICk9b.js";import"./useThemeProps-BfDwWLGL.js";import"./Modal-C84-Mwi0.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CRo6hKdF.js";import"./resolveComponentProps-DB8vWEuZ.js";import"./index-D6HbG4uh.js";import"./utils-BR7uOJR9.js";import"./Popover-CNEqh9b6.js";import"./TextField-Dzy82oKI.js";import"./useFormControl-DfdyR1E3.js";import"./FormControl-BrydlDY8.js";import"./ListContext-BlVgl-Pi.js";import"./useControlled-OJY6NH35.js";import"./createSvgIcon-B8I8xlXT.js";import"./FormHelperText-C_cemKQ0.js";import"./IconButton-D6RFmtWs.js";import"./ButtonBase-R0TygaOg.js";import"./DialogContent-CSkG4AHB.js";import"./Button-d-YWvRHk.js";import"./Chip-bJ3IowVa.js";import"./MenuItem-B3aA4AXj.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-D3s7jMPT.js";import"./Chip-E-lZUDs8.js";import"./Divider-B6qZ_hw9.js";import"./Divider-Bj27IAqR.js";import"./TreeView-CUJ68v5-.js";import"./Collapse-DwqZb05A.js";import"./useSlot-BwMdRg8G.js";import"./AppInfoRow-C5_ggrgQ.js";import"./AppSettings-C2atzlyc.js";import"./SvgIcon-4pLSFCsg.js";import"./TableRow-B3CsX6Fd.js";import"./LinearProgress-D1Fz4RJ-.js";import"./Spinner-ByzkNUK0.js";import"./Dialog-Dkx34yy5.js";import"./MapToggleButtonPresentational-D-V7ixFF.js";import"./Remove-qKz_hbHL.js";import"./Alert-C6RVlPi4.js";import"./ToggleButton-AWyPEjYi.js";import"./LinkButton-BEGAfp3_.js";import"./TextField-BsHv7ljj.js";import"./Switch-B0Tv5QGv.js";import"./LabeledSwitch-BXMnIWFI.js";import"./DatePicker-CBY6xzyW.js";import"./DateTimePicker-B1l5MsHG.js";import"./FormControl-D_AEerrZ.js";import"./FormHelperText-pfF9X1Ya.js";import"./MenuItem-BPyYHvK7.js";import"./AccordionDetails-Cu0Lnfok.js";import"./Paper-Jsu15PNh.js";import"./ErrorFallback-Cwh2Uo6W.js";import"./ErrorFallbackText-CjRh0P2N.js";import"./ErrorFallbackWrapper-CQZHS6gC.js";import"./Brand-CXxdZUN_.js";import"./Edit-FsVyeYJ0.js";const ie={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=y.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
