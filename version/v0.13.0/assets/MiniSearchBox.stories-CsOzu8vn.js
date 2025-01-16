import{a as z,j as r}from"./DefaultPropsProvider--lJPAVOf.js";import{r as l}from"./index-Du_IP5cC.js";import{f as m,w as I,u as h}from"./index-3Lpd23TA.js";import{M as B}from"./MiniSearchBox-BZw0yURu.js";import{P as T}from"./Popover-Cwq577Yx.js";import{I as A}from"./TelicentMark-BfOjK1gM.js";import{D}from"./UserProfile-CnsTjZhi.js";import"./jsx-runtime-Dwss98Nb.js";import"./DataSetIcon-DtNNSIik.js";import"./SvgIcon-DJ7HZSEs.js";import"./styled-BSeuGzyp.js";import"./generateUtilityClasses-MMAG8yM0.js";import"./UserIcon-VQcL6Cr3.js";import"./styled-DBIzsiFI.js";import"./useThemeProps-CgZ-XvV1.js";import"./useTheme-DqTbxjpC.js";import"./UserStatus-aWKV4nC1.js";import"./useTheme-tLVpAwB4.js";import"./Menu-CIfbVCM2.js";import"./ButtonBase-DOatf38x.js";import"./TransitionGroupContext-DmssZhy-.js";import"./index-DATKX0av.js";import"./Popover-DS4PCjva.js";import"./utils-CRH9CwAG.js";import"./index-DtoIJoF2.js";import"./resolveComponentProps-DNRE6Age.js";import"./Paper-pczEKBOb.js";import"./Text-CJDA79D9.js";import"./UserProfileContent-C0M4KfJU.js";import"./createSvgIcon-BEbM4De7.js";import"./Chip-B4tbm-ra.js";import"./TreeView-C9a-TDyP.js";import"./index-Df2kh431.js";import"./colorManipulator-I8CETreN.js";import"./Container-UA9HJrBd.js";import"./OutlinedInput-BIKM2eh8.js";import"./InputBase-BORzaZFu.js";import"./GlobalStyles-Cy-7R47n.js";import"./index-ans_9-if.js";const Po={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const e=I(a);await h.type(e.getByRole("searchbox"),"River Nile"),await h.click(e.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[e,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[r(B,{...a,onTogglePopOver:c,endIcon:r(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:r(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),r(T,{id:"search-popover",open:i,anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var d,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const So=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,So as __namedExportsOrder,Po as default};
