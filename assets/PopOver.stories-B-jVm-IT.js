import{R as h,a as u,j as r}from"./iframe-woqfefPC.js";import{B as v}from"./DropdownButton-B1bD1lNa.js";import{T as f}from"./Text-CVdTrgex.js";import{P as s}from"./AppInfoRow-FQf-Uxyu.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CZrO7rOz.js";import"./SvgIcon-Bo1XjP9O.js";import"./generateUtilityClass-BJXokMoA.js";import"./styled-DxPBiXUf.js";import"./generateUtilityClasses-BfMa5HrZ.js";import"./useTheme-DjCAOCMf.js";import"./Box-B199DmZe.js";import"./Box-CdBdZvPi.js";import"./Container-DlcQbp9d.js";import"./styled-CUr9clCY.js";import"./createStyled-IyuL39l2.js";import"./useThemeProps-C7rvhRGK.js";import"./FlexBox-CFiAFxVr.js";import"./Stack-CkaIEl_P.js";import"./Typography-DpKxRL_6.js";import"./Paper-Cel9I3vj.js";import"./useThemeProps-DiI4sMJp.js";import"./AdapterDayjs-SYc6eaHj.js";import"./Modal-CaqrQysV.js";import"./utils-BHr5gcCM.js";import"./TransitionGroupContext-DpyE4Xc2.js";import"./index-Cc2aF9ce.js";import"./resolveComponentProps-BPbh-zwX.js";import"./Popover-FzkS9WOq.js";import"./TextField-C8YEFGvP.js";import"./useFormControl-CdUfgNyJ.js";import"./createSvgIcon-DMQw-rzj.js";import"./IconButton-CZXr5bFM.js";import"./ButtonBase-CZ3-eO2f.js";import"./DialogContent-D9t3JHo2.js";import"./Button-BYXN4taO.js";import"./Chip-CN1uKpCE.js";import"./DateTimePicker-BCq-mAD2.js";import"./Divider-CDzzakYn.js";import"./Chip-Ye1FV8gr.js";import"./Divider-B-R56vz7.js";import"./TreeView-CnSgD92Q.js";import"./Alert-5oooyx2V.js";import"./LinearProgress-BghVVCAF.js";import"./Spinner-C544qo6r.js";import"./Dialog-Ck4mEIjf.js";import"./MapToggleButtonPresentational-DigQzjPw.js";import"./Remove-BFnkFzrU.js";import"./LinkButton-B1YmsP7j.js";import"./TextField-DBB085ZE.js";import"./Switch-CUBS3sDF.js";import"./DatePicker-C25_Cre5.js";import"./Paper-BJBTp4DB.js";import"./ErrorFallback-FTfU9tJD.js";import"./ErrorFallbackText-BxvBPsFK.js";import"./ErrorFallbackWrapper-WIZsIluo.js";import"./Brand-DchGyFNu.js";import"./constants-5mjpbbvY.js";import"./Edit-DCb6sKCZ.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const bo=["Demo"];export{o as Demo,bo as __namedExportsOrder,Po as default};
