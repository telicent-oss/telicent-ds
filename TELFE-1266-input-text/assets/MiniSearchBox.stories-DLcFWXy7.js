import{a as z,j as e}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as c}from"./index-Dl6G-zuu.js";import{f as l,w as T,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-DUjbAGhE.js";import{P as A}from"./Popover-BCuFO5oU.js";import{e as D}from"./Drawer-3LJ2T_AH.js";import{D as I}from"./UserProfile-tgHNlyY_.js";import"./jsx-runtime-DMAvRu52.js";import"./TelicentHorizontalSVG-Ba1YJ692.js";import"./SvgIcon-CGwi2XF8.js";import"./defaultTheme-BpkXhfeA.js";import"./styled-DzpWvPfW.js";import"./generateUtilityClasses-DiXVJdeX.js";import"./DefaultPropsProvider-C67vPJX1.js";import"./styled-Ck8GJYy8.js";import"./useTheme-D_QPa1U6.js";import"./isMuiElement-DAcuSkv2.js";import"./useThemeProps--JElsblH.js";import"./useTheme-DHuFs4j8.js";import"./Container-S5gmVac-.js";import"./FlexBox-BEZBdzr_.js";import"./Box-Cfx8uO0s.js";import"./Typography-D7Rc9HSx.js";import"./Paper-CjpJL0pm.js";import"./DataSetIcon-CPAcG_uv.js";import"./UserIcon-kmeEhtTQ.js";import"./Text-DLq4GXsM.js";import"./Chip-BBluW8aP.js";import"./createSvgIcon-DuRnm9w0.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./ButtonBase-BKsdIIYL.js";import"./Divider-D_v03hYO.js";import"./TreeView-DroTfa6S.js";import"./useId-CkA8naEk.js";import"./utils-CzGd2JMT.js";import"./index-B0kOWIl9.js";import"./index-BfyspvgH.js";import"./colorManipulator-B-1-M9MD.js";import"./UserProfileContent-BtPWIMCF.js";import"./Select-llqeadix.js";import"./Menu-DfDRjEgM.js";import"./index-CZM7sGf7.js";import"./Popover-DjMyMVBa.js";import"./GlobalStyles-BOcUuy4L.js";import"./GlobalStyles-CIfgeHMT.js";import"./constants-Tqcu1Fdw.js";import"./iframe-BMn8Mk3f.js";import"../sb-preview/runtime.js";import"./types-JQgdQoTs.js";import"./UIThemeProvider-DhG-EHua.js";import"./ThemeProvider-D4yHglI3.js";import"./IconButton-DRAdqdZd.js";import"./LinearProgress-DzU0Zg_A.js";import"./Button-BRXLRAOR.js";import"./Button-CP702T-k.js";import"./LinkButton-u-U60Uzu.js";import"./Card-DFg-qCLN.js";import"./CardActions-CRS1Zsa7.js";import"./Paper-DV1QHDO7.js";import"./ErrorFallback-Cb7i3evq.js";import"./ErrorFallbackText-D4-31auA.js";import"./ErrorFallbackWrapper-DPNCVGi4.js";import"./MapToggleButtonPresentational-ktAH0RyB.js";import"./List-Dh3f9sEI.js";const qo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=T(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[p,s]=c.useState(!1),m=a=>{x(a.currentTarget),s(!0)},b=()=>{s(a=>!a)};return z("div",{children:[e(B,{...i,onTogglePopOver:m,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:m,children:e(I,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(A,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const Go=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Go as __namedExportsOrder,qo as default};
