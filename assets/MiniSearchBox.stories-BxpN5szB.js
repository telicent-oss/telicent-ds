import{r as c,b,a as t}from"./iframe-AFxgTgVh.js";import{m as B,D as z}from"./DropdownButton-CmjCz-up.js";import{I as D,P as I}from"./_IconPopover-3UG3pSje.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-Coc8f085.js";import"./SvgIcon-CgCZoLsz.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BsI0-Lki.js";import"./extendSxProp-BD-Y0mPz.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-CbdznVAQ.js";import"./Box-oVOzhj2X.js";import"./Box-BAyptZb_.js";import"./Container-Br5OlP2Q.js";import"./styled-BADavTd0.js";import"./createStyled-C-Iq8mjg.js";import"./useThemeProps-ChNg2e9b.js";import"./FlexBox-D3oDiYJs.js";import"./Stack-DmXgS0Zc.js";import"./Typography-DFz7k-kI.js";import"./Paper-CbgL2EIb.js";import"./CogIcon-DC6KQaAP.js";import"./InfoIcon-lSIhMqt2.js";import"./ExpandMoreIcon-CZhJx08f.js";import"./ThemeSwitchRow-C4g2Xynz.js";import"./index-CpoxvXIl.js";import"./Text-DXLE4G_s.js";import"./AdapterDayjs-DZVAbh7i.js";import"./useThemeProps-DHndbiQK.js";import"./Modal-qRAMf-Nc.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CXXJO1FV.js";import"./resolveComponentProps-BAwsKLAE.js";import"./index-4IveHujF.js";import"./utils-C0JGDBoq.js";import"./Popover-BsgVjdIR.js";import"./TextField-DxwO5kEU.js";import"./useFormControl-Bg5crxJM.js";import"./FormControl-B_dJc-MU.js";import"./ListContext-DytnD_x2.js";import"./useControlled-B8RTFtfz.js";import"./createSvgIcon-Dpm5xP5l.js";import"./FormHelperText-DMGyUIz_.js";import"./IconButton-DBTDpe9N.js";import"./ButtonBase-Be1Z9iU4.js";import"./DialogContent-DJzRyI5L.js";import"./Button-BVSqHqLN.js";import"./Chip-CLw8XhUv.js";import"./MenuItem-ksmP0_yb.js";import"./dividerClasses-ClH17Faz.js";import"./Chip-C6eTFzcU.js";import"./Divider-CiTbO13G.js";import"./Divider-Cs_qNx3V.js";import"./TreeView-Q7eAtxGU.js";import"./Collapse-CgizZByK.js";import"./useSlot-JMCK8GCP.js";import"./AppInfoRow-DaJEEGeD.js";import"./AppSettings-Bxrh47vJ.js";import"./SvgIcon-B1EPKKW1.js";import"./TableRow-CvYZ37P_.js";import"./LinearProgress-CpwNTlvx.js";import"./Spinner-rNhXcUyc.js";import"./Dialog-kpJLggSC.js";import"./MapToggleButtonPresentational-BeBKKkmg.js";import"./Remove-BR_Tqlmz.js";import"./Alert-B0IPru6R.js";import"./ToggleButton-DmIMHj3V.js";import"./LinkButton-DEB6LEJn.js";import"./TextField-B1Gh1rGr.js";import"./Switch-C_vcwcW1.js";import"./LabeledSwitch-BxWut5tD.js";import"./DatePicker-D23KJK8d.js";import"./DateTimePicker-CGr0SUDo.js";import"./FormControl-BEoO9Wxu.js";import"./FormHelperText-ByrV8KMP.js";import"./MenuItem-CSRF0Uv2.js";import"./AccordionDetails-5vciIkwG.js";import"./Paper-DERQ4Oel.js";import"./ErrorFallback-efIZsijd.js";import"./ErrorFallbackText-rPp7xJ4J.js";import"./ErrorFallbackWrapper-BFBmLnXB.js";import"./Brand-BuZzOnWw.js";import"./Edit-CnWyMZY6.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,mr={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=c.useState(null),[a,s]=c.useState(!1),m=p=>{T(p.currentTarget),s(!0)},x=()=>{s(p=>!p)};return b("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(D,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(z,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(I,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const cr=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,cr as __namedExportsOrder,mr as default};
