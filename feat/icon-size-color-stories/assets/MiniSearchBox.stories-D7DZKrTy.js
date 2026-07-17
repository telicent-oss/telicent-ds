import{r as m,a as b,j as e}from"./iframe-DjLxm7SD.js";import{h as B,I as z,D,P as I}from"./DropdownButton-OdITcuya.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DFS2VSDc.js";import"./createSvgIcon-MIeX2BRI.js";import"./generateUtilityClass-BLqluGhu.js";import"./styled-C0jSE3AP.js";import"./generateUtilityClasses-BO81MJJG.js";import"./useTheme-DvVKUnCu.js";import"./Box--iJ_3JNa.js";import"./Box-PIDL4Fit.js";import"./Container-DRKYHsiA.js";import"./styled-atsIZHYt.js";import"./createStyled-Cc_yoAqX.js";import"./useThemeProps-Fnp1xWzD.js";import"./Stack-CCnHELyK.js";import"./Typography-CofTJ_Fs.js";import"./Paper-Bw5HsGYD.js";import"./useThemeProps-Ewpml6lw.js";import"./Text-CVnCU36g.js";import"./AdapterDayjs-B1X-CvWP.js";import"./Modal-B7a9aff8.js";import"./utils-wz01l5qZ.js";import"./TransitionGroupContext-BU8BL2dP.js";import"./index-DrRIbANR.js";import"./resolveComponentProps-DFK19icQ.js";import"./TextField-OPZ9edjq.js";import"./useFormControl-UyDYT27V.js";import"./IconButton-DVwg49gr.js";import"./ButtonBase-CgGGn6Da.js";import"./DialogContent-CBR7V6gG.js";import"./Button-CS4wg-vH.js";import"./Chip-BpvzB-8r.js";import"./DateTimePicker-D4Hp4gX_.js";import"./Divider-C6mIQ5zR.js";import"./Chip-B8CDxprS.js";import"./Divider-DVlBE3P8.js";import"./TreeView-Co0t44VC.js";import"./Close-C1rysX-W.js";import"./LinearProgress-DeQbd7E0.js";import"./Spinner-BkQfXhtb.js";import"./Dialog-YQhBvj2B.js";import"./MapToggleButtonPresentational-3lb-UE9s.js";import"./Remove-CTK2Ub1o.js";import"./TextField-6mReXCWm.js";import"./Switch-CDyuDDTr.js";import"./DatePicker-aPQ8noSa.js";import"./LinkButton-D9oXM2qx.js";import"./Paper-ChmMIXfx.js";import"./ErrorFallback-ClFzMA-d.js";import"./ErrorFallbackText-vqUAjIHx.js";import"./ErrorFallbackWrapper-Dc3fOI5x.js";import"./Brand-Dvnzdq7_.js";import"./constants-629LYWu7.js";import"./Edit-DojDoZiY.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Ao={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
