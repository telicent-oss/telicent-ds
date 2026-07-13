import{j as r,R as y,a as C,F as v}from"./iframe-COAWb0t1.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-Vpz5ANha.js";import{B as a}from"./Box-D8Tcr7GZ.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-7ajEmXVT.js";import"./createSvgIcon-DrpJhUIt.js";import"./generateUtilityClass-Cu0h0UK6.js";import"./styled-BwRmoPFQ.js";import"./generateUtilityClasses-C5WQCcWA.js";import"./useTheme-CNaznUgl.js";import"./Box-DCFIHxCT.js";import"./Container-r-acF5nk.js";import"./styled-BUAiwXGA.js";import"./createStyled-C7KAEifV.js";import"./useThemeProps-CqGuhErK.js";import"./Stack-ybP7OB7f.js";import"./Typography-rxz2-vrR.js";import"./Paper-mwKQc_Lr.js";import"./useThemeProps-BdnIs0e2.js";import"./Text-DFy_CB-X.js";import"./AdapterDayjs-Bhl9N9Cw.js";import"./Modal-DdTPb72x.js";import"./utils-DHa3ZdZl.js";import"./TransitionGroupContext-DLKhgV5R.js";import"./index-DvCbfciI.js";import"./resolveComponentProps-BLxc7nk0.js";import"./TextField-BvMOatl_.js";import"./useFormControl-DQ8tyOBm.js";import"./IconButton-CCcPFMgK.js";import"./ButtonBase-Djdar6tU.js";import"./DialogContent-D5gHw-su.js";import"./Button-DdObXY2o.js";import"./Chip-DZQXXGC9.js";import"./DateTimePicker-J4wSZb31.js";import"./Divider-CWXbwJhU.js";import"./Chip-CFRNYI56.js";import"./Divider-D-8UFSs5.js";import"./TreeView-DvKDilPN.js";import"./Close-CSu-E4xw.js";import"./LinearProgress-D6xAADWG.js";import"./Spinner-B1314fCC.js";import"./Dialog-D0Y5W3XX.js";import"./MapToggleButtonPresentational-zYeQBpIS.js";import"./Remove-CtS7gXV9.js";import"./TextField-CTYTdDqu.js";import"./Switch-C1EnJSQy.js";import"./DatePicker-Jx01V1aW.js";import"./LinkButton-B6YMfa2-.js";import"./Paper-Eeqwzp5S.js";import"./ErrorFallback-BY0PXNFd.js";import"./ErrorFallbackText-CR44PIbE.js";import"./ErrorFallbackWrapper-Cf9R1LA3.js";import"./Brand-Bh-wC9I-.js";import"./constants-DwIYQs1H.js";import"./Edit-IxgIwfJY.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
