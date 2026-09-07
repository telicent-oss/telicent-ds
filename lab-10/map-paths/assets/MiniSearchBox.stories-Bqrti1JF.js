import{r as m,a as b,j as e}from"./iframe-ciw1KLRs.js";import{i as B,D as z}from"./DropdownButton-DnxPQZL5.js";import{I as D,P as I}from"./AppInfoRow-Cm2LKcgP.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Faf48ldY.js";import"./SvgIcon-DTc-5gfq.js";import"./generateUtilityClass-Cq12-ors.js";import"./styled-C2eEG51T.js";import"./generateUtilityClasses-mmv1qYeK.js";import"./useTheme-BHgtQyQE.js";import"./Box-HbuxBumj.js";import"./Box-902PeKhJ.js";import"./Container-B4cr1y6P.js";import"./styled-IIpvbrdl.js";import"./createStyled-MdD6v-m0.js";import"./useThemeProps-CD771-QY.js";import"./FlexBox-CDrP42BZ.js";import"./Stack-BsqiUcB-.js";import"./Typography--d6z-ax-.js";import"./Paper-8D9ezffr.js";import"./useThemeProps-CifS_No0.js";import"./Text-BL5BnwYw.js";import"./AdapterDayjs-O0yRhyo9.js";import"./Modal-BfMSqNIi.js";import"./utils-CidoV_y6.js";import"./TransitionGroupContext-BaiKyvyF.js";import"./index-BpPfUxeP.js";import"./resolveComponentProps-B0NCZEz3.js";import"./Popover-DG-knyjb.js";import"./TextField-pGEePhF0.js";import"./useFormControl-BblJSTXJ.js";import"./createSvgIcon-BDEo2c1Q.js";import"./IconButton-BMVls5k1.js";import"./ButtonBase-ClETMG4i.js";import"./DialogContent-1fvduG_D.js";import"./Button-CDrOWbr-.js";import"./Chip-PFEXkFqS.js";import"./DateTimePicker-Bj6EpZ10.js";import"./Divider-CjkQD9g8.js";import"./Chip-DC0m9kxe.js";import"./Divider-CNdMEHKo.js";import"./TreeView-BFv2UIjz.js";import"./Alert-BIf5zh0i.js";import"./LinearProgress-DL5qgfW7.js";import"./Spinner-DiZv0D1w.js";import"./Dialog-CL0RDkI6.js";import"./MapToggleButtonPresentational-BuqOJVfe.js";import"./Remove-udeFhnPg.js";import"./LinkButton-vyYCYFuJ.js";import"./TextField-BiumEcKM.js";import"./Switch-BuYUgYFl.js";import"./DatePicker-CS8TkJd8.js";import"./Paper-D5KjIdWZ.js";import"./ErrorFallback-DCZhT-vP.js";import"./ErrorFallbackText-CwHlYFUh.js";import"./ErrorFallbackWrapper-DP0a9Fbv.js";import"./Brand-BPQCwrjg.js";import"./constants-UR64nFDG.js";import"./Edit-Cef1b_05.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Co={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=a=>{T(a.currentTarget),s(!0)},x=()=>{s(a=>!a)};return b("div",{children:[e(B,{...i,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var u,w,P;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,O,E,f,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const jo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,jo as __namedExportsOrder,Co as default};
