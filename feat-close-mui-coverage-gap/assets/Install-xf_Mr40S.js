import{j as e}from"./iframe-COFs_UtR.js";import{u as d,M as i}from"./blocks-Cuv1srfD.js";import"./preload-helper-C1FmrZbK.js";import"./index-VPMfSmH7.js";function t(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Getting started/Install"}),`
`,e.jsx(n.h1,{id:"install",children:"Install"}),`
`,e.jsx(n.p,{children:"Add the DS to your app:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @telicent-oss/ds
`})}),`
`,e.jsx(n.p,{children:"Or via npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @telicent-oss/ds
`})}),`
`,e.jsxs(n.p,{children:["That's it for most apps — MUI, emotion, and everything else the DS needs come in transitively as dependencies of ",e.jsx(n.code,{children:"@telicent-oss/ds"}),". You don't declare them in your own ",e.jsx(n.code,{children:"package.json"}),"."]}),`
`,e.jsx(n.h2,{id:"do-i-need-to-install-mui-myself",children:"Do I need to install MUI myself?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"No — unless your app also uses a MUI-based library directly"})," (e.g. ",e.jsx(n.code,{children:"@mui/x-data-grid"}),", ",e.jsx(n.code,{children:"@mui/x-tree-view"}),", a MUI-based charting kit, or any third-party lib that lists MUI as a peer dep)."]}),`
`,e.jsxs(n.p,{children:["In that case, add MUI (and emotion) to your own ",e.jsx(n.code,{children:"package.json"})," at a version range compatible with what the DS declares — the package manager will dedupe DS's and your copy onto a single instance:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @telicent-oss/ds @mui/material @emotion/react @emotion/styled
`})}),`
`,e.jsxs(n.p,{children:["The DS declares MUI as ",e.jsx(n.strong,{children:"optional peer"})," (",e.jsx(n.code,{children:"peerDependenciesMeta.optional"}),"), which means:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If your app declares MUI, everyone in the tree dedupes onto your version. Single-instance guarantee holds."}),`
`,e.jsx(n.li,{children:"If your app doesn't declare MUI, DS's own dependency provides it. Also single instance."}),`
`]}),`
`,e.jsxs(n.p,{children:["The one thing you must avoid: declaring a MUI version ",e.jsx(n.em,{children:"incompatible"})," with DS's peer range. That'll produce two copies in your ",e.jsx(n.code,{children:"node_modules"})," and re-open the ThemeContext duplication risk. When in doubt, match the DS's range exactly."]}),`
`,e.jsx(n.h2,{id:"import-the-styles",children:"Import the styles"}),`
`,e.jsx(n.p,{children:"Import the DS stylesheet once at your app entry:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import "@telicent-oss/ds/dist/style.css";
import "@telicent-oss/ds/dist/fontawesome.css";
`})}),`
`,e.jsx(n.p,{children:"FontAwesome icons render only if the second file is loaded."}),`
`,e.jsx(n.h2,{id:"provider-setup",children:"Provider setup"}),`
`,e.jsxs(n.p,{children:["Wrap your app in ",e.jsx(n.code,{children:"UIThemeProvider"}),". It supplies the MUI theme and ",e.jsx(n.code,{children:"CssBaseline"})," internally — don't add your own ",e.jsx(n.code,{children:"ThemeProvider"})," or ",e.jsx(n.code,{children:"CssBaseline"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { UIThemeProvider } from "@telicent-oss/ds";

const App = () => (
  <UIThemeProvider theme="DataNavy" dark={false}>
    <YourApp />
  </UIThemeProvider>
);
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"theme"})," (required): one of ",e.jsx(n.code,{children:'"DataNavy"'}),", ",e.jsx(n.code,{children:'"DocumentPink"'}),", ",e.jsx(n.code,{children:'"GraphOrange"'}),", ",e.jsx(n.code,{children:'"AdminBlue"'}),", ",e.jsx(n.code,{children:'"Blank"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dark"})," (optional, default ",e.jsx(n.code,{children:"false"}),"): use the dark palette. Currently a static prop — a runtime toggle is on the roadmap."]}),`
`]}),`
`,e.jsx(n.h2,{id:"reading-theme-values-in-your-own-code",children:"Reading theme values in your own code"}),`
`,e.jsxs(n.p,{children:["When you write your own components alongside the DS, read colours and tokens through ",e.jsx(n.code,{children:"useExtendedTheme"}),". This is the sanctioned way to set a colour — use it instead of hardcoded hex values."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useExtendedTheme } from "@telicent-oss/ds";

const MyComponent = () => {
  const theme = useExtendedTheme();
  return <div style={{ color: theme.palette.primary.main }}>…</div>;
};
`})}),`
`,e.jsxs(n.p,{children:["Palette keys include ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"tertiary"}),", ",e.jsx(n.code,{children:"text"}),", and ",e.jsx(n.code,{children:"background"}),". Full palette structure is available on the ",e.jsx(n.code,{children:"theme"})," object at runtime."]}),`
`,e.jsx(n.h2,{id:"whats-next",children:"What's next"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"MUI dependencies"})," — which MUI versions the DS is built against, when to add MUI to your own ",e.jsx(n.code,{children:"package.json"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Using MUI directly"})," — for when the DS doesn't have the component you need yet."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theming"})," — light/dark and custom themes ",e.jsx(n.em,{children:"(coming soon)"}),"."]}),`
`]})]})}function a(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
