import{r as m,a as b,j as e}from"./iframe-pRHhOQg2.js";import{i as B,D as z}from"./DropdownButton-BhUulX2F.js";import{I as D,P as I}from"./AppInfoRow-Bh0geM1J.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B_ujPWv_.js";import"./SvgIcon-BETWM0sA.js";import"./generateUtilityClass-BCADfncv.js";import"./styled-BT5czdOb.js";import"./generateUtilityClasses-FW_hjQkZ.js";import"./useTheme-Pj73We2K.js";import"./Box-BCY9iEzw.js";import"./Box-DtDcNTqo.js";import"./Container-B6BSNzBA.js";import"./styled-CPqvLnSt.js";import"./createStyled-CUHy6POj.js";import"./useThemeProps-iiZ4il65.js";import"./FlexBox-CVJnzuz0.js";import"./Stack-DQDETrC8.js";import"./Typography-D0LmHXWH.js";import"./Paper-jmBz9zYy.js";import"./useThemeProps-CGsmMNPE.js";import"./Text-CyftVFXd.js";import"./AdapterDayjs-v8geY8Yz.js";import"./Modal-DBc2l9M6.js";import"./utils-BcK75nLH.js";import"./TransitionGroupContext-BUjCANtX.js";import"./index-BZTrQaHy.js";import"./resolveComponentProps-Bmj0YTdO.js";import"./Popover-D8iN4GZw.js";import"./TextField-DHBYzqm_.js";import"./useFormControl-InOv9m2U.js";import"./createSvgIcon-BDR8vdZT.js";import"./IconButton-CvVfQwzZ.js";import"./ButtonBase-V2s46bUx.js";import"./DialogContent-CTQp3qrS.js";import"./Button-CPtCkVQU.js";import"./Chip-DDvACIff.js";import"./DateTimePicker-Cn_CbG0g.js";import"./Divider-D6agCD3x.js";import"./Chip-gnzR_yJR.js";import"./Divider-CVsgqjKK.js";import"./TreeView-Kik_R-ES.js";import"./Alert-DecaHlaz.js";import"./LinearProgress-C4VBChXn.js";import"./Spinner-C0vudGLr.js";import"./Dialog-Bcf-NoY1.js";import"./MapToggleButtonPresentational-fmHFE_FL.js";import"./Remove-DUvkPlWX.js";import"./LinkButton-x6CuZkTL.js";import"./TextField-CBpcQn2c.js";import"./Switch-DhAT4IM_.js";import"./DatePicker-D9GXXepP.js";import"./Paper-jV6pjJ0C.js";import"./ErrorFallback-CaX2CL1g.js";import"./ErrorFallbackText-C6J48uKa.js";import"./ErrorFallbackWrapper-y78ya1pb.js";import"./Brand-DOlsYGQL.js";import"./constants-C264WvBp.js";import"./Edit-wsLz-jz3.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Co={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=a=>{T(a.currentTarget),s(!0)},x=()=>{s(a=>!a)};return b("div",{children:[e(B,{...i,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
