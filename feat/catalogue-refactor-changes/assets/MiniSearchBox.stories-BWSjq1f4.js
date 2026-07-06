import{r as m,a as b,j as e}from"./iframe-2a6KH_Y2.js";import{h as B,I as z,D,P as I}from"./DropdownButton-ee1y9LC3.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DsHhd6fS.js";import"./createSvgIcon-D_wZWHy4.js";import"./styled-DgdLtGG_.js";import"./generateUtilityClasses-CVtZWfJL.js";import"./useTheme-Cx6vnF0r.js";import"./Container-Du9KxdkV.js";import"./styled-D3ZZnIDk.js";import"./createStyled-DxFvKydN.js";import"./useThemeProps-vJmRtplj.js";import"./Stack-CojT_K4F.js";import"./Box-UIDy46IG.js";import"./Typography-DrPsKv4d.js";import"./Paper-BSuha06s.js";import"./useThemeProps-BL2jWHZa.js";import"./Text-kR8p7DIq.js";import"./AdapterDayjs-DDbCIOBk.js";import"./Modal-DJ8VBj3p.js";import"./utils-D2GhKSPk.js";import"./TransitionGroupContext-DW3H988m.js";import"./index-DrFhovnn.js";import"./TextField-BNf4QAhE.js";import"./useFormControl-CJp2h8rR.js";import"./IconButton-iUn1E9on.js";import"./ButtonBase-CsM7vvGl.js";import"./DialogContent-B_353Kkw.js";import"./Button-U2NznJnU.js";import"./Chip-D4g1B89E.js";import"./DateTimePicker-5YrKsRJP.js";import"./Divider-D9DUnApf.js";import"./Chip-CU7LtMVk.js";import"./Divider-wOcP7z2O.js";import"./TreeView-DYsm38IX.js";import"./LinearProgress-Di7e5FGy.js";import"./Spinner-A93-VFYS.js";import"./Dialog-CK4FehKs.js";import"./MapToggleButtonPresentational-BLFCwFJH.js";import"./Remove-CI5wx82-.js";import"./TextField-CfA3Y3m5.js";import"./Switch-DtkAca1Z.js";import"./DatePicker-DaayXdth.js";import"./LinkButton-Cms5QcfP.js";import"./Paper-wbthJljv.js";import"./ErrorFallback-uzjZCzEW.js";import"./ErrorFallbackText-B9n1SuaO.js";import"./ErrorFallbackWrapper-CvVKmhKf.js";import"./Brand-B-imz1vn.js";import"./constants-a7scF7as.js";import"./Edit-BAp5m9tO.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Io={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
