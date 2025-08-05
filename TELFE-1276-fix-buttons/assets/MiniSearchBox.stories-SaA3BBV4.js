import{a as z,j as e}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as m}from"./index-Dl6G-zuu.js";import{f as l,w as T,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-B6ZADsBF.js";import{P as A}from"./Popover-DhgGZshX.js";import{e as D}from"./Drawer-BtYQj-0_.js";import{D as I}from"./UserProfile-DaDj3L5p.js";import"./jsx-runtime-DMAvRu52.js";import"./TelicentHorizontalSVG-DbQp5T3V.js";import"./SvgIcon-CjmMrQNX.js";import"./defaultTheme-Cydao2Tu.js";import"./styled-D6pw60Bp.js";import"./generateUtilityClasses-YWFBP9tm.js";import"./DefaultPropsProvider-BHKfC5ky.js";import"./styled-HsAy3ZEw.js";import"./useTheme-DxGOHaWi.js";import"./useThemeProps-CBEhXQxo.js";import"./useTheme-BYNjlLc8.js";import"./Container-BErEnX_q.js";import"./FlexBox-D6GhYe9U.js";import"./Box-DjrL3vcN.js";import"./Typography-BuiWgCNN.js";import"./Paper-DB4yr4EO.js";import"./DataSetIcon-BBABdu0b.js";import"./UserIcon-q_P09GsN.js";import"./Text-BNIHq94e.js";import"./Chip-Bx_Lu-NR.js";import"./createSvgIcon-sttI1-XB.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./ButtonBase-BUg8pwcP.js";import"./Divider-BE0LSpy8.js";import"./TreeView-DpHiciEK.js";import"./useId-CkA8naEk.js";import"./utils-xzVdhYNG.js";import"./index-B0kOWIl9.js";import"./index-BfyspvgH.js";import"./colorManipulator-YQmhVZwB.js";import"./UserProfileContent-DdYm007D.js";import"./Popover-BFLlbOqP.js";import"./constants-Dx2Tj1Xl.js";import"./iframe-CA3yYro7.js";import"../sb-preview/runtime.js";import"./types-BzuXlqsY.js";import"./GlobalStyles-ByhVr9LE.js";import"./index-1lBnjf3z.js";import"./UIThemeProvider-BDvoFzpa.js";import"./ThemeProvider-CN5YWCuf.js";import"./IconButton-DPejjeAT.js";import"./LinearProgress-yGZEzgsa.js";import"./Button-a6vHgwhc.js";import"./Button-C1gE5xKs.js";import"./LinkButton-B-URIbsY.js";import"./Card-CUWN1MwO.js";import"./CardActions-wDSfmjtr.js";import"./Paper-CYQoaktD.js";import"./ErrorFallback-VtVYyFB3.js";import"./ErrorFallbackText-e1_2MPZH.js";import"./ErrorFallbackWrapper-B2v_McFA.js";import"./MapToggleButtonPresentational-DyF2Ew1L.js";import"./List-CmdUcGkz.js";const No={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=T(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=m.useState(null),[p,s]=m.useState(!1),c=i=>{x(i.currentTarget),s(!0)},b=()=>{s(i=>!i)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(I,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(A,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,w,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const Wo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Wo as __namedExportsOrder,No as default};
