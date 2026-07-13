import{j as r,R as y,a as C,F as v}from"./iframe-BTs8Qz_v.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-G-K-EndC.js";import{B as a}from"./Box-BHCfSNSs.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-qL3nc6Ye.js";import"./createSvgIcon-ZqZYcYJv.js";import"./generateUtilityClass-XH2js52g.js";import"./styled-B0ve5Lte.js";import"./generateUtilityClasses-DzsYMhVt.js";import"./useTheme-BY7-I-_D.js";import"./Box-Ajc45ecz.js";import"./Container-BT4lQ41_.js";import"./styled-DgGoeEUu.js";import"./createStyled-CiTOBok1.js";import"./useThemeProps-CHaXSOO8.js";import"./Stack-Cl9uE_8Z.js";import"./Typography-Bwzy_pT0.js";import"./Paper-DxuvVAQ6.js";import"./useThemeProps-XRwC7y3X.js";import"./Text-By5Br_b-.js";import"./AdapterDayjs-B4hS7p71.js";import"./Modal-BHy1MODJ.js";import"./utils-DsGpmSH6.js";import"./TransitionGroupContext-C2nTmoPW.js";import"./index-Anq-NE1T.js";import"./resolveComponentProps-BSvdUFPL.js";import"./TextField-BCq8fbtP.js";import"./useFormControl-kbGIszV2.js";import"./IconButton-BOjLmXTD.js";import"./ButtonBase-DlDbZFIP.js";import"./DialogContent-pg1EBpb5.js";import"./Button-B27AaC1x.js";import"./Chip-BttY0NCV.js";import"./DateTimePicker-C0SYLDsK.js";import"./Divider-CN9HmWY3.js";import"./Chip-bGugLWYg.js";import"./Divider-D8qwfiZK.js";import"./TreeView-D9FXVNiU.js";import"./Close-Ck6AS4Zz.js";import"./LinearProgress-BtCU_M3F.js";import"./Spinner-m7x04DVn.js";import"./Dialog-IL7KeYEd.js";import"./MapToggleButtonPresentational-C7HzS0Xc.js";import"./Remove-bxF0BX3Y.js";import"./TextField-BL90cYaN.js";import"./Switch-5GXWpenZ.js";import"./DatePicker-XxDKSNN6.js";import"./LinkButton-B7KGF6ie.js";import"./Paper-BjLrjFfj.js";import"./ErrorFallback-75I18Wfm.js";import"./ErrorFallbackText-CkvOLZB-.js";import"./ErrorFallbackWrapper-Do3gktls.js";import"./Brand-BV9ZwJS1.js";import"./constants-7Gz8l8bJ.js";import"./Edit-ClsnfoJ9.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <Box p={2}>Drawer content</Box>
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Sr=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Sr as __namedExportsOrder,Ir as default};
