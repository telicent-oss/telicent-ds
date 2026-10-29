import{a as e,b as a,U as k,u as I}from"./iframe-Bm3hXUOR.js";import{A as r}from"./Alert-FBw1yGft.js";import{A as x}from"./AlertTitle-WNZQFDuJ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./useSlot-Dr-m60mq.js";import"./resolveComponentProps-B_u2Bd7V.js";import"./TransitionGroupContext-TroGB69i.js";import"./createSvgIcon-CY9Fp0_O.js";import"./SvgIcon-BeWTLv9H.js";import"./styled-DyULGS0b.js";import"./extendSxProp-BuZx_F0_.js";import"./composeClasses-fLhin0tj.js";import"./Close-DwHyc7oX.js";import"./IconButton-CErjrx2_.js";import"./ButtonBase-B90bUUd9.js";import"./Paper-pWUzODlp.js";import"./Typography-IeSSUSnG.js";const F={title:"Feedback/Alert",component:r},i={args:{severity:"info",children:"This is an alert imported from @telicent-oss/ds."},parameters:{docs:{description:{story:"Thin re-export of MUI Alert. Imported via `import { Alert } from '@telicent-oss/ds'` so it runs against DS's bundled MUI copy and picks up the DS theme."}}},render:t=>e(r,{...t})},n={args:{severity:"warning"},parameters:{docs:{description:{story:'Compose `AlertTitle` inside `Alert` to give the alert a heading; body copy sits below as `Alert` children. `AlertTitle` is exported alongside `Alert` — `import { Alert, AlertTitle } from "@telicent-oss/ds"`.'}}},render:t=>a(r,{...t,children:[e(x,{children:"Heads up"}),"More detail about the alert goes here as children of Alert."]})},T=()=>{const t=I();return e("pre",{style:{margin:0,fontSize:12},children:JSON.stringify({mode:t.palette.mode,"background.paper":t.palette.background.paper,"text.primary":t.palette.text.primary},null,2)})},s={parameters:{docs:{description:{story:"Renders Alert inside `<UIThemeProvider dark theme='AdminBlue'>`. If `mode` prints `dark`, `background.paper` is dark, and the alert itself renders on the dark surface, the DS-imported Alert is reading DS's theme correctly — confirming the wrapper-import path fixes the consumer-app dual-MUI issue."}}},render:()=>e(k,{dark:!0,theme:"AdminBlue",children:a("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:12},children:[e(T,{}),e(r,{severity:"info",children:"Info alert (dark mode)"}),e(r,{severity:"success",children:"Success alert (dark mode)"}),e(r,{severity:"warning",children:"Warning alert (dark mode)"}),e(r,{severity:"error",children:"Error alert (dark mode)"})]})})},o={parameters:{docs:{description:{story:"Same diagnostic under light mode for comparison."}}},render:()=>e(k,{theme:"AdminBlue",children:a("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:12},children:[e(T,{}),e(r,{severity:"info",children:"Info alert (light mode)"}),e(r,{severity:"success",children:"Success alert (light mode)"}),e(r,{severity:"warning",children:"Warning alert (light mode)"}),e(r,{severity:"error",children:"Error alert (light mode)"})]})})},J=["Basic","WithTitle","DarkModeThemingCheck","LightModeThemingCheck"];var d,l,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,u,A;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(A=(u=s.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var y,f,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};export{i as Basic,s as DarkModeThemingCheck,o as LightModeThemingCheck,n as WithTitle,J as __namedExportsOrder,F as default};
