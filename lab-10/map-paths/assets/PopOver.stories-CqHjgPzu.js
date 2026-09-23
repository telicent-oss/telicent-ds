import{R as h,a as u,j as r}from"./iframe-BJgHgd1Z.js";import{B as v}from"./DropdownButton-BHLxTzKb.js";import{T as f}from"./Text-CFG1txZB.js";import{P as s}from"./AppInfoRow-if-kszvm.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DRBR6vIl.js";import"./SvgIcon-DcQL11rx.js";import"./generateUtilityClass-Cn_5OWk3.js";import"./styled-BWamrOs2.js";import"./generateUtilityClasses-CN6mAH2Q.js";import"./useTheme-VlnuJmfA.js";import"./Box-Bf_aDvUP.js";import"./Box-LUxyFkPT.js";import"./Container-DOyqGsQO.js";import"./styled-CHLKkDag.js";import"./createStyled-iOGV3soq.js";import"./useThemeProps-D_xWUNan.js";import"./FlexBox-BW1Y8iS1.js";import"./Stack-DjNdkcoM.js";import"./Typography-ujR-W61_.js";import"./Paper-CZnL-9iG.js";import"./useThemeProps-BpwhqMOr.js";import"./AdapterDayjs-BcMpDRru.js";import"./Modal-D7NqsO6R.js";import"./utils-N4V_aYBY.js";import"./TransitionGroupContext-D4FwzG5v.js";import"./index-T_DZwRUx.js";import"./resolveComponentProps-D-A_8V-W.js";import"./Popover-COvp4hyZ.js";import"./TextField-By-8GSNF.js";import"./useFormControl-B_d30NUq.js";import"./createSvgIcon-ChgfbEw0.js";import"./IconButton-BUrmmeH6.js";import"./ButtonBase-DpqXy7HG.js";import"./DialogContent-J5S8hT7c.js";import"./Button-ChD7S6cs.js";import"./Chip-B2SFgqJb.js";import"./DateTimePicker-BjDAHjib.js";import"./Divider-opnLhPuq.js";import"./Chip-BcrIk1ag.js";import"./Divider-BpZ0wQgx.js";import"./TreeView-BuHLvqR5.js";import"./Alert-Cxym7-Pq.js";import"./LinearProgress-Cfw17EUD.js";import"./Spinner-xAqEJSl-.js";import"./Dialog-Brvs81gM.js";import"./MapToggleButtonPresentational-Bkby2JVx.js";import"./Remove-C9EWMhX9.js";import"./LinkButton-CPyJZB5v.js";import"./TextField-DHHt2Dvp.js";import"./Switch-aGo7kiQe.js";import"./DatePicker-Dt0l70gu.js";import"./Paper-B7QMBDVQ.js";import"./ErrorFallback-CbYt6AMR.js";import"./ErrorFallbackText-CnPzZMoL.js";import"./ErrorFallbackWrapper-BvueGW-I.js";import"./Brand-CHgKb0un.js";import"./Edit-B_-WGaN2.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,xo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
