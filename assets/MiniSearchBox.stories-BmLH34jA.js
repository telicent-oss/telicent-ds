import{a as z,j as e}from"./DefaultPropsProvider-FmOZEx_L.js";import{r as l}from"./index-BBkUAzwr.js";import{f as m,w as I,u as h}from"./index-BYX12aAs.js";import{M as B}from"./MiniSearchBox-CvX_CcTw.js";import{P as T}from"./Popover-Br8qrKSg.js";import{I as A}from"./TelicentMark-DUG-e8LG.js";import{D}from"./UserProfile-CAj6mGoY.js";import"./jsx-runtime-DRTy3Uxn.js";import"./DataSetIcon-DTgOixlg.js";import"./SvgIcon-DyVJVZbK.js";import"./styled-CKqgJSB4.js";import"./generateUtilityClasses-DiIBTi47.js";import"./UserIcon-Bcuf3TR6.js";import"./styled-DWUfan1z.js";import"./useThemeProps-B4wga_l5.js";import"./useTheme-C43gVfC6.js";import"./UserStatus-haWs16zO.js";import"./Menu-Bi_XPucy.js";import"./ButtonBase-W-QUno4-.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./index-B9uXLkjB.js";import"./Popover-CRxjdS_0.js";import"./utils-EQzFzA8f.js";import"./index-Db_96rXO.js";import"./resolveComponentProps-tsvYd0yv.js";import"./useTheme-DvsKo-w_.js";import"./Paper-BL2CR90I.js";import"./Text-Cr0Hr2-l.js";import"./UserProfileContent-j0bXDFTy.js";import"./createSvgIcon-D_LOMcdM.js";import"./Chip-DTb4MH_T.js";import"./TreeView-DZSNglu2.js";import"./index-_4_hgnnR.js";import"./colorManipulator-uiArQTW6.js";import"./Container-CYb-wCou.js";import"./OutlinedInput-BTgHpIZ8.js";import"./InputBase-aNPH8lVW.js";import"./GlobalStyles-CPwkG7iD.js";import"./index-DXqQCM1T.js";const Po={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:i,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
