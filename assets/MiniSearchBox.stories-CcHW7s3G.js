import{a as z,j as e}from"./DefaultPropsProvider-D0TKvr2r.js";import{r as m}from"./index-BBkUAzwr.js";import{f as l,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-Bjz7I5yU.js";import{P as T}from"./Popover-BmuZ8Ngm.js";import{I as A}from"./FeatureMap-D06DrEfu.js";import{D}from"./UserProfile-CtzeDZHV.js";import"./jsx-runtime-BwZVo4Wn.js";import"./Divider-D5n9DrrQ.js";import"./SvgIcon-DhTOb2oP.js";import"./styled-C_kIfZUr.js";import"./generateUtilityClasses-BJi7wJCo.js";import"./FlexGrid-DdKVSySu.js";import"./styled-DYuO2v9q.js";import"./useTheme-Dxx0vh99.js";import"./useThemeProps-PRgA7wjr.js";import"./useTheme-CEroDfaK.js";import"./Container-DJkxIbTb.js";import"./FlexBox-DGOTTOBh.js";import"./Box-CeeIJm_P.js";import"./Typography-CYbZWU4W.js";import"./Paper-CMbjB9GA.js";import"./DataSetIcon-DRNY1TGD.js";import"./UserIcon-CjSGJTuU.js";import"./Text-UfnIhWrZ.js";import"./Chip-CAB14pnD.js";import"./createSvgIcon-vyKw-wJg.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./ButtonBase-BBhFMBvz.js";import"./TreeView-DaBv5O9j.js";import"./utils-rL4B1Bvl.js";import"./index-BXZwOzqJ.js";import"./index-_4_hgnnR.js";import"./colorManipulator-CMgB7LGh.js";import"./UserProfileContent-ykWcPCsh.js";import"./Popover-Bh0RZbgT.js";import"./iframe-CXBa8lLi.js";import"../sb-preview/runtime.js";import"./UIThemeProvider-CgZ2qZ68.js";import"./ThemeProvider-A6jUefSh.js";import"./index-DQBVfwdU.js";import"./LinearProgress-lWF5JMRG.js";import"./Button-DsRoEJUk.js";import"./Button-Da6qIdfX.js";import"./Card-66pTiq-p.js";import"./CardActions-CwcmbZpP.js";import"./ErrorFallback-6MQAUkRQ.js";import"./ErrorFallbackText-BFmQh512.js";import"./ErrorFallbackWrapper-Dmy6f-WG.js";const Io={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=m.useState(null),[s,p]=m.useState(!1),c=i=>{x(i.currentTarget),p(!0)},b=()=>{p(i=>!i)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:s?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:s,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const To=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,To as __namedExportsOrder,Io as default};
