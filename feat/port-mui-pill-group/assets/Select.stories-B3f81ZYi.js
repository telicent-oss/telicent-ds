import{a as o,b as m,r as L}from"./iframe-Cd_b2o5a.js";import{o as D,B as Y}from"./DropdownButton-cxua4Oxx.js";import{P as H}from"./ExpandLessIcon-aVvcYNN5.js";import{B as n}from"./Box-D6LYlQtG.js";import"./preload-helper-C1FmrZbK.js";import"./CogIcon-DhPeOlSR.js";import"./SvgIcon-B1KGk51t.js";import"./clsx-B-dksMZM.js";import"./styled-CGYYy0Dj.js";import"./extendSxProp-DmO-r4ow.js";import"./composeClasses-fLhin0tj.js";import"./InfoIcon-CUR1EQCO.js";import"./ExpandMoreIcon-C7D9oUmn.js";import"./ThemeSwitchRow-BnpCDuSK.js";import"./index-M60GgTXs.js";import"./useTheme-DMI-kw-e.js";import"./Text-Wjy9gNmi.js";import"./Typography-CsrEffoZ.js";import"./AdapterDayjs-C1RvpKBK.js";import"./useThemeProps-BJpOgLh3.js";import"./useThemeProps-BeXTsOsN.js";import"./Modal-D0r_KFjq.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CXwLzekK.js";import"./resolveComponentProps-DcS_ho5J.js";import"./index-t4Ln2bEE.js";import"./utils-DuG08QIw.js";import"./Popover-hZ9yWhQ1.js";import"./Paper-hJ6PGTek.js";import"./TextField-Dko6rREu.js";import"./useFormControl-BYRlGA8y.js";import"./FormControl-LraBFmA3.js";import"./ListContext-B_SN-Vsv.js";import"./useControlled-DH9GLKAS.js";import"./createSvgIcon-Bb20z-GJ.js";import"./FormHelperText-Dsn6gvV_.js";import"./createStyled-BiNrR7bs.js";import"./IconButton-BvOf-PbX.js";import"./ButtonBase-DtNJCaLI.js";import"./DialogContent-D9MmNMVa.js";import"./Button-9YQTmtlR.js";import"./Chip-Bai6p_3l.js";import"./MenuItem-BLZc0iJP.js";import"./dividerClasses-Du-ckaEr.js";import"./_IconPopover-CiSr5uQZ.js";import"./Box-dq88Ct6Q.js";import"./FlexBox-9GQOwYlj.js";import"./Stack-07laLbzL.js";import"./styled-DR5ZaSIi.js";import"./Chip-Blkti73k.js";import"./Divider-9h0MPdjV.js";import"./Divider-D1nuRWHP.js";import"./TreeView-DMlgxYdm.js";import"./Collapse-BgXK0y6u.js";import"./useSlot-CybJwoih.js";import"./AppInfoRow-Bf3N0ddF.js";import"./AppSettings-Czqo5fXt.js";import"./SvgIcon-U-axE2xd.js";import"./TableRow-DC5TBsGP.js";import"./LinearProgress-Bni58dnK.js";import"./Spinner-BwzA_JHU.js";import"./Dialog-CDfX8NcR.js";import"./MapToggleButtonPresentational-D8XYaC1X.js";import"./Remove-DqG_RTGn.js";import"./Alert-CMzup6BR.js";import"./ToggleButton-C3nKEC15.js";import"./ToggleButtonGroup-CoNFQC6R.js";import"./LinkButton-DOqUGJcT.js";import"./Container-Bzr0bNjy.js";import"./TextField-LWye6xaa.js";import"./Switch-vWVIvl1D.js";import"./LabeledSwitch-C8r-iiSL.js";import"./DatePicker-CtgFdiGq.js";import"./DateTimePicker-CED5Da2b.js";import"./FormControl-DlJ-t_WI.js";import"./FormHelperText-Bmovl1Lw.js";import"./MenuItem-IST6gdzD.js";import"./AccordionDetails-CK9RoavB.js";import"./Paper-Hgkbc48O.js";import"./ErrorFallback-Dt0mghmj.js";import"./ErrorFallbackText-B2d79ctb.js";import"./ErrorFallbackWrapper-BG5Vtd-v.js";import"./Brand-DegRULdI.js";import"./Edit-CNNLFkXb.js";const a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],To={title:"Inputs/Select",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"select-default",ariaLabel:"select-dropdown",options:a},decorators:e=>o(n,{sx:{margin:"auto"},children:e()})},V=({...e})=>{const[t,F]=L.useState("");return o(D,{color:"primary",label:"Select Option",value:t,onChange:z=>{F(z.target.value)},options:a,id:"selected-demo",...e})},s={args:{label:"Select an option",value:"option1",id:"select-disabled",options:a,width:300,onChange:()=>{}}},l={args:{label:"Select an option",value:"none",id:"select-disabled",options:a,width:300,onChange:()=>{},disabled:!0}},p={args:{label:"Select an option",value:"option2",id:"select-disabled",options:a,width:500,onChange:()=>{}}},d={args:{value:"option2",id:"select-disabled",options:a,onChange:()=>{}}},r={render:e=>o(V,{...e}),args:{width:250,disabled:!1}},K=[{value:"mcga",label:"Maritime Coastguard Agency"},{value:"ukho",label:"UK Hydrographic Office"},{value:"imo",label:"IMO"}],j={dataset:{description:"A curated collection of records.",available:!0},model:{description:"A trained ML model or checkpoint.",available:!0},pipeline:{description:"A scheduled data-processing job.",available:!1},notebook:{description:"An interactive analysis document.",available:!1}},q=[{value:"dataset",label:"Dataset"},{value:"model",label:"Model"},{value:"pipeline",label:"Pipeline"},{value:"notebook",label:"Notebook"}].map(e=>({...e,disabled:!j[e.value].available})),i={args:{label:"Resource type",value:"dataset",width:320,onChange:()=>{},options:q,renderOption:e=>{const t=j[e.value];return m(n,{sx:{display:"flex",flexDirection:"column",gap:.25,py:.5,width:"100%"},children:[m(n,{sx:{display:"flex",alignItems:"center",gap:1},children:[o(n,{component:"span",sx:{fontWeight:500},children:e.label}),t&&!t.available&&o(n,{component:"span",sx:{fontSize:10,lineHeight:1,px:.75,py:.25,borderRadius:.5,bgcolor:"action.selected",color:"text.secondary",letterSpacing:.5},children:"SOON"})]}),t&&o(n,{component:"span",sx:{fontSize:12,color:"text.secondary"},children:t.description})]})}}},c={args:{label:"Owner",value:"mcga",width:300,onChange:()=>{},options:K,footer:({closeMenu:e})=>o(Y,{variant:"text",startIcon:o(H,{}),onClick:()=>{e()},sx:{width:"100%",justifyContent:"flex-start",textTransform:"none"},children:"Create new owner"})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:'The `renderOption` prop lets you render rich content inside each menu\nitem — e.g. a title + description block, with an inline "SOON" chip on\nunavailable options. Those same options are marked `disabled: true` so\nMUI dims them, blocks selection, sets `aria-disabled`, and skips them\nduring keyboard navigation. `option.label` stays the source of truth\nfor filtering, ARIA, and the closed-trigger value; only the visual\noption-item is customised.\n\nPair with MUI\'s `renderValue` if you also want to customise the\nclosed trigger (not shown here).',...(M=(k=i.parameters)==null?void 0:k.docs)==null?void 0:M.description}}};var _,A,U;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(A=c.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};const Eo=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange","WithRenderOption","WithFooter"];export{s as Default,l as Disabled,r as ExampleWithOnChange,p as WithCustomWidth,c as WithFooter,d as WithNoLabel,i as WithRenderOption,Eo as __namedExportsOrder,To as default};
