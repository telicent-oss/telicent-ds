import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as c}from"./index-Dl6G-zuu.js";import{f as l,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-C8iDH4dh.js";import{P as T}from"./Popover-C7MCebY1.js";import{I as A}from"./IconButton-s5-t7JwX.js";import{D}from"./UserProfile-BxAQRKdr.js";import"./jsx-runtime-DMAvRu52.js";import"./TelicentHorizontalSVG-DlSq0ZBw.js";import"./SvgIcon-CLvgKtsF.js";import"./defaultTheme-BO-GVTvG.js";import"./styled-CxLuQ4yi.js";import"./generateUtilityClasses-BrkKsHLY.js";import"./DefaultPropsProvider-CqwcgZRv.js";import"./FlexGrid-CT_1tX54.js";import"./useTheme-KUAcGPiB.js";import"./useTheme-Pepcoth9.js";import"./Container-0fCyAqte.js";import"./styled-DQdJekOl.js";import"./createStyled-a9EbIl6L.js";import"./useThemeProps-cJESbEea.js";import"./FlexBox-CtZjnzR4.js";import"./Box-D_PqCh9-.js";import"./Typography-Cuh1ru_h.js";import"./Paper-CYPvuqVC.js";import"./DataSetIcon-XV4rPdps.js";import"./UserIcon-BXQcnugD.js";import"./Drawer-C3Xfn--0.js";import"./constants-DEsp_PPb.js";import"./iframe-BkBByMnl.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./GlobalStyles-Dgqu9ZBa.js";import"./GlobalStyles-DUEYx911.js";import"./ButtonBase-COX4AZc7.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-CfJV9iyf.js";import"./Popover-BWwK9c_C.js";import"./utils-C8sSVwFJ.js";import"./Select-B3yJvOVt.js";import"./Menu-6SEWvgOm.js";import"./useId-CkA8naEk.js";import"./createSvgIcon-DtNep-FY.js";import"./AdapterDayjs-Dxz3ssCX.js";import"./index-BfyspvgH.js";import"./useThemeProps-7HV0XwLr.js";import"./colorManipulator-BzIEvLd4.js";import"./IconButton-aZDif4_A.js";import"./TextField-BXF1k-T7.js";import"./Button-BVpYsrGj.js";import"./Chip-CGb5QCI3.js";import"./Text-BFNiasyU.js";import"./MenuItem-B-D4s_cu.js";import"./dividerClasses-Bf8NGDkJ.js";import"./UIThemeProvider-Bf8bDzz-.js";import"./ThemeProvider-CXSeX4Uf.js";import"./Chip-CZtKK3pl.js";import"./Divider-BInkGxYa.js";import"./Divider-nQy9ALGk.js";import"./TreeView-CLm9yUm1.js";import"./UserProfileContent-Dj2MBbg7.js";import"./LinearProgress-CwQNtVoX.js";import"./Button-KcRgJ0xu.js";import"./LinkButton-CCP5S-HK.js";import"./TextField-um4XWDOw.js";import"./Select-BKxTornM.js";import"./DatePicker-BaeNpiHF.js";import"./DateTimePicker-Bc91_Vqm.js";import"./Card-FwEEuDZt.js";import"./CardActions-hlVg_9Nm.js";import"./Paper-DqTy2_Xb.js";import"./ErrorFallback-R5oVL8pn.js";import"./ErrorFallbackText-BLmhXvDQ.js";import"./ErrorFallbackWrapper-Cv-_dl0b.js";import"./MapToggleButtonPresentational-bPqb6oXs.js";import"./Remove-D5fK3_9H.js";import"./Edit-DuWAK1JC.js";const nr={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=I(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[a,s]=c.useState(!1),m=p=>{x(p.currentTarget),s(!0)},b=()=>{s(p=>!p)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(A,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(D,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(T,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const ir=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,ir as __namedExportsOrder,nr as default};
