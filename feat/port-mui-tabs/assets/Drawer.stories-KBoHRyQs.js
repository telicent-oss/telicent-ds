import{j as r,R as y,a as v,F as C}from"./iframe-Ce2OCE46.js";import{t as b,v as k,w as B,P as R}from"./DropdownButton-BZeAU0hR.js";import{B as a}from"./Box-DPN8iDtX.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BeBbW4ae.js";import"./SvgIcon-1ianXB1D.js";import"./generateUtilityClass-Dpfkq2Nk.js";import"./styled-DG4DTdgR.js";import"./generateUtilityClasses-XCYs_VDx.js";import"./useTheme-CLM2GVtV.js";import"./Box-BOtHEcpc.js";import"./Container-bE4ocZr9.js";import"./styled-B5NIKwPN.js";import"./createStyled-C5CYLvYR.js";import"./useThemeProps-iW1JeY1q.js";import"./FlexBox-QXmAoGfV.js";import"./Stack-9i_ZvuDA.js";import"./Typography-wgrPajcY.js";import"./Paper-afLuPYhe.js";import"./useThemeProps-DnGJj7RI.js";import"./Text-iWgBtTEF.js";import"./AdapterDayjs-C4Mp3q20.js";import"./Modal-QVS8IAeT.js";import"./utils-DCsrA1oL.js";import"./TransitionGroupContext-B68BF-iQ.js";import"./index-CxlNYX3Y.js";import"./resolveComponentProps-DSEEQlqm.js";import"./Popover-Dt_6Onsk.js";import"./TextField-Doc_CKDt.js";import"./useFormControl-D3zcrAfb.js";import"./createSvgIcon-CR2ME6BQ.js";import"./IconButton-BTekjOnP.js";import"./ButtonBase-xU-UolfF.js";import"./DialogContent-DJkb6jt4.js";import"./Button-Cy1pOnfQ.js";import"./Chip-DrR5OuDg.js";import"./DateTimePicker-Ki4uwXEw.js";import"./Divider-DXzVK-0q.js";import"./AppInfoRow-iVaYeCli.js";import"./Chip-D2Ptw4F5.js";import"./Divider-BydDTYUN.js";import"./TreeView-B4RWPXCG.js";import"./Alert-DL7N4iSe.js";import"./LinearProgress-C2y7bs6L.js";import"./Spinner-Baj4KosW.js";import"./Dialog-DNWScIyV.js";import"./MapToggleButtonPresentational-DHVSXtub.js";import"./Remove-D6Util3l.js";import"./LinkButton-CGtVXD2M.js";import"./TextField-DHJTJtHu.js";import"./Switch-DK_hgLX1.js";import"./DatePicker-DU4_X1Kg.js";import"./Paper-dwBSwh0G.js";import"./ErrorFallback-DcjVRdtL.js";import"./ErrorFallbackText-C2I-OeKi.js";import"./ErrorFallbackWrapper-DpFlGNMA.js";import"./Brand-BDH5l_wz.js";import"./constants-DI5LickN.js";import"./Edit-DmBLMWan.js";const Or={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
