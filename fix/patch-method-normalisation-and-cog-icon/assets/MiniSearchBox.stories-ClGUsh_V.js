import{r as m,a as b,j as e}from"./iframe-BqqKlwwa.js";import{h as B,I as z,D,P as I}from"./DropdownButton-DzB6ahkn.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CPduY34a.js";import"./createSvgIcon-1vjhxYae.js";import"./generateUtilityClass-C21e_TMF.js";import"./styled-DYH3NNtb.js";import"./generateUtilityClasses-CXTZVc4r.js";import"./useTheme-D5fnxfrf.js";import"./Box-CMGXnnyg.js";import"./Box-fJZ8R9-A.js";import"./Container-CjnffXXv.js";import"./styled-BKL9P30Y.js";import"./createStyled-2Pi8n9Bx.js";import"./useThemeProps-BE43dwe9.js";import"./Stack-DGYvNFnp.js";import"./Typography-r9WARuqd.js";import"./Paper-CJpWpN4s.js";import"./useThemeProps-BeWtcQiU.js";import"./Text-D367fKUk.js";import"./AdapterDayjs-DvkxE42H.js";import"./Modal-CFi7NpCZ.js";import"./utils-ClVsDaXg.js";import"./TransitionGroupContext-DiVglu5Y.js";import"./index-CRMvLHot.js";import"./resolveComponentProps-Cd0rbuoE.js";import"./TextField-CSaMK6Rk.js";import"./useFormControl-CJ-AiNnx.js";import"./IconButton-C0yfI_AJ.js";import"./ButtonBase-Bplzc8va.js";import"./DialogContent-CtGptt-v.js";import"./Button--P2V-vbf.js";import"./Chip-Bg9GS4ad.js";import"./DateTimePicker-Bg2Aumfy.js";import"./Divider-C9Y0zhSY.js";import"./Chip-DP6OEXjS.js";import"./Divider-DtsR-NFR.js";import"./TreeView-g4w2Ic2N.js";import"./Close-KcKFZADQ.js";import"./LinearProgress-BcbpGby2.js";import"./Spinner-C3y-_tnf.js";import"./Dialog-CU2Sdzg4.js";import"./MapToggleButtonPresentational-BhuzwcFT.js";import"./Remove-CJtGZM1W.js";import"./TextField-DcCagKfQ.js";import"./Switch-BFbXwE48.js";import"./DatePicker-D6WVRr1T.js";import"./LinkButton-5F2XfMGt.js";import"./Paper-8WAvk_Qw.js";import"./ErrorFallback-AR6ag1S9.js";import"./ErrorFallbackText-CFF1RAi1.js";import"./ErrorFallbackWrapper-D5foAbpi.js";import"./Brand-Dl2vMMPH.js";import"./constants-mvoOnkOS.js";import"./Edit-oZ_9Z-0E.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Ao={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
