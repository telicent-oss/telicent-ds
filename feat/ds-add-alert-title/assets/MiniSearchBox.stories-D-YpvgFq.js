import{r as m,a as b,j as e}from"./iframe-lqtTyPDV.js";import{h as B,I as z,D,P as I}from"./DropdownButton-BiQZTsSN.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CCWXRARu.js";import"./createSvgIcon-pD-T4X64.js";import"./generateUtilityClass-Nor538iS.js";import"./styled-BNSlxa3g.js";import"./generateUtilityClasses-Dcld8p7_.js";import"./useTheme-BKtc1luz.js";import"./Box-VVrcLiMQ.js";import"./Box-D9fQMR-m.js";import"./Container-CXWOjLTi.js";import"./styled-PDD6VUwM.js";import"./createStyled-DEZqOrhE.js";import"./useThemeProps-ByihHSEs.js";import"./Stack-CRGQbSIw.js";import"./Typography-JvRod9_h.js";import"./Paper-CAMM_sGP.js";import"./useThemeProps-bXg8jihE.js";import"./Text-qBJvQAbh.js";import"./AdapterDayjs-BxMPdu73.js";import"./Modal-C2iMaJrT.js";import"./utils-CDZsqiOr.js";import"./TransitionGroupContext-CP4QTGTc.js";import"./index-Ct7m0A3p.js";import"./resolveComponentProps-D9ysefdV.js";import"./TextField-DU50OXKL.js";import"./useFormControl-BaHyTPGQ.js";import"./IconButton-CFe2D2CK.js";import"./ButtonBase-CG2-1ya1.js";import"./DialogContent-DminlgLj.js";import"./Button-ecopQR6Q.js";import"./Chip-b0N7Bs90.js";import"./DateTimePicker-DkGfB0lr.js";import"./Divider-Sgzys822.js";import"./Chip-B0KPLxd0.js";import"./Divider-CizCOsrH.js";import"./TreeView-Cx3DBEy0.js";import"./Close-B_FscGLy.js";import"./LinearProgress-D91QGpmj.js";import"./Spinner-CoTb4xM3.js";import"./Dialog-B0EJL6jv.js";import"./MapToggleButtonPresentational-BoxmLCzM.js";import"./Remove-BP8dJaea.js";import"./TextField-BiRVulas.js";import"./Switch-UYcRIQvQ.js";import"./DatePicker-Hg41mnHR.js";import"./LinkButton-B5iGNGjh.js";import"./Paper-Cg-Z_8b0.js";import"./ErrorFallback-b5W5Az-f.js";import"./ErrorFallbackText-C_HPDrVM.js";import"./ErrorFallbackWrapper-zYtUSZTF.js";import"./Brand-D_RHUJn0.js";import"./constants-DHZNsyg3.js";import"./Edit-B-6C9sjP.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Ao={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const Lo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Lo as __namedExportsOrder,Ao as default};
