import{r as c,b,a as t}from"./iframe-C_A9w9Xb.js";import{I as z}from"./IconButton-DZaun261.js";import{m as B,D}from"./UserProfileContent-CRSr_rhf.js";import{P as I}from"./_IconPopover-DZzlnGrx.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DGQcrcgI.js";import"./clsx-B-dksMZM.js";import"./styled-BxBMGnZ7.js";import"./extendSxProp-DbsjyKNJ.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DghXKeJ1.js";import"./TransitionGroupContext-BJMJdx4M.js";import"./Button-BVdDZnN4.js";import"./MapToggleButtonPresentational-CdT4filz.js";import"./Remove-CC1RGYYl.js";import"./createSvgIcon-i-zQ-M6d.js";import"./SvgIcon-C8_G8FNz.js";import"./Paper-DSCOcLrg.js";import"./Box-DB6K2VlN.js";import"./XIcon-D-mT89jA.js";import"./Stack-CcwLWQH2.js";import"./styled-DY34dW0Q.js";import"./createStyled-B7kozB3A.js";import"./useThemeProps-sj6Fs-gH.js";import"./Typography-BLZTU97p.js";import"./Box-fYkPIWZP.js";import"./Container-C4ujFY5f.js";import"./FlexBox-xFc9aoH-.js";import"./Brand-d6OKu9aw.js";import"./LinkButton-jvGGWVn2.js";import"./AppInfoRow-CShKA_AM.js";import"./InfoIcon-CsN7XvfL.js";import"./Text-VJDIJLPP.js";import"./AppSettings-BpaW4aTJ.js";import"./CogIcon-Xohb8vl0.js";import"./Badge-CTGjuVUc.js";import"./Badge-BZZrZQQO.js";import"./useSlotProps-aaY8J2bg.js";import"./resolveComponentProps-r2KoCv7J.js";import"./Chip-4mXnUy-p.js";import"./Chip-umbtqylA.js";import"./Divider-DJS9w1fE.js";import"./Divider-uAMQ62Ay.js";import"./dividerClasses-BaXV3koW.js";import"./ThemeSwitchRow-QiuVBBXJ.js";import"./Skeleton-CuTvwxzQ.js";import"./Skeleton-DWpJL6zw.js";import"./TextField-CPHMgkHr.js";import"./useFormControl-2yPes8mR.js";import"./FormControl-fAwcUdMf.js";import"./Modal-xQORnQ13.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-i4WXsvPC.js";import"./index-BHdyBRPi.js";import"./utils-DHOV5Dn-.js";import"./Popover-DKdEqhrZ.js";import"./ListContext-DDqsAt6U.js";import"./useControlled-3RSfgazB.js";import"./FormHelperText-C73ZFMlI.js";import"./MenuItem-BXjSr2Yp.js";import"./ExpandMoreIcon-BqYNX6oE.js";import"./ListItem-CqSEfq_v.js";import"./Toolbar-yZjFEbA8.js";import"./Close-XBuytlI5.js";import"./Popper-PPx8E8Kn.js";import"./FormControlLabel-TrbeFuul.js";import"./Edit-CwFXdWdx.js";import"./SvgIcon-BL6aEYyy.js";import"./TableRow-BzcwC7-J.js";import"./TableCell-DIcGZfcO.js";import"./TreeView-DGUcOfc2.js";import"./useThemeProps-mFM7TQzY.js";import"./index-BQ8CXDCk.js";import"./Collapse-jyqoWJz2.js";import"./Dialog-C55D5thn.js";import"./DialogContent-C9vdccJg.js";import"./Alert-DbC5Ef0h.js";import"./useSlot-DetFjtbb.js";import"./LinearProgress-CFMEE1Eh.js";import"./LinearProgress-MCxEeQKE.js";import"./Spinner-9Pq1qpOg.js";import"./CircularProgress-BFo9ue-1.js";import"./TextField-CDBDoTkX.js";import"./FormControl-DPrwx_NL.js";import"./FormHelperText-BBL7cKe3.js";import"./LabeledSwitch-iaBcHpl_.js";import"./Switch-Bx0dlzK_.js";import"./Switch-DvW86pnT.js";import"./RadioGroup-D0W8_lBw.js";import"./ToggleButton-DvpTABDR.js";import"./ToggleButton-Czzc7CD5.js";import"./ToggleButtonGroup-C2sUNclb.js";import"./MenuItem-BjrtayUA.js";import"./Tabs-CvGfBwpz.js";import"./AccordionSummary-J3dFvStq.js";import"./Paper-BUzr6iGG.js";import"./ErrorFallback-BWZMsFtf.js";import"./ErrorFallbackText-CBna-xSZ.js";import"./ErrorFallbackWrapper-CXtFrO_G.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Tr={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:n})=>{const r=R(n);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},i={args:{placeholder:"Search"},render:n=>{const[r,T]=c.useState(null),[a,m]=c.useState(!1),s=p=>{T(p.currentTarget),m(!0)},x=()=>{m(p=>!p)};return b("div",{children:[t(B,{...n,onTogglePopOver:s,endIcon:t(z,{size:"small","aria-label":"toggle pop over",onClick:s,children:t(D,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(I,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}},xr=["Demo","WithDownArrow","Loading"];var g,d,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(d=e.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var u,w,P;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,O,E,f,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};export{e as Demo,o as Loading,i as WithDownArrow,xr as __namedExportsOrder,Tr as default};
