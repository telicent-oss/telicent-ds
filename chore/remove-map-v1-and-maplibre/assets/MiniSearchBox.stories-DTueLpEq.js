import{r as m,a as b,j as e}from"./iframe-BR2e2YDK.js";import{i as B,D as z}from"./DropdownButton-BcIbR7mn.js";import{I as D,P as I}from"./AppInfoRow-DakeCdvn.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-jc37Ujil.js";import"./SvgIcon-Cv-K0R04.js";import"./generateUtilityClass-DMHzQu2S.js";import"./styled-D2dzNnNb.js";import"./generateUtilityClasses-Dg3UIE_r.js";import"./useTheme-s-RP8QJy.js";import"./Box-DUkA7BwQ.js";import"./Box-Cjy76m6G.js";import"./Container-BqQatTiF.js";import"./styled-BxRNAcX1.js";import"./createStyled-CY95Mz_9.js";import"./useThemeProps-DwRsn42H.js";import"./FlexBox-GegQ6KoK.js";import"./Stack-COhqTIW9.js";import"./Typography-DUgZ7jdW.js";import"./Paper-Bu9Xtg_J.js";import"./useThemeProps-Db0C_hKt.js";import"./Text-G3gRIU3S.js";import"./AdapterDayjs-Cqhoz3bg.js";import"./Modal-a8XaxvFh.js";import"./utils-BDR_SyG2.js";import"./TransitionGroupContext-ClPOJll4.js";import"./index-DPx2uLoP.js";import"./resolveComponentProps-4VX9PFU8.js";import"./Popover-Baj7zd45.js";import"./TextField-BYBS7QeR.js";import"./useFormControl-BDmNOi78.js";import"./createSvgIcon-BCjTwnIN.js";import"./IconButton-Bays2K--.js";import"./ButtonBase-CmJPQ6Im.js";import"./DialogContent-wB_kMJWd.js";import"./Button-D2nWt4S8.js";import"./Chip-Bs3GvNHw.js";import"./DateTimePicker-BhkD0_Tn.js";import"./Divider-Dz7TZSIi.js";import"./Chip-Ba4FoljX.js";import"./Divider-BLHqQnsK.js";import"./TreeView-CdxXinPI.js";import"./Alert-C4X40l06.js";import"./LinearProgress-Bi0KtS5W.js";import"./Spinner-KSKr4HCV.js";import"./Dialog-BOV1hoDB.js";import"./MapToggleButtonPresentational-CDIZBpSC.js";import"./Remove-DuE88Ezs.js";import"./LinkButton-BqutvHI0.js";import"./TextField-ByfWKBjI.js";import"./Switch-EzT8Sy71.js";import"./DatePicker-Bv_1Qb5R.js";import"./Paper-DeFLSdpX.js";import"./ErrorFallback-9noxw0Ql.js";import"./ErrorFallbackText-DAVlUHED.js";import"./ErrorFallbackWrapper-DctsmiY9.js";import"./Brand-Bmi4u6qq.js";import"./Edit-DHIa2SgU.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,ko={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const Co=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Co as __namedExportsOrder,ko as default};
