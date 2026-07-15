import{j as r,R as y,a as C,F as v}from"./iframe-BWDLL2AF.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-BeMj20lx.js";import{B as a}from"./Box-C59dMgxV.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BG2pS985.js";import"./createSvgIcon-XnQP3vBd.js";import"./generateUtilityClass-g1qzx5ZO.js";import"./styled-DEFOqb-D.js";import"./generateUtilityClasses-DVUEFJbr.js";import"./useTheme-DOAovAvO.js";import"./Box-CCa4g7t1.js";import"./Container-CLAY7udK.js";import"./styled-o6RfLB5Q.js";import"./createStyled-BVw84nZJ.js";import"./useThemeProps-Ct7WBxRG.js";import"./Stack-DUjYdPYI.js";import"./Typography-Klmc7FDT.js";import"./Paper-D2v4N1dQ.js";import"./useThemeProps-CPqi_8jR.js";import"./Text-Dx4_8ER9.js";import"./AdapterDayjs-zyELZRo4.js";import"./Modal-CJ09CU82.js";import"./utils-BFnmslFO.js";import"./TransitionGroupContext-BB9UDuBa.js";import"./index-BHrQ54hb.js";import"./resolveComponentProps-CvqLrRPt.js";import"./TextField-isXjsZkP.js";import"./useFormControl-CJfau4hS.js";import"./IconButton-DH05WBbS.js";import"./ButtonBase-kwpA7teX.js";import"./DialogContent-BkWlGKhl.js";import"./Button-ClnRtEFd.js";import"./Chip-D6btNuqw.js";import"./DateTimePicker-DgMuFME3.js";import"./Divider-DOviS-GW.js";import"./Chip-D79fnq3-.js";import"./Divider-BlwEMsBH.js";import"./TreeView-BVPK7VvS.js";import"./Close-RsD_fZZb.js";import"./LinearProgress-Mece69bc.js";import"./Spinner-BavJBSMY.js";import"./Dialog-fVAw2gXQ.js";import"./MapToggleButtonPresentational-D2nbVQJ2.js";import"./Remove-Ce-CPNlR.js";import"./TextField-C0vtgENj.js";import"./Switch-RsyOZKzm.js";import"./DatePicker-Bb0Uj4Me.js";import"./LinkButton-CAT44kIY.js";import"./Paper-BuccSZQF.js";import"./ErrorFallback-DF0Z2ARP.js";import"./ErrorFallbackText-BWg9-CM5.js";import"./ErrorFallbackWrapper-LV7SVYTX.js";import"./Brand-DW-o0E9p.js";import"./constants-D8FrAGj1.js";import"./Edit-C55yYd-1.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
