import{j as e}from"./iframe-B8lru9Ox.js";import{u as r,M as d}from"./blocks-yWY1alge.js";import"./preload-helper-C1FmrZbK.js";import"./index-BhBzwTqv.js";const l=[{pkg:"@mui/material",range:"^5.16.7",purpose:"MUI Material — core components."},{pkg:"@mui/lab",range:"5.0.0-alpha.170",purpose:"MUI Lab — experimental components used by DS internals."},{pkg:"@mui/x-date-pickers",range:"^8.9.2",purpose:"Backs the DS's DatePicker and DateTimePicker."},{pkg:"@emotion/react",range:"^11.10.6",purpose:"MUI's styling engine."},{pkg:"@emotion/styled",range:"^11.10.6",purpose:"Emotion's styled-components API, companion to @emotion/react."}];function t(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Docs/Getting started/MUI dependencies"}),`
`,e.jsx(n.h1,{id:"mui-dependencies",children:"MUI dependencies"}),`
`,e.jsx(n.p,{children:"The DS is built on top of MUI. This page pins down which MUI (and emotion) versions the current DS release was built and tested against, so you can align your app's install and diagnose any drift."}),`
`,e.jsxs(n.p,{children:["The table below is generated at build time from ",e.jsx(n.code,{children:"package.json"}),", so it always matches the current release — no manual updates."]}),`
`,e.jsx(n.h2,{id:"versions-the-ds-is-built-against",children:"Versions the DS is built against"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"1px solid rgba(128,128,128,0.4)",textAlign:"left"},children:[e.jsx("th",{style:{padding:"8px 12px"},children:"Package"}),e.jsx("th",{style:{padding:"8px 12px"},children:"DS range"}),e.jsx("th",{style:{padding:"8px 12px"},children:"Purpose"})]})}),e.jsx("tbody",{children:l.map(({pkg:i,range:a,purpose:o})=>e.jsxs("tr",{style:{borderBottom:"1px solid rgba(128,128,128,0.15)"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:i})}),e.jsx("td",{style:{padding:"8px 12px"},children:e.jsx("code",{children:a})}),e.jsx("td",{style:{padding:"8px 12px"},children:o})]},i))})]}),`
`,e.jsxs(n.h2,{id:"do-i-need-these-in-my-packagejson",children:["Do I need these in my ",e.jsx(n.code,{children:"package.json"}),"?"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Usually not."})," The MUI and emotion packages sit in the DS's own ",e.jsx(n.code,{children:"dependencies"})," and are also declared as ",e.jsx(n.em,{children:"optional"})," peer dependencies. That means:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your app doesn't declare MUI"})," → the package manager installs the version DS depends on. Single instance in the tree."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your app does declare MUI"})," (because it uses ",e.jsx(n.code,{children:"@mui/x-data-grid"}),", ",e.jsx(n.code,{children:"@mui/x-tree-view"}),", or any lib that has MUI as a peer dep) → the peer semantics kick in, and your app's copy is used by both DS and the transitive consumer. Still a single instance."]}),`
`]}),`
`,e.jsxs(n.p,{children:['The "single instance" guarantee is the whole point. Two MUI copies at different versions in the same tree causes ',e.jsx(n.code,{children:"useTheme()"})," to return the wrong palette (or nothing), Portals to render in the wrong place, and emotion to duplicate its style cache. Matching the DS's declared range prevents that."]}),`
`,e.jsx(n.h2,{id:"when-do-i-declare-mui-myself",children:"When do I declare MUI myself?"}),`
`,e.jsxs(n.p,{children:["Add it to your ",e.jsx(n.code,{children:"package.json"})," whenever your app:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Imports directly from ",e.jsx(n.code,{children:"@mui/x-data-grid"}),", ",e.jsx(n.code,{children:"@mui/x-tree-view"}),", ",e.jsx(n.code,{children:"@mui/x-date-pickers"})," (beyond what DS wraps), or any other MUI-X package."]}),`
`,e.jsx(n.li,{children:"Uses a third-party library (a MUI-based charting kit, a react-hook-form adapter, an admin scaffold) that lists MUI as a peer dep."}),`
`,e.jsx(n.li,{children:"Needs to pin MUI at a specific version — for a security patch, a bug fix, or coordination with another package."}),`
`]}),`
`,e.jsx(n.p,{children:"In those cases, match the DS's version range. Deviating produces two MUI copies in the tree and re-opens the theme-context and emotion-cache duplication issues."}),`
`,e.jsx(n.h2,{id:"diagnosing-drift",children:"Diagnosing drift"}),`
`,e.jsx(n.p,{children:"When something themes-related breaks in an app and DS components look off, check first:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Look at your app's resolved ",e.jsx(n.code,{children:"@mui/material"})," version — ",e.jsx(n.code,{children:"yarn why @mui/material"})," or ",e.jsx(n.code,{children:"npm ls @mui/material"}),"."]}),`
`,e.jsx(n.li,{children:"Compare against the DS range in the table above."}),`
`,e.jsxs(n.li,{children:["If the versions are compatible but you still see two copies in the tree, add a ",e.jsx(n.code,{children:"resolutions"})," entry pinning to a single version."]}),`
`]}),`
`,e.jsxs(n.p,{children:["A future ",e.jsx(n.code,{children:"verifyDependencies()"})," helper (planned) will surface this at boot time in dev mode, so you don't have to remember to check."]}),`
`,e.jsx(n.h2,{id:"whats-next",children:"What's next"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Using MUI directly"})," — for when the DS doesn't have the component you need yet."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theming"})," — light/dark and custom themes ",e.jsx(n.em,{children:"(coming soon)"}),"."]}),`
`]})]})}function m(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{m as default};
