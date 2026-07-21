import{j as o,a as m,r as z}from"./iframe-CzCkUhLB.js";import{i as j,B as L}from"./DropdownButton-pqytKPlf.js";import{P as Y}from"./UserIcon-D2XJ4u-D.js";import{B as n}from"./Box-BGVnL9Ww.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DU8Uvr2K.js";import"./useThemeProps-BolcGYv-.js";import"./useTheme-D8VtF-T3.js";import"./Text-CrtF-KKD.js";import"./Typography-C4jf0x9_.js";import"./generateUtilityClass-BJmbtkIz.js";import"./styled-BAICCbW2.js";import"./generateUtilityClasses-DcHQ8wPZ.js";import"./AdapterDayjs-BpTj0bJ_.js";import"./Modal-DIeDBBDO.js";import"./utils-DKTt1Dtk.js";import"./TransitionGroupContext-DMmZE5A7.js";import"./index-DsxJ_3S5.js";import"./resolveComponentProps-Cbl6fkow.js";import"./TextField-D7nA1rxz.js";import"./useFormControl-DtEaYh3d.js";import"./Paper-BitHaSdO.js";import"./createSvgIcon-C5AbB3qG.js";import"./createStyled-CnaTqEJw.js";import"./IconButton-DxOsamAP.js";import"./ButtonBase-C1jEsrEk.js";import"./DialogContent-ChmWl_kd.js";import"./Button-nVc9Q04c.js";import"./Chip-Bpfp1uo7.js";import"./DateTimePicker-CvUf-KCh.js";import"./Divider-Dhatnav_.js";import"./Chip-CiH2_6GH.js";import"./Divider-CY_WcVt5.js";import"./TreeView-DImXIC-1.js";import"./Stack-BQ9Nq0wB.js";import"./styled-BxT8txyJ.js";import"./Close-ufy7FO6S.js";import"./LinearProgress-Bi56K1d1.js";import"./Spinner-DnNrdg_H.js";import"./Dialog-D71AnQMa.js";import"./MapToggleButtonPresentational-CKn0zbRc.js";import"./Remove-D-VYR3BE.js";import"./TextField-DWYxHpkX.js";import"./Switch-DeHO8LDM.js";import"./DatePicker-D79epJYE.js";import"./Box-ChoQNki_.js";import"./Container-CevBIhIW.js";import"./LinkButton-BEZRiMwC.js";import"./Paper-WtLvzPxM.js";import"./ErrorFallback-Biy0HDIH.js";import"./ErrorFallbackText-BbEDFHSR.js";import"./ErrorFallbackWrapper-BH2ujPyJ.js";import"./Brand-rCLVFpN1.js";import"./constants-SYLv77sP.js";import"./Edit-CNP1jkFH.js";const a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Qe={title:"Inputs/Select",component:j,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"select-default",ariaLabel:"select-dropdown",options:a},decorators:e=>o(n,{sx:{margin:"auto"},children:e()})},H=({...e})=>{const[t,D]=z.useState("");return o(j,{color:"primary",label:"Select Option",value:t,onChange:F=>{D(F.target.value)},options:a,id:"selected-demo",...e})},s={args:{label:"Select an option",value:"option1",id:"select-disabled",options:a,width:300,onChange:()=>{}}},l={args:{label:"Select an option",value:"none",id:"select-disabled",options:a,width:300,onChange:()=>{},disabled:!0}},p={args:{label:"Select an option",value:"option2",id:"select-disabled",options:a,width:500,onChange:()=>{}}},d={args:{value:"option2",id:"select-disabled",options:a,onChange:()=>{}}},r={render:e=>o(H,{...e}),args:{width:250,disabled:!1}},V=[{value:"mcga",label:"Maritime Coastguard Agency"},{value:"ukho",label:"UK Hydrographic Office"},{value:"imo",label:"IMO"}],K=[{value:"dataset",label:"Dataset"},{value:"model",label:"Model"},{value:"pipeline",label:"Pipeline"},{value:"notebook",label:"Notebook"}],q={dataset:{description:"A curated collection of records.",available:!0},model:{description:"A trained ML model or checkpoint.",available:!0},pipeline:{description:"A scheduled data-processing job.",available:!1},notebook:{description:"An interactive analysis document.",available:!1}},i={args:{label:"Resource type",value:"dataset",width:320,onChange:()=>{},options:K,renderOption:e=>{const t=q[e.value];return m(n,{sx:{display:"flex",flexDirection:"column",gap:.25,py:.5,width:"100%"},children:[m(n,{sx:{display:"flex",alignItems:"center",gap:1},children:[o(n,{component:"span",sx:{fontWeight:500},children:e.label}),t&&!t.available&&o(n,{component:"span",sx:{fontSize:10,lineHeight:1,px:.75,py:.25,borderRadius:.5,bgcolor:"action.selected",color:"text.secondary",letterSpacing:.5},children:"SOON"})]}),t&&o(n,{component:"span",sx:{fontSize:12,color:"text.secondary"},children:t.description})]})}}},c={args:{label:"Owner",value:"mcga",width:300,onChange:()=>{},options:V,footer:({closeMenu:e})=>o(L,{variant:"text",startIcon:o(Y,{}),onClick:()=>{e()},sx:{width:"100%",justifyContent:"flex-start",textTransform:"none"},children:"Create new owner"})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option1",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {}
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,w,S;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,E,P,R,T;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false
  }
}`,...(P=(E=r.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:`This exemple is set up using useState to simulate how it would
work on the app, how the selected item is styled

Refer back to the top of the document on how to implement`,...(T=(R=r.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};var W,N,B,M,_;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:`The \`renderOption\` prop lets you render rich content inside each menu
item — e.g. a title + description block, with an inline chip on
unavailable options. \`option.label\` stays the source of truth for
filtering, ARIA, and the closed-trigger value; only the visual
option-item is customised.

Pair with MUI's \`renderValue\` if you also want to customise the
closed trigger (not shown here).`,...(_=(M=i.parameters)==null?void 0:M.docs)==null?void 0:_.description}}};var k,A,U;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(U=(A=c.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};const Xe=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange","WithRenderOption","WithFooter"];export{s as Default,l as Disabled,r as ExampleWithOnChange,p as WithCustomWidth,c as WithFooter,d as WithNoLabel,i as WithRenderOption,Xe as __namedExportsOrder,Qe as default};
