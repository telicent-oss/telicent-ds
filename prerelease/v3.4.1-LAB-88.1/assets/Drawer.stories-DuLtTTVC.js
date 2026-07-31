import{j as r,R as y,a as C,F as v}from"./iframe-DoslK4-Y.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-CpLqd6lJ.js";import{B as a}from"./Box-D2_lAdOb.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DnXd5C1m.js";import"./createSvgIcon-kyaEsooS.js";import"./generateUtilityClass-JvD44KlO.js";import"./styled-B63D9YfN.js";import"./generateUtilityClasses-DKrtj2o0.js";import"./useTheme-DzicPpM7.js";import"./Box-DAPH_7_v.js";import"./Container-PDo0r7TO.js";import"./styled-BvUWTwGk.js";import"./createStyled-C2aqfojm.js";import"./useThemeProps-DNll4FD1.js";import"./Stack-UL0xvK-j.js";import"./Typography-D2p4r1VP.js";import"./Paper-1pU2OFLe.js";import"./useThemeProps-BNlVDt2d.js";import"./Text-Cij1s-38.js";import"./AdapterDayjs-UbNq20Y4.js";import"./Modal-rS1eOuqw.js";import"./utils-Dvm8JGhi.js";import"./TransitionGroupContext-C-tiKQba.js";import"./index-CkH7vSdv.js";import"./resolveComponentProps-COOebCVT.js";import"./TextField-C2yuJQKq.js";import"./useFormControl-DRekPhCN.js";import"./IconButton-poqVLHkM.js";import"./ButtonBase-C5TrPrFI.js";import"./DialogContent-DhrHlbA4.js";import"./Button-C-Z1g5oZ.js";import"./Chip-D3gK25ET.js";import"./DateTimePicker-BXudKtkl.js";import"./Divider-JBjBhjWn.js";import"./Chip-DNg9fUiC.js";import"./Divider-DPs7zMxh.js";import"./TreeView-y43LHmco.js";import"./Close-MejyRCXq.js";import"./LinearProgress-zmCoNGUe.js";import"./Spinner-DokMSZNQ.js";import"./Dialog-Zk72S_-8.js";import"./MapToggleButtonPresentational-Dqn1nl-c.js";import"./Remove-BlL-kZFd.js";import"./TextField-BX9-cCN-.js";import"./Switch-DAnjy2Z2.js";import"./DatePicker-yxE24Q2d.js";import"./LinkButton-OGrJf87H.js";import"./Paper-CuXqVMKU.js";import"./ErrorFallback-BxLGSuCI.js";import"./ErrorFallbackText-DMYJZIcj.js";import"./ErrorFallbackWrapper-CoUUqruh.js";import"./Brand-BHjzrKzK.js";import"./constants-4rCzzNn2.js";import"./Edit-BUNMs3rM.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
