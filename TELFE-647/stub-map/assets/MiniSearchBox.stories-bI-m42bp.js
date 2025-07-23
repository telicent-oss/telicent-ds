import{a as z,j as e}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as m}from"./index-Dl6G-zuu.js";import{f as l,w as T,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-DUZVqbZi.js";import{P as A}from"./Popover-DEe1UNyj.js";import{d as D}from"./Drawer-ChvPPhdC.js";import{D as I}from"./UserProfile-N6pr5-2m.js";import"./jsx-runtime-DMAvRu52.js";import"./TelicentHorizontalSVG-xSzC_QTu.js";import"./SvgIcon-CwSgo-eM.js";import"./DefaultPropsProvider-DokkfWXe.js";import"./styled-Bh4j-phE.js";import"./generateUtilityClasses-BrZc1hjY.js";import"./FlexGrid-JVYOOaHa.js";import"./styled-ilcqLD5m.js";import"./useTheme-c__JTuJp.js";import"./useThemeProps-BNFryEOP.js";import"./useTheme-Sw6qfmru.js";import"./Container-bU783VGj.js";import"./FlexBox-D2o1BZNO.js";import"./Box-B1z1Qd0d.js";import"./Typography-DOS1jQiX.js";import"./Paper-DjaG4Kki.js";import"./DataSetIcon-DGj6m1BG.js";import"./UserIcon-Cx-r992D.js";import"./Text-C4zpNQRp.js";import"./Chip-pzoqvFR6.js";import"./createSvgIcon-DiFjgoLh.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./ButtonBase-Do7AHI9h.js";import"./Divider-BQZg7t2N.js";import"./TreeView-gav8i2Kk.js";import"./useId-CkA8naEk.js";import"./utils-C-XDAD8M.js";import"./index-B0kOWIl9.js";import"./index-BfyspvgH.js";import"./colorManipulator-Cuc7me6V.js";import"./UserProfileContent-DHz0GTL-.js";import"./Popover-jZh0iIOv.js";import"./constants-Cti-p_rp.js";import"./iframe-DjR5Pwc1.js";import"../sb-preview/runtime.js";import"./types-JQgdQoTs.js";import"./index-Bg6tHTX3.js";import"./UIThemeProvider-K1iMkQi9.js";import"./ThemeProvider-mIQjSFi-.js";import"./IconButton-56B7AwOW.js";import"./LinearProgress-tobgb8oL.js";import"./Button-w9tbBUtr.js";import"./Button-D7yzuVoT.js";import"./SecondaryButton-BcPTyAr_.js";import"./Card-CACrcWJQ.js";import"./CardActions-ChQ-9HT4.js";import"./Paper-BMhFNqQN.js";import"./ErrorFallback-D0Q64ifN.js";import"./ErrorFallbackText-C1J-oAKu.js";import"./ErrorFallbackWrapper-D-KZ366e.js";import"./MapToggleButtonPresentational-CBr8W7gO.js";import"./List-B5LeInEP.js";const Ho={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=T(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=m.useState(null),[p,s]=m.useState(!1),c=i=>{x(i.currentTarget),s(!0)},b=()=>{s(i=>!i)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(I,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(A,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var d,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,w,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const No=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,No as __namedExportsOrder,Ho as default};
