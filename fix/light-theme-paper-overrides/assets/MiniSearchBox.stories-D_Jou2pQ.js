import{r as c,b,a as t}from"./iframe-DXJBL9x_.js";import{l as B,D as z}from"./DropdownButton-Ck1F7xyJ.js";import{I as D,P as I}from"./_IconPopover-mqjPC8DF.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-uPUcmea-.js";import"./SvgIcon-BBzlhV2G.js";import"./clsx-B-dksMZM.js";import"./styled-CsWZb9OH.js";import"./extendSxProp-BPFiFnsi.js";import"./composeClasses-fLhin0tj.js";import"./Box-Bo6aUxrI.js";import"./Box-DPlGyRLj.js";import"./Container-BpkmvtTi.js";import"./styled-BdvaptCO.js";import"./createStyled-CUvqKir0.js";import"./useThemeProps-BZz2lqqB.js";import"./FlexBox-B4rVdveV.js";import"./Stack-CuewDGku.js";import"./Typography-DJo4I-Wf.js";import"./Paper-Nu-QYyfA.js";import"./CogIcon-CoAjbINP.js";import"./InfoIcon-CoapGGcx.js";import"./ExpandMoreIcon-B33Ufify.js";import"./ThemeSwitchRow-rqOztiFe.js";import"./index-B-3eVBdp.js";import"./Text-Cd8V4L35.js";import"./ListItem-DFG_Xp5J.js";import"./ListContext-DOzi5bno.js";import"./FormControl-BZ3xKumC.js";import"./useFormControl-D4YDRhpd.js";import"./TransitionGroupContext-DhxQb8WC.js";import"./resolveComponentProps-CZl0YMKu.js";import"./ButtonBase-wJquHDGD.js";import"./Toolbar-Cz2sYW1x.js";import"./TextField-Dbn4DLF2.js";import"./Modal-BlVhDwBS.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-DSK8Y_R1.js";import"./utils-BzNNiNjo.js";import"./Popover-DvuxT2TT.js";import"./useControlled-JK2H1dPE.js";import"./createSvgIcon-CeNn4fLw.js";import"./FormHelperText-CLNyKbC1.js";import"./Close-DmbqPrtW.js";import"./Popper-CRY2U-m0.js";import"./Chip-oiyFfkOd.js";import"./IconButton-BDsd9--s.js";import"./FormControlLabel-BqmsWTqz.js";import"./MenuItem-DlV2oXej.js";import"./dividerClasses-B8vzaTuv.js";import"./Chip-CvK8d6TP.js";import"./Divider-CVknC9dk.js";import"./Divider-CS83Zk5t.js";import"./TreeView-nY6YMZFU.js";import"./useThemeProps-CKi109gG.js";import"./Collapse-B3IwCn1j.js";import"./useSlot-CnB4Ksxy.js";import"./AppInfoRow-C_MXw4cX.js";import"./AppSettings-Bto6a5pX.js";import"./SvgIcon-BbV-GOw9.js";import"./TableRow-BFQIGQ0G.js";import"./TableCell-DsNOT7cG.js";import"./LinearProgress-ClOceYjE.js";import"./LinearProgress-DJoYhu9o.js";import"./Spinner-DmOJpO9I.js";import"./CircularProgress-BgbeK7sO.js";import"./Dialog-DoNpHslV.js";import"./DialogContent-BqAwFh2L.js";import"./Button-CkvRo_6-.js";import"./MapToggleButtonPresentational-ChQ52gJU.js";import"./Remove-lRy76Il0.js";import"./Alert-BgRBlvRq.js";import"./ToggleButton-Cp5pdiR3.js";import"./ToggleButton-b13yIPKW.js";import"./ToggleButtonGroup-nwMGxtld.js";import"./LinkButton-CFWDgi0H.js";import"./TextField-DbSeX_av.js";import"./Switch-Boc9Q6ti.js";import"./Switch-CbrWC3x_.js";import"./LabeledSwitch-DiCSkMqY.js";import"./RadioGroup-WuHXBzoT.js";import"./FormControl---tfQNLE.js";import"./FormHelperText-C_xlgv_t.js";import"./Tabs-CsJEKlqa.js";import"./MenuItem-D7ka_INz.js";import"./AccordionDetails-oiuPsPgc.js";import"./Paper-CDWZhXCm.js";import"./ErrorFallback-CSZl7Tiy.js";import"./ErrorFallbackText-Bilm7gRB.js";import"./ErrorFallbackWrapper-pg5NbF54.js";import"./Brand-nMISz8L9.js";import"./Edit-DidijPs9.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Pr={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=c.useState(null),[a,s]=c.useState(!1),m=p=>{T(p.currentTarget),s(!0)},x=()=>{s(p=>!p)};return b("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(D,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(z,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(I,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const Sr=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,Sr as __namedExportsOrder,Pr as default};
