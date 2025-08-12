import{j as e,a as I}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as u}from"./index-Dl6G-zuu.js";import{T as V}from"./TextField-Cugujejn.js";import{B as d}from"./Box-Dhn_9KCB.js";import"./jsx-runtime-DMAvRu52.js";import"./defaultTheme-DzLjz-dB.js";import"./styled-gOU_XONt.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./useId-CkA8naEk.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Popover-DyPBubII.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./utils-BgVWvv5k.js";import"./index-B0kOWIl9.js";import"./Paper-BG42kFkz.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./Menu-BldO7eLG.js";import"./index-BbVSaS1S.js";import"./createSvgIcon-MUYTbX0p.js";import"./SvgIcon-ByXbI411.js";const s=({errorText:r="",...t})=>{const{value:a,label:o,error:c,helperText:B}=t;return e(V,{value:a,label:o,error:c,helperText:c?r:B,...t})};s.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{errorText:{defaultValue:{value:'""',computed:!1},required:!1}}};const Y={title:"Inputs/Input Text",component:s,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},error:{control:"boolean"},errorText:{control:"text"},disabled:{control:"boolean"},size:{control:"select",options:["small","medium"]}},parameters:{docs:{description:{component:"\nA custom text input built on top of MUI's `<TextField>`, supporting label, error states, and all standard props.\n\nUse `error` and `errorText` to display validation messages.\n        "}}}},n={args:{label:"Full Name",placeholder:"Enter your name",error:!1,errorText:"This field is required"},render:r=>{const[t,a]=u.useState("");return e(d,{sx:{width:300},children:e(s,{...r,value:t,onChange:o=>a(o.target.value)})})}},l={args:{label:"Miltiline Input",placeholder:"type anything that needs a lot of space in here",error:!1,multiline:!0,rows:10},render:r=>{const[t,a]=u.useState("");return e(d,{sx:{width:800},children:e(s,{...r,value:t,onChange:o=>a(o.target.value)})})}},i={parameters:{docs:{description:{story:"The `helperText` prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights."}}},render:r=>I(d,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:[e(s,{value:" ",helperText:"This is a helper text",label:"TextField"}),e(s,{value:" ",label:"TextField"})]})},p={args:{label:"Title",error:!0,errorText:"Something went wrong, please try again."},parameters:{docs:{description:{story:"The `error` prop toggles the error state. The `helperText` prop is used to display the `errorText`, providing feedback to the user about the error"}}},render:r=>{const[t,a]=u.useState("");return e(d,{sx:{width:300},children:e(s,{...r,value:t,onChange:o=>a(o.target.value)})})}};var h,m,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,T,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(T=l.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var v,y,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,F,S;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(F=p.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const Z=["Default","MultiLine","HelperText","ErrorMessage"];export{n as Default,p as ErrorMessage,i as HelperText,l as MultiLine,Z as __namedExportsOrder,Y as default};
