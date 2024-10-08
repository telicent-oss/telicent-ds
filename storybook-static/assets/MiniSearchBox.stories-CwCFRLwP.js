import{a as A,j as i}from"./DefaultPropsProvider-BtHbA0VU.js";import{r as p}from"./index-uubelm5h.js";import{f as c,w as M,u as m}from"./index-R3fZrLBo.js";import{M as f}from"./MiniSearchBox-CFyrqGTj.js";import{P as R}from"./Popover-Dnihhqin.js";import"./extends-EO7Nsyo1.js";import"./TelicentMark-CjEW6DD2.js";import"./styled-BYpVOPyr.js";import"./SvgIcon-BaDrUo6b.js";import"./generateUtilityClasses-BIknaJ37.js";import"./useTheme-D3IlMF1k.js";import"./useTheme-Ckz7wL11.js";import"./Container-nDHQPLDZ.js";import"./styled-BkWK7I8A.js";import"./useThemeProps-2Kac9Ors.js";import"./UserIcon-D68f8n6J.js";import"./index-DXqQCM1T.js";import"./Text-CgkSqo90.js";import"./Menu-CE8ciUHE.js";import"./ButtonBase-DCYB2nLY.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CB99OiCM.js";import"./Popover-CEasQiDS.js";import"./utils-C0stDFpQ.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-NyHP_ua9.js";import"./Paper-DC39T9uc.js";import"./DataSetIcon-Az5FxROx.js";import"./UserProfile-ShHjOo8U.js";import"./index-Bres9Iq4.js";import"./UserProfileContent-CT_pXXI-.js";import"./createSvgIcon-CveOJVlc.js";import"./UserStatus-cONgZgb9.js";import"./Chip-BY9InDlU.js";import"./TreeView-8vb6gFvO.js";import"./colorManipulator-CLgUjkf2.js";import"./InputBase-B2eGUWHQ.js";import"./GlobalStyles-BjGl2I2w.js";const wo={title:"Inputs/Search/MiniSearchBox",component:f,tags:["autodocs"],args:{onSearch:c(),onTogglePopOver:c()}},e={args:{placeholder:"Search"},play:async({canvasElement:n})=>{const r=M(n);await m.type(r.getByRole("searchbox"),"River Nile"),await m.click(r.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search",showDownArrowButton:!0},render:n=>{const[r,y]=p.useState(null),[B,s]=p.useState(!1),x=a=>{y(a.currentTarget),s(!0)},T=()=>{s(a=>!a)};return A("div",{children:[i(f,{...n,onTogglePopOver:x}),i(R,{id:"search-popover",open:B,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:T,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var l,h,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,d,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    showDownArrowButton: true
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
        <MiniSearchBox {...args} onTogglePopOver={openPopUp} />
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
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var w,P,S,O,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(S=(P=o.parameters)==null?void 0:P.docs)==null?void 0:S.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.description}}};const Po=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,t as WithDownArrow,Po as __namedExportsOrder,wo as default};
