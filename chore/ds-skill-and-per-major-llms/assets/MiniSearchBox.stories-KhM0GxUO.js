import{r as m,a as b,j as e}from"./iframe-D2xSd84e.js";import{k as B,D as z}from"./DropdownButton-C0SajuR0.js";import{I as D,P as I}from"./AppInfoRow-DY_H98te.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DLxTDp4e.js";import"./SvgIcon-B_Vuuw4i.js";import"./generateUtilityClass-CL5j5EH9.js";import"./styled-Uo2f4_eJ.js";import"./generateUtilityClasses-BgNbkMmP.js";import"./useTheme-DD50os6u.js";import"./Box-aVZbDO8n.js";import"./Box-AGJ8HEdo.js";import"./Container-t30wv68u.js";import"./styled-jm0NCBmc.js";import"./createStyled-Q-b37U0V.js";import"./useThemeProps-Be8ecqSA.js";import"./FlexBox-DFBellf-.js";import"./Stack-DDjwWG7N.js";import"./Typography-CrXkC3Kj.js";import"./Paper-CMPnbo-3.js";import"./useThemeProps-CRX3G5nR.js";import"./Text-YKd5ufxb.js";import"./AdapterDayjs-CiYnk4U8.js";import"./Modal-C7up1KKP.js";import"./utils-B-UbRgM8.js";import"./TransitionGroupContext-d_Wi5FWz.js";import"./index-CFHJHd4f.js";import"./resolveComponentProps-6RrFLM_1.js";import"./Popover-DC9XfNY8.js";import"./TextField-BGl_E-Mk.js";import"./useFormControl-Cm4ESQ5Z.js";import"./createSvgIcon-BEH_TywE.js";import"./IconButton-r2Lpaq8o.js";import"./ButtonBase-wo9-0n7F.js";import"./DialogContent-B91V-Ggp.js";import"./Button-CT09wWAC.js";import"./Chip-2ePwHCRw.js";import"./DateTimePicker-BuM--HXU.js";import"./Divider-CZRs-x0D.js";import"./Chip-CYDyhIWX.js";import"./Divider-iCQqHWoM.js";import"./TreeView-C70c9-5p.js";import"./Alert-B22QG778.js";import"./LinearProgress-BJVPH0JL.js";import"./Spinner-CNKuUvLk.js";import"./Dialog-COLBK_8G.js";import"./MapToggleButtonPresentational-CsNIma1D.js";import"./Remove-7bR9n6m0.js";import"./LinkButton-CzHaV0bx.js";import"./TextField-2b4aPcPE.js";import"./Switch-bG2W1qCe.js";import"./DatePicker-BZgfSvoM.js";import"./Paper-BZvfaCOX.js";import"./ErrorFallback-BIncdLow.js";import"./ErrorFallbackText-ZC0AQgkA.js";import"./ErrorFallbackWrapper-CHAW5TC5.js";import"./Brand-rY45k5xL.js";import"./Edit-gqxvj0va.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,ko={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
