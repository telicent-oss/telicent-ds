import{R as h,a as u,j as r}from"./iframe-CYeXSRCn.js";import{B as v}from"./DropdownButton-Bqbdc4Q1.js";import{T as f}from"./Text-BrJzNAfR.js";import{P as s}from"./AppInfoRow-CAMu3Yom.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DgdKDg--.js";import"./SvgIcon-1lsXHHt1.js";import"./generateUtilityClass-CRJ1fUnr.js";import"./styled-Ch7TYyIp.js";import"./generateUtilityClasses-8aJfFmyf.js";import"./useTheme-C01aVLuh.js";import"./Box-B-xAxOdf.js";import"./Box-BL2kbC6f.js";import"./Container-Di2XLZDk.js";import"./styled-DHAnpyzb.js";import"./createStyled-BAXDNbou.js";import"./useThemeProps-zxRs09PI.js";import"./FlexBox-yPpBoTQ5.js";import"./Stack-YJQQ9jj8.js";import"./Typography-m86ksWAT.js";import"./Paper-CUHDivEI.js";import"./useThemeProps-CaCGsMmh.js";import"./AdapterDayjs-C0uSp_M-.js";import"./Modal-Dvtocw5a.js";import"./utils-CkwS266W.js";import"./TransitionGroupContext-O-4sDslW.js";import"./index-Df4rPAmw.js";import"./resolveComponentProps-D0S80uWW.js";import"./Popover-C0_hs2rD.js";import"./TextField-CXdIwcSO.js";import"./useFormControl-QoKFw2_D.js";import"./createSvgIcon-Bg1pYGJE.js";import"./IconButton-CYyrSHuW.js";import"./ButtonBase-BtjCcquE.js";import"./DialogContent-_FhiVOAB.js";import"./Button-BSTFOQew.js";import"./Chip-DC_dEvmi.js";import"./DateTimePicker-iI1kKlBI.js";import"./Divider-BwUUxUUy.js";import"./Chip-DzPpf97O.js";import"./Divider-VlLlx1-K.js";import"./TreeView-hK-Zr8DT.js";import"./Alert-DI7B7ATA.js";import"./LinearProgress-tLf1McQP.js";import"./Spinner-CPAmDtKw.js";import"./Dialog-CwAPF42_.js";import"./MapToggleButtonPresentational-CxLzaM7Q.js";import"./Remove-ubGyGJQ1.js";import"./LinkButton-Cz3BzB8v.js";import"./TextField-CUXZxfyV.js";import"./Switch-C6_n0qq1.js";import"./DatePicker-Qsz_6cJq.js";import"./Paper-CyTJnt6J.js";import"./ErrorFallback-BPyngFVf.js";import"./ErrorFallbackText-C2TAg_HC.js";import"./ErrorFallbackWrapper-Bq_dmHdG.js";import"./Brand-ll5GJx6P.js";import"./Edit-B7Jljab-.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,xo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
