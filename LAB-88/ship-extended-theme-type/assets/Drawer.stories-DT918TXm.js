import{j as r,R as y,a as C,F as v}from"./iframe-BoGmtiqi.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-9Xj5t7HG.js";import{B as a}from"./Box-BLhnI6lR.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D75N07sQ.js";import"./createSvgIcon-BsGvT_Gg.js";import"./generateUtilityClass-DYiHiqeZ.js";import"./styled-B8RB16F4.js";import"./generateUtilityClasses-BfoAhINv.js";import"./useTheme-Bt6YqtiY.js";import"./Box-CbZaWvDN.js";import"./Container-BbQvdPgj.js";import"./styled-_ew7vjUr.js";import"./createStyled-BhHOUunM.js";import"./useThemeProps-EcFwFAXV.js";import"./Stack-DbUHIhyW.js";import"./Typography-Dqfx75Vr.js";import"./Paper-Ds8lE9E_.js";import"./useThemeProps-BU_zzqaP.js";import"./Text-BkhkcLQ4.js";import"./AdapterDayjs-DhXCFc3d.js";import"./Modal-YkTh51uo.js";import"./utils-EUvM7u40.js";import"./TransitionGroupContext-CCztK8Kk.js";import"./index-BTYKHUkg.js";import"./resolveComponentProps-BPxYzwMf.js";import"./TextField-DPpR00-L.js";import"./useFormControl-C2VNDp8l.js";import"./IconButton-Dn0-eezg.js";import"./ButtonBase-BSa7XpmR.js";import"./DialogContent-DO755nYy.js";import"./Button-D8B8-owY.js";import"./Chip-DKVjHm47.js";import"./DateTimePicker-C_8oxirJ.js";import"./Divider-CSlgSMAF.js";import"./Chip-DppDhca0.js";import"./Divider-CcBzd5UP.js";import"./TreeView-WVY7m-Dp.js";import"./Close-DEil8FH7.js";import"./LinearProgress-iD2FIEM-.js";import"./Spinner-Cw7U4Ywu.js";import"./Dialog-DDcXchB3.js";import"./MapToggleButtonPresentational-CYRGxPPM.js";import"./Remove-Cj_C0DEH.js";import"./TextField-CdX8-_-1.js";import"./Switch-CC_HtqMW.js";import"./DatePicker-BHvgUPK0.js";import"./LinkButton-Do56arYd.js";import"./Paper-Folpf_uw.js";import"./ErrorFallback-Lo0r634_.js";import"./ErrorFallbackText-UdARBjRi.js";import"./ErrorFallbackWrapper-C3xuKd4S.js";import"./Brand-BKGj_y_E.js";import"./constants-B6Vi70Vn.js";import"./Edit-BE6zqKXG.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
