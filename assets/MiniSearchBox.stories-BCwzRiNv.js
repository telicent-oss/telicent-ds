import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as c}from"./index-Dl6G-zuu.js";import{f as l,w as T,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-CAk6wsWp.js";import{P as A}from"./Popover-D97xcsWK.js";import{e as D}from"./Drawer-fSlyXZfG.js";import{D as I}from"./UserProfile-5_MUN0Y9.js";import"./jsx-runtime-DMAvRu52.js";import"./TelicentHorizontalSVG-CX-osCX9.js";import"./SvgIcon-CUsqqB9A.js";import"./defaultTheme-DzLjz-dB.js";import"./styled-Bv4hMCY2.js";import"./generateUtilityClasses-UcMdw3-3.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./FlexGrid-DSPhqh6w.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./Container-C_TGCsJE.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./FlexBox-CfPxXzlV.js";import"./Box-BpjgVFAP.js";import"./Typography-0bha627S.js";import"./Paper-qM_AAhp8.js";import"./DataSetIcon-BtGpAy3k.js";import"./UserIcon-BuuqinF_.js";import"./Text-BfZocbeP.js";import"./Chip-DH2OifDm.js";import"./Chip-D8IxPV3x.js";import"./createSvgIcon-DsapHZbt.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./ButtonBase-DQ5wMQUc.js";import"./Divider-Dtsf1hGn.js";import"./Divider-Cjysf9bk.js";import"./TreeView-DbFX33UJ.js";import"./useThemeProps-D7jdKLbb.js";import"./useId-CkA8naEk.js";import"./utils-BgVWvv5k.js";import"./index-B0kOWIl9.js";import"./index-BfyspvgH.js";import"./colorManipulator-BRx-aaGP.js";import"./UserProfileContent-DwoWk9c6.js";import"./AdapterDayjs-DuWp5629.js";import"./index-BbVSaS1S.js";import"./Popover-BtZEiDAe.js";import"./IconButton-BOLdoQUj.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./Menu-x1DlT4eR.js";import"./Button-CfsaO-rc.js";import"./constants-Bs2sAYxE.js";import"./iframe-CcCDOfsx.js";import"../sb-preview/runtime.js";import"./types-JQgdQoTs.js";import"./DateTimePicker-CV9o2ulC.js";import"./UIThemeProvider-CxkzzJSB.js";import"./ThemeProvider-GiwL96Kb.js";import"./LinearProgress-Bg-Reu7H.js";import"./Button-D8ZFDHf0.js";import"./SecondaryButton-CPTMGzEe.js";import"./DatePicker-D7xV_onj.js";import"./Card-DPzkVZ34.js";import"./CardActions-ChFzG7jH.js";import"./Paper-6XRc2JUc.js";import"./ErrorFallback-Bdi4LnTL.js";import"./ErrorFallbackText-ByFUlXy5.js";import"./ErrorFallbackWrapper-BOm5y31m.js";import"./MapToggleButtonPresentational-C_LHMPTW.js";import"./List-B22gvqhs.js";const Xo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=T(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[p,s]=c.useState(!1),m=a=>{x(a.currentTarget),s(!0)},b=()=>{s(a=>!a)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(D,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(I,{rotation:p?180:void 0,fontSize:"inherit"})})}),t(A,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const Yo=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,Yo as __namedExportsOrder,Xo as default};
