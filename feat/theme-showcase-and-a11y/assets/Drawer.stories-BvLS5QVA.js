import{a as r,R as y,b as v,F as C}from"./iframe-DMftWpjQ.js";import{v as b,w as k,x as B,P as R}from"./DropdownButton-DIcMJDIN.js";import{B as i}from"./Box-DxOMqWI8.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-BJ7vrGpQ.js";import"./SvgIcon-BqxlpQr2.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DgJFzeuM.js";import"./extendSxProp-BQBq8Ufo.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DlCQiAxV.js";import"./Box-CuG-yDZz.js";import"./Container-B9iKt_1L.js";import"./styled-sLWjAyfV.js";import"./createStyled-DduiQEyZ.js";import"./useThemeProps-kTH-93a7.js";import"./FlexBox-dcuaugZK.js";import"./Stack-CCJluz1e.js";import"./Typography-yZWFoSQS.js";import"./Paper-BWFX18fY.js";import"./CogIcon-D-bSAL3u.js";import"./InfoIcon-EtRiOOWZ.js";import"./ExpandMoreIcon-E4JwSxhz.js";import"./ThemeSwitchRow-D6oWULgM.js";import"./index-C_HrpW8C.js";import"./Text-NRtR4KSk.js";import"./AdapterDayjs-CTqPZcQF.js";import"./useThemeProps-DZWZj2cv.js";import"./Modal-BH1gI4XO.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CNC1Tbto.js";import"./resolveComponentProps-8hQ4M2z1.js";import"./index-DMOWeANf.js";import"./utils-Cttcw_3Z.js";import"./Popover-CY5fyPbP.js";import"./TextField-CUuc5kqU.js";import"./useFormControl-CopSLkUh.js";import"./FormControl-DbcwfQFu.js";import"./ListContext-CA6PQpRK.js";import"./useControlled-8bSxec71.js";import"./createSvgIcon-DlGgZU6C.js";import"./FormHelperText-DVBN11Sz.js";import"./IconButton-CmmWWTSS.js";import"./ButtonBase-CouDHdYV.js";import"./DialogContent-r6OHTw38.js";import"./Button-DVD7topL.js";import"./Chip-CLq4-nC7.js";import"./MenuItem-NEdMCSZh.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-pVfd0O82.js";import"./Chip-BWuEUDu-.js";import"./Divider-DzkzjkIL.js";import"./Divider-CzdWdqy1.js";import"./TreeView-eSNabOVd.js";import"./Collapse-KLUbOUMi.js";import"./useSlot-CC1_x2QG.js";import"./AppInfoRow-BKyyK1JX.js";import"./AppSettings-CCPwkfxt.js";import"./SvgIcon-BTZ06rCa.js";import"./TableRow-CakLbtRf.js";import"./LinearProgress-1ejMra1J.js";import"./Spinner-BZgXNamb.js";import"./Dialog-CJahMWl6.js";import"./MapToggleButtonPresentational-dXHsTOdZ.js";import"./Remove-DSomqL-a.js";import"./Alert-BHdKqpDS.js";import"./ToggleButton-bZ4xMERt.js";import"./LinkButton-CE07GFMt.js";import"./TextField-mqAz_1Y-.js";import"./Switch-C37Whow7.js";import"./LabeledSwitch-2C7CKTT7.js";import"./DatePicker-CrA7bCO-.js";import"./DateTimePicker-BCi3PJ85.js";import"./FormControl-DhDyFZ3h.js";import"./FormHelperText-CeI-BKIk.js";import"./MenuItem-CpKmmeDm.js";import"./AccordionDetails-CH3uaA3P.js";import"./Paper-C5E2b80z.js";import"./ErrorFallback-JrFXQBP8.js";import"./ErrorFallbackText-B03wrKQ3.js";import"./ErrorFallbackWrapper-CEShrWIW.js";import"./Brand-S5MHGTSi.js";import"./Edit-C7iGKUMY.js";const ie={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=y.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
