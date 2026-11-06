import{a as r,R as x,b as C,F as v}from"./iframe-CWOAzfBe.js";import{y as b,z as k,G as B,H as R}from"./UserProfileContent-PP1H7xMQ.js";import{B as i}from"./Box-Be9RsHl4.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-TjLPzi1x.js";import"./clsx-B-dksMZM.js";import"./styled-yqtTQwkH.js";import"./extendSxProp-CSX3D6uH.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B2y4Re2S.js";import"./TransitionGroupContext-DeA-sbXP.js";import"./MapToggleButtonPresentational-CEHdazAY.js";import"./Remove-C8RIYb0h.js";import"./createSvgIcon-BHb-OUfU.js";import"./SvgIcon-ClJFXd34.js";import"./IconButton-DgurzXTO.js";import"./Paper-7wOgw64N.js";import"./XIcon-dAr9ghTX.js";import"./Stack-BSuJYMST.js";import"./styled-BPbJu004.js";import"./createStyled-DnaBivQ6.js";import"./useThemeProps-DwBSHX6c.js";import"./Typography-D-Cq-N2y.js";import"./Box-BeooBb3v.js";import"./Container-F3J-sHJz.js";import"./FlexBox-pZJaha5u.js";import"./Brand-CKv8y3LC.js";import"./IconButton-2rYQRxsd.js";import"./LinkButton-XU4sXk5X.js";import"./AppInfoRow-CS9nkuxJ.js";import"./_IconPopover-7sZ10jAV.js";import"./Popover-vUzglvRh.js";import"./utils-Bhl493yy.js";import"./index-DWVJrjyq.js";import"./index-DjnTYE3b.js";import"./Modal-DpeBRA_s.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-DyVW6uNc.js";import"./useSlotProps-DYSwu3K9.js";import"./InfoIcon-Dm5ciMv4.js";import"./Text-C2R7pbPC.js";import"./AppSettings-CAogJme_.js";import"./CogIcon-DoUxEvuA.js";import"./Badge-D_pdYXXr.js";import"./Badge-B8UvVhKt.js";import"./Chip-BqgzveIY.js";import"./Chip-Cmk_bJZP.js";import"./Divider-pNwF1iHD.js";import"./Divider-CFFp1ukz.js";import"./dividerClasses-CvuSSyUr.js";import"./ThemeSwitchRow-BIg4pT4X.js";import"./Skeleton-D5xdqxBS.js";import"./Skeleton-D4kMWV6G.js";import"./TextField-BCQeTXpB.js";import"./useFormControl-Du95Ze_o.js";import"./FormControl-psQBgE76.js";import"./ListContext-D0cTsJmH.js";import"./useControlled-CQQMs9uM.js";import"./FormHelperText-Bpw2KcDZ.js";import"./MenuItem-D6VvEmRc.js";import"./ExpandMoreIcon-CD2Z_dgw.js";import"./ListItem-BPZeYGxz.js";import"./Toolbar-CToRG8p1.js";import"./Close-BxICseQ8.js";import"./Popper-CrLTcQdC.js";import"./FormControlLabel-a66K3OEG.js";import"./Edit-BGN1rUEo.js";import"./SvgIcon-Dte4xqyw.js";import"./TableRow-CJHAGSMA.js";import"./TableCell-BcaiVUkP.js";import"./TreeView-Bwkbpo83.js";import"./useThemeProps-Ce3qTZG0.js";import"./index-Db069xsF.js";import"./Collapse-CuLQ9H5N.js";import"./Dialog-DcXNP11i.js";import"./DialogContent-B_RMQklx.js";import"./Alert-D1RRFPA_.js";import"./useSlot-BCKzb_k_.js";import"./LinearProgress-DYdo5kC4.js";import"./LinearProgress-BwQMcTrR.js";import"./Spinner-BUwM6wcC.js";import"./CircularProgress-hkecqCAX.js";import"./TextField-BvQJwsnk.js";import"./FormControl-C6XdQTGq.js";import"./FormHelperText-Cpr8FSPI.js";import"./LabeledSwitch-CZe5HyJI.js";import"./Switch-Bgf3cuRU.js";import"./Switch-C9fMxVpv.js";import"./RadioGroup-BjERn-tn.js";import"./ToggleButton-DaGu9yPS.js";import"./ToggleButton--S7xR4zz.js";import"./ToggleButtonGroup-s374tJhr.js";import"./MenuItem-CpoRDk7B.js";import"./Tabs-BsDialm7.js";import"./AccordionSummary-FJf2LPtG.js";import"./Paper-CcJbfhLV.js";import"./ErrorFallback-r5W_n7Xq.js";import"./ErrorFallbackText-B8i4qwXi.js";import"./ErrorFallbackWrapper-TPpQ5mRs.js";const xe={title:"Component Library/InsetDrawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"**Deprecated.** Use `Drawer` (Surfaces/Drawer), the controlled side sheet.\n\nPersistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=x.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=x.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}},Ce=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
