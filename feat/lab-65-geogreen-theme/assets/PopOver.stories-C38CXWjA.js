import{R as h,a as u,j as r}from"./iframe-BWDLL2AF.js";import{P as s,B as v}from"./DropdownButton-BeMj20lx.js";import{T as f}from"./Text-Dx4_8ER9.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BG2pS985.js";import"./createSvgIcon-XnQP3vBd.js";import"./generateUtilityClass-g1qzx5ZO.js";import"./styled-DEFOqb-D.js";import"./generateUtilityClasses-DVUEFJbr.js";import"./useTheme-DOAovAvO.js";import"./Box-CCa4g7t1.js";import"./Box-C59dMgxV.js";import"./Container-CLAY7udK.js";import"./styled-o6RfLB5Q.js";import"./createStyled-BVw84nZJ.js";import"./useThemeProps-Ct7WBxRG.js";import"./Stack-DUjYdPYI.js";import"./Typography-Klmc7FDT.js";import"./Paper-D2v4N1dQ.js";import"./useThemeProps-CPqi_8jR.js";import"./AdapterDayjs-zyELZRo4.js";import"./Modal-CJ09CU82.js";import"./utils-BFnmslFO.js";import"./TransitionGroupContext-BB9UDuBa.js";import"./index-BHrQ54hb.js";import"./resolveComponentProps-CvqLrRPt.js";import"./TextField-isXjsZkP.js";import"./useFormControl-CJfau4hS.js";import"./IconButton-DH05WBbS.js";import"./ButtonBase-kwpA7teX.js";import"./DialogContent-BkWlGKhl.js";import"./Button-ClnRtEFd.js";import"./Chip-D6btNuqw.js";import"./DateTimePicker-DgMuFME3.js";import"./Divider-DOviS-GW.js";import"./Chip-D79fnq3-.js";import"./Divider-BlwEMsBH.js";import"./TreeView-BVPK7VvS.js";import"./Close-RsD_fZZb.js";import"./LinearProgress-Mece69bc.js";import"./Spinner-BavJBSMY.js";import"./Dialog-fVAw2gXQ.js";import"./MapToggleButtonPresentational-D2nbVQJ2.js";import"./Remove-Ce-CPNlR.js";import"./TextField-C0vtgENj.js";import"./Switch-RsyOZKzm.js";import"./DatePicker-Bb0Uj4Me.js";import"./LinkButton-CAT44kIY.js";import"./Paper-BuccSZQF.js";import"./ErrorFallback-DF0Z2ARP.js";import"./ErrorFallbackText-BWg9-CM5.js";import"./ErrorFallbackWrapper-LV7SVYTX.js";import"./Brand-DW-o0E9p.js";import"./constants-D8FrAGj1.js";import"./Edit-C55yYd-1.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Co={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
