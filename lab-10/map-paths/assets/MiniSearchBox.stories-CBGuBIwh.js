import{r as m,a as b,j as e}from"./iframe-DeZonVVi.js";import{k as B,D as z}from"./DropdownButton-DuRkH6DZ.js";import{I as D,P as I}from"./AppInfoRow-DszWSP2X.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CfpElPeY.js";import"./SvgIcon-DjfvrmE-.js";import"./generateUtilityClass-p4bA1NX5.js";import"./styled-D6seg_B4.js";import"./generateUtilityClasses-CimY9LgW.js";import"./useTheme-B8jqmRVL.js";import"./Box-v58hSZ3Z.js";import"./Box-BAzk8OQb.js";import"./Container-D2kmBBme.js";import"./styled-DVC7FOfJ.js";import"./createStyled-CEXDcIRx.js";import"./useThemeProps-Lv7B2akS.js";import"./FlexBox-Bftp_nQc.js";import"./Stack-BnGRQa2r.js";import"./Typography-2PttXhpW.js";import"./Paper-DgtKsUqn.js";import"./useThemeProps-D9KZcNVu.js";import"./Text-C0mzIfB2.js";import"./AdapterDayjs-B7HxcRtC.js";import"./Modal-DYWZLwVU.js";import"./utils-9ncfeNkJ.js";import"./TransitionGroupContext-CH4PMzPU.js";import"./index-My-nnC9f.js";import"./resolveComponentProps-C0Utyfv9.js";import"./Popover-BzpzATK1.js";import"./TextField-B3W91zL-.js";import"./useFormControl-BoUxZNr0.js";import"./createSvgIcon-Dogjg4rl.js";import"./IconButton-rtDjgKCl.js";import"./ButtonBase-Be_gPS9s.js";import"./DialogContent-CA5BMy-i.js";import"./Button-BoCJN4PX.js";import"./Chip-ChphExPy.js";import"./DateTimePicker-YmZDXlg1.js";import"./Divider-BoEU1WqK.js";import"./Chip-Dh5OlQTt.js";import"./Divider-Bv35XldE.js";import"./TreeView-32B6HZUx.js";import"./Alert-Cuh3PtmZ.js";import"./LinearProgress-Bz6CuI0i.js";import"./Spinner-CxmGl9q1.js";import"./Dialog-4kFskmbY.js";import"./MapToggleButtonPresentational-6wGMhwir.js";import"./Remove-BzguW0rP.js";import"./LinkButton-DJ9gag9W.js";import"./TextField-Ga-r0b6K.js";import"./Switch-xXZfbisN.js";import"./DatePicker-cnuVO_nT.js";import"./Paper-BPgBVQZV.js";import"./ErrorFallback-N6coLDae.js";import"./ErrorFallbackText-JEgg_M8U.js";import"./ErrorFallbackWrapper-BNRKlR7p.js";import"./Brand-5Pvd6-Ps.js";import"./Edit-Bh-DAluS.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,ko={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
