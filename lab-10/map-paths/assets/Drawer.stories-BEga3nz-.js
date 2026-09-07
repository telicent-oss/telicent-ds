import{j as r,R as y,a as C,F as v}from"./iframe-DOdfunxu.js";import{q as b,r as k,s as B,P as R}from"./DropdownButton-ByqXHMOu.js";import{B as a}from"./Box-hyRQPaZ4.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B7_eivk6.js";import"./SvgIcon-DFomGA1f.js";import"./generateUtilityClass-BzCIKliO.js";import"./styled-N7qU7nSq.js";import"./generateUtilityClasses-CFD-9pLI.js";import"./useTheme-CTXZcIs4.js";import"./Box-DHRrNZX5.js";import"./Container-CPCeD-nf.js";import"./styled-D5fNiE7F.js";import"./createStyled-8QW6nx7o.js";import"./useThemeProps-D8V7PoaW.js";import"./FlexBox-DMv9SAJZ.js";import"./Stack-DwCY-dlK.js";import"./Typography-1e_UHE42.js";import"./Paper-CHErrLCd.js";import"./useThemeProps-DLNpf1VT.js";import"./Text-VYSLAOq5.js";import"./AdapterDayjs-CX9q05Th.js";import"./Modal-Cya2bj7G.js";import"./utils-CpWf8KQd.js";import"./TransitionGroupContext-KJ5bGa-X.js";import"./index-koODo2za.js";import"./resolveComponentProps-ChNdKYcA.js";import"./Popover-H5Nc25Qr.js";import"./TextField-B9CT7SDQ.js";import"./useFormControl-BYoapvFJ.js";import"./createSvgIcon-CZJ3IqX3.js";import"./IconButton-CsmqjV5u.js";import"./ButtonBase-CLoxpI8H.js";import"./DialogContent-C6cnJTIr.js";import"./Button-DQ93r4qZ.js";import"./Chip-BjXM18gl.js";import"./DateTimePicker-xNFlLIrM.js";import"./Divider-cnXSAO0W.js";import"./AppInfoRow-BOjAmyns.js";import"./Chip-BseIe8gJ.js";import"./Divider-pihCxoa4.js";import"./TreeView-DdA1N4tx.js";import"./Alert-s_Jivrbe.js";import"./LinearProgress-yqjeFZFn.js";import"./Spinner-CQdshHh4.js";import"./Dialog-IWGMIZQp.js";import"./MapToggleButtonPresentational-Cs7LiFb0.js";import"./Remove-mxIKVIiX.js";import"./LinkButton-CfRR_AtP.js";import"./TextField-CrzldOpU.js";import"./Switch-D-vofxUl.js";import"./DatePicker-Cb5XxovO.js";import"./Paper-CQpy0KVu.js";import"./ErrorFallback-CT7nYHa7.js";import"./ErrorFallbackText-nraKr_ob.js";import"./ErrorFallbackWrapper-fk64WSbi.js";import"./Brand-DGjLYV2R.js";import"./constants-Cxg4p8yF.js";import"./Edit-B4kKMPyK.js";const Or={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const jr=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,jr as __namedExportsOrder,Or as default};
