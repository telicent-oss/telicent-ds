import{j as r,R as y,a as C,F as v}from"./iframe-DNDUxcaO.js";import{q as b,r as k,s as B,P as R}from"./DropdownButton-Gjs_u29X.js";import{B as a}from"./Box-Bkz_GRi9.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BkYOIqa1.js";import"./SvgIcon-D_gSiXU4.js";import"./generateUtilityClass-yRtlLDX3.js";import"./styled-DfedMCu0.js";import"./generateUtilityClasses-B3dIEnov.js";import"./useTheme-CjRP5Zih.js";import"./Box-CyVPnPuN.js";import"./Container-CFQML5lf.js";import"./styled-CEZOB1IF.js";import"./createStyled-BMssbegF.js";import"./useThemeProps-DbfhoLXT.js";import"./FlexBox-B99FqBon.js";import"./Stack-CmDJwrDz.js";import"./Typography-D2D0xmuv.js";import"./Paper-CFCWWK2T.js";import"./useThemeProps-CvpeLjbL.js";import"./Text-BzABXIyF.js";import"./AdapterDayjs-CH9J21mu.js";import"./Modal-BxwzYNJH.js";import"./utils-HRKdNepk.js";import"./TransitionGroupContext-BuYwsTCk.js";import"./index-BfdHqeMj.js";import"./resolveComponentProps-BREYvZrN.js";import"./Popover-Ajs4D1Yg.js";import"./TextField-BpITMWTL.js";import"./useFormControl-Bme-q2O6.js";import"./createSvgIcon-Dauu6_Iu.js";import"./IconButton-BJQhOQlg.js";import"./ButtonBase-DnXvlvN-.js";import"./DialogContent-CynUCe-Z.js";import"./Button-DTJ9V6nt.js";import"./Chip-cnnRKU4-.js";import"./DateTimePicker-BB_R5cc9.js";import"./Divider-DrpONNh4.js";import"./AppInfoRow-Cc3GEOw8.js";import"./Chip-BpOQvEWJ.js";import"./Divider-CZP54Ze7.js";import"./TreeView-D5w0NpN-.js";import"./Alert-DO3pQkEQ.js";import"./LinearProgress-C7U5-zF-.js";import"./Spinner-B7aIcwLu.js";import"./Dialog-BNQpFNSR.js";import"./MapToggleButtonPresentational-DA_-a6wQ.js";import"./Remove-kGFwgJC6.js";import"./LinkButton-smfWLNJd.js";import"./TextField-CIJj8B3P.js";import"./Switch-C0MMkom0.js";import"./DatePicker-D-5DE768.js";import"./Paper-CHGMDtz6.js";import"./ErrorFallback-B5ZQhcnu.js";import"./ErrorFallbackText-CjRaFV8l.js";import"./ErrorFallbackWrapper-12v0M5tK.js";import"./Brand-GUpF-d_h.js";import"./constants-DsUVBwT7.js";import"./Edit-B-a3iYoh.js";const Or={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
