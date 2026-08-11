import{j as r,R as y,a as C,F as v}from"./iframe-CdPu0Nji.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-DLh5IwXH.js";import{B as a}from"./Box-DT8xOrnE.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-zZuyRK2V.js";import"./createSvgIcon-BsGzgqT2.js";import"./generateUtilityClass-BkGLkL42.js";import"./styled-DvAHf-ii.js";import"./generateUtilityClasses-1MNiGsyU.js";import"./useTheme-CpTvU32l.js";import"./Box--WBeT2uu.js";import"./Container-A4vphWw1.js";import"./styled-CmJFQDl3.js";import"./createStyled-CdQc-wzQ.js";import"./useThemeProps-C31Hu9eR.js";import"./Stack-DaLGDZVV.js";import"./Typography-jEpu3_H5.js";import"./Paper-Dd_SbCQz.js";import"./useThemeProps-_uNjXpz2.js";import"./Text-B4VJCCMs.js";import"./AdapterDayjs--a3WegzB.js";import"./Modal-H2NuyrfR.js";import"./utils-CZMvQYd-.js";import"./TransitionGroupContext-p-MdgXa8.js";import"./index-CjSg-LrS.js";import"./resolveComponentProps-BTqXFKqs.js";import"./TextField-0yYRCi_S.js";import"./useFormControl-DILhRqjH.js";import"./IconButton-UIxH2BuM.js";import"./ButtonBase-CwLYgF7v.js";import"./DialogContent-B145AqQj.js";import"./Button-CYBCMGv1.js";import"./Chip-DsSTZC0S.js";import"./DateTimePicker-Buv1kwF8.js";import"./Divider-BvdIoCl6.js";import"./Chip-qDUxoCCM.js";import"./Divider-CQaGt93_.js";import"./TreeView-DRYBS-Xt.js";import"./Close-EDI9r0DC.js";import"./LinearProgress-Dz1fhiUi.js";import"./Spinner-CTU6TpBn.js";import"./Dialog-DJtg1d2n.js";import"./MapToggleButtonPresentational-Ca86nxH9.js";import"./Remove-CVv2NlLk.js";import"./TextField-CrDyAMED.js";import"./Switch-D6FP3j0O.js";import"./DatePicker-1LYmoJIP.js";import"./LinkButton-DdkrapHh.js";import"./Paper-yLhdaCIP.js";import"./ErrorFallback-De_3OhnE.js";import"./ErrorFallbackText-CIVzvqun.js";import"./ErrorFallbackWrapper-BCfSQJea.js";import"./Brand-BhO6VgG7.js";import"./constants-8XY3AVHe.js";import"./Edit-CU0UvQ5m.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
