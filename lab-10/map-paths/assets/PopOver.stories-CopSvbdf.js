import{R as h,a as u,j as r}from"./iframe-dgKlI9Md.js";import{B as v}from"./DropdownButton-BedCI7it.js";import{T as f}from"./Text-KXh24aHT.js";import{P as s}from"./AppInfoRow-Bku2mgp3.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D3M5AnEw.js";import"./SvgIcon-GThFSKIF.js";import"./generateUtilityClass-DOmT7Hwm.js";import"./styled-DOJEwqdx.js";import"./generateUtilityClasses-CNKQJTWu.js";import"./useTheme-0XXlxHDI.js";import"./Box-DGWce556.js";import"./Box-RIn1APRp.js";import"./Container-LSNj_5rd.js";import"./styled-mh7cvxL0.js";import"./createStyled-DBk8YX-w.js";import"./useThemeProps-C6fVk2nE.js";import"./FlexBox-CnoXqpQZ.js";import"./Stack-KvP8rUUb.js";import"./Typography-DBA6UbDc.js";import"./Paper-CaoeiLVt.js";import"./useThemeProps-DlSmm649.js";import"./AdapterDayjs-Das5WO4l.js";import"./Modal-CYDWNWXW.js";import"./utils-x4UbiFJu.js";import"./TransitionGroupContext-Dr25D--E.js";import"./index-D-8XNvRj.js";import"./resolveComponentProps-CbFkZYcN.js";import"./Popover-DKZg8BBZ.js";import"./TextField-fJ-QFkPY.js";import"./useFormControl-eLOqNTIp.js";import"./createSvgIcon-D_GIqSq7.js";import"./IconButton-CeqJP0J9.js";import"./ButtonBase-CjbcfLfq.js";import"./DialogContent-h7y08ROY.js";import"./Button-DP44SNZU.js";import"./Chip-CpZicjkg.js";import"./DateTimePicker-oA-pYXoq.js";import"./Divider-qdgCSuxQ.js";import"./Chip-CzH2_KyY.js";import"./Divider-DBb9wTD7.js";import"./TreeView-C35-BIbW.js";import"./Alert-BxUcojB6.js";import"./LinearProgress-DJNtprYa.js";import"./Spinner-Cb4VzE0-.js";import"./Dialog-C-e18Y_P.js";import"./MapToggleButtonPresentational-Dl9Gipgq.js";import"./Remove-CH3SqBB0.js";import"./LinkButton-CPlF4I6l.js";import"./TextField-BuMvxkqq.js";import"./Switch-BkEvFl_g.js";import"./DatePicker-DbIzemFK.js";import"./Paper-Bfyh5ayX.js";import"./ErrorFallback-BRUof8o9.js";import"./ErrorFallbackText-DeVniLrC.js";import"./ErrorFallbackWrapper-fNToE_as.js";import"./Brand-Bg20RPuw.js";import"./Edit-nZvjTHTg.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,xo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
