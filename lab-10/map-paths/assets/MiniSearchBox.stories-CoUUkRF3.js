import{r as m,a as b,j as e}from"./iframe-DxdAL3Su.js";import{i as B,D as z}from"./DropdownButton-C8SH5NFI.js";import{I as D,P as I}from"./AppInfoRow-BzJrFUZL.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DK1g9Y7I.js";import"./SvgIcon-BrZegZvx.js";import"./generateUtilityClass-CCWNKdwZ.js";import"./styled-BMgdzSE0.js";import"./generateUtilityClasses-BFT-1hNN.js";import"./useTheme-BiScoYdH.js";import"./Box-CUC1ye6D.js";import"./Box-C6ZKPQQM.js";import"./Container-CwbmEwEH.js";import"./styled-B5ypChp-.js";import"./createStyled-CAvy4QYQ.js";import"./useThemeProps-DjL2vo9e.js";import"./FlexBox-DklXAHfg.js";import"./Stack-CTka0ZNx.js";import"./Typography-Dfep4tta.js";import"./Paper-Bo-zMr0f.js";import"./useThemeProps-DjyANJso.js";import"./Text-IVDE9YTn.js";import"./AdapterDayjs-B8sl8BqR.js";import"./Modal-C-eco959.js";import"./utils-DdbwduB_.js";import"./TransitionGroupContext-CNW6Ngzs.js";import"./index-DZlZqtiH.js";import"./resolveComponentProps-SThDNSlW.js";import"./Popover-Yaup4hQ9.js";import"./TextField-C9zP0G1w.js";import"./useFormControl-BEwXsRPP.js";import"./createSvgIcon-_Ighe8Sl.js";import"./IconButton-BGqyBuSr.js";import"./ButtonBase-B08XEsVO.js";import"./DialogContent-B-yTN8YW.js";import"./Button-DzELj4X1.js";import"./Chip-HkIy4m5K.js";import"./DateTimePicker-CkhG3iI0.js";import"./Divider-MdwAVt74.js";import"./Chip-D3g4bIDP.js";import"./Divider-DkEzbiIJ.js";import"./TreeView-CwyoSr6y.js";import"./Alert-DFubWPaF.js";import"./LinearProgress-CDxEQywf.js";import"./Spinner-Br_wUKXY.js";import"./Dialog-B3_uQnpg.js";import"./MapToggleButtonPresentational-O9HFcMS3.js";import"./Remove-O3wbXYYW.js";import"./LinkButton-BJD9gsF1.js";import"./TextField-DpvM4Ypx.js";import"./Switch-CVrnh2hT.js";import"./DatePicker-rXBKxIM_.js";import"./Paper-DRDmcqGw.js";import"./ErrorFallback-CE6iQ_Fj.js";import"./ErrorFallbackText-BBZheYlx.js";import"./ErrorFallbackWrapper-DAGibDfQ.js";import"./Brand-BP7bvT03.js";import"./constants-BEJ6QLp2.js";import"./Edit-CwACQbY_.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Co={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=a=>{T(a.currentTarget),s(!0)},x=()=>{s(a=>!a)};return b("div",{children:[e(B,{...i,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
