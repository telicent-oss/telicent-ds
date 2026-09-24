import{j as e}from"./iframe-COFs_UtR.js";import{u as i,M as o}from"./blocks-Cuv1srfD.js";import"./preload-helper-C1FmrZbK.js";import"./index-VPMfSmH7.js";function r(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Getting started/Using MUI directly"}),`
`,e.jsx(n.h1,{id:"using-mui-directly",children:"Using MUI directly"}),`
`,e.jsxs(n.p,{children:["Every app should aim for zero direct ",e.jsx(n.code,{children:"@mui/*"})," imports — everything through ",e.jsx(n.code,{children:"@telicent-oss/ds"}),". But the DS grows deliberately, one component at a time, and there will be gaps. This page is the escape hatch for those gaps: how to reach for MUI temporarily, how to keep that code style-consistent with the DS, and how to get it absorbed back into the DS."]}),`
`,e.jsx(n.h2,{id:"when-you-might-need-this",children:"When you might need this"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The DS doesn't yet ship a wrapper for the MUI component you need."}),`
`,e.jsx(n.li,{children:"The DS's wrapper doesn't yet cover the specific prop / variant / behaviour you need."}),`
`,e.jsx(n.li,{children:"You're prototyping in a POC (POCs are excluded from the lint rule anyway — this page applies to production apps)."}),`
`]}),`
`,e.jsxs(n.p,{children:["If none of the above is true, ",e.jsx(n.strong,{children:"the answer is not this page"})," — search the DS first, and if the component looks like it should exist but doesn't, still file a ticket rather than reaching for MUI."]}),`
`,e.jsx(n.h2,{id:"how-to-escape-the-lint-rule",children:"How to escape the lint rule"}),`
`,e.jsxs(n.p,{children:["Production apps ban direct ",e.jsx(n.code,{children:"@mui/*"})," imports via ",e.jsx(n.code,{children:"no-restricted-imports"}),". When you genuinely need one, escape ",e.jsx(n.em,{children:"narrowly"})," — one disable comment per import, tied to a Jira ticket:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// eslint-disable-next-line no-restricted-imports -- FE-1234: DS wrapper pending for Popover
import { Popover } from "@mui/material";
`})}),`
`,e.jsxs(n.p,{children:[`The Jira ID is not optional. It's what makes "how much drift is currently in the fleet" a `,e.jsx(n.code,{children:"grep"})," question rather than a folklore one:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`grep -rE "eslint-disable.*no-restricted-imports" src/
`})}),`
`,e.jsx(n.p,{children:"Every hit should have an accompanying open ticket. When the ticket ships, the disable comment gets removed with it."}),`
`,e.jsx(n.h2,{id:"keep-the-code-theme-consistent",children:"Keep the code theme-consistent"}),`
`,e.jsxs(n.p,{children:["The escape hatch is temporary — this MUI code will migrate to a DS wrapper as soon as one lands. Write it so that migration is a one-line import change, not a rewrite. That means: ",e.jsx(n.strong,{children:"no hardcoded colours, no hardcoded spacing, no ad-hoc theme values."})]}),`
`,e.jsxs(n.p,{children:["Read every visual token through ",e.jsx(n.code,{children:"useExtendedTheme"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// eslint-disable-next-line no-restricted-imports -- FE-1234: DS wrapper pending for Popover
import { Popover } from "@mui/material";
import { useExtendedTheme } from "@telicent-oss/ds";

const InfoPopover = ({ anchorEl, onClose, children }) => {
  const theme = useExtendedTheme();
  return (
    <Popover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={onClose}
      sx={{
        "& .MuiPopover-paper": {
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRadius: theme.shape.borderRadius,
        },
      }}
    >
      {children}
    </Popover>
  );
};
`})}),`
`,e.jsxs(n.p,{children:["When the DS ",e.jsx(n.code,{children:"Popover"})," wrapper ships, migration is:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- // eslint-disable-next-line no-restricted-imports -- FE-1234: DS wrapper pending for Popover
- import { Popover } from "@mui/material";
+ import { Popover } from "@telicent-oss/ds";
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"sx"})," block goes away — the DS wrapper handles it. The rest of your component doesn't change."]}),`
`,e.jsx(n.h2,{id:"filing-the-jira-ticket",children:"Filing the Jira ticket"}),`
`,e.jsx(n.p,{children:"Absorbing an escape hatch back into the DS starts with a ticket. Include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Which apps hand-roll this today"})," — grep the fleet for direct imports or repeated ",e.jsx(n.code,{children:"sx"})," blocks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Screenshot of the current rendering"})," — what the app looks like today with the escape-hatch code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"What the DS-owned version should do"})," — required props, defaults, variants, which theme tokens it should read."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Whether the underlying MUI component works off-theme"})," — if it does, the DS wrapper is a thin pass-through. If it needs palette or override work, note the theme keys involved."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["The Jira ID that appears in the app's ",e.jsx(n.code,{children:"eslint-disable"})," comment"]})," — so the DS team knows what will get unblocked when they ship."]}),`
`]}),`
`,e.jsx(n.p,{children:"File under the DS project in Jira. There's no automation — the DS team relies on the ticket showing up."}),`
`,e.jsx(n.h2,{id:"after-the-ds-ships-the-component",children:"After the DS ships the component"}),`
`,e.jsx(n.p,{children:"Once the DS wrapper lands and you upgrade to the release that includes it:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Change the import path from ",e.jsx(n.code,{children:"@mui/material"})," → ",e.jsx(n.code,{children:"@telicent-oss/ds"}),"."]}),`
`,e.jsxs(n.li,{children:["Remove the ",e.jsx(n.code,{children:"eslint-disable-next-line"})," comment."]}),`
`,e.jsxs(n.li,{children:["Delete any ",e.jsx(n.code,{children:"sx"})," overrides that the DS wrapper now handles internally."]}),`
`,e.jsx(n.li,{children:"Close the Jira ticket."}),`
`]}),`
`,e.jsx(n.p,{children:"That's the whole loop. Escape hatches exist to be closed — the shorter the round trip, the healthier the DS."})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default};
