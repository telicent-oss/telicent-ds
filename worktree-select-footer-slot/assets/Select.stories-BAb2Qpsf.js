import{j as a,r as R}from"./iframe-Crov0WQz.js";import{i as _,B as F}from"./DropdownButton-CLtoK2nQ.js";import{P as j}from"./UserIcon-BpACv-KD.js";import{B as D}from"./Box-BG0wW1Gw.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BHR99ymZ.js";import"./useThemeProps-ZmDRkbFp.js";import"./useTheme-B_goZ4qo.js";import"./Text-D0Fnpi2n.js";import"./Typography-B9r5TGn1.js";import"./styled-Iiak7Ogq.js";import"./generateUtilityClasses-YSREvbxX.js";import"./AdapterDayjs-5PvZCLYQ.js";import"./Modal-Ckwnu49q.js";import"./utils-DmCjym0s.js";import"./TransitionGroupContext-D_iDfzVR.js";import"./index-DKz44-9c.js";import"./TextField-DoWg8ST_.js";import"./useFormControl-nQOCEbZr.js";import"./Paper-Dqj2J0bD.js";import"./createSvgIcon-YDz-o7-b.js";import"./createStyled-BLdT8Qb_.js";import"./IconButton-CkgmJ1wq.js";import"./ButtonBase-D84oecVH.js";import"./DialogContent-Bogzx-91.js";import"./Button-CacSTNVY.js";import"./Chip-CTEj_6SL.js";import"./DateTimePicker-CZdkDgZx.js";import"./Divider-B4WphmzU.js";import"./Chip-C1hb46nu.js";import"./Divider-DjIAefNA.js";import"./TreeView-BhCu4_vt.js";import"./Stack-Bfojjyxu.js";import"./styled-CNP8R88q.js";import"./LinearProgress-xJR7lhkP.js";import"./Spinner-BFZivWxB.js";import"./Dialog-DoAt61AO.js";import"./MapToggleButtonPresentational-C7M7o9lk.js";import"./Remove-Dh7kVVq0.js";import"./TextField-08-w4XG5.js";import"./Switch-B39EAJit.js";import"./DatePicker-PvBZCpyj.js";import"./Container-B68-6-yw.js";import"./LinkButton-CKRF2-uU.js";import"./Paper-DuUVMjJy.js";import"./ErrorFallback-DVSKIMBt.js";import"./ErrorFallbackText-C98aj5QV.js";import"./ErrorFallbackWrapper-CV687E_O.js";import"./Brand-DTDlbVRJ.js";import"./constants-BsbrBYOu.js";import"./Edit-DYqlQ0Co.js";const{userEvent:L,within:U}=__STORYBOOK_MODULE_TEST__,o=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Ae={title:"Inputs/Select",component:_,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"select-default",ariaLabel:"select-dropdown",options:o},decorators:e=>a(D,{sx:{margin:"auto"},children:e()})},A=({...e})=>{const[p,c]=R.useState("");return a(_,{color:"primary",label:"Select Option",value:p,onChange:B=>{c(B.target.value)},options:o,id:"selected-demo",...e})},r={args:{label:"Select an option",value:"option1",id:"select-disabled",options:o,width:300,onChange:()=>{}}},s={args:{label:"Select an option",value:"none",id:"select-disabled",options:o,width:300,onChange:()=>{},disabled:!0}},i={args:{label:"Select an option",value:"option2",id:"select-disabled",options:o,width:500,onChange:()=>{}}},l={args:{value:"option2",id:"select-disabled",options:o,onChange:()=>{}}},t={render:e=>a(A,{...e}),args:{width:250,disabled:!1}},H=[{value:"mcga",label:"Maritime Coastguard Agency"},{value:"ukho",label:"UK Hydrographic Office"},{value:"imo",label:"IMO"},{value:"ch",label:"Companies House"},{value:"toss",label:"Telicent OSS"},{value:"dft",label:"Department for Transport"},{value:"ukg",label:"UK Government"}],n={args:{label:"Owner",value:"imo",width:320,onChange:()=>{},options:H,footer:({closeMenu:e})=>a(F,{variant:"text",startIcon:a(j,{}),onClick:()=>{e(),console.log("create new owner clicked")},sx:{width:"100%",justifyContent:"flex-start",textTransform:"none",color:"primary.main"},children:"Create new owner"})},parameters:{docs:{source:{type:"code"}}},play:async({canvasElement:e})=>{const c=U(e).getByRole("combobox");await L.click(c)}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option1",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {}
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,f,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {}
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,C,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    onChange: () => {}
  }
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var O,x,T,I,k;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false
  }
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source},description:{story:`This exemple is set up using useState to simulate how it would
work on the app, how the selected item is styled

Refer back to the top of the document on how to implement`,...(k=(I=t.parameters)==null?void 0:I.docs)==null?void 0:k.description}}};var W,P,E,M,N;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Owner",
    value: "imo",
    width: 320,
    onChange: () => {},
    options: OWNER_OPTIONS,
    footer: ({
      closeMenu
    }) => <Button variant="text" startIcon={<PlusCircleIcon />} onClick={() => {
      closeMenu();
      // In the host app this opens a "create new owner" inline panel.
      // For the story, just log — the interaction is what matters.
      console.log("create new owner clicked");
    }} sx={{
      width: "100%",
      justifyContent: "flex-start",
      textTransform: "none",
      color: "primary.main"
    }}>
        Create new owner
      </Button>
  },
  parameters: {
    // Make the dropdown visibly open when the story loads so the
    // reviewer sees the footer without having to click first.
    docs: {
      source: {
        type: "code"
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    // Programmatically open the Select so the reviewer sees the
    // footer + divider without needing to interact.
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("combobox");
    await userEvent.click(trigger);
  }
}`,...(E=(P=n.parameters)==null?void 0:P.docs)==null?void 0:E.source},description:{story:`The \`footer\` prop renders an action below the option list, separated by a
divider — typically a "+ Create new …" button. The footer is **not**
selectable as a value; clicking it will not fire \`onChange\`.

There are two forms:

- **Render function** — \`footer={({ closeMenu }) => …}\` receives \`closeMenu\`,
  so your click handler can dismiss the dropdown before acting (e.g. before
  opening a "create" modal). This is the common case, shown below.
- **Plain node** — \`footer={<MyAction />}\` when you don't need to close the
  menu yourself (the menu stays open until the user clicks away).`,...(N=(M=n.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};const He=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange","WithFooter"];export{r as Default,s as Disabled,t as ExampleWithOnChange,i as WithCustomWidth,n as WithFooter,l as WithNoLabel,He as __namedExportsOrder,Ae as default};
