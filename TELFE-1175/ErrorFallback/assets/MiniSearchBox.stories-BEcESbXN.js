import{a as z,j as e}from"./DefaultPropsProvider-BSWuto10.js";import{r as m}from"./index-BBkUAzwr.js";import{f as l,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-CkrIFWsT.js";import{P as T}from"./Popover-C3uATu_3.js";import{I as A}from"./FeatureMap-Bwaf79Hw.js";import{D}from"./UserProfile-DjzvMCHd.js";import"./jsx-runtime-BwZVo4Wn.js";import"./Divider-DI2hROvX.js";import"./SvgIcon-Bf2yV0bL.js";import"./styled-BrIIThlA.js";import"./generateUtilityClasses-D9eTBXKL.js";import"./FlexGrid-DspDwyzG.js";import"./styled-C9Vn0W8F.js";import"./useTheme-DqUUtKyf.js";import"./useThemeProps-B57Xyf65.js";import"./useTheme-D8w0kg7X.js";import"./Container-DjeFMLBs.js";import"./FlexBox-DHo5zb4e.js";import"./Box-DgiOPB4O.js";import"./Typography-Ccepgalm.js";import"./Paper-BLsXTBnp.js";import"./DataSetIcon-DNkwuXqd.js";import"./UserIcon-BB6Q81eU.js";import"./Text-Lb7f3cNw.js";import"./Chip-AKyoKhvy.js";import"./createSvgIcon-Ciwc8VzQ.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./ButtonBase-BTGFTk3s.js";import"./TreeView-BjYYmfXW.js";import"./utils-wFC7UK9Z.js";import"./index-BXZwOzqJ.js";import"./index-_4_hgnnR.js";import"./colorManipulator-BzVklsQt.js";import"./UserProfileContent-z8bbLtAI.js";import"./Popover-G0nBJInY.js";import"./iframe-CrtBRLm1.js";import"../sb-preview/runtime.js";import"./UIThemeProvider-WG7A9Agw.js";import"./ThemeProvider-D44tmZDD.js";import"./index-BqeinIc9.js";import"./LinearProgress-CTXa14kf.js";import"./Button-Ry6T39J5.js";import"./Button-DVJTHr7w.js";import"./Card-yePQ2Hsf.js";import"./CardActions-D4NK6-su.js";import"./ErrorFallback-BkGNXVlU.js";import"./ErrorFallbackText-BHFGb7nB.js";import"./ErrorFallbackWrapper-Dp8Qdhpd.js";const Io={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=m.useState(null),[s,p]=m.useState(!1),c=i=>{x(i.currentTarget),p(!0)},b=()=>{p(i=>!i)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:s?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:s,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const To=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,To as __namedExportsOrder,Io as default};
