import{j as r,R as y,a as C,F as v}from"./iframe-DBgioWeW.js";import{p as b,u as k,q as B,P as R}from"./DropdownButton-BabsKrW9.js";import{B as a}from"./Box-BcBTuFed.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BZNRAdYq.js";import"./SvgIcon-TllpJj-5.js";import"./generateUtilityClass-CLTaAhKf.js";import"./styled-BFNF5QCQ.js";import"./generateUtilityClasses-Biy-3Iuq.js";import"./useTheme-C1yOJVtG.js";import"./Box-BMRHnFd3.js";import"./Container-CCihsyAb.js";import"./styled-Ciq6By-E.js";import"./createStyled-1Z_SCf_6.js";import"./useThemeProps-DD_wnCUH.js";import"./FlexBox-WvRGoRmd.js";import"./Stack-49KLdOgs.js";import"./Typography-0sG5OmeS.js";import"./Paper-ReDLUWfy.js";import"./useThemeProps-CMLYgd7W.js";import"./Text-BgUfptMq.js";import"./AdapterDayjs-a3XxtfRM.js";import"./Modal-CpjZt_2L.js";import"./utils-BFDACMv_.js";import"./TransitionGroupContext-B_89mR0Z.js";import"./index-CZMS6Q7o.js";import"./resolveComponentProps-BcqjDzNz.js";import"./Popover-MaL5oiYC.js";import"./TextField-DG8mdDgF.js";import"./useFormControl-B5a28znY.js";import"./createSvgIcon-pQhiwPMe.js";import"./IconButton-CV8_PS-T.js";import"./ButtonBase-CdfKuLiZ.js";import"./DialogContent-hHcY6KWM.js";import"./Button-DAGEP08y.js";import"./Chip-CaiYGmRd.js";import"./DateTimePicker-C2SjaMhl.js";import"./Divider-BtQ4DxGj.js";import"./AppInfoRow-Dzw9MtOg.js";import"./Chip-CFF8wAV8.js";import"./Divider-mG2cL4cg.js";import"./TreeView-Bk0Y2Vpn.js";import"./Alert-Dbl8MlCd.js";import"./LinearProgress-CgkIvIK9.js";import"./Spinner-CWMexREX.js";import"./Dialog-S6JnYG3y.js";import"./MapToggleButtonPresentational-CWWsP1Bq.js";import"./Remove-BC-lmLjV.js";import"./LinkButton-B5-1f7yZ.js";import"./TextField-Bgagizd7.js";import"./Switch-PbDUnJEB.js";import"./DatePicker-BF5iZhcx.js";import"./Paper-7C0C2edj.js";import"./ErrorFallback-CKRDg2e3.js";import"./ErrorFallbackText-DWxCPdpF.js";import"./ErrorFallbackWrapper-DYW1qU0r.js";import"./Brand-Bx9Nu_uI.js";import"./constants--Gti5moB.js";import"./Edit-BOpYoOgP.js";const Or={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
