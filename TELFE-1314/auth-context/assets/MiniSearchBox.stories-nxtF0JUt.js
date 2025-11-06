import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as c}from"./index-Dl6G-zuu.js";import{f as l,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-DXN5G9I1.js";import{P as T}from"./Popover-Bxjayg7j.js";import{I as A}from"./IconButton-Dl7Uv_PN.js";import{D}from"./UserProfile-CSbbH8i5.js";import"./jsx-runtime-DMAvRu52.js";import"./TelicentHorizontalSVG-DP7xLAp3.js";import"./SvgIcon-DDjczThx.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./FlexGrid-M25hPc65.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./Container-CFeVW3qn.js";import"./styled-BEKiHWi7.js";import"./createStyled-9i3u5Rqa.js";import"./useThemeProps-BFLDat3t.js";import"./FlexBox-owEKTX38.js";import"./Box-DR7xjwgg.js";import"./Typography-DvrCv4HQ.js";import"./Paper-B-rBeRIm.js";import"./DataSetIcon-CzT3Gt8m.js";import"./UserIcon-B0AVfc7u.js";import"./AuthModal-Dm4mQb8g.js";import"./Text-DnbGH9ax.js";import"./constants-CVq1Wmjp.js";import"./iframe-DluQHjBN.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./GlobalStyles-BK1ltzIn.js";import"./GlobalStyles-DdQ_E3CX.js";import"./ButtonBase-JObl-ewV.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-CXtVKvFt.js";import"./Popover-B3llNT0S.js";import"./utils-BfhgiYH5.js";import"./Select-BIX2DfMX.js";import"./Menu-BkD04aCn.js";import"./useId-CkA8naEk.js";import"./createSvgIcon-CxivGeKF.js";import"./AdapterDayjs-sa9HN2xx.js";import"./index-BfyspvgH.js";import"./useThemeProps-BTBzXMHi.js";import"./TextField-D_aQwkfm.js";import"./IconButton-BRyaXHdy.js";import"./colorManipulator-DBPky6cX.js";import"./Button-B8lPRXAj.js";import"./Chip-DqDSBqh3.js";import"./MenuItem-CdOttbWs.js";import"./dividerClasses-DixuAXrT.js";import"./UIThemeProvider-Cy_6mza1.js";import"./ThemeProvider-BPzF9hu_.js";import"./Chip-BVaSRp92.js";import"./Divider-CCH3-U8L.js";import"./Divider-DOeen-K3.js";import"./TreeView-0QEJhhhD.js";import"./UserProfileContent-BkWk_Qx8.js";import"./LinearProgress-CRSreEF6.js";import"./Button-BhZeqQDZ.js";import"./LinkButton-CsDENkR4.js";import"./TextField-InohbSRw.js";import"./Select-C1_f-aAJ.js";import"./DatePicker-ga9keWZl.js";import"./DateTimePicker-B55e7A3j.js";import"./Card-BWv60QFk.js";import"./CardActions-CCW8za6b.js";import"./Paper-BBwh5-3y.js";import"./ErrorFallback-fPXNZKjO.js";import"./ErrorFallbackText-BLCYy_1i.js";import"./ErrorFallbackWrapper-CSpgK55r.js";import"./MapToggleButtonPresentational-DiEvv04q.js";import"./Remove-DLpXZYtt.js";import"./Edit-BwFhg13Q.js";const nr={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=I(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[a,s]=c.useState(!1),m=p=>{x(p.currentTarget),s(!0)},b=()=>{s(p=>!p)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(A,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(D,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(T,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
