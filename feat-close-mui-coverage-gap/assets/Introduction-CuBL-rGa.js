import{j as e}from"./iframe-QjimQxGJ.js";import{u as i,M as o}from"./blocks-vWae7niR.js";import"./preload-helper-C1FmrZbK.js";import"./index-C895Ui_J.js";function s(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Getting started/Introduction"}),`
`,e.jsx(n.h1,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@telicent-oss/ds"})," is Telicent's design system: the curated set of components, tokens, and patterns Telicent's frontends are built on. It's public, open source, and used by external adopters as well as internal apps — treat it as a product, not internal plumbing."]}),`
`,e.jsx(n.h2,{id:"philosophy",children:"Philosophy"}),`
`,e.jsxs(n.p,{children:["The DS follows GOV UK's model: components are ",e.jsx(n.strong,{children:"curated, not passthrough"}),". Every export exists because a real use case has been evidenced across multiple apps, and every visual decision is made once here so consuming apps don't reimplement — or diverge on — it. Autocomplete on ",e.jsx(n.code,{children:"@telicent-oss/ds"})," is a curation signal: everything shown is opinionated, tested, and endorsed."]}),`
`,e.jsxs(n.p,{children:["The DS builds on top of MUI, but it isn't an alias for MUI. Individual thin MUI wrappers are fine as a first-pass shape (e.g. ",e.jsx(n.code,{children:"Alert"}),", ",e.jsx(n.code,{children:"Skeleton"}),", the ",e.jsx(n.code,{children:"Table"})," family); wholesale re-export of the MUI surface is not. If an app needs something the DS hasn't shipped, the answer is a targeted DS addition — see the ",e.jsx(n.em,{children:"Using MUI directly"})," page."]}),`
`,e.jsx(n.h2,{id:"where-to-go-next",children:"Where to go next"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Install"})," — add the DS to your app and get it rendering."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"MUI dependencies"})," — which MUI versions the DS is built against, when to declare MUI in your own ",e.jsx(n.code,{children:"package.json"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Using MUI directly"})," — the escape hatch for when the DS doesn't have what you need yet, and how to graduate that use into the DS."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theming"})," — light/dark, custom theme colours ",e.jsx(n.em,{children:"(coming soon)"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"contributing-to-the-ds",children:"Contributing to the DS"}),`
`,e.jsxs(n.p,{children:["The DS grows when apps need something it doesn't have. If you're reaching for MUI directly, file a Jira ticket so the DS can absorb the pattern — details on the ",e.jsx(n.em,{children:"Using MUI directly"})," page."]})]})}function c(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{c as default};
