import{R as h,a as u,j as r}from"./iframe-2R0I_iab.js";import{P as s,B as v}from"./DropdownButton-DIABJQSC.js";import{T as f}from"./Text-ijTctchc.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DgD39kRa.js";import"./createSvgIcon-mEStq9kO.js";import"./generateUtilityClass-CD2y2PA9.js";import"./styled-DOqFaxF3.js";import"./generateUtilityClasses-CQX3K1Az.js";import"./useTheme-DIsbzBAj.js";import"./Box-DkaRWSls.js";import"./Box-CnYDa6Qf.js";import"./Container-CVVcdNPZ.js";import"./styled-DSveC2VB.js";import"./createStyled-7MyDbkZC.js";import"./useThemeProps-BZXXP621.js";import"./Stack-CY2zen42.js";import"./Typography-CLpqeEo-.js";import"./Paper-d8y5ElZ3.js";import"./useThemeProps-DFSQRIyd.js";import"./AdapterDayjs-C0knh-V0.js";import"./Modal-CTV7kQyA.js";import"./utils-Cmi71HQq.js";import"./TransitionGroupContext-DqwjpCqS.js";import"./index-cXybQAtE.js";import"./resolveComponentProps-Cv5RNStH.js";import"./TextField-CGJuDnTR.js";import"./useFormControl-Dksspww5.js";import"./IconButton-2Ggfedl3.js";import"./ButtonBase-CCY4F8Yx.js";import"./DialogContent-BFfU8EFI.js";import"./Button-Bvu6LaZX.js";import"./Chip-Ci5Wvh6t.js";import"./DateTimePicker-Dk1S7IIq.js";import"./Divider-CD7sLQ3W.js";import"./Chip-CR4NBaGA.js";import"./Divider-DmfX1O82.js";import"./TreeView-DooNYzs2.js";import"./Close-DqanLwtm.js";import"./LinearProgress-dsytnwK0.js";import"./Spinner-CnGh8NP_.js";import"./Dialog-3ino5muI.js";import"./MapToggleButtonPresentational-Bc5YYuzo.js";import"./Remove-DkyK2kxE.js";import"./TextField-DYkturVF.js";import"./Switch-D_taiJx6.js";import"./DatePicker-BB6UCZL8.js";import"./LinkButton-p2kJftH-.js";import"./Paper-rT427azC.js";import"./ErrorFallback-DwUrMpBh.js";import"./ErrorFallbackText-mQySYuZ9.js";import"./ErrorFallbackWrapper-BbmJfuZU.js";import"./Brand-JWp-aIIF.js";import"./constants-CTxUe8Mo.js";import"./Edit-CEDurCbO.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Co={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const Bo=["Demo"];export{o as Demo,Bo as __namedExportsOrder,Co as default};
