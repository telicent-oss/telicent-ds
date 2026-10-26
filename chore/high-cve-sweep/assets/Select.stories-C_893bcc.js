import{a as o,b as c,r as L}from"./iframe-BrOrNHEh.js";import{o as D,B as Y}from"./EntityList-H_0K-dzQ.js";import{P as H}from"./ExpandLessIcon-BzZ4XDrP.js";import{B as n}from"./Box-BfS4SYDH.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-D5UCFB1S.js";import"./Stack-CkS2dy7z.js";import"./styled-B7Gun_NM.js";import"./extendSxProp-Duzm6Lca.js";import"./clsx-B-dksMZM.js";import"./styled-Bt2mTeFf.js";import"./createStyled-BOu-1Jtm.js";import"./useThemeProps-Cz1Ild6z.js";import"./composeClasses-fLhin0tj.js";import"./Text-DFwA3vR5.js";import"./Typography-Dpm-p6ja.js";import"./ListContext-7u-aoan4.js";import"./ListItem-KJHx1wCT.js";import"./FormControl-DZ_EUKmb.js";import"./useFormControl-BruFV-Qx.js";import"./TransitionGroupContext-Dt8HhoUr.js";import"./resolveComponentProps-DmG19-z7.js";import"./ButtonBase-DftoHfZR.js";import"./Toolbar-hT1KjkR5.js";import"./TextField-B2xiZYVb.js";import"./Modal-Cq6MPz4D.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-DGBa8jx5.js";import"./index-DbLrVmhX.js";import"./index-DI5L87ft.js";import"./utils-weDOyctD.js";import"./Popover-fh7sV9SA.js";import"./Paper-vuiB8TOC.js";import"./useControlled-BjktlrWs.js";import"./createSvgIcon-BVz2CBJw.js";import"./SvgIcon-oJ7O5BsC.js";import"./FormHelperText-CVrFiion.js";import"./Close-C1Ajlgcl.js";import"./Popper-BMlA55IB.js";import"./Badge-LDV7duPO.js";import"./Chip-FRFfDpZp.js";import"./IconButton-D5nyRFzv.js";import"./FormControlLabel-Ci79UUIH.js";import"./MenuItem-DmQEqCQc.js";import"./dividerClasses-Cf_Zsr30.js";import"./Button-CSBjMYNz.js";import"./MapToggleButtonPresentational-DjTLtwPH.js";import"./Remove-BXICJJmX.js";import"./CogIcon-DLVK3cal.js";import"./InfoIcon-BSsggCtY.js";import"./ExpandMoreIcon-hM54sdJa.js";import"./ThemeSwitchRow-CXKB4Cad.js";import"./index-DAO22fas.js";import"./IconButton-DY0MGdyy.js";import"./Badge-BMrbfaBl.js";import"./Chip-BkKs13LT.js";import"./Divider-EangdiJD.js";import"./Divider-B8FqOrn9.js";import"./TreeView-CY6JI_wL.js";import"./useThemeProps-DdH0afsQ.js";import"./Collapse-BxbbjR-2.js";import"./useSlot-T2OhbpiU.js";import"./AppInfoRow-BoeKISh2.js";import"./_IconPopover-M7QzOQvw.js";import"./Box-CLS-9xVu.js";import"./AppSettings-8Bz0ezeY.js";import"./SvgIcon-M1RTRqad.js";import"./TableRow-B288CNJ8.js";import"./TableCell--9jHtUYw.js";import"./Skeleton-g9QI3QGP.js";import"./Skeleton-F5pzjQNl.js";import"./Edit-4mo734kz.js";import"./LinearProgress-Dhxq7sJJ.js";import"./LinearProgress-BFSiQRwS.js";import"./Spinner-DB7mFyLO.js";import"./CircularProgress-ClV7g0pC.js";import"./Dialog-B_-7JoVZ.js";import"./DialogContent-R-0O7NC9.js";import"./Alert-C2LM2JGB.js";import"./ToggleButton-h1qrIylX.js";import"./ToggleButton-RaOfILww.js";import"./ToggleButtonGroup-DJERzG3r.js";import"./LinkButton-tyFKol7f.js";import"./Container-BQSx0dcU.js";import"./TextField--1bCY3MA.js";import"./Switch-v5jAUzas.js";import"./Switch-DUyEOTYL.js";import"./LabeledSwitch-xfpQoVPs.js";import"./RadioGroup-BxGwEAqL.js";import"./FormControl-DfXZkWqG.js";import"./FormHelperText-aeiOJUMu.js";import"./Tabs-BjpX6Btc.js";import"./MenuItem-DhoBzDNC.js";import"./AccordionDetails-CYEP5uVx.js";import"./Paper-oJZ4x_5E.js";import"./ErrorFallback-Bx0JnRhm.js";import"./ErrorFallbackText-B1EPTBkB.js";import"./ErrorFallbackWrapper-C9HUOcDg.js";import"./Brand-Dz7COHp9.js";const a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Lo={title:"Inputs/Select",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
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
