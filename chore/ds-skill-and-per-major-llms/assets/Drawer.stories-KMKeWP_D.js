import{j as r,R as y,a as v,F as C}from"./iframe-D2xSd84e.js";import{t as b,v as k,w as B,P as R}from"./DropdownButton-C0SajuR0.js";import{B as a}from"./Box-AGJ8HEdo.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DLxTDp4e.js";import"./SvgIcon-B_Vuuw4i.js";import"./generateUtilityClass-CL5j5EH9.js";import"./styled-Uo2f4_eJ.js";import"./generateUtilityClasses-BgNbkMmP.js";import"./useTheme-DD50os6u.js";import"./Box-aVZbDO8n.js";import"./Container-t30wv68u.js";import"./styled-jm0NCBmc.js";import"./createStyled-Q-b37U0V.js";import"./useThemeProps-Be8ecqSA.js";import"./FlexBox-DFBellf-.js";import"./Stack-DDjwWG7N.js";import"./Typography-CrXkC3Kj.js";import"./Paper-CMPnbo-3.js";import"./useThemeProps-CRX3G5nR.js";import"./Text-YKd5ufxb.js";import"./AdapterDayjs-CiYnk4U8.js";import"./Modal-C7up1KKP.js";import"./utils-B-UbRgM8.js";import"./TransitionGroupContext-d_Wi5FWz.js";import"./index-CFHJHd4f.js";import"./resolveComponentProps-6RrFLM_1.js";import"./Popover-DC9XfNY8.js";import"./TextField-BGl_E-Mk.js";import"./useFormControl-Cm4ESQ5Z.js";import"./createSvgIcon-BEH_TywE.js";import"./IconButton-r2Lpaq8o.js";import"./ButtonBase-wo9-0n7F.js";import"./DialogContent-B91V-Ggp.js";import"./Button-CT09wWAC.js";import"./Chip-2ePwHCRw.js";import"./DateTimePicker-BuM--HXU.js";import"./Divider-CZRs-x0D.js";import"./AppInfoRow-DY_H98te.js";import"./Chip-CYDyhIWX.js";import"./Divider-iCQqHWoM.js";import"./TreeView-C70c9-5p.js";import"./Alert-B22QG778.js";import"./LinearProgress-BJVPH0JL.js";import"./Spinner-CNKuUvLk.js";import"./Dialog-COLBK_8G.js";import"./MapToggleButtonPresentational-CsNIma1D.js";import"./Remove-7bR9n6m0.js";import"./LinkButton-CzHaV0bx.js";import"./TextField-2b4aPcPE.js";import"./Switch-bG2W1qCe.js";import"./DatePicker-BZgfSvoM.js";import"./Paper-BZvfaCOX.js";import"./ErrorFallback-BIncdLow.js";import"./ErrorFallbackText-ZC0AQgkA.js";import"./ErrorFallbackWrapper-CHAW5TC5.js";import"./Brand-rY45k5xL.js";import"./Edit-gqxvj0va.js";const Nr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
