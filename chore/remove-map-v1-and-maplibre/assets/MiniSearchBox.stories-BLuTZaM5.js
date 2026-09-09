import{r as m,a as b,j as e}from"./iframe-BSHZoLH0.js";import{i as B,D as z}from"./DropdownButton-DJdqotpZ.js";import{I as D,P as I}from"./AppInfoRow-RkbytSj0.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CHfoFH7k.js";import"./SvgIcon-DC5_2IrZ.js";import"./generateUtilityClass-93OEZURd.js";import"./styled-CmvYIxHZ.js";import"./generateUtilityClasses-Dmf-VZ7g.js";import"./useTheme-wykRndr8.js";import"./Box-DF0XtrAi.js";import"./Box-Bi27dI0Y.js";import"./Container-DSzlElAn.js";import"./styled-DpjO08Qt.js";import"./createStyled-CXLXU_b5.js";import"./useThemeProps-D1mqY05e.js";import"./FlexBox-Cic89pYt.js";import"./Stack-DL55RpSh.js";import"./Typography-B6wCg7xE.js";import"./Paper-u2F4-x87.js";import"./useThemeProps-BiMA9qcn.js";import"./Text-BTMH42VK.js";import"./AdapterDayjs-DtpCU4aK.js";import"./Modal-BI0OjZNh.js";import"./utils-CEnASBxq.js";import"./TransitionGroupContext-bIsVkF__.js";import"./index-CfPnIGXk.js";import"./resolveComponentProps-DF06A6lx.js";import"./Popover-D9PrNx1G.js";import"./TextField-D0AHhzbv.js";import"./useFormControl-CjQ9hJs3.js";import"./createSvgIcon-BAA291eo.js";import"./IconButton-BH6roq5J.js";import"./ButtonBase-DmGCS8gm.js";import"./DialogContent-sjLbqYOm.js";import"./Button-BGj1rfsC.js";import"./Chip-40aXZDOw.js";import"./DateTimePicker-yuJZFQX_.js";import"./Divider-D09lGavG.js";import"./Chip-BniXzfdZ.js";import"./Divider-BZJnezW1.js";import"./TreeView-CzzylW8x.js";import"./Alert-BrDYZj8C.js";import"./LinearProgress-Cgz4Xu1_.js";import"./Spinner-DYac5LQn.js";import"./Dialog-BeIaWLBv.js";import"./MapToggleButtonPresentational-D_VEx1TD.js";import"./Remove-Bso_SpPx.js";import"./LinkButton-DfD1itup.js";import"./TextField-D855Mpyf.js";import"./Switch-S5xN80Zo.js";import"./DatePicker-B_uUVeOn.js";import"./Paper-DYqddmBf.js";import"./ErrorFallback-DQXVOLvB.js";import"./ErrorFallbackText-DKNgRgr1.js";import"./ErrorFallbackWrapper-CVlp2bT8.js";import"./Brand-B-VTUx_1.js";import"./Edit-DszYU_yI.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,ko={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
