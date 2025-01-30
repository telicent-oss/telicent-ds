import{a as z,j as e}from"./DefaultPropsProvider-D55Wj1Sq.js";import{r as l}from"./index-Du_IP5cC.js";import{f as m,w as I,u as h}from"./index-3Lpd23TA.js";import{M as B}from"./MiniSearchBox-Dhxy7UUB.js";import{P as T}from"./Popover-DFSjLxW4.js";import{I as A}from"./TelicentMark-D90GhUX1.js";import{D}from"./UserProfile-BKUliVBo.js";import"./jsx-runtime-Dwss98Nb.js";import"./DataSetIcon-DxllRCWx.js";import"./SvgIcon-sXCG3KbY.js";import"./styled-aipfhsBS.js";import"./generateUtilityClasses-Cw-uw2o7.js";import"./UserIcon-AsBRbcvg.js";import"./styled-zinR3__d.js";import"./useThemeProps-DM2VlJkO.js";import"./useTheme-CtImnkTu.js";import"./UserStatus-DI5VU-6c.js";import"./useTheme-B2MLISHX.js";import"./Menu-qgl2HGHf.js";import"./ButtonBase-DU-mBhfv.js";import"./TransitionGroupContext-DmssZhy-.js";import"./index-DfQQp3ks.js";import"./Popover-COQfAdtM.js";import"./utils-CtVJ-2PG.js";import"./index-DtoIJoF2.js";import"./resolveComponentProps-UrK7gkxe.js";import"./Paper-K73ck01N.js";import"./FlexGrid-Ckvfi2hB.js";import"./Box-BykdrlxJ.js";import"./Text-CE-o78-6.js";import"./UserProfileContent-DkFU9lUW.js";import"./createSvgIcon-BfNnQ0Hm.js";import"./Chip-CMQyemFA.js";import"./TreeView-0gM7jf_m.js";import"./index-Df2kh431.js";import"./colorManipulator-oYQv4ILr.js";import"./Container-DApHUUiT.js";import"./OutlinedInput-D7J5UeOh.js";import"./InputBase-DLsUdSbh.js";import"./GlobalStyles-DbCXTN5i.js";import"./index-ans_9-if.js";const fo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:i,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var d,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,w,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
