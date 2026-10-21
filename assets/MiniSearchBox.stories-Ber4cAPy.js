import{r as c,b,a as t}from"./iframe-DLGF4BUc.js";import{m as B,D as z}from"./EntityList-DIdsLu9S.js";import{P as D}from"./_IconPopover-C3WXrhmi.js";import{I}from"./IconButton-C1KFnQCW.js";import"./preload-helper-C1FmrZbK.js";import"./FlexBox-2AT2Uwu-.js";import"./Stack-CX0L4V8W.js";import"./styled-B1nzYGMU.js";import"./extendSxProp-DWxvZHYy.js";import"./clsx-B-dksMZM.js";import"./styled-oG3mFbuA.js";import"./createStyled-DLvNylUN.js";import"./useThemeProps-D5sfc09H.js";import"./composeClasses-fLhin0tj.js";import"./Text-DpXgC9ew.js";import"./Typography-CQvGJptE.js";import"./ListContext-fSi36sDS.js";import"./ListItem-hW3jOJVo.js";import"./FormControl-CE4f5UQy.js";import"./useFormControl-CA29WpPn.js";import"./TransitionGroupContext-D9CYwYvt.js";import"./resolveComponentProps-D6mFZg2W.js";import"./ButtonBase-CotwqhDg.js";import"./Toolbar-CiP-GOsO.js";import"./TextField-QkCWN4g8.js";import"./Modal-BPxGlzs1.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-rF9rKq-f.js";import"./index-Dy45cCFj.js";import"./utils-CoFQBbdh.js";import"./Popover-Dv9-1Kkh.js";import"./Paper-LJUHI-NO.js";import"./useControlled-D33ms4hd.js";import"./createSvgIcon-B7-RWdsa.js";import"./SvgIcon-By8aXgIc.js";import"./FormHelperText-C3O1dcpJ.js";import"./Close-DkoVebQq.js";import"./Popper-BgB7JZlg.js";import"./Badge-D6m7LIpW.js";import"./Chip-DdiieqSv.js";import"./IconButton-Bkq1m1C2.js";import"./FormControlLabel-DcBr0i4W.js";import"./MenuItem-BBO4kaVs.js";import"./dividerClasses-Ik8JkkD1.js";import"./Button-CV9E6iBw.js";import"./MapToggleButtonPresentational-DJ0t76sA.js";import"./Remove-CSdcmxrN.js";import"./Box-CA85B3I1.js";import"./ExpandLessIcon-BhrxwplQ.js";import"./Box-DfrYrAOU.js";import"./Container-B5aPNULB.js";import"./CogIcon-DZO7HehB.js";import"./InfoIcon-wTIowM_2.js";import"./ExpandMoreIcon-CEUANqPb.js";import"./ThemeSwitchRow-BvvaAcwo.js";import"./index-B2PZUJHW.js";import"./Badge-BIgwpspb.js";import"./Chip-QXpGNnbf.js";import"./Divider-BqsWnBLy.js";import"./Divider-DHVXymBh.js";import"./TreeView-CxRDQ7im.js";import"./useThemeProps-Ba0TDecv.js";import"./Collapse-CuiTrv0f.js";import"./useSlot-BBQYsIC4.js";import"./AppInfoRow-nWejkyoV.js";import"./AppSettings-C44XWmY2.js";import"./SvgIcon-Cv0ryMMu.js";import"./TableRow-DHNYRXF1.js";import"./TableCell-CDmZf9CJ.js";import"./Skeleton-DU7jOf86.js";import"./Skeleton-DXmSA4o_.js";import"./Edit-r4GAQfgg.js";import"./LinearProgress-DipKtq4x.js";import"./LinearProgress-BFS8oSB-.js";import"./Spinner-i2qfrWwN.js";import"./CircularProgress-i3TCesHd.js";import"./Dialog-Bm_WSvFH.js";import"./DialogContent-De5u5KBX.js";import"./Alert-DbYWFn5H.js";import"./ToggleButton-BWQSSQTu.js";import"./ToggleButton-l9u-dadR.js";import"./ToggleButtonGroup-DJo22eSV.js";import"./LinkButton-CRKxeZyL.js";import"./TextField-C8b_bMXq.js";import"./Switch-NkmTKI6k.js";import"./Switch-CJZKOFUT.js";import"./LabeledSwitch-BQ84BIxN.js";import"./RadioGroup-pBxOyj1N.js";import"./FormControl-DxjzYp0j.js";import"./FormHelperText-cm1vsiIe.js";import"./Tabs-C4i0NMYz.js";import"./MenuItem-BnPC1eYg.js";import"./AccordionDetails-BVl2h7ZR.js";import"./Paper-DC9SKnip.js";import"./ErrorFallback-CtoHCFXW.js";import"./ErrorFallbackText-BsCe1noc.js";import"./ErrorFallbackWrapper-C9vTjGhq.js";import"./Brand-xyVOOd-f.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Br={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=c.useState(null),[a,m]=c.useState(!1),s=p=>{T(p.currentTarget),m(!0)},x=()=>{m(p=>!p)};return b("div",{children:[t(B,{...i,onTogglePopOver:s,endIcon:t(I,{size:"small","aria-label":"toggle pop over",onClick:s,children:t(z,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(D,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("searchbox"), "River Nile");
    await userEvent.click(canvas.getByRole("button", {
      name: "search"
    }));
  }
}`,...(v=(d=e.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var u,w,P;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  render: args => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showPopOver, setShowPopOver] = useState(false);
    const openPopUp = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setShowPopOver(true);
    };
    const togglePopUp = () => {
      setShowPopOver(show => !show);
    };
    return <div>
        <MiniSearchBox {...args} onTogglePopOver={openPopUp} endIcon={<IconButton size="small" aria-label="toggle pop over" onClick={openPopUp}>
              <DownArrowIcon rotation={showPopOver ? 180 : undefined} fontSize="inherit" />
            </IconButton>} />
        <PopOver id="search-popover" open={showPopOver} anchorEl={anchorEl} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: -10,
        horizontal: 214
      }} width={254} onClose={togglePopUp}>
          Pop over content goes here
        </PopOver>
      </div>;
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,O,E,f,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const Tr=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,Tr as __namedExportsOrder,Br as default};
