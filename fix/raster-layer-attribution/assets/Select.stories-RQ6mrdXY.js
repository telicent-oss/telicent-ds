import{a as o,b as c,r as L}from"./iframe-TzH9HoJB.js";import{o as D,B as Y}from"./UserProfileContent-DLDByR5F.js";import{P as H}from"./XIcon-DGixMYxC.js";import{B as n}from"./Box-DS3YN1ZG.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-OwbOqTSh.js";import"./clsx-B-dksMZM.js";import"./styled-Fi-PJMA2.js";import"./extendSxProp-BcuL-Nvl.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B0uhPIY5.js";import"./TransitionGroupContext-9gZwZNUS.js";import"./MapToggleButtonPresentational-DFyons0C.js";import"./Remove-DAQRFvaE.js";import"./createSvgIcon-CUXDMF07.js";import"./SvgIcon-HYlfJc8_.js";import"./IconButton-PY87z89E.js";import"./Paper-YFzx4ddw.js";import"./Brand-BlQ8b-ry.js";import"./Typography-zeuNrRSn.js";import"./IconButton-Mzh_sPPf.js";import"./LinkButton-Du-kxWOQ.js";import"./AppInfoRow-BV_aa5lk.js";import"./_IconPopover-hWyolf0i.js";import"./Box-Bo6gauv7.js";import"./Popover-DX_paYG2.js";import"./utils-DAXs4UmQ.js";import"./index-C5JqvuCX.js";import"./index-CoaIpLkh.js";import"./Modal-DHYwyE7o.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BSzFeukN.js";import"./useSlotProps-CB65AuIn.js";import"./InfoIcon-CuaXepFp.js";import"./FlexBox-DRW8tIce.js";import"./Stack-VXbRlDW3.js";import"./styled-Detq6LXO.js";import"./createStyled-DpILs1eO.js";import"./useThemeProps-C-ryN40T.js";import"./Text-Wjw9mAbu.js";import"./AppSettings-BzU83vRR.js";import"./CogIcon-K9_cAB5b.js";import"./Badge-682oFqE8.js";import"./Badge-BFQfTkfR.js";import"./Chip-CTmkkGRh.js";import"./Chip-rF6T4rUT.js";import"./Divider-DBOrLmFb.js";import"./Divider-nCna6h_E.js";import"./dividerClasses-yHkBJDJd.js";import"./ThemeSwitchRow-CoAtHhZA.js";import"./Skeleton-YZOMWl5n.js";import"./Skeleton-2TdWFO3K.js";import"./TextField-3lnVRzgq.js";import"./useFormControl-B5BL4Dkn.js";import"./FormControl-CCq8g0Qj.js";import"./ListContext-C1CE2G2k.js";import"./useControlled-DLY0GURg.js";import"./FormHelperText-8S5YkPy6.js";import"./MenuItem-CHk81Hva.js";import"./ExpandMoreIcon-CpVvmAB8.js";import"./ListItem-CLOQjQZa.js";import"./Toolbar--ZbXsggf.js";import"./Close-DpJbrle0.js";import"./Popper-DAbEjCJA.js";import"./FormControlLabel-C0_yDqIQ.js";import"./Edit-qL9wNaAs.js";import"./SvgIcon-ak9zVNAx.js";import"./TableRow-5QaVWAOF.js";import"./TableCell-B3sIJQHc.js";import"./TreeView-Sl1KgHox.js";import"./useThemeProps-CTGgwm9-.js";import"./index-D3hKYTw4.js";import"./Collapse-D2Q2PYDS.js";import"./Dialog-Yb-veoJ6.js";import"./DialogContent-9AxQB7IK.js";import"./Alert-BhRCq8N3.js";import"./useSlot-CNLXZk78.js";import"./LinearProgress-W8XZFG7o.js";import"./LinearProgress-M-9cHjHE.js";import"./Spinner-kZ2y9DVo.js";import"./CircularProgress-HVwFS8ym.js";import"./TextField-jO_QGFZE.js";import"./FormControl-DsF2nchf.js";import"./FormHelperText-C1B-jnvM.js";import"./LabeledSwitch-B_k81Zfn.js";import"./Switch-BRrjrBxW.js";import"./Switch-LinUY1Bf.js";import"./RadioGroup-BQTXXTjr.js";import"./Container-8Zbg9EiI.js";import"./ToggleButton-Db5rHd7I.js";import"./ToggleButton-BYiCWuVK.js";import"./ToggleButtonGroup-CiG3xB0s.js";import"./MenuItem-C17Q6CqC.js";import"./Tabs-C87aF2xa.js";import"./AccordionSummary-DLRaYHNg.js";import"./Paper-DmuX9rfV.js";import"./ErrorFallback-BBjYL2F9.js";import"./ErrorFallbackText-CgArZ3nG.js";import"./ErrorFallbackWrapper-BvE4laRa.js";const a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Lo={title:"Inputs/Select",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
A lightweight dropdown component built on Mui's \`<Select>\` with our design-system theming and overrides. It supports both controlled **and** uncontrolled modes: 

- **Controlled mode:** Pass \`value\` and  \`onChange\` to fully drive the selected value from the parent state.
- **Uncontrolled mode:** Pass \`defaultValue\` and \`onChange\` but omit \`value\` to let the component manage its own state after mount.

---

### When & How to use it 
 - **Forms & Filters:** use it in any place you need the user to choose one value from a short list (status picker, category filter, settings panel).

 - **No Internal State:** it has no internal state, you'll need to pass \`value\` and \`onChange\`.

 - **Label is optional:** only renders the label if you pass the \`label\` prop. You can choose to omit the prop for a cleaner label-free form.
 
 - **Min Width:** It has a min width by default that can be customized by using the \`width\` prop.

 - **Footer slot:** pass the optional \`footer\` prop to render an action below the options (e.g. a "+ Create new …" button), separated by a divider. The footer is **not** selectable as a value. Use the render-function form \`footer={({ closeMenu }) => …}\` to dismiss the dropdown from your handler (see the **WithFooter** story), or pass a plain node when you don't need to close the menu yourself.


\`\`\`jsx
<Select 
  label="Select an option"
  value={selectedValue}
  id="select-demo"
  options={options}
  width={300}
  onChange={handleChange}
  disabled={false}
/>
\`\`\`
`}},id:"select-default",ariaLabel:"select-dropdown",options:a},decorators:e=>o(n,{sx:{margin:"auto"},children:e()})},V=({...e})=>{const[t,F]=L.useState("");return o(D,{color:"primary",label:"Select Option",value:t,onChange:z=>{F(z.target.value)},options:a,id:"selected-demo",...e})},s={args:{label:"Select an option",value:"option1",id:"select-disabled",options:a,width:300,onChange:()=>{}}},l={args:{label:"Select an option",value:"none",id:"select-disabled",options:a,width:300,onChange:()=>{},disabled:!0}},p={args:{label:"Select an option",value:"option2",id:"select-disabled",options:a,width:500,onChange:()=>{}}},d={args:{value:"option2",id:"select-disabled",options:a,onChange:()=>{}}},r={render:e=>o(V,{...e}),args:{width:250,disabled:!1}},K=[{value:"mcga",label:"Maritime Coastguard Agency"},{value:"ukho",label:"UK Hydrographic Office"},{value:"imo",label:"IMO"}],j={dataset:{description:"A curated collection of records.",available:!0},model:{description:"A trained ML model or checkpoint.",available:!0},pipeline:{description:"A scheduled data-processing job.",available:!1},notebook:{description:"An interactive analysis document.",available:!1}},q=[{value:"dataset",label:"Dataset"},{value:"model",label:"Model"},{value:"pipeline",label:"Pipeline"},{value:"notebook",label:"Notebook"}].map(e=>({...e,disabled:!j[e.value].available})),i={args:{label:"Resource type",value:"dataset",width:320,onChange:()=>{},options:q,renderOption:e=>{const t=j[e.value];return c(n,{sx:{display:"flex",flexDirection:"column",gap:.25,py:.5,width:"100%"},children:[c(n,{sx:{display:"flex",alignItems:"center",gap:1},children:[o(n,{component:"span",sx:{fontWeight:500},children:e.label}),t&&!t.available&&o(n,{component:"span",sx:{fontSize:10,lineHeight:1,px:.75,py:.25,borderRadius:.5,bgcolor:"action.selected",color:"text.secondary",letterSpacing:.5},children:"SOON"})]}),t&&o(n,{component:"span",sx:{fontSize:12,color:"text.secondary"},children:t.description})]})}}},m={args:{label:"Owner",value:"mcga",width:300,onChange:()=>{},options:K,footer:({closeMenu:e})=>o(Y,{variant:"text",startIcon:o(H,{}),onClick:()=>{e()},sx:{width:"100%",justifyContent:"flex-start",textTransform:"none"},children:"Create new owner"})}},Yo=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange","WithRenderOption","WithFooter"];var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option1",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {}
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true
  }
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,w,S;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {}
  }
}`,...(S=(w=p.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var O,y,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    onChange: () => {}
  }
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,T,E,P,R;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false
  }
}`,...(E=(T=r.parameters)==null?void 0:T.docs)==null?void 0:E.source},description:{story:`This exemple is set up using useState to simulate how it would
work on the app, how the selected item is styled

Refer back to the top of the document on how to implement`,...(R=(P=r.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var W,N,B,k,M;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Resource type",
    value: "dataset",
    width: 320,
    onChange: () => {},
    options: RESOURCE_TYPE_OPTIONS,
    renderOption: option => {
      const meta = RESOURCE_TYPE_META[option.value as string];
      return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.25,
        py: 0.5,
        width: "100%"
      }}>
          <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 1
        }}>
            <Box component="span" sx={{
            fontWeight: 500
          }}>
              {option.label}
            </Box>
            {meta && !meta.available && <Box component="span" sx={{
            fontSize: 10,
            lineHeight: 1,
            px: 0.75,
            py: 0.25,
            borderRadius: 0.5,
            bgcolor: "action.selected",
            color: "text.secondary",
            letterSpacing: 0.5
          }}>
                SOON
              </Box>}
          </Box>
          {meta && <Box component="span" sx={{
          fontSize: 12,
          color: "text.secondary"
        }}>
              {meta.description}
            </Box>}
        </Box>;
    }
  }
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:'The `renderOption` prop lets you render rich content inside each menu\nitem — e.g. a title + description block, with an inline "SOON" chip on\nunavailable options. Those same options are marked `disabled: true` so\nMUI dims them, blocks selection, sets `aria-disabled`, and skips them\nduring keyboard navigation. `option.label` stays the source of truth\nfor filtering, ARIA, and the closed-trigger value; only the visual\noption-item is customised.\n\nPair with MUI\'s `renderValue` if you also want to customise the\nclosed trigger (not shown here).',...(M=(k=i.parameters)==null?void 0:k.docs)==null?void 0:M.description}}};var _,A,U;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Owner",
    value: "mcga",
    width: 300,
    onChange: () => {},
    options: OWNER_OPTIONS,
    footer: ({
      closeMenu
    }) => <Button variant="text" startIcon={<PlusCircleIcon />} onClick={() => {
      closeMenu();
      // A host app would open its "create new owner" modal here.
    }} sx={{
      width: "100%",
      justifyContent: "flex-start",
      textTransform: "none"
    }}>
        Create new owner
      </Button>
  }
}`,...(U=(A=m.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};export{s as Default,l as Disabled,r as ExampleWithOnChange,p as WithCustomWidth,m as WithFooter,d as WithNoLabel,i as WithRenderOption,Yo as __namedExportsOrder,Lo as default};
