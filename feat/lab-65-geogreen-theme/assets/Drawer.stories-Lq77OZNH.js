import{j as r,R as y,a as C,F as v}from"./iframe-DE4o_xuf.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-TZ8NqmLi.js";import{B as a}from"./Box-Bd_zZ9oM.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BBsynfLU.js";import"./createSvgIcon-DtXO-Uv_.js";import"./generateUtilityClass-DHTzyDY3.js";import"./styled-CGCPQysn.js";import"./generateUtilityClasses-DcHmrLgo.js";import"./useTheme-BzESzBxP.js";import"./Box-CXnvlXpg.js";import"./Container-CDYT1mRl.js";import"./styled-D-cxiqNK.js";import"./createStyled-BO30qbE7.js";import"./useThemeProps-o8Jugz6q.js";import"./Stack-Be4qbLTD.js";import"./Typography-Qj6Vzb5q.js";import"./Paper-CMgwwm5d.js";import"./useThemeProps-Ce-tiBQL.js";import"./Text-MlQGavPh.js";import"./AdapterDayjs-Bzej26a6.js";import"./Modal-UPQCKQyn.js";import"./utils-BL9EoQhp.js";import"./TransitionGroupContext-BzaUJiqI.js";import"./index-gBXGiVxM.js";import"./resolveComponentProps-DmD3T0IR.js";import"./TextField-CmaU-KBj.js";import"./useFormControl-CdjRoiJh.js";import"./IconButton-C6qkeN3E.js";import"./ButtonBase-CvPzqTPI.js";import"./DialogContent-BYVOVBvJ.js";import"./Button-CcspgIL3.js";import"./Chip-R4S1Xx1_.js";import"./DateTimePicker-BlH7Vx01.js";import"./Divider-CmASGeLX.js";import"./Chip-CMEv-3Ns.js";import"./Divider-DucMFgjg.js";import"./TreeView-971-ZmyF.js";import"./Close-Y3be_ga9.js";import"./LinearProgress-CPlFnB1B.js";import"./Spinner-D3FQHiVx.js";import"./Dialog-DlYa8EPP.js";import"./MapToggleButtonPresentational-O_uOzVPo.js";import"./Remove-kIiRQGnZ.js";import"./TextField-uvS4wcSl.js";import"./Switch-C0X6GqCf.js";import"./DatePicker-dmDL6v2V.js";import"./LinkButton-CHAlghlC.js";import"./Paper-DTmbpqUX.js";import"./ErrorFallback-DTTBcvO-.js";import"./ErrorFallbackText-DzH3d24h.js";import"./ErrorFallbackWrapper-B_0KWZTa.js";import"./Brand-Bsip24mJ.js";import"./constants-BOf8-UPq.js";import"./Edit-RumvcRpQ.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
