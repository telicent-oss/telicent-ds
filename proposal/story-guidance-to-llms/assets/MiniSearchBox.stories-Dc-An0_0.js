import{r as m,a as b,j as e}from"./iframe-ekgyvAI9.js";import{h as B,I as z,D,P as I}from"./DropdownButton-iOB7tFo3.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-6Ji74agl.js";import"./createSvgIcon-Cz2FQkUF.js";import"./styled-Q5upQxit.js";import"./generateUtilityClasses-CWOgA3Fs.js";import"./useTheme-C5GDcVVQ.js";import"./Container-CmEFyrQ9.js";import"./styled-BpMn-R5t.js";import"./createStyled-FZZaYGHg.js";import"./useThemeProps-DphVTmkb.js";import"./Stack-Cg7aALjV.js";import"./Box-Bgfu1TlP.js";import"./Typography-C64aAkxC.js";import"./Paper-BydBWlqJ.js";import"./useThemeProps-Bvz7h4cQ.js";import"./Text-C-7vsUm_.js";import"./AdapterDayjs-NJf71x8s.js";import"./Modal-hmFd8PXe.js";import"./utils-flKsKshn.js";import"./TransitionGroupContext-tYyA_bnk.js";import"./index-C0fOhz_b.js";import"./TextField-DC_L1p9b.js";import"./useFormControl-CTEGWcEb.js";import"./IconButton-Cxch8VOt.js";import"./ButtonBase-CMje8YMJ.js";import"./DialogContent-DGeR41IL.js";import"./Button-CtnKgSct.js";import"./Chip-DbpRRavE.js";import"./DateTimePicker-BUG89NrY.js";import"./Divider-B---moVq.js";import"./Chip-CNM9xVJ3.js";import"./Divider-BHvtS0lt.js";import"./TreeView-D2h7Y55m.js";import"./LinearProgress-CnTXpHZ7.js";import"./Spinner-C9U-wMq9.js";import"./Dialog-BvbXRq2s.js";import"./MapToggleButtonPresentational-Bh86kc4C.js";import"./Remove-BKfh7hYJ.js";import"./TextField-D_pudeUr.js";import"./Switch-CGAgnWot.js";import"./DatePicker-DGw7q5t1.js";import"./LinkButton-BUP5FRO7.js";import"./Paper-1zPDfvU6.js";import"./ErrorFallback-D8Ajf5ZN.js";import"./ErrorFallbackText-DO-g4CVs.js";import"./ErrorFallbackWrapper-BteWv4mc.js";import"./Brand-CYryFwae.js";import"./constants-4ukM-jXN.js";import"./Edit-BIOwsPnM.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Io={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("searchbox"), "River Nile");
    await userEvent.click(canvas.getByRole("button", {
      name: "search"
    }));
  }
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var u,w,P;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  render: args => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showPopOver, setShowPopOver] = useState(false);
    const openPopUp = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setShowPopOver(true);
    };
    const togglePopUp = () => {
      setShowPopOver(show => !show);
    };
    return <div>
        <MiniSearchBox {...args} onTogglePopOver={openPopUp} endIcon={<IconButton size="small" aria-label="toggle pop over" onClick={openPopUp}>
              <DownArrowIcon rotation={showPopOver ? 180 : undefined} fontSize="inherit" />
            </IconButton>} />
        <PopOver id="search-popover" open={showPopOver} anchorEl={anchorEl} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: -10,
        horizontal: 214
      }} width={254} onClose={togglePopUp}>
          Pop over content goes here
        </PopOver>
      </div>;
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,O,E,f,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const Ro=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Ro as __namedExportsOrder,Io as default};
