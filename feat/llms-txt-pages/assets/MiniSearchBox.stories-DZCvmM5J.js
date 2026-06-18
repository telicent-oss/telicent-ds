import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-OTCsP_zj.js";import{r as c}from"./index-7LYIoTbn.js";import{w as I,u as l,f as h}from"./index-edE1QCkR.js";import{i as B,I as T,D as A,P as D}from"./DropdownButton-DkBQA_Ub.js";import"./jsx-runtime-BjG_zV1W.js";import"./UserIcon-Cn55tEQ2.js";import"./createSvgIcon-DU2rVRio.js";import"./defaultTheme-ACnAOKMv.js";import"./styled-Dr6LHSty.js";import"./generateUtilityClasses-CBlNI-gU.js";import"./DefaultPropsProvider-BINl2W1D.js";import"./useTheme-BCfSMqPY.js";import"./useTheme-DmgbyzQG.js";import"./Container-Cpr-ywPw.js";import"./styled-xzbhM0n_.js";import"./createStyled-CsLhtPiI.js";import"./useThemeProps-DhNaUrQ2.js";import"./Stack-_9FQNGpJ.js";import"./Box-BVltnmec.js";import"./Typography-CSCiAqzj.js";import"./Paper-3rHlC0dZ.js";import"./useThemeProps-k0ivW4aO.js";import"./Text-D0lNsqSI.js";import"./AdapterDayjs-Cl81F8SA.js";import"./index-B4OJPA8G.js";import"./Modal-JNcevMIf.js";import"./utils-CXYPeQrV.js";import"./TransitionGroupContext-itkx9jux.js";import"./useEnhancedEffect-oYjd7u20.js";import"./index-DONRZHi-.js";import"./Select-BfRenVFP.js";import"./useFormControl-lkbi0or6.js";import"./useId-Cf3J66lm.js";import"./GlobalStyles-B130YdEm.js";import"./GlobalStyles-Canp8JzW.js";import"./TextField-BklvXUyq.js";import"./IconButton-K5H0oyhF.js";import"./ButtonBase-D1U61Dnt.js";import"./colorManipulator-4CHxWgpo.js";import"./DialogContent-CX0jwU1P.js";import"./Button-6gIpOcku.js";import"./Chip-D4rXNsqT.js";import"./MenuItem-bua5XKnv.js";import"./dividerClasses-Cw9q1-aC.js";import"./UIThemeProvider-4LUh-fR0.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-BUQO26gH.js";import"./Chip-BwAmCpCJ.js";import"./Divider-wVQl8Tit.js";import"./Divider-A3I7BnBV.js";import"./TreeView-CTXybiJL.js";import"./LinearProgress-Bb8hrd7I.js";import"./Spinner-BOxs5Djo.js";import"./Dialog-vILqERHu.js";import"./MapToggleButtonPresentational-86Mslv2I.js";import"./Remove-B14EzRR3.js";import"./TextField-jr6Bp6UA.js";import"./Select-CyedWs7E.js";import"./Switch-CckCM0FO.js";import"./DatePicker-DcCgiJ2j.js";import"./DateTimePicker-Dp4MmL11.js";import"./LinkButton-D9Uz2SFG.js";import"./Paper-CmfYDRfa.js";import"./ErrorFallback-Box0VFpD.js";import"./ErrorFallbackText-BxC3bExW.js";import"./ErrorFallbackWrapper-Dv-Jy562.js";import"./Brand-DN1iXAq-.js";import"./constants-B8FJ2UoY.js";import"./iframe-DzXySzRc.js";import"../sb-preview/runtime.js";import"./Edit-DKn8TmSo.js";const Xo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:h(),onTogglePopOver:h()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=I(i);await l.type(r.getByRole("searchbox"),"River Nile"),await l.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[p,s]=c.useState(!1),m=a=>{x(a.currentTarget),s(!0)},b=()=>{s(a=>!a)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(T,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(A,{rotation:p?180:void 0,fontSize:"inherit"})})}),t(D,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,w,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,O,f,E,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(f=(O=o.parameters)==null?void 0:O.docs)==null?void 0:f.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const Yo=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,Yo as __namedExportsOrder,Xo as default};
