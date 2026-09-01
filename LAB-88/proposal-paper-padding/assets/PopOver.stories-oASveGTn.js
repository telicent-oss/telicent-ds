import{R as h,a as u,j as r}from"./iframe-D9RVY3GC.js";import{B as v}from"./DropdownButton-rwl3jQ59.js";import{T as f}from"./Text-CTjdoToi.js";import{P as s}from"./AppInfoRow-DULWr38G.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CvpWeRbs.js";import"./SvgIcon-kZewuNf_.js";import"./generateUtilityClass-CTXfrtar.js";import"./styled-BW41HoIO.js";import"./generateUtilityClasses-Be_wgAoD.js";import"./useTheme-Cuek0u1e.js";import"./Box-QubXtXBl.js";import"./Box-CfJUPqTE.js";import"./Container-BKIHoisf.js";import"./styled-CH2-HNge.js";import"./createStyled-Dd19UBrm.js";import"./useThemeProps-onjQzJVs.js";import"./FlexBox-pDwT3cCW.js";import"./Stack-3Kaj-9dF.js";import"./Typography-CQIUUfI1.js";import"./Paper-DZ4dDB26.js";import"./useThemeProps-Bkz14TE8.js";import"./AdapterDayjs-CrQQFh2s.js";import"./Modal-B9CQxxl4.js";import"./utils-KzoBiQyf.js";import"./TransitionGroupContext-CVAJ40Fq.js";import"./index-BgBRaJK_.js";import"./resolveComponentProps-BntwI70o.js";import"./Popover-CK7xeeeX.js";import"./TextField-DJYulSoA.js";import"./useFormControl-xnu4cqzQ.js";import"./createSvgIcon-CXow994q.js";import"./IconButton-CYM2rBEb.js";import"./ButtonBase-fQYEMxRY.js";import"./DialogContent-BdDzalot.js";import"./Button-BJU7Im6I.js";import"./Chip-cLD_6qyI.js";import"./DateTimePicker-BgAW3mTw.js";import"./Divider-Z7BygLmR.js";import"./Chip-qeIbMXxN.js";import"./Divider-Va55kEt4.js";import"./TreeView-DwO-BKrr.js";import"./Alert-A_5L-O8t.js";import"./LinearProgress-BKVhmfjM.js";import"./Spinner-CzGnuAX6.js";import"./Dialog-BJNl9L1j.js";import"./MapToggleButtonPresentational-OMvEBnm1.js";import"./Remove-CvcvF1R3.js";import"./LinkButton-Di2nIt0c.js";import"./TextField-aZwqKjic.js";import"./Switch-CVB92RCE.js";import"./DatePicker-VCzAvXsF.js";import"./Paper-BpW1gf3D.js";import"./ErrorFallback-BZuSmM84.js";import"./ErrorFallbackText-Dygi6Fti.js";import"./ErrorFallbackWrapper-K9D3Pz28.js";import"./Brand-CtVUlHRr.js";import"./constants-DcEJ8LYK.js";import"./Edit-jTHivU1M.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
