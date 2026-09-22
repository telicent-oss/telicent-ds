import{r as m,a as b,j as e}from"./iframe-CDBxO6_b.js";import{k as B,D as z}from"./DropdownButton-CkksLEox.js";import{I as D,P as I}from"./AppInfoRow-BwXDp_eE.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DEvOIRGm.js";import"./SvgIcon-DsW68TcN.js";import"./generateUtilityClass-KFl2kJbe.js";import"./styled-76qFXujn.js";import"./generateUtilityClasses-DaXJGzLl.js";import"./useTheme-rDhlhLy3.js";import"./Box-CySwnFLo.js";import"./Box-DfnvJTQw.js";import"./Container-KMaT1f54.js";import"./styled-CphBOoQ3.js";import"./createStyled-C1rkA4Mv.js";import"./useThemeProps-fiQCP1N1.js";import"./FlexBox-BMs_YP_5.js";import"./Stack-mYJwoIT2.js";import"./Typography-vegYmcLy.js";import"./Paper-DMCPBJkm.js";import"./useThemeProps-DHX2ocPH.js";import"./Text-CdZr9e3u.js";import"./AdapterDayjs-CYb0KguN.js";import"./Modal-DEgg-C3h.js";import"./utils-Cr9e5xo4.js";import"./TransitionGroupContext-Cu_THlZq.js";import"./index-DWMSeB-r.js";import"./resolveComponentProps-BxRLFcsS.js";import"./Popover-0S23aSjL.js";import"./TextField-B7fvSw8O.js";import"./useFormControl-BLJrGv0p.js";import"./createSvgIcon-CEVPRCDB.js";import"./IconButton-D-oIe7cH.js";import"./ButtonBase-5WYJ2ezl.js";import"./DialogContent-DLgwMkMq.js";import"./Button-CAHqHr06.js";import"./Chip-CqmdbVD_.js";import"./DateTimePicker-DP5-_LCV.js";import"./Divider-BXpFwo5Y.js";import"./Chip-BLU3VkT1.js";import"./Divider-8ryveRxy.js";import"./TreeView-DuSVfVPL.js";import"./Alert-D-UKQ5P-.js";import"./LinearProgress-Ds_yNof7.js";import"./Spinner-DqjfiG1Z.js";import"./Dialog-Bf4YNW6N.js";import"./MapToggleButtonPresentational-DAgezT-5.js";import"./Remove-CQa5LtxQ.js";import"./LinkButton-ByQcFuFk.js";import"./TextField-Csj0W2gm.js";import"./Switch-aIvlRLf5.js";import"./DatePicker-OfEkbjGT.js";import"./Paper-TPWkBCMh.js";import"./ErrorFallback-cydewmqS.js";import"./ErrorFallbackText-DsJo2xyd.js";import"./ErrorFallbackWrapper-I5QMkt72.js";import"./Brand-CMTTc4Ce.js";import"./Edit-caJtQqsL.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,ko={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
