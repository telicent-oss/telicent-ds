import{R as h,a as u,j as r}from"./iframe-CAVshkuv.js";import{P as s,B as v}from"./DropdownButton-9w3rAX6T.js";import{T as f}from"./Text-zn7-gcNn.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DJgOmEVN.js";import"./createSvgIcon-B3EaAiNw.js";import"./generateUtilityClass-jc-dHuJ-.js";import"./styled-CEs6WI9Z.js";import"./generateUtilityClasses-PgfeV1Wq.js";import"./useTheme-ATZows8q.js";import"./Box-DLtVExO8.js";import"./Box-C4yeY-00.js";import"./Container-COrfX9qv.js";import"./styled-DmB_YMuy.js";import"./createStyled-BEuIMvDB.js";import"./useThemeProps-C0hUlt40.js";import"./Stack-aumhO8Vb.js";import"./Typography-B1Np1v7N.js";import"./Paper-BY4MSiKk.js";import"./useThemeProps-KzD3lSay.js";import"./AdapterDayjs-DLp8STlk.js";import"./Modal-q8qVtJkQ.js";import"./utils-CL8D0dFT.js";import"./TransitionGroupContext-mvKX0Qc4.js";import"./index-Bfg7eB2H.js";import"./resolveComponentProps-CK8UMYC2.js";import"./TextField-D-S9QRzG.js";import"./useFormControl-CbU4OzAW.js";import"./IconButton-BeeGNNdb.js";import"./ButtonBase-L_tow8ks.js";import"./DialogContent-DShAFksA.js";import"./Button-CdHIDFCs.js";import"./Chip-DGUVdb4L.js";import"./DateTimePicker-C-jQ5Uw8.js";import"./Divider-BzwQ7r6O.js";import"./Chip-CD6y_O1F.js";import"./Divider-DI0qbv1g.js";import"./TreeView-G_WzO7bU.js";import"./Close-ZjhlHLtp.js";import"./LinearProgress-AOvTTCYa.js";import"./Spinner-aO3iJras.js";import"./Dialog-BzvgW_1y.js";import"./MapToggleButtonPresentational-Dh_eY9kA.js";import"./Remove-CPj-DoGK.js";import"./TextField-De73yqc1.js";import"./Switch-B0vd6s4C.js";import"./DatePicker-Opun4efj.js";import"./LinkButton-UDbAGZRZ.js";import"./Paper-QK8zw_qk.js";import"./ErrorFallback-BRmu4a9D.js";import"./ErrorFallbackText-C8zJKlqc.js";import"./ErrorFallbackWrapper-Dzt70zLO.js";import"./Brand-BuFxs41G.js";import"./constants-Bdme3Adm.js";import"./Edit-BJwA-2_m.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Co={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
