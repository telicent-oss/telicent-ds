import{a as o,b as c,r as L}from"./iframe-CkNiiXLn.js";import{o as D,B as Y}from"./UserProfileContent-fQaFq2Ij.js";import{P as H}from"./XIcon-BnpOzrUx.js";import{B as n}from"./Box-05pko2XY.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dyz6JNkZ.js";import"./clsx-B-dksMZM.js";import"./styled-76ib0pne.js";import"./extendSxProp-BK5IVCsk.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-BqURM9Ak.js";import"./TransitionGroupContext-B2d67udZ.js";import"./MapToggleButtonPresentational-l2lmOHYk.js";import"./Remove-Ct8rdzlS.js";import"./createSvgIcon-iDztRpkl.js";import"./SvgIcon-B-DccnQT.js";import"./IconButton-CuVEOxhO.js";import"./Paper-Co2ZhE_m.js";import"./Brand-Dm6iRMuI.js";import"./Typography-DuOx53ON.js";import"./IconButton-Dodp6b5p.js";import"./LinkButton-C8qoOrAY.js";import"./AppInfoRow-54zgxE88.js";import"./_IconPopover-ChFYTO37.js";import"./Box-YjUNvW-N.js";import"./Popover-CHk_5JT_.js";import"./utils-DUL0G8fu.js";import"./index-DahoM0Dd.js";import"./index-DmVtciI9.js";import"./Modal-i00kY4hp.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CMe9gMdQ.js";import"./useSlotProps-BLPs0jNc.js";import"./InfoIcon-CNZtHU0c.js";import"./FlexBox-DuXm_8u8.js";import"./Stack-CsP74eLy.js";import"./styled-BvHWXNqt.js";import"./createStyled-Cvg3k3VR.js";import"./useThemeProps-iEI_UVVT.js";import"./Text-rScatiJx.js";import"./AppSettings-C58RzYiC.js";import"./CogIcon-CUgKmZnu.js";import"./Badge-Cf6QQjYx.js";import"./Badge-DcNyFGRo.js";import"./Chip-CzIXPAM6.js";import"./Chip-B_4aGR8d.js";import"./Divider-BBGr4h1z.js";import"./Divider-CupyNWLf.js";import"./dividerClasses-A0fl45Fm.js";import"./ThemeSwitchRow-DgBfNZR_.js";import"./Skeleton-CLKvWyBu.js";import"./Skeleton-DB4Iig_r.js";import"./TextField-jGTAB-zs.js";import"./useFormControl-Cy5_hCFa.js";import"./FormControl-Aq3S65NU.js";import"./ListContext-Dy1fZMht.js";import"./useControlled-BJ9psZrO.js";import"./FormHelperText-BkLGYuAu.js";import"./MenuItem-IabHC3U2.js";import"./ExpandMoreIcon-7GR4ETlZ.js";import"./ListItem-DfLiUxe7.js";import"./Toolbar-B-fWGjIK.js";import"./Close-3Y3Q-Wdq.js";import"./Popper-C_4fisPz.js";import"./FormControlLabel-DHtC2mPb.js";import"./Edit-CjwvC8Or.js";import"./SvgIcon-DSEb6mw_.js";import"./TableRow-CUz_YY1F.js";import"./TableCell-Db5UJInr.js";import"./TreeView-YO-ZddkQ.js";import"./useThemeProps-BIQFXi-5.js";import"./index-DspNy_CZ.js";import"./Collapse-renE2O0C.js";import"./Dialog-CpFNgoFo.js";import"./DialogContent-DaXl4CQu.js";import"./Alert-BoTqSYeo.js";import"./useSlot-k-KZgeup.js";import"./LinearProgress-Dy5_CdNI.js";import"./LinearProgress-DMwXeD9I.js";import"./Spinner-CT2AH6u2.js";import"./CircularProgress-BTnJNT1d.js";import"./TextField-BjCIF13p.js";import"./FormControl-CXubaWvq.js";import"./FormHelperText-BnJKYq1n.js";import"./LabeledSwitch-BNOamzBb.js";import"./Switch-DEcm6u5p.js";import"./Switch-C-S4rpDT.js";import"./RadioGroup-9Q56424I.js";import"./Container-DJ50h9Ca.js";import"./ToggleButton-BXKvGfFv.js";import"./ToggleButton-6UcPHypp.js";import"./ToggleButtonGroup-DJ_gF3ao.js";import"./MenuItem-72aw9qZO.js";import"./Tabs-CSxADV3D.js";import"./AccordionSummary-CkdrW3Ti.js";import"./Paper-Dv3fWX-M.js";import"./ErrorFallback-IkkxBrLa.js";import"./ErrorFallbackText-DyiZWMdz.js";import"./ErrorFallbackWrapper-iVC7iWcE.js";const a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Lo={title:"Inputs/Select",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
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
