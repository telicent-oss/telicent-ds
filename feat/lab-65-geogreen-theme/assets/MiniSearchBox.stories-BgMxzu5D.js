import{r as m,a as b,j as e}from"./iframe-CAVshkuv.js";import{h as B,I as z,D,P as I}from"./DropdownButton-9w3rAX6T.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DJgOmEVN.js";import"./createSvgIcon-B3EaAiNw.js";import"./generateUtilityClass-jc-dHuJ-.js";import"./styled-CEs6WI9Z.js";import"./generateUtilityClasses-PgfeV1Wq.js";import"./useTheme-ATZows8q.js";import"./Box-DLtVExO8.js";import"./Box-C4yeY-00.js";import"./Container-COrfX9qv.js";import"./styled-DmB_YMuy.js";import"./createStyled-BEuIMvDB.js";import"./useThemeProps-C0hUlt40.js";import"./Stack-aumhO8Vb.js";import"./Typography-B1Np1v7N.js";import"./Paper-BY4MSiKk.js";import"./useThemeProps-KzD3lSay.js";import"./Text-zn7-gcNn.js";import"./AdapterDayjs-DLp8STlk.js";import"./Modal-q8qVtJkQ.js";import"./utils-CL8D0dFT.js";import"./TransitionGroupContext-mvKX0Qc4.js";import"./index-Bfg7eB2H.js";import"./resolveComponentProps-CK8UMYC2.js";import"./TextField-D-S9QRzG.js";import"./useFormControl-CbU4OzAW.js";import"./IconButton-BeeGNNdb.js";import"./ButtonBase-L_tow8ks.js";import"./DialogContent-DShAFksA.js";import"./Button-CdHIDFCs.js";import"./Chip-DGUVdb4L.js";import"./DateTimePicker-C-jQ5Uw8.js";import"./Divider-BzwQ7r6O.js";import"./Chip-CD6y_O1F.js";import"./Divider-DI0qbv1g.js";import"./TreeView-G_WzO7bU.js";import"./Close-ZjhlHLtp.js";import"./LinearProgress-AOvTTCYa.js";import"./Spinner-aO3iJras.js";import"./Dialog-BzvgW_1y.js";import"./MapToggleButtonPresentational-Dh_eY9kA.js";import"./Remove-CPj-DoGK.js";import"./TextField-De73yqc1.js";import"./Switch-B0vd6s4C.js";import"./DatePicker-Opun4efj.js";import"./LinkButton-UDbAGZRZ.js";import"./Paper-QK8zw_qk.js";import"./ErrorFallback-BRmu4a9D.js";import"./ErrorFallbackText-C8zJKlqc.js";import"./ErrorFallbackWrapper-Dzt70zLO.js";import"./Brand-BuFxs41G.js";import"./constants-Bdme3Adm.js";import"./Edit-BJwA-2_m.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Ao={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=R(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=i=>{T(i.currentTarget),s(!0)},x=()=>{s(i=>!i)};return b("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(z,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
