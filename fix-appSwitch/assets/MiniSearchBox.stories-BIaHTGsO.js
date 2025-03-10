import{a as z,j as e}from"./DefaultPropsProvider-DFY4ak0N.js";import{r as l}from"./index-BBkUAzwr.js";import{f as m,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-CdTmK-il.js";import{P as T}from"./Popover-CQ4lUhla.js";import{I as A}from"./AppSwitch-ir5KX2nX.js";import{D}from"./UserProfile-DpZoHZAf.js";import"./jsx-runtime-BwZVo4Wn.js";import"./Divider-DpEjpyGo.js";import"./SvgIcon-CLrTMJzm.js";import"./styled-B_l5QWFX.js";import"./generateUtilityClasses-BiAO1vNq.js";import"./FlexGrid-C3XaaJ1g.js";import"./styled-CfhjJ1E8.js";import"./useTheme-C0BBsbhz.js";import"./useThemeProps-BLcls0bU.js";import"./useTheme-BWRXETY3.js";import"./Container-UgwXBVDq.js";import"./FlexBox-BeMizPY2.js";import"./Box-BDaEidkD.js";import"./Text-CT8Hsbh7.js";import"./Paper-CPACjhlu.js";import"./GridIcon-DjahIitO.js";import"./DataSetIcon-BKDYAjaN.js";import"./UserIcon-BBaOMras.js";import"./UserStatus-w2sRt1K6.js";import"./Menu-DMXuPVgm.js";import"./ButtonBase-84En7ikD.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./index-Cgu61Deq.js";import"./Popover-T-ssfcJQ.js";import"./utils-CYUpNy-w.js";import"./index-BXZwOzqJ.js";import"./Chip-Re9EdDqo.js";import"./createSvgIcon-CtD0QUEE.js";import"./TreeView-lTRLpyPE.js";import"./index-_4_hgnnR.js";import"./colorManipulator-CBCqAaIV.js";import"./UserProfileContent-BX1sU6gj.js";import"./OutlinedInput-BqMo3FkA.js";import"./InputBase-ADzsqtbQ.js";import"./GlobalStyles-BXgVjq2T.js";import"./index-mSkvzYyn.js";const Eo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[s,p]=l.useState(!1),c=i=>{x(i.currentTarget),p(!0)},b=()=>{p(i=>!i)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:s?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:s,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const yo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,yo as __namedExportsOrder,Eo as default};
