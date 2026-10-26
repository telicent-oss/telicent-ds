import{r as c,b,a as t}from"./iframe-BrOrNHEh.js";import{m as B,D as z}from"./EntityList-H_0K-dzQ.js";import{P as D}from"./_IconPopover-M7QzOQvw.js";import{I}from"./IconButton-DY0MGdyy.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-D5UCFB1S.js";import"./Stack-CkS2dy7z.js";import"./styled-B7Gun_NM.js";import"./extendSxProp-Duzm6Lca.js";import"./clsx-B-dksMZM.js";import"./styled-Bt2mTeFf.js";import"./createStyled-BOu-1Jtm.js";import"./useThemeProps-Cz1Ild6z.js";import"./composeClasses-fLhin0tj.js";import"./Text-DFwA3vR5.js";import"./Typography-Dpm-p6ja.js";import"./ListContext-7u-aoan4.js";import"./ListItem-KJHx1wCT.js";import"./FormControl-DZ_EUKmb.js";import"./useFormControl-BruFV-Qx.js";import"./TransitionGroupContext-Dt8HhoUr.js";import"./resolveComponentProps-DmG19-z7.js";import"./ButtonBase-DftoHfZR.js";import"./Toolbar-hT1KjkR5.js";import"./TextField-B2xiZYVb.js";import"./Modal-Cq6MPz4D.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-DGBa8jx5.js";import"./index-DbLrVmhX.js";import"./index-DI5L87ft.js";import"./utils-weDOyctD.js";import"./Popover-fh7sV9SA.js";import"./Paper-vuiB8TOC.js";import"./useControlled-BjktlrWs.js";import"./createSvgIcon-BVz2CBJw.js";import"./SvgIcon-oJ7O5BsC.js";import"./FormHelperText-CVrFiion.js";import"./Close-C1Ajlgcl.js";import"./Popper-BMlA55IB.js";import"./Badge-LDV7duPO.js";import"./Chip-FRFfDpZp.js";import"./IconButton-D5nyRFzv.js";import"./FormControlLabel-Ci79UUIH.js";import"./MenuItem-DmQEqCQc.js";import"./dividerClasses-Cf_Zsr30.js";import"./Button-CSBjMYNz.js";import"./MapToggleButtonPresentational-DjTLtwPH.js";import"./Remove-BXICJJmX.js";import"./Box-BfS4SYDH.js";import"./ExpandLessIcon-BzZ4XDrP.js";import"./Box-CLS-9xVu.js";import"./Container-BQSx0dcU.js";import"./CogIcon-DLVK3cal.js";import"./InfoIcon-BSsggCtY.js";import"./ExpandMoreIcon-hM54sdJa.js";import"./ThemeSwitchRow-CXKB4Cad.js";import"./index-DAO22fas.js";import"./Badge-BMrbfaBl.js";import"./Chip-BkKs13LT.js";import"./Divider-EangdiJD.js";import"./Divider-B8FqOrn9.js";import"./TreeView-CY6JI_wL.js";import"./useThemeProps-DdH0afsQ.js";import"./Collapse-BxbbjR-2.js";import"./useSlot-T2OhbpiU.js";import"./AppInfoRow-BoeKISh2.js";import"./AppSettings-8Bz0ezeY.js";import"./SvgIcon-M1RTRqad.js";import"./TableRow-B288CNJ8.js";import"./TableCell--9jHtUYw.js";import"./Skeleton-g9QI3QGP.js";import"./Skeleton-F5pzjQNl.js";import"./Edit-4mo734kz.js";import"./LinearProgress-Dhxq7sJJ.js";import"./LinearProgress-BFSiQRwS.js";import"./Spinner-DB7mFyLO.js";import"./CircularProgress-ClV7g0pC.js";import"./Dialog-B_-7JoVZ.js";import"./DialogContent-R-0O7NC9.js";import"./Alert-C2LM2JGB.js";import"./ToggleButton-h1qrIylX.js";import"./ToggleButton-RaOfILww.js";import"./ToggleButtonGroup-DJERzG3r.js";import"./LinkButton-tyFKol7f.js";import"./TextField--1bCY3MA.js";import"./Switch-v5jAUzas.js";import"./Switch-DUyEOTYL.js";import"./LabeledSwitch-xfpQoVPs.js";import"./RadioGroup-BxGwEAqL.js";import"./FormControl-DfXZkWqG.js";import"./FormHelperText-aeiOJUMu.js";import"./Tabs-BjpX6Btc.js";import"./MenuItem-DhoBzDNC.js";import"./AccordionDetails-CYEP5uVx.js";import"./Paper-oJZ4x_5E.js";import"./ErrorFallback-Bx0JnRhm.js";import"./ErrorFallbackText-B1EPTBkB.js";import"./ErrorFallbackWrapper-C9HUOcDg.js";import"./Brand-Dz7COHp9.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Tr={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:n})=>{const r=R(n);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},i={args:{placeholder:"Search"},render:n=>{const[r,T]=c.useState(null),[a,m]=c.useState(!1),s=p=>{T(p.currentTarget),m(!0)},x=()=>{m(p=>!p)};return b("div",{children:[t(B,{...n,onTogglePopOver:s,endIcon:t(I,{size:"small","aria-label":"toggle pop over",onClick:s,children:t(z,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(D,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}},xr=["Demo","WithDownArrow","Loading"];var g,d,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
