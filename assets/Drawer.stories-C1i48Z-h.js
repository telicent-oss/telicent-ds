import{a as r,R as y,b as v,F as C}from"./iframe-DXJBL9x_.js";import{t as b,v as k,w as B,x as R}from"./DropdownButton-Ck1F7xyJ.js";import{B as i}from"./Box-DPlGyRLj.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-uPUcmea-.js";import"./SvgIcon-BBzlhV2G.js";import"./clsx-B-dksMZM.js";import"./styled-CsWZb9OH.js";import"./extendSxProp-BPFiFnsi.js";import"./composeClasses-fLhin0tj.js";import"./Box-Bo6aUxrI.js";import"./Container-BpkmvtTi.js";import"./styled-BdvaptCO.js";import"./createStyled-CUvqKir0.js";import"./useThemeProps-BZz2lqqB.js";import"./FlexBox-B4rVdveV.js";import"./Stack-CuewDGku.js";import"./Typography-DJo4I-Wf.js";import"./Paper-Nu-QYyfA.js";import"./CogIcon-CoAjbINP.js";import"./InfoIcon-CoapGGcx.js";import"./ExpandMoreIcon-B33Ufify.js";import"./ThemeSwitchRow-rqOztiFe.js";import"./index-B-3eVBdp.js";import"./Text-Cd8V4L35.js";import"./ListItem-DFG_Xp5J.js";import"./ListContext-DOzi5bno.js";import"./FormControl-BZ3xKumC.js";import"./useFormControl-D4YDRhpd.js";import"./TransitionGroupContext-DhxQb8WC.js";import"./resolveComponentProps-CZl0YMKu.js";import"./ButtonBase-wJquHDGD.js";import"./Toolbar-Cz2sYW1x.js";import"./TextField-Dbn4DLF2.js";import"./Modal-BlVhDwBS.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-DSK8Y_R1.js";import"./utils-BzNNiNjo.js";import"./Popover-DvuxT2TT.js";import"./useControlled-JK2H1dPE.js";import"./createSvgIcon-CeNn4fLw.js";import"./FormHelperText-CLNyKbC1.js";import"./Close-DmbqPrtW.js";import"./Popper-CRY2U-m0.js";import"./Chip-oiyFfkOd.js";import"./IconButton-BDsd9--s.js";import"./FormControlLabel-BqmsWTqz.js";import"./MenuItem-DlV2oXej.js";import"./dividerClasses-B8vzaTuv.js";import"./_IconPopover-mqjPC8DF.js";import"./Chip-CvK8d6TP.js";import"./Divider-CVknC9dk.js";import"./Divider-CS83Zk5t.js";import"./TreeView-nY6YMZFU.js";import"./useThemeProps-CKi109gG.js";import"./Collapse-B3IwCn1j.js";import"./useSlot-CnB4Ksxy.js";import"./AppInfoRow-C_MXw4cX.js";import"./AppSettings-Bto6a5pX.js";import"./SvgIcon-BbV-GOw9.js";import"./TableRow-BFQIGQ0G.js";import"./TableCell-DsNOT7cG.js";import"./LinearProgress-ClOceYjE.js";import"./LinearProgress-DJoYhu9o.js";import"./Spinner-DmOJpO9I.js";import"./CircularProgress-BgbeK7sO.js";import"./Dialog-DoNpHslV.js";import"./DialogContent-BqAwFh2L.js";import"./Button-CkvRo_6-.js";import"./MapToggleButtonPresentational-ChQ52gJU.js";import"./Remove-lRy76Il0.js";import"./Alert-BgRBlvRq.js";import"./ToggleButton-Cp5pdiR3.js";import"./ToggleButton-b13yIPKW.js";import"./ToggleButtonGroup-nwMGxtld.js";import"./LinkButton-CFWDgi0H.js";import"./TextField-DbSeX_av.js";import"./Switch-Boc9Q6ti.js";import"./Switch-CbrWC3x_.js";import"./LabeledSwitch-DiCSkMqY.js";import"./RadioGroup-WuHXBzoT.js";import"./FormControl---tfQNLE.js";import"./FormHelperText-C_xlgv_t.js";import"./Tabs-CsJEKlqa.js";import"./MenuItem-D7ka_INz.js";import"./AccordionDetails-oiuPsPgc.js";import"./Paper-CDWZhXCm.js";import"./ErrorFallback-CSZl7Tiy.js";import"./ErrorFallbackText-Bilm7gRB.js";import"./ErrorFallbackWrapper-pg5NbF54.js";import"./Brand-nMISz8L9.js";import"./Edit-DidijPs9.js";const ge={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=y.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const we=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,we as __namedExportsOrder,ge as default};
