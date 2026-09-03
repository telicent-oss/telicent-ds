import{r as m,a as b,j as e}from"./iframe-DNDUxcaO.js";import{i as B,D as z}from"./DropdownButton-Gjs_u29X.js";import{I as D,P as I}from"./AppInfoRow-Cc3GEOw8.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BkYOIqa1.js";import"./SvgIcon-D_gSiXU4.js";import"./generateUtilityClass-yRtlLDX3.js";import"./styled-DfedMCu0.js";import"./generateUtilityClasses-B3dIEnov.js";import"./useTheme-CjRP5Zih.js";import"./Box-CyVPnPuN.js";import"./Box-Bkz_GRi9.js";import"./Container-CFQML5lf.js";import"./styled-CEZOB1IF.js";import"./createStyled-BMssbegF.js";import"./useThemeProps-DbfhoLXT.js";import"./FlexBox-B99FqBon.js";import"./Stack-CmDJwrDz.js";import"./Typography-D2D0xmuv.js";import"./Paper-CFCWWK2T.js";import"./useThemeProps-CvpeLjbL.js";import"./Text-BzABXIyF.js";import"./AdapterDayjs-CH9J21mu.js";import"./Modal-BxwzYNJH.js";import"./utils-HRKdNepk.js";import"./TransitionGroupContext-BuYwsTCk.js";import"./index-BfdHqeMj.js";import"./resolveComponentProps-BREYvZrN.js";import"./Popover-Ajs4D1Yg.js";import"./TextField-BpITMWTL.js";import"./useFormControl-Bme-q2O6.js";import"./createSvgIcon-Dauu6_Iu.js";import"./IconButton-BJQhOQlg.js";import"./ButtonBase-DnXvlvN-.js";import"./DialogContent-CynUCe-Z.js";import"./Button-DTJ9V6nt.js";import"./Chip-cnnRKU4-.js";import"./DateTimePicker-BB_R5cc9.js";import"./Divider-DrpONNh4.js";import"./Chip-BpOQvEWJ.js";import"./Divider-CZP54Ze7.js";import"./TreeView-D5w0NpN-.js";import"./Alert-DO3pQkEQ.js";import"./LinearProgress-C7U5-zF-.js";import"./Spinner-B7aIcwLu.js";import"./Dialog-BNQpFNSR.js";import"./MapToggleButtonPresentational-DA_-a6wQ.js";import"./Remove-kGFwgJC6.js";import"./LinkButton-smfWLNJd.js";import"./TextField-CIJj8B3P.js";import"./Switch-C0MMkom0.js";import"./DatePicker-D-5DE768.js";import"./Paper-CHGMDtz6.js";import"./ErrorFallback-B5ZQhcnu.js";import"./ErrorFallbackText-CjRaFV8l.js";import"./ErrorFallbackWrapper-12v0M5tK.js";import"./Brand-GUpF-d_h.js";import"./constants-DsUVBwT7.js";import"./Edit-B-a3iYoh.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Co={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=a=>{T(a.currentTarget),s(!0)},x=()=>{s(a=>!a)};return b("div",{children:[e(B,{...i,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
