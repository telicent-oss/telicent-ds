import{a as S,j as e}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as u}from"./index-Dl6G-zuu.js";import{T as t}from"./TextField-um4XWDOw.js";import{B as d}from"./Box-D_PqCh9-.js";import"./jsx-runtime-DMAvRu52.js";import"./TextField-BXF1k-T7.js";import"./defaultTheme-BO-GVTvG.js";import"./styled-CxLuQ4yi.js";import"./generateUtilityClasses-BrkKsHLY.js";import"./DefaultPropsProvider-CqwcgZRv.js";import"./useId-CkA8naEk.js";import"./Select-B3yJvOVt.js";import"./Menu-6SEWvgOm.js";import"./index-CfJV9iyf.js";import"./Popover-BWwK9c_C.js";import"./useTheme-KUAcGPiB.js";import"./useTheme-Pepcoth9.js";import"./utils-C8sSVwFJ.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-B0kOWIl9.js";import"./Paper-CYPvuqVC.js";import"./createSvgIcon-DtNep-FY.js";import"./SvgIcon-CLvgKtsF.js";import"./GlobalStyles-Dgqu9ZBa.js";import"./GlobalStyles-DUEYx911.js";const Y={title:"Inputs/TextField",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},error:{control:"boolean"},errorText:{control:"text"},disabled:{control:"boolean"},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"\nA custom text input built on top of MUI's `<TextField>`, supporting label, error states, and all standard props.\n\nUse `error` and `errorText` to display validation messages.\n        "}}}},n={args:{label:"Full Name",placeholder:"Enter your name",error:!1,errorText:"This field is required"},render:r=>{const[a,o]=u.useState("");return e(d,{sx:{width:300},children:e(t,{...r,value:a,onChange:s=>o(s.target.value)})})}},l={args:{label:"Miltiline Input",placeholder:"type anything that needs a lot of space in here",error:!1,multiline:!0,rows:10},render:r=>{const[a,o]=u.useState("");return e(d,{sx:{width:800},children:e(t,{...r,value:a,onChange:s=>o(s.target.value)})})}},i={parameters:{docs:{description:{story:"The `helperText` prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights."}}},render:r=>S(d,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:[e(t,{value:" ",helperText:"This is a helper text",label:"TextField"}),e(t,{value:" ",label:"TextField"})]})},p={args:{label:"Title",error:!0,errorText:"Something went wrong, please try again."},parameters:{docs:{description:{story:"The `error` prop toggles the error state. The `helperText` prop is used to display the `errorText`, providing feedback to the user about the error"}}},render:r=>{const[a,o]=u.useState("");return e(d,{sx:{width:300},children:e(t,{...r,value:a,onChange:s=>o(s.target.value)})})}};var c,h,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,g,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Miltiline Input",
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
}`,...(F=(w=p.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const Z=["Default","MultiLine","HelperText","ErrorMessage"];export{n as Default,p as ErrorMessage,i as HelperText,l as MultiLine,Z as __namedExportsOrder,Y as default};
