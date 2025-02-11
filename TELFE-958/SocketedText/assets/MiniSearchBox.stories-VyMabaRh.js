import{a as z,j as e}from"./DefaultPropsProvider-mMqPhAz4.js";import{r as l}from"./index-BBkUAzwr.js";import{f as m,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-BYL92wR1.js";import{P as T}from"./Popover-BX-bOhpB.js";import{I as A}from"./TelicentMark-DH32O44n.js";import{D}from"./UserProfile-BapVZ_sB.js";import"./jsx-runtime-BwZVo4Wn.js";import"./DataSetIcon-Be5MVSv8.js";import"./SvgIcon-9htPR1de.js";import"./styled-Coa2-1Nt.js";import"./generateUtilityClasses-CjU4Pey7.js";import"./UserIcon-Dnfx85jE.js";import"./ButtonBase-odUV3zMF.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./index-DzKG53lc.js";import"./Popover-RATKuaxW.js";import"./useTheme-Dl-fNHlA.js";import"./useTheme-Dc11I-P9.js";import"./utils-CXnKKwNB.js";import"./index-BXZwOzqJ.js";import"./Paper-BpSJjDAT.js";import"./UserStatus-Bncr81G0.js";import"./FlexGrid-CF3-QHHR.js";import"./styled-BLcKEFBG.js";import"./useThemeProps-B38RGH21.js";import"./Box-DOOM5p70.js";import"./Text-D0yBQujI.js";import"./Typography-RFRigqiF.js";import"./Chip-C1kB__FQ.js";import"./createSvgIcon-k3y9_sX-.js";import"./TreeView-DF6vTG9G.js";import"./index-_4_hgnnR.js";import"./colorManipulator-BnJ1IiY5.js";import"./UserProfileContent-CL7-SJ5i.js";import"./FlexBox-DBC_blm8.js";import"./Container-Db-Htp1t.js";import"./OutlinedInput-DbkkAaLI.js";import"./InputBase-CfzJDZPv.js";import"./GlobalStyles-XDDu4tWV.js";import"./index-UccViGix.js";const fo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:i,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
