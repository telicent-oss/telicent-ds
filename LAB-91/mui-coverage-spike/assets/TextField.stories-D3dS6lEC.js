import{r as u,j as e,a as S}from"./iframe-DMZf_z8l.js";import{T as t}from"./TextField-NRNHHpV6.js";import{B as d}from"./Box-XIzbJh1C.js";import"./preload-helper-C1FmrZbK.js";import"./TextField-DbBZeym1.js";import"./generateUtilityClass-CywfVb3a.js";import"./styled-BhjXjSTi.js";import"./generateUtilityClasses-E8kj8mkK.js";import"./OutlinedInput-BqYOAriL.js";import"./createSvgIcon-Co9Y2kA5.js";import"./SvgIcon-BA9ju1Sa.js";import"./useFormControl-CLapPuwA.js";import"./formControlState-Dq1zat_P.js";import"./utils-iop7lDec.js";import"./useForkRef-grDcQant.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-DqnP5vMh.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./InputLabel-DqK5hWZ7.js";import"./FormLabel-0VaPPqSV.js";import"./isMuiElement-f6_SH4MB.js";import"./Select-tvRzVfej.js";import"./Menu-BX3hMchn.js";import"./useSlotProps-ByV-l5Lc.js";import"./resolveComponentProps-C_N5TE1Z.js";import"./Popover-Dbs3k9sg.js";import"./Grow-C_uUqB-c.js";import"./useTheme-R582sJ1x.js";import"./utils-BLLjmJWZ.js";import"./TransitionGroupContext-DfY19jQi.js";import"./index-DUICm0b5.js";import"./useTimeout-Dp-kS1kI.js";import"./getReactElementRef-Buh25I8b.js";import"./Modal-B7xKpwtI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-C8VZQ10h.js";import"./Backdrop-CealCOy_.js";import"./Fade-DBDG-Qkn.js";import"./Paper-CgwysQMM.js";import"./List-C2H71DQf.js";import"./useControlled-DmhfUatr.js";import"./FormHelperText-CB2VvU6y.js";const xe={title:"Inputs/TextField",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},error:{control:"boolean"},errorText:{control:"text"},disabled:{control:"boolean"},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"\nA custom text input built on top of MUI's `<TextField>`, supporting label, error states, and all standard props.\n\nUse `error` and `errorText` to display validation messages.\n        "}}}},n={args:{label:"Full Name",placeholder:"Enter your name",error:!1,errorText:"This field is required"},render:r=>{const[o,a]=u.useState("");return e(d,{sx:{width:300},children:e(t,{...r,value:o,onChange:s=>a(s.target.value)})})}},l={args:{label:"Multiline Input",placeholder:"type anything that needs a lot of space in here",error:!1,multiline:!0,rows:10},render:r=>{const[o,a]=u.useState("");return e(d,{sx:{width:800},children:e(t,{...r,value:o,onChange:s=>a(s.target.value)})})}},i={parameters:{docs:{description:{story:"The `helperText` prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights."}}},render:r=>S(d,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:[e(t,{value:" ",helperText:"This is a helper text",label:"TextField"}),e(t,{value:" ",label:"TextField"})]})},p={args:{label:"Title",error:!0,errorText:"Something went wrong, please try again."},parameters:{docs:{description:{story:"The `error` prop toggles the error state. The `helperText` prop is used to display the `errorText`, providing feedback to the user about the error"}}},render:r=>{const[o,a]=u.useState("");return e(d,{sx:{width:300},children:e(t,{...r,value:o,onChange:s=>a(s.target.value)})})}};var m,c,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Full Name",
    placeholder: "Enter your name",
    error: false,
    errorText: "This field is required"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <Box sx={{
      width: 300
    }}>
        <TextField {...args} value={value} onChange={e => setValue(e.target.value)} />
      </Box>;
  }
}`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var x,g,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Multiline Input",
    placeholder: "type anything that needs a lot of space in here",
    error: false,
    multiline: true,
    rows: 10
  },
  render: args => {
    const [value, setValue] = useState("");
    return <Box sx={{
      width: 800
    }}>
        <TextField {...args} value={value} onChange={e => setValue(e.target.value)} />
      </Box>;
  }
}`,...(T=(g=l.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var f,v,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The \`helperText\` prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights."
      }
    }
  },
  render: args => <Box sx={{
    display: "flex",
    alignItems: "center",
    "& > :not(style)": {
      m: 1
    }
  }}>
      <TextField value={" "} helperText={"This is a helper text"} label={"TextField"} />
      <TextField value={" "} label={"TextField"} />
    </Box>
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,w,F;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Title",
    error: true,
    errorText: "Something went wrong, please try again."
  },
  parameters: {
    docs: {
      description: {
        story: "The \`error\` prop toggles the error state. The \`helperText\` prop is used to display the \`errorText\`, providing feedback to the user about the error"
      }
    }
  },
  render: args => {
    const [value, setValue] = useState("");
    return <Box sx={{
      width: 300
    }}>
        <TextField {...args} value={value} onChange={e => setValue(e.target.value)} />
      </Box>;
  }
}`,...(F=(w=p.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const ge=["Default","MultiLine","HelperText","ErrorMessage"];export{n as Default,p as ErrorMessage,i as HelperText,l as MultiLine,ge as __namedExportsOrder,xe as default};
