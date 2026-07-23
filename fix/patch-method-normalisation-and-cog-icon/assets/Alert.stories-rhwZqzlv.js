import{j as e,a as u,U as f}from"./iframe-BqqKlwwa.js";import{A as r}from"./Alert-CxljligA.js";import{u as A}from"./useTheme-D5fnxfrf.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClass-C21e_TMF.js";import"./Close-KcKFZADQ.js";import"./resolveComponentProps-Cd0rbuoE.js";import"./TransitionGroupContext-DiVglu5Y.js";import"./createSvgIcon-1vjhxYae.js";import"./styled-DYH3NNtb.js";import"./generateUtilityClasses-CXTZVc4r.js";import"./IconButton-C0yfI_AJ.js";import"./ButtonBase-Bplzc8va.js";import"./Paper-CJpWpN4s.js";const C={title:"Feedback/Alert",component:r},i={args:{severity:"info",children:"This is an alert imported from @telicent-oss/ds."},parameters:{docs:{description:{story:"Thin re-export of MUI Alert. Imported via `import { Alert } from '@telicent-oss/ds'` so it runs against DS's bundled MUI copy and picks up the DS theme."}}},render:t=>e(r,{...t})},y=()=>{const t=A();return e("pre",{style:{margin:0,fontSize:12},children:JSON.stringify({mode:t.palette.mode,"background.paper":t.palette.background.paper,"text.primary":t.palette.text.primary},null,2)})},n={parameters:{docs:{description:{story:"Renders Alert inside `<UIThemeProvider dark theme='AdminBlue'>`. If `mode` prints `dark`, `background.paper` is dark, and the alert itself renders on the dark surface, the DS-imported Alert is reading DS's theme correctly — confirming the wrapper-import path fixes the consumer-app dual-MUI issue."}}},render:()=>e(f,{dark:!0,theme:"AdminBlue",children:u("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:12},children:[e(y,{}),e(r,{severity:"info",children:"Info alert (dark mode)"}),e(r,{severity:"success",children:"Success alert (dark mode)"}),e(r,{severity:"warning",children:"Warning alert (dark mode)"}),e(r,{severity:"error",children:"Error alert (dark mode)"})]})})},s={parameters:{docs:{description:{story:"Same diagnostic under light mode for comparison."}}},render:()=>e(f,{theme:"AdminBlue",children:u("div",{style:{padding:16,display:"flex",flexDirection:"column",gap:12},children:[e(y,{}),e(r,{severity:"info",children:"Info alert (light mode)"}),e(r,{severity:"success",children:"Success alert (light mode)"}),e(r,{severity:"warning",children:"Warning alert (light mode)"}),e(r,{severity:"error",children:"Error alert (light mode)"})]})})};var o,a,d;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(a=i.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var l,m,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,h,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const W=["Basic","DarkModeThemingCheck","LightModeThemingCheck"];export{i as Basic,n as DarkModeThemingCheck,s as LightModeThemingCheck,W as __namedExportsOrder,C as default};
