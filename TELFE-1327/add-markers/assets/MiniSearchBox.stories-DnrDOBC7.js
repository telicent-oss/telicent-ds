import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as c}from"./index-Dl6G-zuu.js";import{f as l,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-2ZXE8pL6.js";import{P as T}from"./Popover-CqIy5M7D.js";import{I as A}from"./IconButton-6csnvzSG.js";import{D}from"./UserProfile-B-204ua-.js";import"./jsx-runtime-DMAvRu52.js";import"./TelicentHorizontalSVG-B3Sdezn-.js";import"./SvgIcon-ByXbI411.js";import"./defaultTheme-DzLjz-dB.js";import"./styled-gOU_XONt.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./FlexGrid-BoEfBcU9.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./Container-FF4Fdp1b.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./FlexBox-DVTFmfFO.js";import"./Box-Dhn_9KCB.js";import"./Typography-Dhe6o_9I.js";import"./Paper-BG42kFkz.js";import"./DataSetIcon-BPiH7weE.js";import"./UserIcon-DpDI8rF2.js";import"./Drawer-C_D1RIFz.js";import"./constants-CrUYDUDg.js";import"./iframe-DeNMVtfB.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./ButtonBase-DExEX2yL.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-BbVSaS1S.js";import"./Popover-ChqH2Att.js";import"./utils-BgVWvv5k.js";import"./TextField-_uwvimc2.js";import"./useId-CkA8naEk.js";import"./Menu-z0RjVFYM.js";import"./createSvgIcon-MUYTbX0p.js";import"./AdapterDayjs-LX5PD6Iu.js";import"./index-BfyspvgH.js";import"./useThemeProps-D7jdKLbb.js";import"./colorManipulator-BRx-aaGP.js";import"./IconButton-CV1Rw-GO.js";import"./Button-B3igqjqf.js";import"./Chip-CpI9GRDB.js";import"./Text-BVIdl1Jw.js";import"./DateTimePicker-DBMjeEsM.js";import"./Divider-rhjpeBHv.js";import"./UIThemeProvider-BS_sxDlI.js";import"./ThemeProvider-GiwL96Kb.js";import"./Chip-tBdBanDh.js";import"./Divider-CByba2Al.js";import"./TreeView-DJkxzt72.js";import"./UserProfileContent-CQNj73V_.js";import"./LinearProgress-BvlhFhje.js";import"./Button-2o7EfnUw.js";import"./LinkButton-udFJw26p.js";import"./TextField-Bjo93FIX.js";import"./DatePicker-D-OuTvCY.js";import"./Card-B74XhqI-.js";import"./CardActions-BsipVerF.js";import"./Paper-BsJ-nzzS.js";import"./ErrorFallback-Db8jP4lY.js";import"./ErrorFallbackText-B2VVr9Qi.js";import"./ErrorFallbackWrapper-CwjhO7ym.js";import"./MapToggleButtonPresentational-DCqTgYa9.js";import"./Remove-M8FIgJpc.js";import"./Edit-DTNJPwPG.js";const or={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=I(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[a,s]=c.useState(!1),m=p=>{x(p.currentTarget),s(!0)},b=()=>{s(p=>!p)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(A,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(D,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(T,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
