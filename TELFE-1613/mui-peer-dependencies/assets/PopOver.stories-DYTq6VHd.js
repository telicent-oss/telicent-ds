import{R as h,a as u,j as r}from"./iframe-O7ZSOzH6.js";import{B as v}from"./DropdownButton-9IQM39iB.js";import{T as f}from"./Text-nRcHvf3o.js";import{P as s}from"./AppInfoRow-0HJaNGZZ.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CVW633Wu.js";import"./SvgIcon-C9V7Ug2C.js";import"./generateUtilityClass-CaBvuMTH.js";import"./styled-DIoSYlWj.js";import"./generateUtilityClasses-Ck-qx9fV.js";import"./useTheme-CyHOJq73.js";import"./Box-CGifCS97.js";import"./Box-Bh48kC-V.js";import"./Container-Cnxb2MGW.js";import"./styled-CkMq9Go9.js";import"./createStyled-CVG07lMp.js";import"./useThemeProps-CHVM-BV5.js";import"./FlexBox-DE23WfsN.js";import"./Stack-BrwT5Je_.js";import"./Typography-ClJj-jBK.js";import"./Paper-Dr6YfsOz.js";import"./useThemeProps-DiSzJ5RC.js";import"./AdapterDayjs-B5AjoP0Q.js";import"./Modal-9ChNdpfT.js";import"./utils-SoSev3en.js";import"./TransitionGroupContext-B7rwdiyI.js";import"./index-5Y2jY6OW.js";import"./resolveComponentProps-BETcHjWA.js";import"./Popover-BKe0lZr-.js";import"./TextField-BbFA9wlk.js";import"./useFormControl-Cg-wtjlR.js";import"./createSvgIcon-RHoLritL.js";import"./IconButton-B8s4GQ3S.js";import"./ButtonBase-BU7A4vUM.js";import"./DialogContent-DqMmuBKo.js";import"./Button-0ICa7MST.js";import"./Chip-VOgUgKU3.js";import"./DateTimePicker-D-qf43pp.js";import"./Divider-CF1tXDob.js";import"./Chip-Bfi3CHWH.js";import"./Divider-CjbOd_kj.js";import"./TreeView-BB5-CSqu.js";import"./Alert-Djh-wYbn.js";import"./LinearProgress-CFUTsEE5.js";import"./Spinner-C_yQLXLp.js";import"./Dialog-WoMp7Hm5.js";import"./MapToggleButtonPresentational-BtoIJ6fP.js";import"./Remove-DOKjbcKs.js";import"./LinkButton-BBnTv_j7.js";import"./TextField-as-GdJ4B.js";import"./Switch-BpeAZxQ1.js";import"./DatePicker-B_n7IfRI.js";import"./Paper-BhX0sOWI.js";import"./ErrorFallback-CLGQlz6c.js";import"./ErrorFallbackText-Dz979o06.js";import"./ErrorFallbackWrapper-BWOXKjAC.js";import"./Brand-uV7cUGM3.js";import"./constants-B5xQjWnv.js";import"./Edit-BerfezYI.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
