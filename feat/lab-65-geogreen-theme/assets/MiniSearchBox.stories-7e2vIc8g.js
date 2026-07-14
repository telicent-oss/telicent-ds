import{r as m,a as b,j as e}from"./iframe-BfEsncEF.js";import{h as B,I as z,D,P as I}from"./DropdownButton-99vgIkCV.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DAdv8Ixp.js";import"./createSvgIcon-C6teTnyS.js";import"./generateUtilityClass-DLTO8EZ0.js";import"./styled-CKEjpOwx.js";import"./generateUtilityClasses-CgDs_uOe.js";import"./useTheme-BD06mfPU.js";import"./Box-ChCTlzLQ.js";import"./Box-CtVv9OHw.js";import"./Container-DHCExKqq.js";import"./styled-D7FRfLSG.js";import"./createStyled-KEG0ma0P.js";import"./useThemeProps-D2PMoY2V.js";import"./Stack-DB3Y16n1.js";import"./Typography-Cur-qBxx.js";import"./Paper-CmIu2cj4.js";import"./useThemeProps-j1RL-BpF.js";import"./Text-BMw1ybWa.js";import"./AdapterDayjs-D6qtZrEv.js";import"./Modal-BoRvpCnD.js";import"./utils-D9P5YpBK.js";import"./TransitionGroupContext-BiIjqEy8.js";import"./index-CuxFIe6q.js";import"./resolveComponentProps-2Wttismo.js";import"./TextField-BV7Va00E.js";import"./useFormControl-3m3RTCoN.js";import"./IconButton-scd69Lv3.js";import"./ButtonBase-CyDfjua2.js";import"./DialogContent-orjmG92r.js";import"./Button-jK3vDH7L.js";import"./Chip-C3EaWfE-.js";import"./DateTimePicker-C-sZiwTj.js";import"./Divider-BDyVO8zM.js";import"./Chip-wEw5ZNvW.js";import"./Divider-Berqrx4H.js";import"./TreeView-D2h7huiz.js";import"./Close-1c413Acz.js";import"./LinearProgress-4SIHWNA8.js";import"./Spinner-p-63cFPN.js";import"./Dialog-BfMJ9NKL.js";import"./MapToggleButtonPresentational-Bgmt2_LX.js";import"./Remove-DoXNBLDf.js";import"./TextField-M5Osf9JN.js";import"./Switch-C_gUrCjS.js";import"./DatePicker-D3jVMaej.js";import"./LinkButton-DybG3JjG.js";import"./Paper-VpNf2qxV.js";import"./ErrorFallback-Dn6So0DV.js";import"./ErrorFallbackText-DoD_00IC.js";import"./ErrorFallbackWrapper-DKy8QON8.js";import"./Brand-B8b8xuEA.js";import"./constants-C1bu_m5W.js";import"./Edit-CfOidwdt.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Ao={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
