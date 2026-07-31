import{j as r,R as y,a as C,F as v}from"./iframe-CEWiRzw6.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-D5zAe562.js";import{B as a}from"./Box-B9TS0c-T.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-72JnTjY2.js";import"./createSvgIcon-BAc5XkB5.js";import"./styled-BMacbev-.js";import"./generateUtilityClasses-Cw_0ODav.js";import"./useTheme-BvI3wAVy.js";import"./Container-DTFPg4no.js";import"./styled-BBOfX3DR.js";import"./createStyled-BmFIYWCc.js";import"./useThemeProps-BfTjzlrr.js";import"./Stack-eaccBTma.js";import"./Typography-Ct9CX6dI.js";import"./Paper-Dpz_fFsE.js";import"./useThemeProps-BifiOOpz.js";import"./Text-Dp4zv4uS.js";import"./AdapterDayjs-DKU0gh2u.js";import"./Modal-BQhHhnX1.js";import"./utils-l9xoT8cx.js";import"./TransitionGroupContext-BMjDgQGH.js";import"./index-BV2l58Ww.js";import"./TextField-yl0ILouP.js";import"./useFormControl-CEp6dWZX.js";import"./IconButton-DX3o1mfc.js";import"./ButtonBase-DBR6Y10-.js";import"./DialogContent-BO2JCZn7.js";import"./Button-C95QZql4.js";import"./Chip-BIzlRnt1.js";import"./DateTimePicker-CLBYXH6l.js";import"./Divider-C3q8yTWy.js";import"./Chip-lJpclgZf.js";import"./Divider-CGtdrDdv.js";import"./TreeView-C7kXjfir.js";import"./LinearProgress-C909keVa.js";import"./Spinner-D6JI1MNv.js";import"./Dialog-D5TmvNsl.js";import"./MapToggleButtonPresentational-DcEVZk3p.js";import"./Remove-DEwthPW7.js";import"./TextField-BT8Xt3Sl.js";import"./Switch-28k243sq.js";import"./DatePicker-GkMLM4rl.js";import"./LinkButton-BQLavjxu.js";import"./Paper-DLWLBnlh.js";import"./ErrorFallback-CGk6Dun0.js";import"./ErrorFallbackText-DHFTb4mH.js";import"./ErrorFallbackWrapper-CTHNPdE-.js";import"./Brand-DHhfrOsC.js";import"./constants-DWn7Y7Mg.js";import"./Edit-BiEqD8O-.js";const Rr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},n={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},t={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,h,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var P,f,x;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Tr=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,t as ImperativeApi,n as PresentationalAndHook,Tr as __namedExportsOrder,Rr as default};
