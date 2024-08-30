import{j as h}from"./jsx-runtime-Nms4Y4qS.js";import{c as S,f as T,b as R,g as $,s as j,a as G}from"./styled-jK8V3O51.js";import{d as P,b as f,_ as I}from"./createTheme-CnHyYZiq.js";import{_ as l}from"./extends-CCbyfPlC.js";import{r as V}from"./index-BwDkhjyp.js";import{s as z}from"./styled-DIAKr2Jf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";const M=["className","component","disableGutters","fixed","maxWidth","classes"],N=P(),L=z("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,n[`maxWidth${f(String(o.maxWidth))}`],o.fixed&&n.fixed,o.disableGutters&&n.disableGutters]}}),U=t=>T({props:t,name:"MuiContainer",defaultTheme:N}),q=(t,n)=>{const o=s=>$(n,s),{classes:u,fixed:p,disableGutters:x,maxWidth:e}=t,a={root:["root",e&&`maxWidth${f(String(e))}`,p&&"fixed",x&&"disableGutters"]};return R(a,o,u)};function D(t={}){const{createStyledComponent:n=L,useThemeProps:o=U,componentName:u="MuiContainer"}=t,p=n(({theme:e,ownerState:a})=>l({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:a})=>a.fixed&&Object.keys(e.breakpoints.values).reduce((s,i)=>{const d=i,r=e.breakpoints.values[d];return r!==0&&(s[e.breakpoints.up(d)]={maxWidth:`${r}${e.breakpoints.unit}`}),s},{}),({theme:e,ownerState:a})=>l({},a.maxWidth==="xs"&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[e.breakpoints.up(a.maxWidth)]:{maxWidth:`${e.breakpoints.values[a.maxWidth]}${e.breakpoints.unit}`}}));return V.forwardRef(function(a,s){const i=o(a),{className:d,component:r="div",disableGutters:W=!1,fixed:k=!1,maxWidth:v="lg"}=i,w=I(i,M),b=l({},i,{component:r,disableGutters:W,fixed:k,maxWidth:v}),_=q(b,u);return h.jsx(p,l({as:r,ownerState:b,className:S(_.root,d),ref:s},w))})}const E=D({createStyledComponent:j("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,n[`maxWidth${f(String(o.maxWidth))}`],o.fixed&&n.fixed,o.disableGutters&&n.disableGutters]}}),useThemeProps:t=>G({props:t,name:"MuiContainer"})}),c=t=>h.jsx(E,{...t});try{c.displayName="Container",c.__docgenInfo={description:"",displayName:"Container",props:{disablePadding:{defaultValue:null,description:"If true, the left and right padding is removed.",name:"disablePadding",required:!1,type:{name:"boolean"}},fixed:{defaultValue:null,description:`Set the maxWidth to match the minWidth of the current breakpoint. Useful
when the design is set for fixed sizes instead of trying to accommodate a
fluid viewport. It's fluid by default`,name:"fixed",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:`Sets the maxWidth of the container. The container will grow with the size
of the screen. Set to false to disable maxWidth`,name:"maxWidth",required:!1,type:{name:'false | "xs" | "sm" | "lg" | "xl" | "md"'}}}}}catch{}const X={component:c},m={argTypes:{maxWidth:{control:"select",options:[!1,"xs","sm","md","lg","xl"],description:"Defines the maximum width of the container.",table:{type:{summary:'false | "xs" | "sm" | "md" | "lg" | "xl"'},defaultValue:{summary:"lg"}}},fixed:{control:"boolean",description:"Set the max-width to match the min-width of the current breakpoint.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},parameters:{docs:{description:{story:"The Container component centers your content horizontally. It's the most basic layout element and often used for the main layout orientation. It constrains the content width which is adjustable via the 'maxWidth' prop."}}},render:t=>h.jsx(c,{...t,style:{backgroundColor:"grey",height:140}})};var g,y,C;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    maxWidth: {
      control: "select",
      options: [false, "xs", "sm", "md", "lg", "xl"],
      description: "Defines the maximum width of the container.",
      table: {
        type: {
          summary: 'false | "xs" | "sm" | "md" | "lg" | "xl"'
        },
        defaultValue: {
          summary: "lg"
        }
      }
    },
    fixed: {
      control: "boolean",
      description: "Set the max-width to match the min-width of the current breakpoint.",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`The Container component centers your content horizontally. It's the most basic layout element and often used for the main layout orientation. It constrains the content width which is adjustable via the 'maxWidth' prop.\`
      }
    }
  },
  render: args => <Container {...args} style={{
    backgroundColor: "grey",
    height: 140
  }} />
}`,...(C=(y=m.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const Y=["Basic"];export{m as Basic,Y as __namedExportsOrder,X as default};
