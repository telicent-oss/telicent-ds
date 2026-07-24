import{r as m,a as b,j as e}from"./iframe-BoGmtiqi.js";import{h as B,I as z,D,P as I}from"./DropdownButton-9Xj5t7HG.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D75N07sQ.js";import"./createSvgIcon-BsGvT_Gg.js";import"./generateUtilityClass-DYiHiqeZ.js";import"./styled-B8RB16F4.js";import"./generateUtilityClasses-BfoAhINv.js";import"./useTheme-Bt6YqtiY.js";import"./Box-CbZaWvDN.js";import"./Box-BLhnI6lR.js";import"./Container-BbQvdPgj.js";import"./styled-_ew7vjUr.js";import"./createStyled-BhHOUunM.js";import"./useThemeProps-EcFwFAXV.js";import"./Stack-DbUHIhyW.js";import"./Typography-Dqfx75Vr.js";import"./Paper-Ds8lE9E_.js";import"./useThemeProps-BU_zzqaP.js";import"./Text-BkhkcLQ4.js";import"./AdapterDayjs-DhXCFc3d.js";import"./Modal-YkTh51uo.js";import"./utils-EUvM7u40.js";import"./TransitionGroupContext-CCztK8Kk.js";import"./index-BTYKHUkg.js";import"./resolveComponentProps-BPxYzwMf.js";import"./TextField-DPpR00-L.js";import"./useFormControl-C2VNDp8l.js";import"./IconButton-Dn0-eezg.js";import"./ButtonBase-BSa7XpmR.js";import"./DialogContent-DO755nYy.js";import"./Button-D8B8-owY.js";import"./Chip-DKVjHm47.js";import"./DateTimePicker-C_8oxirJ.js";import"./Divider-CSlgSMAF.js";import"./Chip-DppDhca0.js";import"./Divider-CcBzd5UP.js";import"./TreeView-WVY7m-Dp.js";import"./Close-DEil8FH7.js";import"./LinearProgress-iD2FIEM-.js";import"./Spinner-Cw7U4Ywu.js";import"./Dialog-DDcXchB3.js";import"./MapToggleButtonPresentational-CYRGxPPM.js";import"./Remove-Cj_C0DEH.js";import"./TextField-CdX8-_-1.js";import"./Switch-CC_HtqMW.js";import"./DatePicker-BHvgUPK0.js";import"./LinkButton-Do56arYd.js";import"./Paper-Folpf_uw.js";import"./ErrorFallback-Lo0r634_.js";import"./ErrorFallbackText-UdARBjRi.js";import"./ErrorFallbackWrapper-C3xuKd4S.js";import"./Brand-BKGj_y_E.js";import"./constants-B6Vi70Vn.js";import"./Edit-BE6zqKXG.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Ao={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const Lo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Lo as __namedExportsOrder,Ao as default};
