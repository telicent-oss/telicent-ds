import{a as z,j as e}from"./DefaultPropsProvider-_Lew82y0.js";import{r as l}from"./index-BBkUAzwr.js";import{f as m,w as I,u as h}from"./index-R3fZrLBo.js";import{M as B}from"./MiniSearchBox-BpsKzqvJ.js";import{P as T}from"./Popover-qN9BYoKp.js";import{I as A}from"./TelicentMark-Bi5F1Jok.js";import{D}from"./UserProfile-CDHHUDNw.js";import"./extends-l96ZYLL7.js";import"./DataSetIcon-DvnsXFdB.js";import"./SvgIcon-nOE-MXQL.js";import"./styled-BJBODTqz.js";import"./generateUtilityClasses-Dvcw8qpp.js";import"./UserIcon-BW6od35l.js";import"./styled-CkjOwDsr.js";import"./useThemeProps-Q6_fKbvr.js";import"./useTheme-D3h9sCof.js";import"./UserStatus-mlX5DDKl.js";import"./Menu-BEBIUrjS.js";import"./ButtonBase-_xvnSuiZ.js";import"./TransitionGroupContext-BxlS8Jd0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-ChMeXycY.js";import"./Popover-Hcm-BVgZ.js";import"./utils-DO1XUlS6.js";import"./index-COG_gdbT.js";import"./resolveComponentProps-BX18Z20f.js";import"./useTheme-BFzPSdMH.js";import"./Paper-Bh8jhr9X.js";import"./Text-CGTJRmaL.js";import"./UserProfileContent-CJyar8S6.js";import"./createSvgIcon-6016U0XV.js";import"./Chip-D-qwnX-7.js";import"./TreeView-BepDGeKR.js";import"./index-_4_hgnnR.js";import"./colorManipulator-D-wf997I.js";import"./Container-CYtt4Xmd.js";import"./OutlinedInput-B1hp2AUY.js";import"./InputBase-Bw5VxE4I.js";import"./GlobalStyles-CZ9BLhYK.js";import"./index-DXqQCM1T.js";const fo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:i,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const Oo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Oo as __namedExportsOrder,fo as default};
