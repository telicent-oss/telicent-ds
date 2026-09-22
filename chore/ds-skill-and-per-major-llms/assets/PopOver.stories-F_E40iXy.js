import{R as h,a as u,j as r}from"./iframe-B2Ay8HHY.js";import{B as v}from"./DropdownButton-CmgzjG5S.js";import{T as f}from"./Text-C3v24AG7.js";import{P as s}from"./AppInfoRow-t3PiwP7k.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Ct43AKF1.js";import"./SvgIcon-O7zvTOEi.js";import"./generateUtilityClass-DRhqcJ3C.js";import"./styled-Cp8rcGr5.js";import"./generateUtilityClasses-n51uImyc.js";import"./useTheme-DUfeIRPs.js";import"./Box-BWzfxiHj.js";import"./Box-DiR6fmjD.js";import"./Container-IuJtd-i_.js";import"./styled-BVl11CwU.js";import"./createStyled-LnKMAta8.js";import"./useThemeProps-ieKjDhbz.js";import"./FlexBox-Cd5iPm6B.js";import"./Stack-CERZHvX_.js";import"./Typography-CaMlTbgu.js";import"./Paper-GGZQsb9V.js";import"./useThemeProps-Ct5eCcN4.js";import"./AdapterDayjs-piU1cTWH.js";import"./Modal-Dhbreh5C.js";import"./utils-BuawHli2.js";import"./TransitionGroupContext-BiERh0aS.js";import"./index-B8sFEjRQ.js";import"./resolveComponentProps-DavTyxC5.js";import"./Popover-Dd-QG0yq.js";import"./TextField-DgpfhAoQ.js";import"./useFormControl-CfQyKxf4.js";import"./createSvgIcon-DJYY3zlJ.js";import"./IconButton-DJ3dnZFG.js";import"./ButtonBase-CcZ3ellP.js";import"./DialogContent-VKCYrYYG.js";import"./Button-CmApE-h2.js";import"./Chip-CoN_kc_F.js";import"./DateTimePicker-VjhqFvjd.js";import"./Divider-0j4JbSTp.js";import"./Chip-pXx3H7uq.js";import"./Divider-DW0OUxzq.js";import"./TreeView-B36RPHSJ.js";import"./Alert-C8wDmmlT.js";import"./LinearProgress-CcZu-den.js";import"./Spinner-CLBlp-1z.js";import"./Dialog-BQEcgH8b.js";import"./MapToggleButtonPresentational-CBq2aYZI.js";import"./Remove-BxIVYSTr.js";import"./LinkButton-1B0tJmq_.js";import"./TextField-knF78Q6V.js";import"./Switch-Bwl2j2OC.js";import"./DatePicker-Q5cJzMzd.js";import"./Paper-CTXRsw4i.js";import"./ErrorFallback-CCOH-k8x.js";import"./ErrorFallbackText-BwbRAXPw.js";import"./ErrorFallbackWrapper-iyce9Q1e.js";import"./Brand-CniOL6Cz.js";import"./Edit-DJOWn5_1.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,xo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
