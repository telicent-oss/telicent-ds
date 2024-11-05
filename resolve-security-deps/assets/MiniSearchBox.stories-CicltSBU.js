import{a as z,j as e}from"./DefaultPropsProvider-wYCywQOd.js";import{r as l}from"./index-uubelm5h.js";import{f as m,w as I,u as h}from"./index-BYX12aAs.js";import{M as B}from"./MiniSearchBox-iLwLZmMe.js";import{P as T}from"./Popover-8txejZqT.js";import{I as A}from"./TelicentMark-BD5NecVa.js";import{D}from"./UserProfile-Bbz3Ervh.js";import"./jsx-runtime-QvZ8i92b.js";import"./DataSetIcon-B3OWU2WU.js";import"./SvgIcon-BxldJtJX.js";import"./styled-ChcWa6mF.js";import"./generateUtilityClasses-pp8e96Oj.js";import"./UserIcon-BGtgVsRY.js";import"./styled-CCBLWc3l.js";import"./useThemeProps-CJNGtWNs.js";import"./useTheme-BjBMDFrD.js";import"./UserStatus-D_UtrutO.js";import"./Menu-DCFAtxym.js";import"./ButtonBase-DcPSPA3-.js";import"./TransitionGroupContext-DFEdpA_P.js";import"./index-Dm3RFQs3.js";import"./Popover-d8D_jjQY.js";import"./utils-BliZeF-y.js";import"./index-C5xsJX-I.js";import"./resolveComponentProps-C3Ck13wz.js";import"./useTheme-CY03VFFQ.js";import"./Paper-oIsZ1tmm.js";import"./Text-_cnSIpXZ.js";import"./UserProfileContent-Bjn6beKg.js";import"./createSvgIcon-BOXpFpC1.js";import"./Chip-tNF-LRXo.js";import"./TreeView-CH7EENZ2.js";import"./index-D3eZ-H7s.js";import"./colorManipulator-BptLWYZN.js";import"./Container-D-vVbSn2.js";import"./OutlinedInput-ewdVB7b0.js";import"./InputBase-DunGkvl2.js";import"./GlobalStyles-DzjJZCP3.js";import"./index-DXqQCM1T.js";const Po={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:i,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const So=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,So as __namedExportsOrder,Po as default};
