import{a as z,j as e}from"./DefaultPropsProvider-DW_T1ksU.js";import{r as l}from"./index-Du_IP5cC.js";import{f as m,w as I,u as h}from"./index-3Lpd23TA.js";import{M as B}from"./MiniSearchBox-BmrmxABd.js";import{P as T}from"./Popover-BHRsFN_r.js";import{I as A}from"./TelicentMark-CfEBkPGs.js";import{D}from"./UserProfile-X2kTYwXJ.js";import"./jsx-runtime-Dwss98Nb.js";import"./DataSetIcon-CVKUnWQK.js";import"./SvgIcon-lXQO74Uo.js";import"./styled-CO2r5wNb.js";import"./generateUtilityClasses-CBYfpbff.js";import"./UserIcon-D8df-UA-.js";import"./ButtonBase-k7dNn2-f.js";import"./TransitionGroupContext-DmssZhy-.js";import"./index-BqGG8BWX.js";import"./Popover-DAcwxwo2.js";import"./utils-BoXeEJVK.js";import"./index-DtoIJoF2.js";import"./useTheme-CDFymf_6.js";import"./useTheme-B6WcV9Bx.js";import"./Paper-BMQlMfdy.js";import"./UserStatus-DkY_p60F.js";import"./FlexGrid-C-avbzk2.js";import"./styled-BGngFW9-.js";import"./useThemeProps-Crm_2MCc.js";import"./Box-BBaP0q4U.js";import"./Text-DRT_rUFN.js";import"./Chip-DdEDmb-F.js";import"./createSvgIcon-DqkZKPix.js";import"./TreeView-CUjnqCrH.js";import"./index-Df2kh431.js";import"./colorManipulator-LZ4hLfs5.js";import"./UserProfileContent-D76CJzOi.js";import"./FlexBox-BEh4lK-b.js";import"./Container-Q3w3iETf.js";import"./OutlinedInput-CYvjJy4Y.js";import"./InputBase-CqWbuVRK.js";import"./GlobalStyles-B1YhZfY3.js";import"./index-ans_9-if.js";const So={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:i,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var d,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const fo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,fo as __namedExportsOrder,So as default};
