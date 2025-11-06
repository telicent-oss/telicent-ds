import{j as r,a as y,F as C}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as v}from"./index-Dl6G-zuu.js";import{D as b,u as k,P as B,a as R}from"./Drawer-BqBAYfez.js";import{B as a}from"./Box-D_PqCh9-.js";import"./jsx-runtime-DMAvRu52.js";import"./constants-D-SosAqN.js";import"./iframe-CwS3KD07.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-KUAcGPiB.js";import"./defaultTheme-BO-GVTvG.js";import"./useTheme-Pepcoth9.js";import"./GlobalStyles-Dgqu9ZBa.js";import"./GlobalStyles-DUEYx911.js";import"./UserProfile-BxAQRKdr.js";import"./Text-BFNiasyU.js";import"./Typography-Cuh1ru_h.js";import"./styled-CxLuQ4yi.js";import"./generateUtilityClasses-BrkKsHLY.js";import"./DefaultPropsProvider-CqwcgZRv.js";import"./UserIcon-BXQcnugD.js";import"./SvgIcon-CLvgKtsF.js";import"./index-BfyspvgH.js";import"./FlexBox-CtZjnzR4.js";import"./styled-DQdJekOl.js";import"./createStyled-a9EbIl6L.js";import"./useThemeProps-cJESbEea.js";import"./createSvgIcon-DtNep-FY.js";import"./Popover-BWwK9c_C.js";import"./utils-C8sSVwFJ.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-CYPvuqVC.js";import"./IconButton-aZDif4_A.js";import"./ButtonBase-COX4AZc7.js";import"./Menu-6SEWvgOm.js";import"./index-CfJV9iyf.js";import"./Select-B3yJvOVt.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-Dxz3ssCX.js";import"./useThemeProps-7HV0XwLr.js";import"./colorManipulator-BzIEvLd4.js";import"./TextField-BXF1k-T7.js";import"./Button-BVpYsrGj.js";import"./Chip-CGb5QCI3.js";import"./TelicentHorizontalSVG-DlSq0ZBw.js";import"./FlexGrid-CT_1tX54.js";import"./Container-0fCyAqte.js";import"./DataSetIcon-XV4rPdps.js";import"./MenuItem-B-D4s_cu.js";import"./dividerClasses-Bf8NGDkJ.js";import"./UIThemeProvider-Bf8bDzz-.js";import"./ThemeProvider-CXSeX4Uf.js";import"./IconButton-s5-t7JwX.js";import"./Chip-CZtKK3pl.js";import"./Divider-BInkGxYa.js";import"./Divider-nQy9ALGk.js";import"./TreeView-CLm9yUm1.js";import"./UserProfileContent-Dj2MBbg7.js";import"./LinearProgress-CwQNtVoX.js";import"./Button-KcRgJ0xu.js";import"./LinkButton-CCP5S-HK.js";import"./TextField-um4XWDOw.js";import"./Select-BKxTornM.js";import"./DatePicker-BaeNpiHF.js";import"./DateTimePicker-Bc91_Vqm.js";import"./Card-FwEEuDZt.js";import"./CardActions-hlVg_9Nm.js";import"./Popover-C7MCebY1.js";import"./Paper-DqTy2_Xb.js";import"./ErrorFallback-R5oVL8pn.js";import"./ErrorFallbackText-BLmhXvDQ.js";import"./ErrorFallbackWrapper-Cv-_dl0b.js";import"./MapToggleButtonPresentational-bPqb6oXs.js";import"./Remove-D5fK3_9H.js";import"./Edit-DuWAK1JC.js";const Zr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=v.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return y(C,{children:[r(B,{onClick:s,children:"Toggle Drawer"}),r(R,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=v.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return y(C,{children:[r(B,{onClick:p,children:"Toggle Drawer"}),r(R,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <Box p={2}>Drawer content</Box>
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const $r=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,$r as __namedExportsOrder,Zr as default};
