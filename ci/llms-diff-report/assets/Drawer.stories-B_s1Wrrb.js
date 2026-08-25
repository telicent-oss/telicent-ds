import{j as r,R as y,a as C,F as v}from"./iframe-DTfHyu5W.js";import{p as b,u as k,q as B,P as R}from"./DropdownButton-DUCyq73_.js";import{B as a}from"./Box-iMTEkAxo.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DPsHQdqc.js";import"./SvgIcon-ByJD-XbM.js";import"./generateUtilityClass-Ba3X23cx.js";import"./styled-tbRfHNfe.js";import"./generateUtilityClasses-9N7BeDkA.js";import"./useTheme-CurHEFdS.js";import"./Box-6g8k1lEa.js";import"./Container-CFRLiDzI.js";import"./styled-V-O3-yLC.js";import"./createStyled-28Jskctr.js";import"./useThemeProps-DhRvrWEK.js";import"./FlexBox-Dx9ngdP2.js";import"./Stack-B5wnKsZi.js";import"./Typography-DEVUDcjz.js";import"./Paper-7aLAfVaY.js";import"./useThemeProps-BMiY-Nz3.js";import"./Text-CbmCHta1.js";import"./AdapterDayjs-DfVF7Ju1.js";import"./Modal-CuQBat2_.js";import"./utils-hc9ieIbF.js";import"./TransitionGroupContext-pH2rcq8m.js";import"./index-BojeORES.js";import"./resolveComponentProps-kTxaYEkO.js";import"./Popover-CiC5O2RE.js";import"./TextField-Bq5brCt8.js";import"./useFormControl-CfqMxs37.js";import"./createSvgIcon-eW_NYhFU.js";import"./IconButton-B22dA0Mh.js";import"./ButtonBase-B4JUzgMd.js";import"./DialogContent-S6vhYFVZ.js";import"./Button-Dae9G8Ev.js";import"./Chip-C9IKZPuh.js";import"./DateTimePicker-CXsTfPVe.js";import"./Divider-B8-GGABN.js";import"./AppInfoRow-DM5JDCIg.js";import"./Chip-Ce6ftWrB.js";import"./Divider-DQcY7mpQ.js";import"./TreeView-CKyPmjfa.js";import"./Alert-DZul0Vde.js";import"./LinearProgress-HKvtzsEf.js";import"./Spinner-Dx14enoI.js";import"./Dialog-CGZIbGHz.js";import"./MapToggleButtonPresentational-jSE1x0h9.js";import"./Remove-NJ9P2pvD.js";import"./LinkButton-CUXW4PH5.js";import"./TextField-C0bNNYYR.js";import"./Switch-CyPgFvnQ.js";import"./DatePicker-YZ26x2F9.js";import"./Paper-BXaJm_Li.js";import"./ErrorFallback-UX7BvmTl.js";import"./ErrorFallbackText-CnIufqnP.js";import"./ErrorFallbackWrapper-B3axQyNr.js";import"./Brand-e-EQElnn.js";import"./constants-BAHDwWKH.js";import"./Edit-CU6kEAEu.js";const Or={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
