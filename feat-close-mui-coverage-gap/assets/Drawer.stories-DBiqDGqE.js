import{a as r,R as y,b as v,F as C}from"./iframe-COFs_UtR.js";import{v as b,w as k,x as B,P as R}from"./DropdownButton-DdQkmJUC.js";import{B as a}from"./Box-DSZohf0j.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BFtUc4n_.js";import"./SvgIcon-Cu8kR4gr.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DXI8L4mD.js";import"./extendSxProp-BfveVk5X.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-Br9ekNhD.js";import"./Box-BEb_3Tji.js";import"./Container-D004PVc3.js";import"./styled-DsoO9eq7.js";import"./createStyled-btN_05Dm.js";import"./useThemeProps-C1YLMFu1.js";import"./FlexBox-CM3pIGUP.js";import"./Stack-Udab0hUQ.js";import"./Typography-DDyWDEsv.js";import"./Paper-B8rmAYsL.js";import"./CogIcon-DOgitz6v.js";import"./InfoIcon-x18FY27k.js";import"./ThemeSwitchRow-D9BYjnUD.js";import"./index-CLjgFykj.js";import"./Text-DRb1poC2.js";import"./AdapterDayjs-C5Ouz9-c.js";import"./useThemeProps-B3b-1bce.js";import"./Modal-D75gtkH-.js";import"./utils-CkqtT2AM.js";import"./TransitionGroupContext-DualJ8j1.js";import"./index-VPMfSmH7.js";import"./resolveComponentProps-HkkRA5J0.js";import"./Popover-B7jPgFGm.js";import"./TextField-CbdZofsN.js";import"./useFormControl-CMXAxTns.js";import"./FormControl-CYTfQVUB.js";import"./useControlled-D1cEG3pG.js";import"./createSvgIcon-C2hSwNby.js";import"./FormHelperText-pSG34NeB.js";import"./IconButton-CdDcys5a.js";import"./ButtonBase-CdL6rHd2.js";import"./DialogContent-Bg1OWUuV.js";import"./Button-zSX_KHde.js";import"./Chip-BvLE5o4D.js";import"./DateTimePicker-D_pIcGw1.js";import"./Divider-CEy0w4OC.js";import"./_IconPopover-DMMWxGzb.js";import"./Chip-A07BHzeG.js";import"./Divider-CZSVcPjF.js";import"./TreeView-m4trFAYo.js";import"./Alert-D-nOd5MK.js";import"./AppInfoRow-B60RiNSZ.js";import"./AppSettings-BOKLsdFo.js";import"./TableRow-sL2cRuc0.js";import"./LinearProgress-CXvQl4fD.js";import"./Spinner-J2JsTlyl.js";import"./Dialog-Djic2CFV.js";import"./MapToggleButtonPresentational-DeY3mUq6.js";import"./Remove-CdEeIubw.js";import"./LinkButton-CKtknzFJ.js";import"./TextField-CzTYTlCu.js";import"./Switch-5JMBQZns.js";import"./LabeledSwitch-e4hrpLv0.js";import"./DatePicker-DSnxmH6o.js";import"./FormControl-CuWG66iZ.js";import"./FormHelperText-Dzx1WlCL.js";import"./Paper-D-Oim7GD.js";import"./ErrorFallback-TQb8da9R.js";import"./ErrorFallbackText-C8RcO45_.js";import"./ErrorFallbackWrapper-D42w-3GQ.js";import"./Brand-Bs80UuC1.js";import"./Edit-BOV9wVf0.js";const Mr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Qr=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Qr as __namedExportsOrder,Mr as default};
