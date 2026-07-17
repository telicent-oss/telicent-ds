import{j as r,R as y,a as C,F as v}from"./iframe-CakKu3tO.js";import{p as b,u as k,q as B,r as R}from"./DropdownButton-DzEacR5L.js";import{B as a}from"./Box-Dqg2QVrM.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BV3RYnBk.js";import"./createSvgIcon-DzFzUuJj.js";import"./generateUtilityClass-6Xw7P5Pk.js";import"./styled-D0i_6XAq.js";import"./generateUtilityClasses-CTZdcpcX.js";import"./useTheme-CU3Z1LPN.js";import"./Box-CScMK_tz.js";import"./Container-qAOf7brY.js";import"./styled-Bc9giz0S.js";import"./createStyled-_kKMVs_z.js";import"./useThemeProps-CaBBmZ9W.js";import"./Stack-Bp4TNhTS.js";import"./Typography-VZwDLLsu.js";import"./Paper-DBfB9cOM.js";import"./useThemeProps-B0dC3yxA.js";import"./Text-BpfdXhwS.js";import"./AdapterDayjs-FG7X0hAC.js";import"./Modal-B3Wl13vZ.js";import"./utils-CGnDQcez.js";import"./TransitionGroupContext-B9U98U0r.js";import"./index-Chjky9EM.js";import"./resolveComponentProps-iQz6eQKL.js";import"./TextField-Dz5pbBA4.js";import"./useFormControl-BnXqfYXF.js";import"./IconButton-by7O0-70.js";import"./ButtonBase-DXatlffU.js";import"./DialogContent-CqiwXf8a.js";import"./Button-4KrkEQt7.js";import"./Chip-DLnMpScH.js";import"./DateTimePicker-CeMgnArL.js";import"./Divider-DBfCyhXV.js";import"./Chip-B3Sx6Jvd.js";import"./Divider-B5Ng5m_3.js";import"./TreeView-_VwDVBrL.js";import"./Close-fI8KD5QN.js";import"./LinearProgress-K4-hTmuI.js";import"./Spinner-CQ5Mmb5a.js";import"./Dialog-hPYI290l.js";import"./MapToggleButtonPresentational-DlZ_MTdF.js";import"./Remove-C87szEH0.js";import"./TextField-X3bvylQP.js";import"./Switch-CvCjsl_j.js";import"./DatePicker-CvxthTcJ.js";import"./LinkButton-Cv90u6o7.js";import"./Paper-0914DYk_.js";import"./ErrorFallback-D2fuzadK.js";import"./ErrorFallbackText-_e0eHtFb.js";import"./ErrorFallbackWrapper-C92QdUtP.js";import"./Brand-oBbv0poP.js";import"./constants-kG9JxYl2.js";import"./Edit-CmkU-7Bg.js";const Ir={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
