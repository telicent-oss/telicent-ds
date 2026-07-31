import{r as m,a as b,j as e}from"./iframe-DoslK4-Y.js";import{h as B,I as z,D,P as I}from"./DropdownButton-CpLqd6lJ.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DnXd5C1m.js";import"./createSvgIcon-kyaEsooS.js";import"./generateUtilityClass-JvD44KlO.js";import"./styled-B63D9YfN.js";import"./generateUtilityClasses-DKrtj2o0.js";import"./useTheme-DzicPpM7.js";import"./Box-DAPH_7_v.js";import"./Box-D2_lAdOb.js";import"./Container-PDo0r7TO.js";import"./styled-BvUWTwGk.js";import"./createStyled-C2aqfojm.js";import"./useThemeProps-DNll4FD1.js";import"./Stack-UL0xvK-j.js";import"./Typography-D2p4r1VP.js";import"./Paper-1pU2OFLe.js";import"./useThemeProps-BNlVDt2d.js";import"./Text-Cij1s-38.js";import"./AdapterDayjs-UbNq20Y4.js";import"./Modal-rS1eOuqw.js";import"./utils-Dvm8JGhi.js";import"./TransitionGroupContext-C-tiKQba.js";import"./index-CkH7vSdv.js";import"./resolveComponentProps-COOebCVT.js";import"./TextField-C2yuJQKq.js";import"./useFormControl-DRekPhCN.js";import"./IconButton-poqVLHkM.js";import"./ButtonBase-C5TrPrFI.js";import"./DialogContent-DhrHlbA4.js";import"./Button-C-Z1g5oZ.js";import"./Chip-D3gK25ET.js";import"./DateTimePicker-BXudKtkl.js";import"./Divider-JBjBhjWn.js";import"./Chip-DNg9fUiC.js";import"./Divider-DPs7zMxh.js";import"./TreeView-y43LHmco.js";import"./Close-MejyRCXq.js";import"./LinearProgress-zmCoNGUe.js";import"./Spinner-DokMSZNQ.js";import"./Dialog-Zk72S_-8.js";import"./MapToggleButtonPresentational-Dqn1nl-c.js";import"./Remove-BlL-kZFd.js";import"./TextField-BX9-cCN-.js";import"./Switch-DAnjy2Z2.js";import"./DatePicker-yxE24Q2d.js";import"./LinkButton-OGrJf87H.js";import"./Paper-CuXqVMKU.js";import"./ErrorFallback-BxLGSuCI.js";import"./ErrorFallbackText-DMYJZIcj.js";import"./ErrorFallbackWrapper-CoUUqruh.js";import"./Brand-BHjzrKzK.js";import"./constants-4rCzzNn2.js";import"./Edit-BUNMs3rM.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Ao={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
