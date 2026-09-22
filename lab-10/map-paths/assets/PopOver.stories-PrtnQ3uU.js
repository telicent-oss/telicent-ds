import{R as h,a as u,j as r}from"./iframe-DOLuw-8z.js";import{B as v}from"./DropdownButton-BR3B1G6x.js";import{T as f}from"./Text-v6BCoAFn.js";import{P as s}from"./AppInfoRow-Cc31NytU.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D-CtbMck.js";import"./SvgIcon-BjWn1_cp.js";import"./generateUtilityClass-D23RcBiy.js";import"./styled-5Shyaefz.js";import"./generateUtilityClasses-ChqHqDQv.js";import"./useTheme-BSZkNvEx.js";import"./Box-BFt0Svhz.js";import"./Box-Bwed_2XS.js";import"./Container-DA4_3B6s.js";import"./styled-CU1aRKTP.js";import"./createStyled-DWYFW-gl.js";import"./useThemeProps-CShRTLgw.js";import"./FlexBox-dhqGSpWS.js";import"./Stack-D5u4BrRv.js";import"./Typography-Z1XTMoOJ.js";import"./Paper-BriXG56v.js";import"./useThemeProps-CUodZPbj.js";import"./AdapterDayjs-C99Dz3b5.js";import"./Modal-D90df1Mz.js";import"./utils-CUrWUUX2.js";import"./TransitionGroupContext-CvOe7o6x.js";import"./index-F34Reg20.js";import"./resolveComponentProps-Da1Gp387.js";import"./Popover-DWnhc3gj.js";import"./TextField-CSSUqK2u.js";import"./useFormControl-DJ_bputt.js";import"./createSvgIcon-Dp3o3x_9.js";import"./IconButton-B7uU5-A6.js";import"./ButtonBase-DQ4h9g4Z.js";import"./DialogContent-MnGvk2PE.js";import"./Button-77T-pKpm.js";import"./Chip-Bo6kFT4m.js";import"./DateTimePicker-4y9zAVnR.js";import"./Divider-BIsEpysU.js";import"./Chip-CbE023TT.js";import"./Divider-DLErqQ6C.js";import"./TreeView-BvSVb2QI.js";import"./Alert-DOAPXxCG.js";import"./LinearProgress-BhUeYgYm.js";import"./Spinner-B2RojS2c.js";import"./Dialog-Bx2dNClF.js";import"./MapToggleButtonPresentational-CkgwP2H7.js";import"./Remove-e2Ul6uKz.js";import"./LinkButton-qsDBDeKr.js";import"./TextField-Z8zl28V9.js";import"./Switch-CdY-5xOk.js";import"./DatePicker-FXWZ1w0I.js";import"./Paper-B6G87zKQ.js";import"./ErrorFallback-bABA0cST.js";import"./ErrorFallbackText-CRXi0n9L.js";import"./ErrorFallbackWrapper-BV65zCgM.js";import"./Brand-fYK7bDws.js";import"./Edit-yjB0ncsI.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,xo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return <div>
        <Button aria-describedby={id} onClick={handleClick}>
          Open Popover
        </Button>
        <PopOver id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: -10,
        horizontal: 0
      }}>
          <Text>The content of the pop over.</Text>
        </PopOver>
      </div>;
  }
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const Po=["Demo"];export{o as Demo,Po as __namedExportsOrder,xo as default};
