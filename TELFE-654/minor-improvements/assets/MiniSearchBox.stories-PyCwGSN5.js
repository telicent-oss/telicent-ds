import{a as z,j as e}from"./DefaultPropsProvider-d5Yg5iWD.js";import{r as l}from"./index-BBkUAzwr.js";import{f as m,w as I,u as h}from"./index-BYX12aAs.js";import{M as B}from"./MiniSearchBox-qQw54CQd.js";import{P as T}from"./Popover-KpZctWqV.js";import{I as A}from"./TelicentMark-DFAXVDfB.js";import{D}from"./UserProfile-BCkoix6Z.js";import"./jsx-runtime-DRTy3Uxn.js";import"./DataSetIcon-DnVia0td.js";import"./SvgIcon-Bb1DILl7.js";import"./styled-Cd9OY9py.js";import"./generateUtilityClasses-BeBiso4Q.js";import"./UserIcon-RqCC6dbb.js";import"./styled-CtDozGU3.js";import"./useThemeProps-DiuEeoPc.js";import"./useTheme-DmEqPdBI.js";import"./UserStatus-Cl_CYyeD.js";import"./useTheme-BGtMGxNE.js";import"./Menu-TaxySTk9.js";import"./ButtonBase-CMKap0Uh.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./index-CCPe48A9.js";import"./Popover-B0rHy99r.js";import"./utils-CDqwsCRL.js";import"./index-Db_96rXO.js";import"./resolveComponentProps-Br404nvz.js";import"./Paper-DALXAofg.js";import"./FlexGrid-MRj-uZJ0.js";import"./Box-CiTSDCSY.js";import"./Text-Cbj1DL2Z.js";import"./UserProfileContent-Cir61d2T.js";import"./createSvgIcon-DpCKqr1J.js";import"./Chip-Ltw8UzT3.js";import"./TreeView-9MLn2xQ-.js";import"./index-_4_hgnnR.js";import"./colorManipulator-C5G8MKjI.js";import"./Container-D4oPmSnh.js";import"./OutlinedInput-D5yfgCn_.js";import"./InputBase-dTwDVS7x.js";import"./GlobalStyles-Cz20pgr8.js";import"./index-DXqQCM1T.js";const fo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:i,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
