import{j as r,a as y,F as C}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as v}from"./index-Dl6G-zuu.js";import{D as b,u as k,P as B,a as R}from"./Drawer-B1fHcWFy.js";import{B as a}from"./Box-Dhn_9KCB.js";import"./jsx-runtime-DMAvRu52.js";import"./constants-B9t8YdZn.js";import"./iframe-D3gIqqh5.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BorXEO18.js";import"./defaultTheme-DzLjz-dB.js";import"./useTheme-Bb3Mws8A.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./UserProfile-B-204ua-.js";import"./Text-BVIdl1Jw.js";import"./Typography-Dhe6o_9I.js";import"./styled-gOU_XONt.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./UserIcon-DpDI8rF2.js";import"./SvgIcon-ByXbI411.js";import"./index-BfyspvgH.js";import"./FlexBox-DVTFmfFO.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./createSvgIcon-MUYTbX0p.js";import"./Popover-ChqH2Att.js";import"./utils-BgVWvv5k.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-BG42kFkz.js";import"./IconButton-CV1Rw-GO.js";import"./ButtonBase-DExEX2yL.js";import"./Menu-z0RjVFYM.js";import"./index-BbVSaS1S.js";import"./TextField-_uwvimc2.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-LX5PD6Iu.js";import"./useThemeProps-D7jdKLbb.js";import"./colorManipulator-BRx-aaGP.js";import"./Button-B3igqjqf.js";import"./Chip-CpI9GRDB.js";import"./TelicentHorizontalSVG-B3Sdezn-.js";import"./FlexGrid-BoEfBcU9.js";import"./Container-FF4Fdp1b.js";import"./DataSetIcon-BPiH7weE.js";import"./DateTimePicker-DBMjeEsM.js";import"./Divider-rhjpeBHv.js";import"./UIThemeProvider-BS_sxDlI.js";import"./ThemeProvider-GiwL96Kb.js";import"./IconButton-6csnvzSG.js";import"./Chip-tBdBanDh.js";import"./Divider-CByba2Al.js";import"./TreeView-DJkxzt72.js";import"./UserProfileContent-CQNj73V_.js";import"./LinearProgress-BvlhFhje.js";import"./Button-2o7EfnUw.js";import"./LinkButton-udFJw26p.js";import"./TextField-Bjo93FIX.js";import"./DatePicker-D-OuTvCY.js";import"./Card-B74XhqI-.js";import"./CardActions-BsipVerF.js";import"./Popover-CqIy5M7D.js";import"./Paper-BsJ-nzzS.js";import"./ErrorFallback-Db8jP4lY.js";import"./ErrorFallbackText-B2VVr9Qi.js";import"./ErrorFallbackWrapper-CwjhO7ym.js";import"./MapToggleButtonPresentational-DCqTgYa9.js";import"./Remove-M8FIgJpc.js";import"./Edit-DTNJPwPG.js";const Mr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=v.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return y(C,{children:[r(B,{onClick:s,children:"Toggle Drawer"}),r(R,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=v.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return y(C,{children:[r(B,{onClick:p,children:"Toggle Drawer"}),r(R,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Qr=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Qr as __namedExportsOrder,Mr as default};
