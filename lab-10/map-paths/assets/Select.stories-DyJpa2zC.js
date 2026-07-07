import{j as a,r as R}from"./iframe-CYKKeyXc.js";import{i as k,B as j}from"./DropdownButton-DXvUw18o.js";import{P as A}from"./UserIcon-BEDwv6nP.js";import{B as D}from"./Box-B5Idbuu2.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-nKkQeJ84.js";import"./useThemeProps-CSMSYrHE.js";import"./useTheme-Clo7ftRJ.js";import"./Text-Bt17FoZM.js";import"./Typography-BqCL54fa.js";import"./styled-DYVy4BQZ.js";import"./generateUtilityClasses-BddLF0YE.js";import"./AdapterDayjs-LnHs1126.js";import"./Modal-B6zc8eMd.js";import"./utils-BTMGMaS4.js";import"./TransitionGroupContext-BZlRwI3u.js";import"./index-BOq1Y2DU.js";import"./TextField-BKgBwIu3.js";import"./useFormControl-e1pRvXOc.js";import"./Paper-mUQjj_jn.js";import"./createSvgIcon-BCA_qiKo.js";import"./createStyled-BrwGJ6p7.js";import"./IconButton-CwWFg1EF.js";import"./ButtonBase-BY4v5x24.js";import"./DialogContent-DBkrQtLX.js";import"./Button-BK6a-J9_.js";import"./Chip-BigX0SwN.js";import"./DateTimePicker-CUaoXgcA.js";import"./Divider-CZT4G2av.js";import"./Chip-D-ivFaV7.js";import"./Divider-BtKIWAtl.js";import"./TreeView-CioP4QeT.js";import"./Stack-BjITiBsD.js";import"./styled-C485N8nh.js";import"./LinearProgress--AT7LVoA.js";import"./Spinner-CEVLaIRL.js";import"./Dialog-C76QJbsQ.js";import"./MapToggleButtonPresentational-L_xNR8KH.js";import"./Remove-B42JroOj.js";import"./TextField-nYr1dY0Q.js";import"./Switch-Bt5eTPpW.js";import"./DatePicker-HFvHu9pg.js";import"./Container-B4YkWBlj.js";import"./LinkButton-BI7eyHxU.js";import"./Paper-grcJF4O1.js";import"./ErrorFallback-CikF8nPt.js";import"./ErrorFallbackText-BKonECwZ.js";import"./ErrorFallbackWrapper-DAHz8e70.js";import"./Brand-CfZWDtPV.js";import"./constants-C9fBqqHE.js";import"./Edit-BwdZQDqg.js";const o=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Le={title:"Inputs/Select",component:k,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"select-default",ariaLabel:"select-dropdown",options:o},decorators:e=>a(D,{sx:{margin:"auto"},children:e()})},L=({...e})=>{const[B,E]=R.useState("");return a(k,{color:"primary",label:"Select Option",value:B,onChange:F=>{E(F.target.value)},options:o,id:"selected-demo",...e})},r={args:{label:"Select an option",value:"option1",id:"select-disabled",options:o,width:300,onChange:()=>{}}},s={args:{label:"Select an option",value:"none",id:"select-disabled",options:o,width:300,onChange:()=>{},disabled:!0}},i={args:{label:"Select an option",value:"option2",id:"select-disabled",options:o,width:500,onChange:()=>{}}},l={args:{value:"option2",id:"select-disabled",options:o,onChange:()=>{}}},t={render:e=>a(L,{...e}),args:{width:250,disabled:!1}},_=[{value:"mcga",label:"Maritime Coastguard Agency"},{value:"ukho",label:"UK Hydrographic Office"},{value:"imo",label:"IMO"}],n={args:{label:"Owner",value:"mcga",width:300,onChange:()=>{},options:_,footer:({closeMenu:e})=>a(j,{variant:"text",startIcon:a(A,{}),onClick:()=>{e()},sx:{width:"100%",justifyContent:"flex-start",textTransform:"none"},children:"Create new owner"})}};var p,d,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option1",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {}
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,b,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {}
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,C,v;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    onChange: () => {}
  }
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var y,S,O,x,I;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false
  }
}`,...(O=(S=t.parameters)==null?void 0:S.docs)==null?void 0:O.source},description:{story:`This exemple is set up using useState to simulate how it would
work on the app, how the selected item is styled

Refer back to the top of the document on how to implement`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.description}}};var T,W,P,N,M;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(P=(W=n.parameters)==null?void 0:W.docs)==null?void 0:P.source},description:{story:`The \`footer\` prop renders an action below the option list, separated by a
divider — typically a "+ Create new …" button. The footer is **not**
selectable as a value; clicking it will not fire \`onChange\`.

There are two forms:

- **Render function** — \`footer={({ closeMenu }) => …}\` receives \`closeMenu\`,
  so your click handler can dismiss the dropdown before acting (e.g. before
  opening a "create" modal). This is the common case, shown below.
- **Plain node** — \`footer={<MyAction />}\` when you don't need to close the
  menu yourself (the menu stays open until the user clicks away).`,...(M=(N=n.parameters)==null?void 0:N.docs)==null?void 0:M.description}}};const _e=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange","WithFooter"];export{r as Default,s as Disabled,t as ExampleWithOnChange,i as WithCustomWidth,n as WithFooter,l as WithNoLabel,_e as __namedExportsOrder,Le as default};
