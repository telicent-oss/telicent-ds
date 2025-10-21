import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as c}from"./index-Dl6G-zuu.js";import{f as l,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-DdFHk0aD.js";import{P as T}from"./Popover-DMDv2fuJ.js";import{I as A}from"./IconButton-B3KtzcW5.js";import{D}from"./UserProfile-B0RVUakH.js";import"./jsx-runtime-DMAvRu52.js";import"./TelicentHorizontalSVG-CQqo1iNz.js";import"./SvgIcon-CCVYAiJY.js";import"./identifier-y0bUoTO6.js";import"./styled-0JAKTnfS.js";import"./generateUtilityClasses-Nvsm4CNa.js";import"./DefaultPropsProvider-5cPhPzqh.js";import"./FlexGrid-BXR2iRV0.js";import"./useTheme-BzMTtAHJ.js";import"./useTheme-DD-YLZ4_.js";import"./Container-Bt7wgl8Z.js";import"./styled-BJZjZNjA.js";import"./createStyled-CQbojMn1.js";import"./useThemeProps-dlg6X6gD.js";import"./FlexBox-CPV3qV_w.js";import"./Box-BF-qgu-5.js";import"./Typography-BrwPcXc_.js";import"./Paper-DSYDI967.js";import"./DataSetIcon-DHhYydZc.js";import"./UserIcon-B9flVcwo.js";import"./AuthModal-CcTf7jpD.js";import"./Text-8Kdc4mds.js";import"./constants-D6JbaO56.js";import"./iframe-DfdgjJFF.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./GlobalStyles-vabYxzRP.js";import"./GlobalStyles-CHovE7rY.js";import"./ButtonBase-BPGrtmaq.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-CGpTQFWu.js";import"./Popover-lQsAd3LZ.js";import"./utils-CMxZCPCo.js";import"./TextField-BXJNoCm8.js";import"./useId-CkA8naEk.js";import"./Menu-DOiAulci.js";import"./createSvgIcon-CHKs_KBR.js";import"./AdapterDayjs--Bc0--O2.js";import"./index-BfyspvgH.js";import"./useThemeProps-Dn9YwK3s.js";import"./IconButton-CJWQDxju.js";import"./colorManipulator-_kX1Zyzf.js";import"./Button-C78fFQkL.js";import"./Chip-Dals-zk3.js";import"./DateTimePicker-BfS6ExPs.js";import"./Divider-ByP1puSd.js";import"./UIThemeProvider-Yl8oZnWo.js";import"./ThemeProvider-bcdU8uNZ.js";import"./Chip-DwEDWKOc.js";import"./Divider-D5viUhla.js";import"./TreeView-Cv9rbGZ0.js";import"./UserProfileContent-Be3-9Jzl.js";import"./LinearProgress-DXAYFx38.js";import"./Button-BUdKq2Nf.js";import"./LinkButton-D3-RYoWb.js";import"./TextField-PJfMD1VO.js";import"./DatePicker-CBr8yT-u.js";import"./Card-DEzO0riq.js";import"./CardActions-B8gFKj_f.js";import"./Paper-DkOGDDl7.js";import"./ErrorFallback-BQDrKlpt.js";import"./ErrorFallbackText-D0ectygn.js";import"./ErrorFallbackWrapper-Drru2TWq.js";import"./MapToggleButtonPresentational-DDiBoo1Q.js";import"./Remove-ABIIxDNk.js";import"./Edit-ClXqq_Xi.js";const or={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=I(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[a,s]=c.useState(!1),m=p=>{x(p.currentTarget),s(!0)},b=()=>{s(p=>!p)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(A,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(D,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(T,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const rr=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,rr as __namedExportsOrder,or as default};
