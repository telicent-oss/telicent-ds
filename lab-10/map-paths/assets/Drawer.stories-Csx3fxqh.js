import{j as r,R as y,a as C,F as v}from"./iframe-pRHhOQg2.js";import{q as b,r as k,s as B,P as R}from"./DropdownButton-BhUulX2F.js";import{B as a}from"./Box-DtDcNTqo.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B_ujPWv_.js";import"./SvgIcon-BETWM0sA.js";import"./generateUtilityClass-BCADfncv.js";import"./styled-BT5czdOb.js";import"./generateUtilityClasses-FW_hjQkZ.js";import"./useTheme-Pj73We2K.js";import"./Box-BCY9iEzw.js";import"./Container-B6BSNzBA.js";import"./styled-CPqvLnSt.js";import"./createStyled-CUHy6POj.js";import"./useThemeProps-iiZ4il65.js";import"./FlexBox-CVJnzuz0.js";import"./Stack-DQDETrC8.js";import"./Typography-D0LmHXWH.js";import"./Paper-jmBz9zYy.js";import"./useThemeProps-CGsmMNPE.js";import"./Text-CyftVFXd.js";import"./AdapterDayjs-v8geY8Yz.js";import"./Modal-DBc2l9M6.js";import"./utils-BcK75nLH.js";import"./TransitionGroupContext-BUjCANtX.js";import"./index-BZTrQaHy.js";import"./resolveComponentProps-Bmj0YTdO.js";import"./Popover-D8iN4GZw.js";import"./TextField-DHBYzqm_.js";import"./useFormControl-InOv9m2U.js";import"./createSvgIcon-BDR8vdZT.js";import"./IconButton-CvVfQwzZ.js";import"./ButtonBase-V2s46bUx.js";import"./DialogContent-CTQp3qrS.js";import"./Button-CPtCkVQU.js";import"./Chip-DDvACIff.js";import"./DateTimePicker-Cn_CbG0g.js";import"./Divider-D6agCD3x.js";import"./AppInfoRow-Bh0geM1J.js";import"./Chip-gnzR_yJR.js";import"./Divider-CVsgqjKK.js";import"./TreeView-Kik_R-ES.js";import"./Alert-DecaHlaz.js";import"./LinearProgress-C4VBChXn.js";import"./Spinner-C0vudGLr.js";import"./Dialog-Bcf-NoY1.js";import"./MapToggleButtonPresentational-fmHFE_FL.js";import"./Remove-DUvkPlWX.js";import"./LinkButton-x6CuZkTL.js";import"./TextField-CBpcQn2c.js";import"./Switch-DhAT4IM_.js";import"./DatePicker-D9GXXepP.js";import"./Paper-jV6pjJ0C.js";import"./ErrorFallback-CaX2CL1g.js";import"./ErrorFallbackText-C6J48uKa.js";import"./ErrorFallbackWrapper-y78ya1pb.js";import"./Brand-DOlsYGQL.js";import"./constants-C264WvBp.js";import"./Edit-wsLz-jz3.js";const Or={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
