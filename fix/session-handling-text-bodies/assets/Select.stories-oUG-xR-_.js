import{a as o,b as c,r as L}from"./iframe-DgB5DOOK.js";import{o as D,B as Y}from"./UserProfileContent-DWmBNlHz.js";import{P as H}from"./XIcon-VEg9iy4g.js";import{B as n}from"./Box-BKgVgTA7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-yhUhh5rC.js";import"./clsx-B-dksMZM.js";import"./styled-C2IgeKa1.js";import"./extendSxProp-BWF_iEjT.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-37dGzeCY.js";import"./TransitionGroupContext-DZPXUZjI.js";import"./MapToggleButtonPresentational-BH1dZTqP.js";import"./Remove-DU6di_qq.js";import"./createSvgIcon-buxlCkbb.js";import"./SvgIcon-B7PwMVYn.js";import"./IconButton-D20y2IYX.js";import"./Paper-CfxavN5N.js";import"./Brand-CNlSU-fT.js";import"./Typography-BF7sK5Ae.js";import"./IconButton-Cj-3dO6Q.js";import"./LinkButton-K1pKYT9-.js";import"./AppInfoRow-CeJwZqED.js";import"./_IconPopover-ujUl4F4j.js";import"./Box-lNHAZIk0.js";import"./Popover-H8c48_my.js";import"./utils-C3Jk0TUt.js";import"./index-DQlIAx8_.js";import"./index-HokJ49V1.js";import"./Modal-CTU41rng.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CE999ugD.js";import"./useSlotProps-Jx-sIlO7.js";import"./InfoIcon-D991cygI.js";import"./FlexBox-rNRJ5qOl.js";import"./Stack-DSlyJ0-P.js";import"./styled-CSa8JTl7.js";import"./createStyled-Cr_yrpzs.js";import"./useThemeProps-Cv6lQb1Z.js";import"./Text-D7_q6jLQ.js";import"./AppSettings-BNO02vyz.js";import"./CogIcon--qSeQQYv.js";import"./Badge-jcWGJ-ob.js";import"./Badge-SkVSrEOx.js";import"./Chip-BfLzWb3z.js";import"./Chip-BbjdBAAm.js";import"./Divider-BM3QVx1-.js";import"./Divider-B1R26w1K.js";import"./dividerClasses-DLOnW1Qs.js";import"./ThemeSwitchRow-DfVigJG0.js";import"./Skeleton-DalovIMe.js";import"./Skeleton-dAzTvYwV.js";import"./TextField-CWkT05Xq.js";import"./useFormControl-C1QvXYzQ.js";import"./FormControl-C7ixcWY7.js";import"./ListContext-D16S_6sV.js";import"./useControlled-BxoUib7D.js";import"./FormHelperText-B_G7GOx3.js";import"./MenuItem-BpR-NCbk.js";import"./ExpandMoreIcon-GTPNzf5m.js";import"./ListItem-DgR4_kwz.js";import"./Toolbar-D-_K5ffV.js";import"./Close-RAdmLMOk.js";import"./Popper-4C-oHIR9.js";import"./FormControlLabel-BEFCwgAZ.js";import"./Edit-6-OjV0-m.js";import"./SvgIcon-CZ0P8_U4.js";import"./TableRow-BhnodZ9D.js";import"./TableCell-B5sas6rL.js";import"./TreeView-CzefoKm9.js";import"./useThemeProps-B2nAv7Dy.js";import"./index-DW9QV88U.js";import"./Collapse-DbztTgdD.js";import"./Dialog-BRVCmQfd.js";import"./DialogContent-CKLJHH2b.js";import"./Alert-B3-1Er1S.js";import"./useSlot-V0kD_uWO.js";import"./LinearProgress-CauuDUEI.js";import"./LinearProgress-DHQnu2TY.js";import"./Spinner-DNEUjWM6.js";import"./CircularProgress-vEt8I-xb.js";import"./TextField-By1fm5Ld.js";import"./FormControl-CG1fKJho.js";import"./FormHelperText-Cx6ksy42.js";import"./LabeledSwitch-0HSP2kfR.js";import"./Switch-DA9rneG8.js";import"./Switch-DhiRFrM7.js";import"./RadioGroup-BaCjTbVF.js";import"./Container-C0Xc2FRN.js";import"./ToggleButton-B4UHGI52.js";import"./ToggleButton-Bs18IMrD.js";import"./ToggleButtonGroup-D0tbUhZv.js";import"./MenuItem-BIurvtuG.js";import"./Tabs-DQ5Yd--o.js";import"./AccordionSummary-BjeUD95x.js";import"./Paper-Bd2hcL_j.js";import"./ErrorFallback-CRTMDqB9.js";import"./ErrorFallbackText-11peTATx.js";import"./ErrorFallbackWrapper-Bwlh2Dtv.js";const a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Lo={title:"Inputs/Select",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
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
