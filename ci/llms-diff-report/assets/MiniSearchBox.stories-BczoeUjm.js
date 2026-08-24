import{r as m,a as b,j as e}from"./iframe-DBgioWeW.js";import{h as B,D as z}from"./DropdownButton-BabsKrW9.js";import{I as D,P as I}from"./AppInfoRow-Dzw9MtOg.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BZNRAdYq.js";import"./SvgIcon-TllpJj-5.js";import"./generateUtilityClass-CLTaAhKf.js";import"./styled-BFNF5QCQ.js";import"./generateUtilityClasses-Biy-3Iuq.js";import"./useTheme-C1yOJVtG.js";import"./Box-BMRHnFd3.js";import"./Box-BcBTuFed.js";import"./Container-CCihsyAb.js";import"./styled-Ciq6By-E.js";import"./createStyled-1Z_SCf_6.js";import"./useThemeProps-DD_wnCUH.js";import"./FlexBox-WvRGoRmd.js";import"./Stack-49KLdOgs.js";import"./Typography-0sG5OmeS.js";import"./Paper-ReDLUWfy.js";import"./useThemeProps-CMLYgd7W.js";import"./Text-BgUfptMq.js";import"./AdapterDayjs-a3XxtfRM.js";import"./Modal-CpjZt_2L.js";import"./utils-BFDACMv_.js";import"./TransitionGroupContext-B_89mR0Z.js";import"./index-CZMS6Q7o.js";import"./resolveComponentProps-BcqjDzNz.js";import"./Popover-MaL5oiYC.js";import"./TextField-DG8mdDgF.js";import"./useFormControl-B5a28znY.js";import"./createSvgIcon-pQhiwPMe.js";import"./IconButton-CV8_PS-T.js";import"./ButtonBase-CdfKuLiZ.js";import"./DialogContent-hHcY6KWM.js";import"./Button-DAGEP08y.js";import"./Chip-CaiYGmRd.js";import"./DateTimePicker-C2SjaMhl.js";import"./Divider-BtQ4DxGj.js";import"./Chip-CFF8wAV8.js";import"./Divider-mG2cL4cg.js";import"./TreeView-Bk0Y2Vpn.js";import"./Alert-Dbl8MlCd.js";import"./LinearProgress-CgkIvIK9.js";import"./Spinner-CWMexREX.js";import"./Dialog-S6JnYG3y.js";import"./MapToggleButtonPresentational-CWWsP1Bq.js";import"./Remove-BC-lmLjV.js";import"./LinkButton-B5-1f7yZ.js";import"./TextField-Bgagizd7.js";import"./Switch-PbDUnJEB.js";import"./DatePicker-BF5iZhcx.js";import"./Paper-7C0C2edj.js";import"./ErrorFallback-CKRDg2e3.js";import"./ErrorFallbackText-DWxCPdpF.js";import"./ErrorFallbackWrapper-DYW1qU0r.js";import"./Brand-Bx9Nu_uI.js";import"./constants--Gti5moB.js";import"./Edit-BOpYoOgP.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Co={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const jo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,jo as __namedExportsOrder,Co as default};
