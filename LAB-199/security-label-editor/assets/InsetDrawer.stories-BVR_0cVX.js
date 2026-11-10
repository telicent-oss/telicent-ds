import{a as r,R as x,b as C,F as v}from"./iframe-nsP25gKo.js";import{y as b,z as k,G as B,H as R}from"./UserProfileContent-f95zNd9R.js";import{B as i}from"./Box-BLLAoZm6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DcG95mMM.js";import"./clsx-B-dksMZM.js";import"./styled-Bt4bz1Ri.js";import"./extendSxProp-BBWs3qYR.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Baj9xzH7.js";import"./TransitionGroupContext-CRxBndhR.js";import"./MapToggleButtonPresentational-DctfZT0J.js";import"./Remove-CzBf15o4.js";import"./createSvgIcon-LgicXHPs.js";import"./SvgIcon-DwNiQzjj.js";import"./IconButton-BYlTCNOG.js";import"./Paper-B4TYotmL.js";import"./XIcon-DvjInBT6.js";import"./Stack-RhHn8vw5.js";import"./styled-6EMwNmQ6.js";import"./createStyled-BLSQzFCR.js";import"./useThemeProps-DsTjZoaE.js";import"./Typography-DnSN7OSu.js";import"./Box-ClYQvNbI.js";import"./Container-hgkEhD5P.js";import"./FlexBox-Bbary1W6.js";import"./Brand-D2VeOYCO.js";import"./IconButton-D_s4EuKD.js";import"./LinkButton-BfQndRTn.js";import"./AppInfoRow-CLIPujn3.js";import"./_IconPopover-CM-VnDWQ.js";import"./Popover-DUCsUIlP.js";import"./utils-DLdYsqUd.js";import"./index-DjtdcByO.js";import"./index-Dxol60-t.js";import"./Modal-CeMyLzIn.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C1ZfCTRs.js";import"./useSlotProps-vjHHGShq.js";import"./InfoIcon-B4QZA7Dh.js";import"./Text-Bwgymadh.js";import"./AppSettings-DVRHQY8i.js";import"./CogIcon-B6b_cT6g.js";import"./Badge-85zKMsnD.js";import"./Badge-9XdJnLxl.js";import"./Chip-JnNyPpPT.js";import"./Chip-CRajJEkV.js";import"./Divider-DsquOdv6.js";import"./Divider-BIYJU6nM.js";import"./dividerClasses-CfQ_rPvR.js";import"./ThemeSwitchRow-BjVkP1Fv.js";import"./Skeleton-DtU8OxFt.js";import"./Skeleton-CwfPMYJi.js";import"./TextField-yAyXnCKm.js";import"./useFormControl-BUEp33Hh.js";import"./FormControl-BMwiDYNj.js";import"./ListContext-B3Q6EA8E.js";import"./useControlled-etmNhFyh.js";import"./FormHelperText-CAF4d6sh.js";import"./MenuItem-ZgZIMTVz.js";import"./ExpandMoreIcon-BpXAgeqq.js";import"./ListItem-DzmK-gV-.js";import"./Toolbar-Dp-Ug-sg.js";import"./Close-CCEFKHxU.js";import"./Popper-Bu4oq1KR.js";import"./FormControlLabel-46a0qj7a.js";import"./Edit-y9PYitAs.js";import"./SvgIcon-DR4WFJkh.js";import"./TableRow-BZSMQNDt.js";import"./TableCell-COiajT-b.js";import"./TreeView-CrbubHa0.js";import"./useThemeProps-qS4SKgCb.js";import"./index-CLveBa9-.js";import"./Collapse-BSI7DmKL.js";import"./Dialog-DylwUyfT.js";import"./DialogContent-c2oq3SeY.js";import"./Alert-BAgHB1Qx.js";import"./useSlot-OYO5iV9R.js";import"./LinearProgress-Ck7jjyC4.js";import"./LinearProgress-Dmr1J_kV.js";import"./Spinner-cC4ZThnx.js";import"./CircularProgress-B7fpNiMY.js";import"./TextField-CFGiNnsX.js";import"./FormControl-DpTA0hxG.js";import"./FormHelperText-BifUht1K.js";import"./LabeledSwitch-B9jnW4jb.js";import"./Switch-Cny72m0T.js";import"./Switch-Cble3tJI.js";import"./RadioGroup-DhIrKGmL.js";import"./ToggleButton-A0J8XTcs.js";import"./ToggleButton-CYeKTcPs.js";import"./ToggleButtonGroup-CjH0lsuO.js";import"./MenuItem-BVxpSR0S.js";import"./Tabs-BgeYDhLN.js";import"./AccordionSummary-Bc-n5IVo.js";import"./Paper-CRM4XuDd.js";import"./ErrorFallback-CvDibk96.js";import"./ErrorFallbackText-CKST_BNY.js";import"./ErrorFallbackWrapper-BaLlP7IC.js";const xe={title:"Component Library/InsetDrawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"**Deprecated.** Use `Drawer` (Surfaces/Drawer), the controlled side sheet.\n\nPersistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=x.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=x.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}},Ce=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var P,f,y;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Ce as __namedExportsOrder,xe as default};
