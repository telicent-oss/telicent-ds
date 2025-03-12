import{a as z,j as e}from"./DefaultPropsProvider-ZjhccZnB.js";import{r as l}from"./index-BBkUAzwr.js";import{f as m,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-CbhQBWkV.js";import{P as T}from"./Popover-Dnj75uG4.js";import{I as A}from"./FeatureMap-DMFgst4n.js";import{D}from"./UserProfile-rIr5EAoy.js";import"./jsx-runtime-BwZVo4Wn.js";import"./Divider-Cxgqdvhr.js";import"./SvgIcon-0MOxWfTP.js";import"./styled-BT4RjJzR.js";import"./generateUtilityClasses-Ope_UxWr.js";import"./FlexGrid-Y8kMg0vc.js";import"./styled-DYky2rJa.js";import"./useTheme-BAsjQMSl.js";import"./useThemeProps-BAuVkQ7A.js";import"./useTheme-DIIM1Wcn.js";import"./Container-CDaxYc3T.js";import"./FlexBox-CHX3w-Ff.js";import"./Box-DVpyV88R.js";import"./Text-Chcp7No1.js";import"./Paper-Cul9nzd-.js";import"./DataSetIcon-BOfCbmrC.js";import"./UserIcon-B6OSrQE1.js";import"./Chip-DHeIEnT7.js";import"./createSvgIcon-DQcKRcx_.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./ButtonBase-GdOU_fqa.js";import"./TreeView-DJcHSySb.js";import"./utils-C6E22oQ1.js";import"./index-BXZwOzqJ.js";import"./index-_4_hgnnR.js";import"./colorManipulator-zO1DXvwL.js";import"./UserProfileContent-BjE7fYQQ.js";import"./Popover-rSPSjYHH.js";import"./iframe-CtWVBExs.js";import"../sb-preview/runtime.js";import"./UIThemeProvider-HfRNRArn.js";import"./index-B47g9DW4.js";import"./LinearProgress-DD-ZDPzk.js";import"./Button-B_9AedaA.js";import"./Button-DG02f22Q.js";import"./Card-BHi_PHH0.js";import"./CardActions-C035-885.js";const yo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[s,p]=l.useState(!1),c=i=>{x(i.currentTarget),p(!0)},b=()=>{p(i=>!i)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:s?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:s,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const Bo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Bo as __namedExportsOrder,yo as default};
