import{r as m,a as b,j as e}from"./iframe-Dy9lMmzB.js";import{i as B,D as z}from"./DropdownButton-BrGu84Gz.js";import{I as D,P as I}from"./AppInfoRow-jj_TJA14.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-lIlQD_Ok.js";import"./SvgIcon-CqTEOtHz.js";import"./generateUtilityClass-eiI2zB0n.js";import"./styled-RSvMl9gw.js";import"./generateUtilityClasses-IR8AtaB2.js";import"./useTheme-BclnZfmM.js";import"./Box-D8L85hdW.js";import"./Box-Co6pvyno.js";import"./Container-DjBIKTWZ.js";import"./styled-DtITPUZJ.js";import"./createStyled-CMAzb2jS.js";import"./useThemeProps-lwM53F9r.js";import"./FlexBox-BSJBSHE3.js";import"./Stack-B4iL1Uda.js";import"./Typography-C9bsTXqt.js";import"./Paper-5Ojvp1ys.js";import"./useThemeProps-DmFPjoYm.js";import"./Text-BrRsEWjj.js";import"./AdapterDayjs-WZ0psJGR.js";import"./Modal-C4MvL2kI.js";import"./utils-BCqmFNg9.js";import"./TransitionGroupContext-UWO09eUM.js";import"./index-BsTKollK.js";import"./resolveComponentProps-BFMJSbl6.js";import"./Popover-DpPjroTM.js";import"./TextField-DeGygbLG.js";import"./useFormControl-Kb5Mq5P1.js";import"./createSvgIcon-B4cQQdeP.js";import"./IconButton-Cd6JmYd-.js";import"./ButtonBase-CtbPWmI1.js";import"./DialogContent-oaarGkmL.js";import"./Button-hEWvcwcz.js";import"./Chip-DcZ2ybHw.js";import"./DateTimePicker-TVNrZLsO.js";import"./Divider-BWvL84cf.js";import"./Chip-CWm1ngwI.js";import"./Divider-CMTuK0oO.js";import"./TreeView-4GWeRKjj.js";import"./Alert-_fTylV9w.js";import"./LinearProgress-Jc3Fbfut.js";import"./Spinner-COSQ6Iia.js";import"./Dialog-BKq2jPEt.js";import"./MapToggleButtonPresentational-SuPgJWl8.js";import"./Remove-CXwcUTwz.js";import"./LinkButton-DtvFkHE6.js";import"./TextField-CH00GQAj.js";import"./Switch-YLPmESjX.js";import"./DatePicker-51MqrHAP.js";import"./Paper-ByN9AWpV.js";import"./ErrorFallback-D7lBO-St.js";import"./ErrorFallbackText-DxFvtQm8.js";import"./ErrorFallbackWrapper-BbmC-MtB.js";import"./Brand-Lfzxnjkd.js";import"./constants-B7WX-ceA.js";import"./Edit-V_Um_zMs.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Co={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=a=>{T(a.currentTarget),s(!0)},x=()=>{s(a=>!a)};return b("div",{children:[e(B,{...i,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
