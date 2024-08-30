import{M as l,b as t}from"./index-CUF_hEFd.js";import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as r}from"./index-BnapxFVb.js";import"./iframe-Bqo5eaNn.js";import"../sb-preview/runtime.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./index-B8XB3FuZ.js";import"./index-C2eUe6cH.js";import"./extends-CCbyfPlC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-CWLWFqC4.js";import"./index-DrFu-skq.js";function i(s){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h3:"h3",h4:"h4",ul:"ul",li:"li",blockquote:"blockquote",pre:"pre"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design System/Ontology styles"}),`
`,e.jsx(n.h1,{id:"ontology-styles",children:"Ontology styles"}),`
`,e.jsxs(n.p,{children:[`We want Design System components to fetch backend styles the same way as the
hosting app. This is achieved by exposing the `,e.jsx(n.code,{children:"ontologyService"}),` prop to the
`,e.jsx(n.code,{children:"DSProviders"}),` component. This allows styles from the ontology to be fetched.
Refer to the `,e.jsx(n.a,{href:"https://github.com/telicent-oss/js-ontology-lib",target:"_blank",rel:"nofollow noopener noreferrer",children:"js-ontology-lib"}),`
for instructions on how to install the package.`]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h4,{id:"options",children:"Options"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"service: OntologyService"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Optional"}),`
`,e.jsx(n.li,{children:"the OntologyService instance to provide"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t,{dark:!0,code:`
import { DSProviders } from "@telicent-oss/ds";

const ontologyService = new OntologyService("http://localhost:3030/", "ontology");

const App = () => (

<DSProviders ontologyService={ontologyService}>
  <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#GalaxySector" />
</DSProviders>
) `}),`
`,e.jsx(n.h3,{id:"useontologystyles",children:"useOntologyStyles"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useOntologyStyles"}),` hook returns the ontology styles and provides function
to find a particular icon style.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Note to use this hook, you must use the DSProviders component and provide the
ontology service`}),`
`]}),`
`,e.jsx(t,{dark:!0,code:`

import { useOntologyStyles } from "@telicent-oss/ds";

const {
styles,
findIcon
} = useOntologyStyles();
`}),`
`,e.jsx(n.h4,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"styles: IconStyle[]"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"findIcon: (classUri: string) => IconStyle"})}),`
`]}),`
`,e.jsx(n.h3,{id:"types-reference",children:"Types Reference"}),`
`,e.jsx(n.h4,{id:"iconstyle",children:"IconStyle"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`export type IconStyle = {
  classUri: string;
  backgroundColor: string;
  color: string;
  iconFallbackText: string;
  alt: string;
} & Partial<{
  faIcon: string;
  faUnicode: string;
  shape: string;
}>;
`})}),`
`,e.jsx(n.h4,{id:"fields",children:"Fields"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"classUri"}),": string",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Unique identifier."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"backgroundColor"}),": string",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hexcode colour values for background color."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"color"}),": string",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hexcode colour values for color."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"iconFallbackText"}),": string",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fallback text for a class (e.g. OSI - Open Streetmap Identifier)."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alt"}),": string",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Alternative text for icon. Should be used to improve accessibility (e.g.
OpenStreetmapIdentifier).`}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"faIcon?"}),": string",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Font awesome icon class (e.g. fa-regular fa-bolt-lightning)."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"faUnicode?"}),": string",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Font awesome icon unicode. Can be used as an alternative to faIcon."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"shape?"}),": string",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Class shape."}),`
`]}),`
`]}),`
`]})]})}function c(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const o={title:"Design System/Ontology styles",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:c};const I=["__page"];export{I as __namedExportsOrder,d as __page,o as default};
