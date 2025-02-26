import{a as z,j as e}from"./DefaultPropsProvider-DNbgpcUu.js";import{r as l}from"./index-BBkUAzwr.js";import{f as m,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-DLe3BEZ6.js";import{P as T}from"./Popover-CcG_NWKa.js";import{I as A}from"./UserStatus-BQiFFPMf.js";import{D}from"./UserProfile-BJO54jgr.js";import"./jsx-runtime-BwZVo4Wn.js";import"./TelicentMark-BhVEYsrQ.js";import"./styled-CnbWPWMk.js";import"./generateUtilityClasses-BwpiFGlX.js";import"./SvgIcon-f13RXC8a.js";import"./FlexGrid-6cs-9T32.js";import"./styled-CJCnePQF.js";import"./useTheme-DL-c3i-n.js";import"./useThemeProps-BJjG5po3.js";import"./useTheme-DwzLSGxO.js";import"./Container-C9brU7ym.js";import"./FlexBox-BJwfCYMI.js";import"./Box-DvRWFL1p.js";import"./Text-Ahx6-q7X.js";import"./Paper-Ckbq7hqr.js";import"./DataSetIcon-DIlyQdTH.js";import"./UserIcon-BcU7B7I5.js";import"./Chip-CyBXFftR.js";import"./createSvgIcon-CmhKvED9.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./ButtonBase-DmgBfAJK.js";import"./TreeView-DHCao6gM.js";import"./utils-BZ12QECu.js";import"./index-BXZwOzqJ.js";import"./index-_4_hgnnR.js";import"./colorManipulator-CrJ3UZt4.js";import"./UserProfileContent-yoIvuCQa.js";import"./OutlinedInput-mb-vB4Iz.js";import"./InputBase-NQ0YUKgr.js";import"./Popover-DgOg7RQ1.js";import"./GlobalStyles-BCFt_Ksp.js";import"./index-mSkvzYyn.js";import"./index-Be18FJgs.js";const So={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:i,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const fo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,fo as __namedExportsOrder,So as default};
