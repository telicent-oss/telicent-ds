import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as c}from"./index-CTjT7uj6.js";import{w as I,u as l,f as h}from"./index-edE1QCkR.js";import{m as B}from"./AuthModal-DFC8MaMD.js";import{P as T}from"./Popover-BqkrEGud.js";import{I as A}from"./IconButton-CSRnY2wZ.js";import{D}from"./UserProfile-paw1xFLU.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-C-bcWZEY.js";import"./iframe-CA2ROyQd.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./ButtonBase-C9YLNer7.js";import"./TransitionGroupContext-Bu81adgJ.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Popover-DlmTLUyz.js";import"./utils-BfJHuSOI.js";import"./Modal-GSj0T9Pb.js";import"./Paper-DurtPqdU.js";import"./Select-Cg4El2i7.js";import"./Menu-Dz_6jnqr.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-BGbWkX_4.js";import"./SvgIcon-nu1RSFLJ.js";import"./AdapterDayjs-BJJxUjzR.js";import"./index-BRV0Se7Z.js";import"./useThemeProps-BCPloJZh.js";import"./useThemeProps-BQrQzAVn.js";import"./TextField-eYN_4ghx.js";import"./createStyled-MF3orRa4.js";import"./IconButton-oAA5JCuL.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BX05r4Wn.js";import"./Button-BsbypDuV.js";import"./Chip-DrHiCwPe.js";import"./TelicentHorizontalSVG-Cczi-KYX.js";import"./FlexGrid-WlHVYxOe.js";import"./Container-CeTulhJU.js";import"./styled-D52li5_j.js";import"./FlexBox-wqE_3hOo.js";import"./Box-CRiiUqfG.js";import"./DataSetIcon-eLJEtM34.js";import"./UserIcon-o6gncd3f.js";import"./MenuItem-B8oYDPYK.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-Dfoz0doH.js";import"./ThemeProvider-BnKwSnOu.js";import"./Chip-BYDdnwPY.js";import"./Divider-BNrRnzv6.js";import"./Divider-ALDgEm0R.js";import"./TreeView-BaiGyGfQ.js";import"./UserProfileContent-D7SfyGJp.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-DBzAiknu.js";import"./Button-BQmmc_Hj.js";import"./LinkButton-DOLgHIfS.js";import"./TextField-Btqabrxf.js";import"./Select-SSmDSWTe.js";import"./DatePicker-BiYSsM8F.js";import"./DateTimePicker-0RoXV4lB.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./MapToggleButtonPresentational-X7PiIpGo.js";import"./Remove-CFsi-mnJ.js";import"./Edit-gSW16YTz.js";const ar={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:h(),onTogglePopOver:h()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=I(i);await l.type(r.getByRole("searchbox"),"River Nile"),await l.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[a,s]=c.useState(!1),m=p=>{x(p.currentTarget),s(!0)},b=()=>{s(p=>!p)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(A,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(D,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(T,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,w,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,f,O,E,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const sr=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,sr as __namedExportsOrder,ar as default};
