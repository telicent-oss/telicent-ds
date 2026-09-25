import{a as r,R as y,b as v,F as C}from"./iframe-B8lru9Ox.js";import{v as b,w as k,x as B,P as R}from"./DropdownButton-D5bjMSjg.js";import{B as a}from"./Box-D2AU3WA-.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DqrK-S_Y.js";import"./SvgIcon-BgwuaJOO.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-B7kmWUc9.js";import"./extendSxProp-DjHg015s.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-lbsOwaIT.js";import"./Box-DtmlQxFY.js";import"./Container-DOlWnnaB.js";import"./styled-LsKj47KW.js";import"./createStyled-_4klY0ey.js";import"./useThemeProps-DqCYqzYY.js";import"./FlexBox-QL3KD45m.js";import"./Stack-DQqlKiUu.js";import"./Typography-DtJW_51A.js";import"./Paper-4eMZAmsM.js";import"./CogIcon-Ch-cC12G.js";import"./InfoIcon-buuMzVkD.js";import"./ThemeSwitchRow-D81wGVaD.js";import"./index-DX_1Zw-E.js";import"./Text-Cy_FjCVa.js";import"./AdapterDayjs-B05HZLDs.js";import"./useThemeProps-DVQSamuW.js";import"./Modal-DMbdFXDI.js";import"./utils-D4kUvPaj.js";import"./TransitionGroupContext-Bg30LDe0.js";import"./index-BhBzwTqv.js";import"./resolveComponentProps-B4S3ggFk.js";import"./Popover-DGL3i7op.js";import"./TextField-Eij0i_Vp.js";import"./useFormControl-CLg-uBwy.js";import"./FormControl-DRfKH_qZ.js";import"./useControlled-D13dP5S1.js";import"./createSvgIcon-Cs4F3KcN.js";import"./FormHelperText-Bbq3OgSk.js";import"./IconButton-DUSx-Z4B.js";import"./ButtonBase-B1n-NBaA.js";import"./DialogContent-Bv7qBY9o.js";import"./Button-B6b6ie_Y.js";import"./Chip-DS6faPIl.js";import"./DateTimePicker-B2f9rqpT.js";import"./Divider-BythBDcI.js";import"./_IconPopover-BtykrXQA.js";import"./Chip-C7-LDCye.js";import"./Divider-CGpXJFUY.js";import"./TreeView-Skztq0S6.js";import"./Alert-CutSt2-9.js";import"./AppInfoRow-CnKSgvK0.js";import"./AppSettings-DhijNEqA.js";import"./TableRow-CSSGEL79.js";import"./LinearProgress-BbwxtDnN.js";import"./Spinner-DZRjnsts.js";import"./Dialog-BXhz5J8P.js";import"./MapToggleButtonPresentational-D0yGj-7g.js";import"./Remove-D_OeaEKR.js";import"./LinkButton-BR4a1XmD.js";import"./TextField-D7q2BR5w.js";import"./Switch-DP0Ivfww.js";import"./LabeledSwitch-0Oeg2Pzv.js";import"./DatePicker-BayJyfOL.js";import"./FormControl-z0pYS_Fc.js";import"./FormHelperText-BbhR6ctA.js";import"./Paper-CkTdphIQ.js";import"./ErrorFallback-BOH60sVX.js";import"./ErrorFallbackText-CjuRVe4b.js";import"./ErrorFallbackWrapper-CHBRDu9p.js";import"./Brand-BQ4MZmxe.js";import"./Edit-XXHTxPCB.js";const Mr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
