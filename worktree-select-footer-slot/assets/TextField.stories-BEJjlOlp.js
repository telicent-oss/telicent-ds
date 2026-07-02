import{r as u,j as e,a as S}from"./iframe-Crov0WQz.js";import{T as t}from"./TextField-08-w4XG5.js";import{B as d}from"./Box-BG0wW1Gw.js";import"./preload-helper-C1FmrZbK.js";import"./TextField-DoWg8ST_.js";import"./styled-Iiak7Ogq.js";import"./generateUtilityClasses-YSREvbxX.js";import"./useFormControl-nQOCEbZr.js";import"./TransitionGroupContext-D_iDfzVR.js";import"./Modal-Ckwnu49q.js";import"./utils-DmCjym0s.js";import"./index-DKz44-9c.js";import"./useTheme-B_goZ4qo.js";import"./Paper-Dqj2J0bD.js";import"./createSvgIcon-YDz-o7-b.js";const z={title:"Inputs/TextField",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},error:{control:"boolean"},errorText:{control:"text"},disabled:{control:"boolean"},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"\nA custom text input built on top of MUI's `<TextField>`, supporting label, error states, and all standard props.\n\nUse `error` and `errorText` to display validation messages.\n        "}}}},n={args:{label:"Full Name",placeholder:"Enter your name",error:!1,errorText:"This field is required"},render:r=>{const[a,o]=u.useState("");return e(d,{sx:{width:300},children:e(t,{...r,value:a,onChange:s=>o(s.target.value)})})}},l={args:{label:"Multiline Input",placeholder:"type anything that needs a lot of space in here",error:!1,multiline:!0,rows:10},render:r=>{const[a,o]=u.useState("");return e(d,{sx:{width:800},children:e(t,{...r,value:a,onChange:s=>o(s.target.value)})})}},i={parameters:{docs:{description:{story:"The `helperText` prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights."}}},render:r=>S(d,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:[e(t,{value:" ",helperText:"This is a helper text",label:"TextField"}),e(t,{value:" ",label:"TextField"})]})},p={args:{label:"Title",error:!0,errorText:"Something went wrong, please try again."},parameters:{docs:{description:{story:"The `error` prop toggles the error state. The `helperText` prop is used to display the `errorText`, providing feedback to the user about the error"}}},render:r=>{const[a,o]=u.useState("");return e(d,{sx:{width:300},children:e(t,{...r,value:a,onChange:s=>o(s.target.value)})})}};var c,h,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var m,g,T;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(F=(w=p.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const A=["Default","MultiLine","HelperText","ErrorMessage"];export{n as Default,p as ErrorMessage,i as HelperText,l as MultiLine,A as __namedExportsOrder,z as default};
