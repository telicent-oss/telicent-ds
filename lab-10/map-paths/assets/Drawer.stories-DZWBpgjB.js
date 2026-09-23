import{j as r,R as y,a as v,F as C}from"./iframe-DK5e7ZOT.js";import{t as b,v as k,w as B,P as R}from"./DropdownButton-DiNdw6-A.js";import{B as a}from"./Box-CviFExpe.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DxV6urXZ.js";import"./SvgIcon-D6AH0iNF.js";import"./generateUtilityClass-CJ1oYMmM.js";import"./styled-whwJNJEY.js";import"./generateUtilityClasses-De74ogiH.js";import"./useTheme-6u7oaTI_.js";import"./Box-DZbp-pEY.js";import"./Container-CBY4xLcq.js";import"./styled-Cvi2Yhbz.js";import"./createStyled-DZLwdHSi.js";import"./useThemeProps-C49gig2L.js";import"./FlexBox-_W6sVTx8.js";import"./Stack-D9tKsaGV.js";import"./Typography-DtWNdwUY.js";import"./Paper-CkmaxJia.js";import"./useThemeProps-B27knm1v.js";import"./Text-CgE9U0QS.js";import"./AdapterDayjs-BNNJxlxy.js";import"./Modal-DmgCBfl7.js";import"./utils-BPA7G_xE.js";import"./TransitionGroupContext-chR__9Zz.js";import"./index-BXTU90x9.js";import"./resolveComponentProps-BehVUnHR.js";import"./Popover-BL6vaQzp.js";import"./TextField-DVauQNmD.js";import"./useFormControl-DE-Z70Nv.js";import"./createSvgIcon-D4CWCoDK.js";import"./IconButton-DQxImuDe.js";import"./ButtonBase-DbfXnrFH.js";import"./DialogContent-B_p2qS1z.js";import"./Button-Bv1CAZBN.js";import"./Chip-DF7wqBOO.js";import"./DateTimePicker-Cmtn6oRj.js";import"./Divider-Bv5BlnnD.js";import"./AppInfoRow-8GncKDGn.js";import"./Chip-DgY181Ve.js";import"./Divider-CKdiT8EK.js";import"./TreeView-0iiQTVqV.js";import"./Alert-D3zd-dEy.js";import"./LinearProgress-DKPT-xSE.js";import"./Spinner-B4ZuhRHw.js";import"./Dialog-GFqm4Lft.js";import"./MapToggleButtonPresentational-DRlZN78V.js";import"./Remove-CLzfP5Pm.js";import"./LinkButton-DFGT5LNA.js";import"./TextField-ZbgnM2uQ.js";import"./Switch-CqtrnZSy.js";import"./DatePicker-Vi5l2hai.js";import"./Paper-DYeLzx0r.js";import"./ErrorFallback-C_jb8-Gz.js";import"./ErrorFallbackText-Ba6aZeYG.js";import"./ErrorFallbackWrapper-Cymj5yYi.js";import"./Brand-Bc1Aa_GQ.js";import"./Edit-705h0DKO.js";const Nr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
