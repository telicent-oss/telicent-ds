import{R as h,a as u,j as r}from"./iframe-IZoSKsE3.js";import{P as s,B as v}from"./DropdownButton-B5TP08KZ.js";import{T as f}from"./Text-Kj3CiPWT.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-RuE3VV1c.js";import"./createSvgIcon-D0jCcW4R.js";import"./generateUtilityClass-DxC2Wx0F.js";import"./styled-PcYrI7eH.js";import"./generateUtilityClasses-COTvziYz.js";import"./useTheme-CsPhboDS.js";import"./Box-uH6Ohr9R.js";import"./Box-DfvW-z9e.js";import"./Container-DG8DPGND.js";import"./styled-xThT8ge4.js";import"./createStyled-AIvOzxUM.js";import"./useThemeProps-Fa_ce5Ni.js";import"./Stack-9NxgANXW.js";import"./Typography-CQLnp7AW.js";import"./Paper-ClTtkpZ4.js";import"./useThemeProps-DTUKyBXe.js";import"./AdapterDayjs-X4Nz8chh.js";import"./Modal-z7cB2q78.js";import"./utils-Df1nm0Py.js";import"./TransitionGroupContext-Q2DBTf-m.js";import"./index-DlegAnnu.js";import"./resolveComponentProps-2LdfrHoa.js";import"./TextField-C1yTht9j.js";import"./useFormControl-BUYDSUI9.js";import"./IconButton-DegQ21xD.js";import"./ButtonBase-qLroFK0e.js";import"./DialogContent-CeI2ul6W.js";import"./Button-CeFHt3lU.js";import"./Chip-D1Z91CjO.js";import"./DateTimePicker-Cp3vG90e.js";import"./Divider-BYw826Ky.js";import"./Chip-B0Z93eta.js";import"./Divider-B-3_Adf4.js";import"./TreeView-CuKNTmME.js";import"./Close-Bkeo-_v7.js";import"./LinearProgress-DReytKR0.js";import"./Spinner-BRYGcylR.js";import"./Dialog-CAOjiQ45.js";import"./MapToggleButtonPresentational-BDY0ODha.js";import"./Remove-CPvZ5wnT.js";import"./TextField-Bfy6L2oH.js";import"./Switch-DV-LHNwK.js";import"./DatePicker-jgDY5iU9.js";import"./LinkButton-DuZk3qqS.js";import"./Paper-CERtHtjI.js";import"./ErrorFallback-xEgWIGhC.js";import"./ErrorFallbackText-CmtVqweP.js";import"./ErrorFallbackWrapper-CT6MF4FT.js";import"./Brand-BVth3CVq.js";import"./constants-CIQOnJ5P.js";import"./Edit-CK78KsNY.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Co={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
