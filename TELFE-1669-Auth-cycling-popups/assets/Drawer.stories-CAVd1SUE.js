import{j as r,R as y,a as C,F as v}from"./iframe-2R0I_iab.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-DIABJQSC.js";import{B as a}from"./Box-CnYDa6Qf.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DgD39kRa.js";import"./createSvgIcon-mEStq9kO.js";import"./generateUtilityClass-CD2y2PA9.js";import"./styled-DOqFaxF3.js";import"./generateUtilityClasses-CQX3K1Az.js";import"./useTheme-DIsbzBAj.js";import"./Box-DkaRWSls.js";import"./Container-CVVcdNPZ.js";import"./styled-DSveC2VB.js";import"./createStyled-7MyDbkZC.js";import"./useThemeProps-BZXXP621.js";import"./Stack-CY2zen42.js";import"./Typography-CLpqeEo-.js";import"./Paper-d8y5ElZ3.js";import"./useThemeProps-DFSQRIyd.js";import"./Text-ijTctchc.js";import"./AdapterDayjs-C0knh-V0.js";import"./Modal-CTV7kQyA.js";import"./utils-Cmi71HQq.js";import"./TransitionGroupContext-DqwjpCqS.js";import"./index-cXybQAtE.js";import"./resolveComponentProps-Cv5RNStH.js";import"./TextField-CGJuDnTR.js";import"./useFormControl-Dksspww5.js";import"./IconButton-2Ggfedl3.js";import"./ButtonBase-CCY4F8Yx.js";import"./DialogContent-BFfU8EFI.js";import"./Button-Bvu6LaZX.js";import"./Chip-Ci5Wvh6t.js";import"./DateTimePicker-Dk1S7IIq.js";import"./Divider-CD7sLQ3W.js";import"./Chip-CR4NBaGA.js";import"./Divider-DmfX1O82.js";import"./TreeView-DooNYzs2.js";import"./Close-DqanLwtm.js";import"./LinearProgress-dsytnwK0.js";import"./Spinner-CnGh8NP_.js";import"./Dialog-3ino5muI.js";import"./MapToggleButtonPresentational-Bc5YYuzo.js";import"./Remove-DkyK2kxE.js";import"./TextField-DYkturVF.js";import"./Switch-D_taiJx6.js";import"./DatePicker-BB6UCZL8.js";import"./LinkButton-p2kJftH-.js";import"./Paper-rT427azC.js";import"./ErrorFallback-DwUrMpBh.js";import"./ErrorFallbackText-mQySYuZ9.js";import"./ErrorFallbackWrapper-BbmJfuZU.js";import"./Brand-JWp-aIIF.js";import"./constants-CTxUe8Mo.js";import"./Edit-CEDurCbO.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
