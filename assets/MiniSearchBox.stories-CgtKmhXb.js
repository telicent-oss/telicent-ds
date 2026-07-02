import{r as m,a as b,j as e}from"./iframe-ulHXhjOW.js";import{h as B,I as z,D,P as I}from"./DropdownButton-D4ndyRTJ.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B-d1IQYh.js";import"./createSvgIcon-uTqWg2nN.js";import"./styled-Czze2UzD.js";import"./generateUtilityClasses-CSjJ64ks.js";import"./useTheme-DrTNJuY8.js";import"./Container-e_1t6Vkj.js";import"./styled-B4vmi4YW.js";import"./createStyled-ZgfepH37.js";import"./useThemeProps-BpUXXMW6.js";import"./Stack-Cyq5pepP.js";import"./Box-1efcaeVM.js";import"./Typography-Dn5MRyem.js";import"./Paper-Ce5gTSZ1.js";import"./useThemeProps-4ujKhl13.js";import"./Text-BoiTDCRr.js";import"./AdapterDayjs-CZeE3p0P.js";import"./Modal-Cg5uim4K.js";import"./utils-Cprl2CzU.js";import"./TransitionGroupContext-qSVm1uFm.js";import"./index-YuMLfXhi.js";import"./Select-DJoERUQP.js";import"./useFormControl-DawOst1E.js";import"./TextField-DVVVIXqb.js";import"./IconButton-t9DwqyqP.js";import"./ButtonBase-B2PuhISu.js";import"./DialogContent-MOZRP09j.js";import"./Button-DqB_Kw8t.js";import"./Chip-msXb_G5D.js";import"./MenuItem-BxHmYRBI.js";import"./dividerClasses-BYFYoYAG.js";import"./Chip-n1uZIzP0.js";import"./Divider-C0lF_NPc.js";import"./Divider-JeDgfplA.js";import"./TreeView-Djo6uz5s.js";import"./LinearProgress-BE1QBgJT.js";import"./Spinner-wBjktabM.js";import"./Dialog-BN-VRNR9.js";import"./MapToggleButtonPresentational-CtiuSv3Q.js";import"./Remove-CeLDCN2O.js";import"./TextField-CgXZ8iCV.js";import"./Select-FuqWOM9m.js";import"./Switch-BGnmX7CN.js";import"./DatePicker-C7pca_1x.js";import"./DateTimePicker-Buoun9gu.js";import"./LinkButton-CaaZOAyU.js";import"./Paper-CRQ_Ffgy.js";import"./ErrorFallback-CM5zR9AD.js";import"./ErrorFallbackText-CWsckLjw.js";import"./ErrorFallbackWrapper-yYMeo0wW.js";import"./Brand-CleGoPe-.js";import"./constants-BPnf2WSg.js";import"./Edit-DOoALeDD.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Ao={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
