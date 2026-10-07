import{a as r,R as y,b as v,F as C}from"./iframe-BMeccPNJ.js";import{v as b,w as k,x as B,P as R}from"./DropdownButton-CJcvDogh.js";import{B as i}from"./Box-BwQkrYug.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-B6HusTMu.js";import"./SvgIcon-Cm2TYdXM.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-PlbL7nuw.js";import"./extendSxProp-OZdELPHD.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-Buqurtd8.js";import"./Box-ChrdOdVs.js";import"./Container-CAzy0WzY.js";import"./styled-BEeg3fTD.js";import"./createStyled-Dcm0u-cs.js";import"./useThemeProps-C_eKUugk.js";import"./FlexBox-Bzg5xbu0.js";import"./Stack-BdG4YkNk.js";import"./Typography-Caf0sNeW.js";import"./Paper-Bfmpijtg.js";import"./CogIcon-X3PjyXPP.js";import"./InfoIcon-C43YUatg.js";import"./ExpandMoreIcon-CMplMLVo.js";import"./ThemeSwitchRow-Nkm5fIMW.js";import"./index-CN2QR1mZ.js";import"./Text-Cra0cu9R.js";import"./AdapterDayjs-px4ygSzx.js";import"./useThemeProps-XBwwIBHe.js";import"./Modal-PM6MIqry.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-HXr4o3EP.js";import"./resolveComponentProps-BszGJrBF.js";import"./index-DkyQgcjU.js";import"./utils-LzjE0vGE.js";import"./Popover-rQlvehgO.js";import"./TextField-vO5ouNTu.js";import"./useFormControl-DbNJ1HNF.js";import"./FormControl-C0VKj7ef.js";import"./ListContext-B5Su0ZnG.js";import"./useControlled-DdlDfNFx.js";import"./createSvgIcon-DqqCMwW-.js";import"./FormHelperText-CIvqbQfR.js";import"./IconButton-0rcJlT-l.js";import"./ButtonBase-o3LjpFbz.js";import"./DialogContent-DpwGlWTc.js";import"./Button-B5coKyWo.js";import"./Chip-3WEw9hIt.js";import"./MenuItem-BX1rIrqX.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-C3iVtoCa.js";import"./Chip-CK-xlIC7.js";import"./Divider-BN9JaA-W.js";import"./Divider-E-THRAyD.js";import"./TreeView-D-bHLFUm.js";import"./Collapse-klM-UQl4.js";import"./useSlot-rqk_l7yw.js";import"./AppInfoRow-BhcGHzv5.js";import"./AppSettings-Bog0XP8u.js";import"./SvgIcon-DBit6dcs.js";import"./TableRow-CT5-15pp.js";import"./LinearProgress-CICCh1kG.js";import"./Spinner-B2M52evq.js";import"./Dialog-BO3Bf7M6.js";import"./MapToggleButtonPresentational-DW-EnjXE.js";import"./Remove-MscLCauy.js";import"./Alert-CP3Y9oZL.js";import"./ToggleButton-m5lt3mYS.js";import"./LinkButton-Dtrnv-gT.js";import"./TextField-Bp2kLT4M.js";import"./Switch-D1a_Aegr.js";import"./LabeledSwitch-BoR8fQ6y.js";import"./DatePicker-TOMHDLiw.js";import"./DateTimePicker-D_BgxS3t.js";import"./FormControl-djpzVMG5.js";import"./FormHelperText-BWjSDbV-.js";import"./MenuItem-Be8lFLDg.js";import"./AccordionDetails-CLRP6GtA.js";import"./Paper-BldQVT4i.js";import"./ErrorFallback-_-KBymsS.js";import"./ErrorFallbackText-BX7d4Mxw.js";import"./ErrorFallbackWrapper-CQ7_lFb3.js";import"./Brand-C4lqvhvY.js";import"./Edit-DiVFn-cA.js";const ie={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=y.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const ae=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,ae as __namedExportsOrder,ie as default};
