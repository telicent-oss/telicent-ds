import{r as m,a as b,j as e}from"./iframe-lbVyLo9M.js";import{h as B,D as z}from"./DropdownButton-DodwJLhq.js";import{I as D,P as I}from"./AppInfoRow-COyx2En4.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BYJvLZx1.js";import"./SvgIcon-BhjTKujD.js";import"./generateUtilityClass-mLX-m29y.js";import"./styled-thNUQRPl.js";import"./generateUtilityClasses-DGf4tbvL.js";import"./useTheme-CLkEv95-.js";import"./Box-C83oWY3G.js";import"./Box-DlYuhDE8.js";import"./Container-DLPgUEUh.js";import"./styled-DCbo4I3z.js";import"./createStyled-lowEfwXB.js";import"./useThemeProps-At40PQ24.js";import"./FlexBox-NMVzPqDV.js";import"./Stack-CcM8nxhu.js";import"./Typography-7qJHmYWv.js";import"./Paper-D-csFAd3.js";import"./useThemeProps-CR3q6hIr.js";import"./Text-GZhHB46q.js";import"./AdapterDayjs-Bh746Glk.js";import"./Modal-DR8JHd-z.js";import"./utils-CtBn2Om0.js";import"./TransitionGroupContext-CHRtULwj.js";import"./index-DAZgcoYU.js";import"./resolveComponentProps-Dc14A0Xg.js";import"./Popover-BdniOjWh.js";import"./TextField-VYpRKwSw.js";import"./useFormControl-CZxL2IaN.js";import"./createSvgIcon-V9v0b-rh.js";import"./IconButton-D9SltU1Q.js";import"./ButtonBase-CvSf6vSn.js";import"./DialogContent-CfoP2HP5.js";import"./Button-Bf8_SP8e.js";import"./Chip-CPeHQbdq.js";import"./DateTimePicker-DtUwUzaw.js";import"./Divider-DHhQsNL_.js";import"./Chip-Cs6bMZDw.js";import"./Divider-BOL12Syp.js";import"./TreeView-DEjBOrW7.js";import"./Alert-C83Wtki0.js";import"./LinearProgress-D1WH3K-w.js";import"./Spinner-CX2KmoCf.js";import"./Dialog-BJNkPgfD.js";import"./MapToggleButtonPresentational-BtIuW8W8.js";import"./Remove-qUnvA5Qg.js";import"./LinkButton-XIf9yczH.js";import"./TextField-Z8WmXcEs.js";import"./Switch-vGqTkiql.js";import"./DatePicker-NdtGOenD.js";import"./Paper-BJ_QnuCU.js";import"./ErrorFallback-DSQ6d8ue.js";import"./ErrorFallbackText-CXIKZcAb.js";import"./ErrorFallbackWrapper-DbmuJJ7f.js";import"./Brand-BVn3cdyI.js";import"./constants-BK6Qtb1C.js";import"./Edit-DcejEQXi.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Co={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
