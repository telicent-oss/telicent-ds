import{j as r,R as y,a as v,F as C}from"./iframe-wwyKJVT7.js";import{t as b,v as k,w as B,P as R}from"./DropdownButton-BjR4G6c6.js";import{B as a}from"./Box-CvHLitPM.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BJUhZHXy.js";import"./SvgIcon-CUVs1lE1.js";import"./generateUtilityClass-CkoJfXzB.js";import"./styled-LpRxHRpP.js";import"./generateUtilityClasses-lZioDJSU.js";import"./useTheme-fWgDsTlF.js";import"./Box-BfkY0LoG.js";import"./Container-Ex8awo5l.js";import"./styled-CqLf-K_6.js";import"./createStyled-7rACZg1S.js";import"./useThemeProps-DGz7F6m3.js";import"./FlexBox-PSVLjaHH.js";import"./Stack-DkIolbKj.js";import"./Typography-KsMZ-Lzq.js";import"./Paper-Ty8OBP7-.js";import"./useThemeProps-6ff9_uQw.js";import"./Text-Cs_t5jTe.js";import"./AdapterDayjs-DLuz1KZP.js";import"./Modal-FJt4lU_X.js";import"./utils-De2QkNKz.js";import"./TransitionGroupContext-Ci1yj1nx.js";import"./index-Bc6yxq3M.js";import"./resolveComponentProps-Tez3FZ9N.js";import"./Popover-ad1rGmx0.js";import"./TextField-DQEmSFXz.js";import"./useFormControl-Bu5lKDwq.js";import"./createSvgIcon-Bca1zsRN.js";import"./IconButton-DAUWwzIO.js";import"./ButtonBase-ZfxRSw2y.js";import"./DialogContent-B9FHsown.js";import"./Button-BUB-REPY.js";import"./Chip-dWFWXs2g.js";import"./DateTimePicker-CCwiql_t.js";import"./Divider-CgD_nbzY.js";import"./AppInfoRow-DD0pDyG_.js";import"./Chip-BBcf24H1.js";import"./Divider-DvGORPwC.js";import"./TreeView-BUpBgZFV.js";import"./Alert-BSE5AHq1.js";import"./LinearProgress-rfUNUhKS.js";import"./Spinner-tbj581ml.js";import"./Dialog-BtzheIZz.js";import"./MapToggleButtonPresentational-DIhML7LJ.js";import"./Remove-BOsHTnyW.js";import"./LinkButton-tlP8KO0e.js";import"./TextField-DzD39lVx.js";import"./Switch-DnCT64eH.js";import"./DatePicker-C6MhubZW.js";import"./Paper-K6NL7s7r.js";import"./ErrorFallback-SJMDDmk_.js";import"./ErrorFallbackText-CQHNy6L3.js";import"./ErrorFallbackWrapper-C_Ne2lSR.js";import"./Brand-Bn9laiH-.js";import"./Edit-CBu4FngS.js";const Nr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Or=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Or as __namedExportsOrder,Nr as default};
