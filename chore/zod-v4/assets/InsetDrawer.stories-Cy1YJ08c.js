import{a as r,R as x,b as C,F as v}from"./iframe-C1kADl7K.js";import{y as b,z as k,G as B,H as R}from"./EntityList-DD__byuN.js";import{B as i}from"./Box-BdLyxJDN.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-0Zk8Z1wf.js";import"./Stack-VS7yGLX2.js";import"./styled-B_lTjOn2.js";import"./extendSxProp-A80SNn2E.js";import"./clsx-B-dksMZM.js";import"./styled-Dqs76Ca-.js";import"./createStyled-Cjai_X-W.js";import"./useThemeProps-Ceyy6DTc.js";import"./composeClasses-fLhin0tj.js";import"./Text-HgubeblD.js";import"./Typography-B2gj4f-z.js";import"./ListContext-CpKQvUa4.js";import"./ListItem-zqYHDaok.js";import"./FormControl-FAVJKkDC.js";import"./useFormControl-DZcbumU_.js";import"./TransitionGroupContext-DqUd00ju.js";import"./resolveComponentProps-CH300SQ3.js";import"./ButtonBase-NZH3pNGk.js";import"./Toolbar-BXcFouCQ.js";import"./TextField-LvDA3ZY0.js";import"./Modal-ZwwWAhia.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Ddp69iyh.js";import"./index-7_0JHsY4.js";import"./index-CSdfPHX6.js";import"./utils-DhhX_lJH.js";import"./Popover-BhjfhAkg.js";import"./Paper-DQDiDue-.js";import"./useControlled-CMijF2lP.js";import"./createSvgIcon-vxqAnrWb.js";import"./SvgIcon-Dgf8Yk0z.js";import"./FormHelperText-Ctz0a05h.js";import"./Close-DlnbITpg.js";import"./Popper-BIvXmWfM.js";import"./Badge-DVEzrCrb.js";import"./Chip-Cday2RBB.js";import"./IconButton-D9H-eKUV.js";import"./FormControlLabel-DE2FMvJ1.js";import"./MenuItem-An3zk10d.js";import"./dividerClasses-B_31kY5s.js";import"./Button-CRAaBK8B.js";import"./MapToggleButtonPresentational-FOs4i9Kd.js";import"./Remove-Bj49Kl6q.js";import"./ExpandLessIcon-BAbK8V4h.js";import"./Box-LsPv36hu.js";import"./Container-BJFXwx0J.js";import"./CogIcon-BR-e7jH6.js";import"./InfoIcon-CR0eptQ5.js";import"./ExpandMoreIcon-Ca-rTBJg.js";import"./ThemeSwitchRow-DggDMvDb.js";import"./index-BeWUlcg2.js";import"./IconButton-D5lK2i8o.js";import"./Badge-CFK-UBwA.js";import"./Chip-Dl8h3Hwb.js";import"./Divider-f5jacwQy.js";import"./Divider-CijklUH2.js";import"./TreeView-BNkh8rg4.js";import"./useThemeProps-V4VNHFY4.js";import"./Collapse-D-lGiZGf.js";import"./useSlot-DWlSKb9c.js";import"./AppInfoRow-C2KGKin4.js";import"./_IconPopover-BigTk8_r.js";import"./AppSettings-Ce1ekPQV.js";import"./SvgIcon-DjNXdhgA.js";import"./TableRow-Cp9U1s9E.js";import"./TableCell-YjjddMcy.js";import"./Skeleton-Dd-aKLDg.js";import"./Skeleton-Cw8vu2zv.js";import"./Edit-B0xnlOWG.js";import"./LinearProgress-D7LbuYfT.js";import"./LinearProgress-Cc3KIWRO.js";import"./Spinner-oxy8AqCs.js";import"./CircularProgress-CPCux3_H.js";import"./Dialog-CJUISWAB.js";import"./DialogContent-Dmn_sdtG.js";import"./Alert-B6r98CIF.js";import"./ToggleButton-CltJGPg5.js";import"./ToggleButton-D0NaummI.js";import"./ToggleButtonGroup-CjMZ_ebh.js";import"./LinkButton-DYifi3rJ.js";import"./TextField-Ls5lKTbc.js";import"./Switch-vKlz1c9P.js";import"./Switch-Bxq9Tkvu.js";import"./LabeledSwitch-DORL5yab.js";import"./RadioGroup-BMjLAN0C.js";import"./FormControl-Ckwgi1a3.js";import"./FormHelperText-CyMEtxqf.js";import"./Tabs-a25RXXRz.js";import"./MenuItem-YUdwQe2h.js";import"./AccordionDetails-C7SPSNj5.js";import"./Paper-Dv5b5qFz.js";import"./ErrorFallback-2Hmi_7YV.js";import"./ErrorFallbackText-Bksmpx64.js";import"./ErrorFallbackWrapper-dwx0rRDf.js";import"./Brand-DxKKSwRE.js";const xe={title:"Component Library/InsetDrawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"**Deprecated.** Use `Drawer` (Surfaces/Drawer), the controlled side sheet.\n\nPersistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(i,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(i,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const a=x.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:a,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(i,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const a=x.useRef(null),s=k({ref:a,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(i,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}},Ce=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
