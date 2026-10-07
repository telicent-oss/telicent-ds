import{a as o,b as m,r as L}from"./iframe-BMeccPNJ.js";import{o as D,B as Y}from"./DropdownButton-CJcvDogh.js";import{P as H}from"./ExpandLessIcon-B6HusTMu.js";import{B as n}from"./Box-BwQkrYug.js";import"./preload-helper-C1FmrZbK.js";import"./CogIcon-X3PjyXPP.js";import"./SvgIcon-Cm2TYdXM.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-PlbL7nuw.js";import"./extendSxProp-OZdELPHD.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./InfoIcon-C43YUatg.js";import"./ExpandMoreIcon-CMplMLVo.js";import"./ThemeSwitchRow-Nkm5fIMW.js";import"./index-CN2QR1mZ.js";import"./useTheme-Buqurtd8.js";import"./Text-Cra0cu9R.js";import"./Typography-Caf0sNeW.js";import"./AdapterDayjs-px4ygSzx.js";import"./useThemeProps-XBwwIBHe.js";import"./useThemeProps-C_eKUugk.js";import"./Modal-PM6MIqry.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-HXr4o3EP.js";import"./resolveComponentProps-BszGJrBF.js";import"./index-DkyQgcjU.js";import"./utils-LzjE0vGE.js";import"./Popover-rQlvehgO.js";import"./Paper-Bfmpijtg.js";import"./TextField-vO5ouNTu.js";import"./useFormControl-DbNJ1HNF.js";import"./FormControl-C0VKj7ef.js";import"./ListContext-B5Su0ZnG.js";import"./useControlled-DdlDfNFx.js";import"./createSvgIcon-DqqCMwW-.js";import"./FormHelperText-CIvqbQfR.js";import"./createStyled-Dcm0u-cs.js";import"./IconButton-0rcJlT-l.js";import"./ButtonBase-o3LjpFbz.js";import"./DialogContent-DpwGlWTc.js";import"./Button-B5coKyWo.js";import"./Chip-3WEw9hIt.js";import"./MenuItem-BX1rIrqX.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-C3iVtoCa.js";import"./Box-ChrdOdVs.js";import"./FlexBox-Bzg5xbu0.js";import"./Stack-BdG4YkNk.js";import"./styled-BEeg3fTD.js";import"./Chip-CK-xlIC7.js";import"./Divider-BN9JaA-W.js";import"./Divider-E-THRAyD.js";import"./TreeView-D-bHLFUm.js";import"./Collapse-klM-UQl4.js";import"./useSlot-rqk_l7yw.js";import"./AppInfoRow-BhcGHzv5.js";import"./AppSettings-Bog0XP8u.js";import"./SvgIcon-DBit6dcs.js";import"./TableRow-CT5-15pp.js";import"./LinearProgress-CICCh1kG.js";import"./Spinner-B2M52evq.js";import"./Dialog-BO3Bf7M6.js";import"./MapToggleButtonPresentational-DW-EnjXE.js";import"./Remove-MscLCauy.js";import"./Alert-CP3Y9oZL.js";import"./ToggleButton-m5lt3mYS.js";import"./LinkButton-Dtrnv-gT.js";import"./Container-CAzy0WzY.js";import"./TextField-Bp2kLT4M.js";import"./Switch-D1a_Aegr.js";import"./LabeledSwitch-BoR8fQ6y.js";import"./DatePicker-TOMHDLiw.js";import"./DateTimePicker-D_BgxS3t.js";import"./FormControl-djpzVMG5.js";import"./FormHelperText-BWjSDbV-.js";import"./MenuItem-Be8lFLDg.js";import"./AccordionDetails-CLRP6GtA.js";import"./Paper-BldQVT4i.js";import"./ErrorFallback-_-KBymsS.js";import"./ErrorFallbackText-BX7d4Mxw.js";import"./ErrorFallbackWrapper-CQ7_lFb3.js";import"./Brand-C4lqvhvY.js";import"./Edit-DiVFn-cA.js";const a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],To={title:"Inputs/Select",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
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
