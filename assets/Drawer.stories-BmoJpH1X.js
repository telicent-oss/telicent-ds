import{j as r,R as y,a as C,F as v}from"./iframe-DiOxHtDb.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-D5H4ZN6Z.js";import{B as a}from"./Box-Bw2aXqxB.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DdMLfs8b.js";import"./createSvgIcon-Bct_3USy.js";import"./generateUtilityClass-BGBNebZi.js";import"./styled-BnW9PuXP.js";import"./generateUtilityClasses-cqFKly7s.js";import"./useTheme-CVqTLjnG.js";import"./Box-BgHTu-7g.js";import"./Container-KdOlOXUt.js";import"./styled-CBtLOs7W.js";import"./createStyled-DJUAM10Y.js";import"./useThemeProps-D92Ph84F.js";import"./Stack-DMVCg2VL.js";import"./Typography-DD85r3aG.js";import"./Paper-DD8Uzrbd.js";import"./useThemeProps-D5iojeUJ.js";import"./Text-lve70lr8.js";import"./AdapterDayjs-Bw8jeCZr.js";import"./Modal-D1jGZMpX.js";import"./utils-Cpn5Nc-9.js";import"./TransitionGroupContext-B0zfRRgr.js";import"./index-DV6lSy4S.js";import"./resolveComponentProps-DdsoJ6q3.js";import"./TextField-DJduElX5.js";import"./useFormControl-gW4Kn0M5.js";import"./IconButton-BBPQ8wpR.js";import"./ButtonBase-Bf3wJpyF.js";import"./DialogContent-WZ5vlnc6.js";import"./Button-CBCE0jtS.js";import"./Chip-DxnlP6yz.js";import"./DateTimePicker-E72uzE7D.js";import"./Divider-BAZX2ZXo.js";import"./Chip-ueCpo9tP.js";import"./Divider-BRU7MloR.js";import"./TreeView-BEBQjpEx.js";import"./Close-DyblsOO8.js";import"./LinearProgress-Ca-5RCUI.js";import"./Spinner-DBD_1EOk.js";import"./Dialog-CV47DXVk.js";import"./MapToggleButtonPresentational-CY2HZx6p.js";import"./Remove-BolgW9Tm.js";import"./TextField-CODSynKi.js";import"./Switch-BaPgqioG.js";import"./DatePicker-DvcNDPm0.js";import"./LinkButton-AP67oc2f.js";import"./Paper-CNPN9Zh5.js";import"./ErrorFallback-BmSWrFlV.js";import"./ErrorFallbackText-DVOaDD_c.js";import"./ErrorFallbackWrapper-BCV9v7sN.js";import"./Brand-ClGGejsO.js";import"./constants-BXamS6jK.js";import"./Edit-DgM3068Z.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
