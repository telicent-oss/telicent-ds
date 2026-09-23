import{j as r,R as y,a as v,F as C}from"./iframe-CYeXSRCn.js";import{t as b,v as k,w as B,P as R}from"./DropdownButton-Bqbdc4Q1.js";import{B as a}from"./Box-BL2kbC6f.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DgdKDg--.js";import"./SvgIcon-1lsXHHt1.js";import"./generateUtilityClass-CRJ1fUnr.js";import"./styled-Ch7TYyIp.js";import"./generateUtilityClasses-8aJfFmyf.js";import"./useTheme-C01aVLuh.js";import"./Box-B-xAxOdf.js";import"./Container-Di2XLZDk.js";import"./styled-DHAnpyzb.js";import"./createStyled-BAXDNbou.js";import"./useThemeProps-zxRs09PI.js";import"./FlexBox-yPpBoTQ5.js";import"./Stack-YJQQ9jj8.js";import"./Typography-m86ksWAT.js";import"./Paper-CUHDivEI.js";import"./useThemeProps-CaCGsMmh.js";import"./Text-BrJzNAfR.js";import"./AdapterDayjs-C0uSp_M-.js";import"./Modal-Dvtocw5a.js";import"./utils-CkwS266W.js";import"./TransitionGroupContext-O-4sDslW.js";import"./index-Df4rPAmw.js";import"./resolveComponentProps-D0S80uWW.js";import"./Popover-C0_hs2rD.js";import"./TextField-CXdIwcSO.js";import"./useFormControl-QoKFw2_D.js";import"./createSvgIcon-Bg1pYGJE.js";import"./IconButton-CYyrSHuW.js";import"./ButtonBase-BtjCcquE.js";import"./DialogContent-_FhiVOAB.js";import"./Button-BSTFOQew.js";import"./Chip-DC_dEvmi.js";import"./DateTimePicker-iI1kKlBI.js";import"./Divider-BwUUxUUy.js";import"./AppInfoRow-CAMu3Yom.js";import"./Chip-DzPpf97O.js";import"./Divider-VlLlx1-K.js";import"./TreeView-hK-Zr8DT.js";import"./Alert-DI7B7ATA.js";import"./LinearProgress-tLf1McQP.js";import"./Spinner-CPAmDtKw.js";import"./Dialog-CwAPF42_.js";import"./MapToggleButtonPresentational-CxLzaM7Q.js";import"./Remove-ubGyGJQ1.js";import"./LinkButton-Cz3BzB8v.js";import"./TextField-CUXZxfyV.js";import"./Switch-C6_n0qq1.js";import"./DatePicker-Qsz_6cJq.js";import"./Paper-CyTJnt6J.js";import"./ErrorFallback-BPyngFVf.js";import"./ErrorFallbackText-C2TAg_HC.js";import"./ErrorFallbackWrapper-Bq_dmHdG.js";import"./Brand-ll5GJx6P.js";import"./Edit-B7Jljab-.js";const Nr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Or=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Or as __namedExportsOrder,Nr as default};
