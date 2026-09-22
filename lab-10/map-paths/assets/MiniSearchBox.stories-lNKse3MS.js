import{r as m,a as b,j as e}from"./iframe-wwyKJVT7.js";import{k as B,D as z}from"./DropdownButton-BjR4G6c6.js";import{I as D,P as I}from"./AppInfoRow-DD0pDyG_.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BJUhZHXy.js";import"./SvgIcon-CUVs1lE1.js";import"./generateUtilityClass-CkoJfXzB.js";import"./styled-LpRxHRpP.js";import"./generateUtilityClasses-lZioDJSU.js";import"./useTheme-fWgDsTlF.js";import"./Box-BfkY0LoG.js";import"./Box-CvHLitPM.js";import"./Container-Ex8awo5l.js";import"./styled-CqLf-K_6.js";import"./createStyled-7rACZg1S.js";import"./useThemeProps-DGz7F6m3.js";import"./FlexBox-PSVLjaHH.js";import"./Stack-DkIolbKj.js";import"./Typography-KsMZ-Lzq.js";import"./Paper-Ty8OBP7-.js";import"./useThemeProps-6ff9_uQw.js";import"./Text-Cs_t5jTe.js";import"./AdapterDayjs-DLuz1KZP.js";import"./Modal-FJt4lU_X.js";import"./utils-De2QkNKz.js";import"./TransitionGroupContext-Ci1yj1nx.js";import"./index-Bc6yxq3M.js";import"./resolveComponentProps-Tez3FZ9N.js";import"./Popover-ad1rGmx0.js";import"./TextField-DQEmSFXz.js";import"./useFormControl-Bu5lKDwq.js";import"./createSvgIcon-Bca1zsRN.js";import"./IconButton-DAUWwzIO.js";import"./ButtonBase-ZfxRSw2y.js";import"./DialogContent-B9FHsown.js";import"./Button-BUB-REPY.js";import"./Chip-dWFWXs2g.js";import"./DateTimePicker-CCwiql_t.js";import"./Divider-CgD_nbzY.js";import"./Chip-BBcf24H1.js";import"./Divider-DvGORPwC.js";import"./TreeView-BUpBgZFV.js";import"./Alert-BSE5AHq1.js";import"./LinearProgress-rfUNUhKS.js";import"./Spinner-tbj581ml.js";import"./Dialog-BtzheIZz.js";import"./MapToggleButtonPresentational-DIhML7LJ.js";import"./Remove-BOsHTnyW.js";import"./LinkButton-tlP8KO0e.js";import"./TextField-DzD39lVx.js";import"./Switch-DnCT64eH.js";import"./DatePicker-C6MhubZW.js";import"./Paper-K6NL7s7r.js";import"./ErrorFallback-SJMDDmk_.js";import"./ErrorFallbackText-CQHNy6L3.js";import"./ErrorFallbackWrapper-C_Ne2lSR.js";import"./Brand-Bn9laiH-.js";import"./Edit-CBu4FngS.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,ko={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
