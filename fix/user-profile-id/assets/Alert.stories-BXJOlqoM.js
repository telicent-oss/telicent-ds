import{r as w,u as C,_ as B,j as P,c as W,a as r,b as d,U as S}from"./iframe-DuvuyOYT.js";import{A as t}from"./Alert-BZ_em7ms.js";import{g as E,c as R}from"./generateUtilityClass-DYVh7KgR.js";import{g as j}from"./generateUtilityClasses-g9ufi11G.js";import{c as _}from"./composeClasses-fLhin0tj.js";import{s as N}from"./styled-Cho-jsTU.js";import{T as L}from"./Typography-DktY0xgL.js";import{u as H}from"./useTheme-DvEY6SKk.js";import"./preload-helper-C1FmrZbK.js";import"./useSlot-C-CG0yuW.js";import"./resolveComponentProps-3edEfYXu.js";import"./TransitionGroupContext-hN8qFaVQ.js";import"./createSvgIcon-D8oPFoN7.js";import"./SvgIcon-3Tw63ijk.js";import"./IconButton-rZ6cns_p.js";import"./ButtonBase-B-XK-vT0.js";import"./Paper-DUkfPqTN.js";import"./extendSxProp-JkKasx3H.js";function O(e){return E("MuiAlertTitle",e)}j("MuiAlertTitle",["root"]);const z=["className"],F=e=>{const{classes:s}=e;return _({root:["root"]},O,s)},J=N(L,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),q=w.forwardRef(function(s,c){const l=C({props:s,name:"MuiAlertTitle"}),{className:U}=l,M=B(l,z),m=l,b=F(m);return P.jsx(J,W({gutterBottom:!0,component:"div",ownerState:m,ref:c,className:R(b.root,U)},M))}),ce={title:"Feedback/Alert",component:t},o={args:{severity:"info",children:"This is an alert imported from @telicent-oss/ds."},parameters:{docs:{description:{story:"Thin re-export of MUI Alert. Imported via `import { Alert } from '@telicent-oss/ds'` so it runs against DS's bundled MUI copy and picks up the DS theme."}}},render:e=>r(t,{...e})},i={args:{severity:"warning"},parameters:{docs:{description:{story:'Compose `AlertTitle` inside `Alert` to give the alert a heading; body copy sits below as `Alert` children. `AlertTitle` is exported alongside `Alert` — `import { Alert, AlertTitle } from "@telicent-oss/ds"`.'}}},render:e=>d(t,{...e,children:[r(q,{children:"Heads up"}),"More detail about the alert goes here as children of Alert."]})},D=()=>{const e=H();return r("pre",{style:{margin:0,fontSize:12},children:JSON.stringify({mode:e.palette.mode,"background.paper":e.palette.background.paper,"text.primary":e.palette.text.primary},null,2)})},n={parameters:{docs:{description:{story:"Renders Alert inside `<UIThemeProvider dark theme='AdminBlue'>`. If `mode` prints `dark`, `background.paper` is dark, and the alert itself renders on the dark surface, the DS-imported Alert is reading DS's theme correctly — confirming the wrapper-import path fixes the consumer-app dual-MUI issue."}}},render:()=>r(S,{dark:!0,theme:"AdminBlue",children:d("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:12},children:[r(D,{}),r(t,{severity:"info",children:"Info alert (dark mode)"}),r(t,{severity:"success",children:"Success alert (dark mode)"}),r(t,{severity:"warning",children:"Warning alert (dark mode)"}),r(t,{severity:"error",children:"Error alert (dark mode)"})]})})},a={parameters:{docs:{description:{story:"Same diagnostic under light mode for comparison."}}},render:()=>r(S,{theme:"AdminBlue",children:d("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:12},children:[r(D,{}),r(t,{severity:"info",children:"Info alert (light mode)"}),r(t,{severity:"success",children:"Success alert (light mode)"}),r(t,{severity:"warning",children:"Warning alert (light mode)"}),r(t,{severity:"error",children:"Error alert (light mode)"})]})})};var p,h,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    severity: "info",
    children: "This is an alert imported from @telicent-oss/ds."
  },
  parameters: {
    docs: {
      description: {
        story: "Thin re-export of MUI Alert. Imported via \`import { Alert } from '@telicent-oss/ds'\` so it runs against DS's bundled MUI copy and picks up the DS theme."
      }
    }
  },
  render: args => <Alert {...args} />
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,A,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    severity: "warning"
  },
  parameters: {
    docs: {
      description: {
        story: "Compose \`AlertTitle\` inside \`Alert\` to give the alert a heading; body copy sits below as \`Alert\` children. \`AlertTitle\` is exported alongside \`Alert\` — \`import { Alert, AlertTitle } from \\"@telicent-oss/ds\\"\`."
      }
    }
  },
  render: args => <Alert {...args}>
      <AlertTitle>Heads up</AlertTitle>
      More detail about the alert goes here as children of Alert.
    </Alert>
}`,...(f=(A=i.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var y,v,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Renders Alert inside \`<UIThemeProvider dark theme='AdminBlue'>\`. If \`mode\` prints \`dark\`, \`background.paper\` is dark, and the alert itself renders on the dark surface, the DS-imported Alert is reading DS's theme correctly — confirming the wrapper-import path fixes the consumer-app dual-MUI issue."
      }
    }
  },
  render: () => <UIThemeProvider dark theme="AdminBlue">
      <div style={{
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <Diag />
        <Alert severity="info">Info alert (dark mode)</Alert>
        <Alert severity="success">Success alert (dark mode)</Alert>
        <Alert severity="warning">Warning alert (dark mode)</Alert>
        <Alert severity="error">Error alert (dark mode)</Alert>
      </div>
    </UIThemeProvider>
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var k,x,I;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Same diagnostic under light mode for comparison."
      }
    }
  },
  render: () => <UIThemeProvider theme="AdminBlue">
      <div style={{
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <Diag />
        <Alert severity="info">Info alert (light mode)</Alert>
        <Alert severity="success">Success alert (light mode)</Alert>
        <Alert severity="warning">Warning alert (light mode)</Alert>
        <Alert severity="error">Error alert (light mode)</Alert>
      </div>
    </UIThemeProvider>
}`,...(I=(x=a.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const me=["Basic","WithTitle","DarkModeThemingCheck","LightModeThemingCheck"];export{o as Basic,n as DarkModeThemingCheck,a as LightModeThemingCheck,i as WithTitle,me as __namedExportsOrder,ce as default};
