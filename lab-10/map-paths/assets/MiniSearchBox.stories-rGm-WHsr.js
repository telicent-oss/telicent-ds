import{r as m,a as b,j as e}from"./iframe-CYeXSRCn.js";import{k as B,D as z}from"./DropdownButton-Bqbdc4Q1.js";import{I as D,P as I}from"./AppInfoRow-CAMu3Yom.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DgdKDg--.js";import"./SvgIcon-1lsXHHt1.js";import"./generateUtilityClass-CRJ1fUnr.js";import"./styled-Ch7TYyIp.js";import"./generateUtilityClasses-8aJfFmyf.js";import"./useTheme-C01aVLuh.js";import"./Box-B-xAxOdf.js";import"./Box-BL2kbC6f.js";import"./Container-Di2XLZDk.js";import"./styled-DHAnpyzb.js";import"./createStyled-BAXDNbou.js";import"./useThemeProps-zxRs09PI.js";import"./FlexBox-yPpBoTQ5.js";import"./Stack-YJQQ9jj8.js";import"./Typography-m86ksWAT.js";import"./Paper-CUHDivEI.js";import"./useThemeProps-CaCGsMmh.js";import"./Text-BrJzNAfR.js";import"./AdapterDayjs-C0uSp_M-.js";import"./Modal-Dvtocw5a.js";import"./utils-CkwS266W.js";import"./TransitionGroupContext-O-4sDslW.js";import"./index-Df4rPAmw.js";import"./resolveComponentProps-D0S80uWW.js";import"./Popover-C0_hs2rD.js";import"./TextField-CXdIwcSO.js";import"./useFormControl-QoKFw2_D.js";import"./createSvgIcon-Bg1pYGJE.js";import"./IconButton-CYyrSHuW.js";import"./ButtonBase-BtjCcquE.js";import"./DialogContent-_FhiVOAB.js";import"./Button-BSTFOQew.js";import"./Chip-DC_dEvmi.js";import"./DateTimePicker-iI1kKlBI.js";import"./Divider-BwUUxUUy.js";import"./Chip-DzPpf97O.js";import"./Divider-VlLlx1-K.js";import"./TreeView-hK-Zr8DT.js";import"./Alert-DI7B7ATA.js";import"./LinearProgress-tLf1McQP.js";import"./Spinner-CPAmDtKw.js";import"./Dialog-CwAPF42_.js";import"./MapToggleButtonPresentational-CxLzaM7Q.js";import"./Remove-ubGyGJQ1.js";import"./LinkButton-Cz3BzB8v.js";import"./TextField-CUXZxfyV.js";import"./Switch-C6_n0qq1.js";import"./DatePicker-Qsz_6cJq.js";import"./Paper-CyTJnt6J.js";import"./ErrorFallback-BPyngFVf.js";import"./ErrorFallbackText-C2TAg_HC.js";import"./ErrorFallbackWrapper-Bq_dmHdG.js";import"./Brand-ll5GJx6P.js";import"./Edit-B7Jljab-.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,ko={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const Co=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Co as __namedExportsOrder,ko as default};
