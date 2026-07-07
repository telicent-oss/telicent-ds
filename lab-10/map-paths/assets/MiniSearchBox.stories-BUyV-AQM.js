import{r as m,a as b,j as e}from"./iframe-CYKKeyXc.js";import{h as B,I as z,D,P as I}from"./DropdownButton-DXvUw18o.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BEDwv6nP.js";import"./createSvgIcon-BCA_qiKo.js";import"./styled-DYVy4BQZ.js";import"./generateUtilityClasses-BddLF0YE.js";import"./useTheme-Clo7ftRJ.js";import"./Container-B4YkWBlj.js";import"./styled-C485N8nh.js";import"./createStyled-BrwGJ6p7.js";import"./useThemeProps-CSMSYrHE.js";import"./Stack-BjITiBsD.js";import"./Box-B5Idbuu2.js";import"./Typography-BqCL54fa.js";import"./Paper-mUQjj_jn.js";import"./useThemeProps-nKkQeJ84.js";import"./Text-Bt17FoZM.js";import"./AdapterDayjs-LnHs1126.js";import"./Modal-B6zc8eMd.js";import"./utils-BTMGMaS4.js";import"./TransitionGroupContext-BZlRwI3u.js";import"./index-BOq1Y2DU.js";import"./TextField-BKgBwIu3.js";import"./useFormControl-e1pRvXOc.js";import"./IconButton-CwWFg1EF.js";import"./ButtonBase-BY4v5x24.js";import"./DialogContent-DBkrQtLX.js";import"./Button-BK6a-J9_.js";import"./Chip-BigX0SwN.js";import"./DateTimePicker-CUaoXgcA.js";import"./Divider-CZT4G2av.js";import"./Chip-D-ivFaV7.js";import"./Divider-BtKIWAtl.js";import"./TreeView-CioP4QeT.js";import"./LinearProgress--AT7LVoA.js";import"./Spinner-CEVLaIRL.js";import"./Dialog-C76QJbsQ.js";import"./MapToggleButtonPresentational-L_xNR8KH.js";import"./Remove-B42JroOj.js";import"./TextField-nYr1dY0Q.js";import"./Switch-Bt5eTPpW.js";import"./DatePicker-HFvHu9pg.js";import"./LinkButton-BI7eyHxU.js";import"./Paper-grcJF4O1.js";import"./ErrorFallback-CikF8nPt.js";import"./ErrorFallbackText-BKonECwZ.js";import"./ErrorFallbackWrapper-DAHz8e70.js";import"./Brand-CfZWDtPV.js";import"./constants-C9fBqqHE.js";import"./Edit-BwdZQDqg.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Io={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const Ro=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Ro as __namedExportsOrder,Io as default};
