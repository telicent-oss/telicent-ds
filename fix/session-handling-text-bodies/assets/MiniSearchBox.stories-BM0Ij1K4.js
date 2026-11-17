import{r as c,b,a as t}from"./iframe-DgB5DOOK.js";import{I as z}from"./IconButton-Cj-3dO6Q.js";import{m as B,D}from"./UserProfileContent-DWmBNlHz.js";import{P as I}from"./_IconPopover-ujUl4F4j.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-D20y2IYX.js";import"./clsx-B-dksMZM.js";import"./styled-C2IgeKa1.js";import"./extendSxProp-BWF_iEjT.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-37dGzeCY.js";import"./TransitionGroupContext-DZPXUZjI.js";import"./Button-yhUhh5rC.js";import"./MapToggleButtonPresentational-BH1dZTqP.js";import"./Remove-DU6di_qq.js";import"./createSvgIcon-buxlCkbb.js";import"./SvgIcon-B7PwMVYn.js";import"./Paper-CfxavN5N.js";import"./Box-BKgVgTA7.js";import"./XIcon-VEg9iy4g.js";import"./Stack-DSlyJ0-P.js";import"./styled-CSa8JTl7.js";import"./createStyled-Cr_yrpzs.js";import"./useThemeProps-Cv6lQb1Z.js";import"./Typography-BF7sK5Ae.js";import"./Box-lNHAZIk0.js";import"./Container-C0Xc2FRN.js";import"./FlexBox-rNRJ5qOl.js";import"./Brand-CNlSU-fT.js";import"./LinkButton-K1pKYT9-.js";import"./AppInfoRow-CeJwZqED.js";import"./InfoIcon-D991cygI.js";import"./Text-D7_q6jLQ.js";import"./AppSettings-BNO02vyz.js";import"./CogIcon--qSeQQYv.js";import"./Badge-jcWGJ-ob.js";import"./Badge-SkVSrEOx.js";import"./useSlotProps-Jx-sIlO7.js";import"./resolveComponentProps-CE999ugD.js";import"./Chip-BfLzWb3z.js";import"./Chip-BbjdBAAm.js";import"./Divider-BM3QVx1-.js";import"./Divider-B1R26w1K.js";import"./dividerClasses-DLOnW1Qs.js";import"./ThemeSwitchRow-DfVigJG0.js";import"./Skeleton-DalovIMe.js";import"./Skeleton-dAzTvYwV.js";import"./TextField-CWkT05Xq.js";import"./useFormControl-C1QvXYzQ.js";import"./FormControl-C7ixcWY7.js";import"./Modal-CTU41rng.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-DQlIAx8_.js";import"./index-HokJ49V1.js";import"./utils-C3Jk0TUt.js";import"./Popover-H8c48_my.js";import"./ListContext-D16S_6sV.js";import"./useControlled-BxoUib7D.js";import"./FormHelperText-B_G7GOx3.js";import"./MenuItem-BpR-NCbk.js";import"./ExpandMoreIcon-GTPNzf5m.js";import"./ListItem-DgR4_kwz.js";import"./Toolbar-D-_K5ffV.js";import"./Close-RAdmLMOk.js";import"./Popper-4C-oHIR9.js";import"./FormControlLabel-BEFCwgAZ.js";import"./Edit-6-OjV0-m.js";import"./SvgIcon-CZ0P8_U4.js";import"./TableRow-BhnodZ9D.js";import"./TableCell-B5sas6rL.js";import"./TreeView-CzefoKm9.js";import"./useThemeProps-B2nAv7Dy.js";import"./index-DW9QV88U.js";import"./Collapse-DbztTgdD.js";import"./Dialog-BRVCmQfd.js";import"./DialogContent-CKLJHH2b.js";import"./Alert-B3-1Er1S.js";import"./useSlot-V0kD_uWO.js";import"./LinearProgress-CauuDUEI.js";import"./LinearProgress-DHQnu2TY.js";import"./Spinner-DNEUjWM6.js";import"./CircularProgress-vEt8I-xb.js";import"./TextField-By1fm5Ld.js";import"./FormControl-CG1fKJho.js";import"./FormHelperText-Cx6ksy42.js";import"./LabeledSwitch-0HSP2kfR.js";import"./Switch-DA9rneG8.js";import"./Switch-DhiRFrM7.js";import"./RadioGroup-BaCjTbVF.js";import"./ToggleButton-B4UHGI52.js";import"./ToggleButton-Bs18IMrD.js";import"./ToggleButtonGroup-D0tbUhZv.js";import"./MenuItem-BIurvtuG.js";import"./Tabs-DQ5Yd--o.js";import"./AccordionSummary-BjeUD95x.js";import"./Paper-Bd2hcL_j.js";import"./ErrorFallback-CRTMDqB9.js";import"./ErrorFallbackText-11peTATx.js";import"./ErrorFallbackWrapper-Bwlh2Dtv.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Tr={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:n})=>{const r=R(n);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},i={args:{placeholder:"Search"},render:n=>{const[r,T]=c.useState(null),[a,m]=c.useState(!1),s=p=>{T(p.currentTarget),m(!0)},x=()=>{m(p=>!p)};return b("div",{children:[t(B,{...n,onTogglePopOver:s,endIcon:t(z,{size:"small","aria-label":"toggle pop over",onClick:s,children:t(D,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(I,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}},xr=["Demo","WithDownArrow","Loading"];var g,d,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
