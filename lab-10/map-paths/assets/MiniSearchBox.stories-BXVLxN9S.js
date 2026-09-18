import{r as m,a as b,j as e}from"./iframe-gcsprQu8.js";import{i as B,D as z}from"./DropdownButton-BEYokHfI.js";import{I as D,P as I}from"./AppInfoRow-kdoUBD8Q.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DBQbMpQO.js";import"./SvgIcon-BrFhojvn.js";import"./generateUtilityClass-tAFanvqs.js";import"./styled-z8yjWRGC.js";import"./generateUtilityClasses-DDrT0Wtx.js";import"./useTheme-DYSpqgqt.js";import"./Box-DlisZL_M.js";import"./Box-duLD_n9I.js";import"./Container-DW-RmcIK.js";import"./styled-TSmkR7dG.js";import"./createStyled-DK6Bqq-R.js";import"./useThemeProps-BoEg6sCY.js";import"./FlexBox-f8DYl4m8.js";import"./Stack-WnSokjrQ.js";import"./Typography-BCLgB6ka.js";import"./Paper-oUcZmdYu.js";import"./useThemeProps-BppZtYeL.js";import"./Text-rsvQkVmT.js";import"./AdapterDayjs-Slbj9gW0.js";import"./Modal-BaGNnkkV.js";import"./utils-C62NRfJo.js";import"./TransitionGroupContext-xOOqnej8.js";import"./index-DbhPxP1F.js";import"./resolveComponentProps-DY2kpSMT.js";import"./Popover-C7OtZNdh.js";import"./TextField-D8aa4wlH.js";import"./useFormControl-CkPXndg1.js";import"./createSvgIcon-DbfWGqHn.js";import"./IconButton-ky8TSI0p.js";import"./ButtonBase-hz2rw0D_.js";import"./DialogContent-BcSYLVkk.js";import"./Button-6XGc_Mph.js";import"./Chip-BxW1HlJ1.js";import"./DateTimePicker-CZ7UH1aP.js";import"./Divider-C67hWBPC.js";import"./Chip-BtQj1Pme.js";import"./Divider-DJBITA_4.js";import"./TreeView-XHup4me5.js";import"./Alert-CfSX2-sx.js";import"./LinearProgress--NVFbcjy.js";import"./Spinner-CBdnNGmx.js";import"./Dialog-CXB83sUj.js";import"./MapToggleButtonPresentational-BW1TnG_s.js";import"./Remove-BcvnJ2fA.js";import"./LinkButton-DITwVUJ_.js";import"./TextField-Cb3ChBpe.js";import"./Switch-87lKY-zI.js";import"./DatePicker-7eHGhlXt.js";import"./Paper-D1gwsZOW.js";import"./ErrorFallback-Czlqph93.js";import"./ErrorFallbackText-B0OJ7dGV.js";import"./ErrorFallbackWrapper-CvCuGeu1.js";import"./Brand-DIZ3HHdI.js";import"./constants-Bjiaa_c0.js";import"./Edit-C8e520cO.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Co={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=a=>{T(a.currentTarget),s(!0)},x=()=>{s(a=>!a)};return b("div",{children:[e(B,{...i,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
