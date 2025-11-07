import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as c}from"./index-Dl6G-zuu.js";import{f as l,w as I,u as h}from"./index-ZIyp8o0e.js";import{k as B}from"./AuthModal-qmasD9s9.js";import{P as T}from"./Popover-BrIrK6dZ.js";import{I as A}from"./IconButton-C0wT6dFz.js";import{D}from"./UserProfile-C8X7C1Su.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-CBeXAxhM.js";import"./Typography-DqLej86Z.js";import"./identifier-C6mAUaLB.js";import"./styled-BErHg-7C.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./DefaultPropsProvider-BOzBDHyA.js";import"./constants-DlQjT1fD.js";import"./iframe-CEcEbE6B.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-GyLrR4NU.js";import"./useTheme-Cg37eTMn.js";import"./GlobalStyles-B_QX4JcH.js";import"./GlobalStyles-D5xpOMhP.js";import"./ButtonBase-tX4Kf77e.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-sTB3RqdK.js";import"./Popover-Cxp1EMNk.js";import"./utils-Bvq5k-kH.js";import"./Modal-CRxLFwVZ.js";import"./Paper-ZbIfs51-.js";import"./Select-Ds1w35dI.js";import"./Menu-DVuMilii.js";import"./useId-CkA8naEk.js";import"./createSvgIcon-Bol9-9si.js";import"./SvgIcon-5gifbZ3Q.js";import"./Popper-CM2Kr59e.js";import"./TelicentHorizontalSVG-CP1sg2bX.js";import"./FlexGrid-BkekN5zB.js";import"./Container-Cq7J-8WQ.js";import"./styled-BSjilmX5.js";import"./createStyled-BrBbf8qF.js";import"./useThemeProps-43QuDAxK.js";import"./FlexBox-DBRDUZLj.js";import"./Box-BszdSfjy.js";import"./DataSetIcon-Cm0wHARM.js";import"./UserIcon-BHVQbi_2.js";import"./AdapterDayjs-DW1c22wX.js";import"./index-BfyspvgH.js";import"./useThemeProps-DWcfj1ju.js";import"./TextField-BLjSgVN4.js";import"./IconButton-BoPVz0e3.js";import"./colorManipulator-DXzzQmry.js";import"./DialogContent-D-e6ZoBQ.js";import"./Button-TraRuOe6.js";import"./Chip-0oOxBFYq.js";import"./MenuItem-D3kwU1b1.js";import"./dividerClasses-D3mH6QPz.js";import"./UIThemeProvider-NVLmHdJb.js";import"./ThemeProvider-zfew0pSd.js";import"./Chip-DHPuOQSw.js";import"./Divider-Chg4b2AX.js";import"./Divider-hbCrYSvl.js";import"./TreeView-BgMRjvSk.js";import"./UserProfileContent-CK9uRPZy.js";import"./LinearProgress-Cj7B0DX4.js";import"./Dialog-YaeX8T1I.js";import"./Button-B5noVfMb.js";import"./LinkButton-BU_YGzUP.js";import"./TextField-Cyy439vr.js";import"./Select-D1STgkym.js";import"./Autocomplete-DF7gJZuW.js";import"./DatePicker-DVz3O4Jw.js";import"./DateTimePicker-DVLkLoCp.js";import"./Card-CyosORb7.js";import"./CardActions-q60J-lzQ.js";import"./Paper-BKrtg6OD.js";import"./ErrorFallback-DIksr2Zc.js";import"./ErrorFallbackText-Cj3I3SFq.js";import"./ErrorFallbackWrapper-D0yAoJ_c.js";import"./MapToggleButtonPresentational-Cl915u3A.js";import"./Remove-Dh6sdo_k.js";import"./Edit-uu0JEZaV.js";const sr={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=I(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[a,s]=c.useState(!1),m=p=>{x(p.currentTarget),s(!0)},b=()=>{s(p=>!p)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(A,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(D,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(T,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const mr=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,mr as __namedExportsOrder,sr as default};
