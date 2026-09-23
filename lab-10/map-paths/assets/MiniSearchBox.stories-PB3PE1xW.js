import{r as m,a as b,j as e}from"./iframe-DK5e7ZOT.js";import{k as B,D as z}from"./DropdownButton-DiNdw6-A.js";import{I as D,P as I}from"./AppInfoRow-8GncKDGn.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DxV6urXZ.js";import"./SvgIcon-D6AH0iNF.js";import"./generateUtilityClass-CJ1oYMmM.js";import"./styled-whwJNJEY.js";import"./generateUtilityClasses-De74ogiH.js";import"./useTheme-6u7oaTI_.js";import"./Box-DZbp-pEY.js";import"./Box-CviFExpe.js";import"./Container-CBY4xLcq.js";import"./styled-Cvi2Yhbz.js";import"./createStyled-DZLwdHSi.js";import"./useThemeProps-C49gig2L.js";import"./FlexBox-_W6sVTx8.js";import"./Stack-D9tKsaGV.js";import"./Typography-DtWNdwUY.js";import"./Paper-CkmaxJia.js";import"./useThemeProps-B27knm1v.js";import"./Text-CgE9U0QS.js";import"./AdapterDayjs-BNNJxlxy.js";import"./Modal-DmgCBfl7.js";import"./utils-BPA7G_xE.js";import"./TransitionGroupContext-chR__9Zz.js";import"./index-BXTU90x9.js";import"./resolveComponentProps-BehVUnHR.js";import"./Popover-BL6vaQzp.js";import"./TextField-DVauQNmD.js";import"./useFormControl-DE-Z70Nv.js";import"./createSvgIcon-D4CWCoDK.js";import"./IconButton-DQxImuDe.js";import"./ButtonBase-DbfXnrFH.js";import"./DialogContent-B_p2qS1z.js";import"./Button-Bv1CAZBN.js";import"./Chip-DF7wqBOO.js";import"./DateTimePicker-Cmtn6oRj.js";import"./Divider-Bv5BlnnD.js";import"./Chip-DgY181Ve.js";import"./Divider-CKdiT8EK.js";import"./TreeView-0iiQTVqV.js";import"./Alert-D3zd-dEy.js";import"./LinearProgress-DKPT-xSE.js";import"./Spinner-B4ZuhRHw.js";import"./Dialog-GFqm4Lft.js";import"./MapToggleButtonPresentational-DRlZN78V.js";import"./Remove-CLzfP5Pm.js";import"./LinkButton-DFGT5LNA.js";import"./TextField-ZbgnM2uQ.js";import"./Switch-CqtrnZSy.js";import"./DatePicker-Vi5l2hai.js";import"./Paper-DYeLzx0r.js";import"./ErrorFallback-C_jb8-Gz.js";import"./ErrorFallbackText-Ba6aZeYG.js";import"./ErrorFallbackWrapper-Cymj5yYi.js";import"./Brand-Bc1Aa_GQ.js";import"./Edit-705h0DKO.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,ko={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
