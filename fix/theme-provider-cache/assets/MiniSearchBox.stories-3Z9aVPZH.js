import{a as z,j as e}from"./DefaultPropsProvider-ZTfV1Zta.js";import{r as l}from"./index-BBkUAzwr.js";import{f as m,w as I,u as h}from"./index-ZIyp8o0e.js";import{M as B}from"./MiniSearchBox-BA1rdCpD.js";import{P as T}from"./Popover-C2trNH_s.js";import{I as A}from"./FeatureMap-CzXANP9p.js";import{D}from"./UserProfile-pLaLHjzb.js";import"./jsx-runtime-BwZVo4Wn.js";import"./Divider-U0HyYZdi.js";import"./SvgIcon-DM7CEwi3.js";import"./styled-jMWuTdIG.js";import"./generateUtilityClasses-DD2dCBy1.js";import"./FlexGrid-CLKmKS3u.js";import"./styled-NI2V6uj_.js";import"./useTheme-BusmB1QR.js";import"./useThemeProps-BdYmkKoE.js";import"./useTheme-DUKUC1WO.js";import"./Container-C8J4gsN5.js";import"./FlexBox-DADmAnZF.js";import"./Box-DBuGxpzg.js";import"./Text-CGNagbCi.js";import"./Paper-BtR36xUR.js";import"./DataSetIcon-CHIrb2GC.js";import"./UserIcon-DmjklXFK.js";import"./Chip-Bi37CbO4.js";import"./createSvgIcon-B0Qv8yy1.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./ButtonBase-B36byFIM.js";import"./TreeView-lHYan-nM.js";import"./utils-4IBA19w2.js";import"./index-BXZwOzqJ.js";import"./index-_4_hgnnR.js";import"./colorManipulator-CwxWA58Q.js";import"./UserProfileContent-B92njon_.js";import"./Popover-CxoUVLIl.js";import"./iframe-BwjqXAZ9.js";import"../sb-preview/runtime.js";import"./UIThemeProvider-BXfJmZRt.js";import"./index-A9x96Awu.js";import"./LinearProgress-ChpUz72G.js";import"./Button-D3scS8V2.js";import"./Button-DC-CYhQc.js";import"./Card-BfV-nf9i.js";import"./CardActions-C19l4eM5.js";const yo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[s,p]=l.useState(!1),c=i=>{x(i.currentTarget),p(!0)},b=()=>{p(i=>!i)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:s?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:s,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
