import{b as r,a as e}from"./iframe-DuvuyOYT.js";import{A as n,a as t,b as a}from"./AccordionDetails---llt0mU.js";import{T as o}from"./Text-L7vd9pUz.js";import{F as W}from"./FlexBox-TPzjGHTu.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClass-DYVh7KgR.js";import"./useSlot-C-CG0yuW.js";import"./resolveComponentProps-3edEfYXu.js";import"./TransitionGroupContext-hN8qFaVQ.js";import"./generateUtilityClasses-g9ufi11G.js";import"./useControlled-ebES1RRU.js";import"./Collapse-BraLEtjm.js";import"./styled-Cho-jsTU.js";import"./extendSxProp-JkKasx3H.js";import"./utils-B4ukibcw.js";import"./index-Bas_o1qY.js";import"./useTheme-DvEY6SKk.js";import"./composeClasses-fLhin0tj.js";import"./Paper-DUkfPqTN.js";import"./ExpandMoreIcon-Bk88I7pG.js";import"./SvgIcon-3Tw63ijk.js";import"./ButtonBase-B-XK-vT0.js";import"./Typography-DktY0xgL.js";import"./Stack-BvZMuuuV.js";import"./styled-DgGNM0V5.js";import"./createStyled-BKTeOdVL.js";import"./useThemeProps-BobYEJQ-.js";const ue={title:"Surfaces/Accordion",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"\nCollapsible surface. Wraps MUI's `Accordion` / `AccordionSummary` / `AccordionDetails` with DS defaults so callsites drop the four-line `sx` block MUI's examples ask every consumer to hand-roll.\n\nMUI's out-of-the-box Accordion renders as a raised card with a gutter jump and a divider between siblings — a shape almost every Telicent surface has to undo with `elevation={0} disableGutters sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}`. The DS bakes that undo.\n\n---\n\n### The opinion\n\n- **`elevation` defaults to `0`.** An Accordion is a collapse inside another surface, not a raised card of its own. Pass `elevation={n}` at the callsite when you genuinely want a shadow.\n- **`disableGutters` defaults to `true`.** No expanded/collapsed margin jump. Pass `disableGutters={false}` to restore MUI's gutter.\n- **Transparent root background.** The Accordion inherits its parent's surface colour rather than laying its own `Paper` white on top. Set via theme override, not `sx` at the callsite.\n- **Top `:before` divider suppressed.** MUI paints a 1px line above every Accordion; the DS hides it. When two Accordions sit adjacent and you want a separator, add it to the parent container (a `Divider` between them, or a border on the wrapping `FlexBox`) rather than relying on MUI's implicit rule.\n- **`AccordionSummary` supplies a default `expandIcon={<ExpandMoreIcon />}`.** No import in the callsite. Pass your own `expandIcon` to override.\n\n---\n\n### Defaults\n\n- `Accordion.elevation`: `0` — via theme `defaultProps`, so a callsite override wins.\n- `Accordion.disableGutters`: `true` — via theme `defaultProps`.\n- `Accordion` root: transparent background + hidden `:before` — via theme `styleOverrides`, structural CSS with no palette token.\n- `AccordionSummary.expandIcon`: DS `ExpandMoreIcon` — via the wrapper, spread last so a callsite `expandIcon` overrides.\n- `AccordionSummary` / `AccordionDetails` padding: **not** baked. Per-callsite decision — some rows want flush-left (`sx={{ px: 0 }}`), others want MUI's default `px: 2`.\n\n---\n\n### Other supported features\n\nEverything else on MUI's `Accordion` / `AccordionSummary` / `AccordionDetails` passes through, and a callsite prop overrides a DS default because `{...props}` spreads last — `defaultExpanded`, `expanded` / `onChange` (controlled), `disabled`, `square`, `slots` / `slotProps`, and `TransitionComponent` behave as MUI documents them.\n\n---\n\n### When & how to use it\n\n- **Show/hide detail on demand inside an existing surface** — a form section that's only sometimes edited, a panel row whose detail is optional, a list item whose sub-fields aren't the primary read.\n- **Prefer `Card` when the group is a distinct data entity** with its own header and actions; the Accordion is a container primitive, the Card is a semantic unit.\n- **Prefer `Drawer` for a large side-mounted panel** — an Accordion isn't the right shape for hundreds of pixels of collapsible chrome.\n- **Two adjacent Accordions have no separator.** If you want one, put it on the parent container. This is deliberate — the DS refuses to bake a divider whose colour and thickness would then be un-overridable at the callsite.\n\n---\n\n### Example\n\n```tsx\nimport { Accordion, AccordionSummary, AccordionDetails, Text } from \"@telicent-oss/ds\";\n\nconst SecurityLabelEditor = () => (\n  <Accordion>\n    <AccordionSummary sx={{ px: 0 }}>\n      <Text variant=\"body2\" color=\"text.secondary\">\n        Security label: IDH · O · GBR · TELICENT\n      </Text>\n    </AccordionSummary>\n    <AccordionDetails sx={{ px: 0 }}>\n      <Text>Classification, nats, orgs, groups.</Text>\n    </AccordionDetails>\n  </Accordion>\n);\n```\n        "}}},argTypes:{defaultExpanded:{control:"boolean",description:"Render open on first mount. Reach for this when the collapsed state is unlikely to be useful (single-item accordion used purely to visually group).",table:{defaultValue:{summary:"false"},category:"Accordion"}},expanded:{control:!1,description:"Controlled expansion. Pair with `onChange` and hold the state in the consumer. Omit both `expanded` and `onChange` for uncontrolled behaviour.",table:{type:{summary:"boolean"},category:"Accordion"}},onChange:{control:!1,description:"Fired with `(event, expanded)` when the panel toggles.",table:{type:{summary:"(event: SyntheticEvent, expanded: boolean) => void"},category:"Accordion"}},disabled:{control:"boolean",description:"Prevent the summary from receiving pointer or keyboard events.",table:{defaultValue:{summary:"false"},category:"Accordion"}},disableGutters:{control:"boolean",description:"DS defaults this to `true`. Pass `false` to restore MUI's expand-collapse margin jump.",table:{defaultValue:{summary:"true"},category:"Accordion (DS)"}},elevation:{control:{type:"number",min:0,max:24,step:1},description:"DS defaults this to `0`. Pass a higher number to add MUI's paper shadow when the Accordion needs to sit above the surrounding surface.",table:{defaultValue:{summary:"0"},category:"Accordion (DS)"}},square:{control:"boolean",description:"Drop the rounded corners on the root surface.",table:{defaultValue:{summary:"false"},category:"Accordion"}}}},i={parameters:{docs:{description:{story:"The shape every other story varies. No `sx` at the callsite — the transparent background, no gutter, hidden top divider, and default expand chevron all come from the theme."}}},render:()=>r(n,{children:[e(t,{children:e(o,{variant:"body2",children:"Advanced options"})}),e(a,{children:e(o,{children:"Fields go here."})})]})},d={parameters:{docs:{description:{story:"`defaultExpanded` renders the panel open on first mount. Reach for this when the collapsed state is unlikely to be useful — a single-item accordion used purely to visually group a form section, or a detail whose closed state hides the primary read."}}},render:()=>r(n,{defaultExpanded:!0,children:[e(t,{children:e(o,{variant:"body2",children:"Security label"})}),e(a,{children:e(o,{children:"Classification, nats, orgs, groups."})})]})},c={parameters:{docs:{description:{story:"Override the DS-default `expandIcon` by passing your own. Any icon component or `ReactNode` works — the wrapper spreads props last, so a callsite `expandIcon` always wins."}}},render:()=>r(n,{children:[e(t,{expandIcon:e("span",{"aria-hidden":!0,children:"+"}),children:e(o,{variant:"body2",children:"Custom chevron"})}),e(a,{children:e(o,{children:"The default chevron has been replaced with a plus sign."})})]})},l={parameters:{docs:{description:{story:"Padding on `AccordionSummary` and `AccordionDetails` is deliberately per-callsite. When the Accordion sits inside a surface that already carries horizontal padding — a form column, a panel row — pass `sx={{ px: 0 }}` on both to align the summary flush with the surrounding content. This is the shape graph's `SecurityLabelEditor` uses."}}},render:()=>r(n,{children:[e(t,{sx:{px:0},children:e(o,{variant:"body2",color:"text.secondary",children:"Security label: IDH · O · GBR/USA · TELICENT"})}),e(a,{sx:{px:0},children:e(o,{children:"Classification, nats, orgs, groups."})})]})},p={parameters:{docs:{description:{story:"Two Accordions sitting next to each other have no separator — the DS suppresses the top `:before` divider MUI paints. When you want spacing between rows, put it on the parent container (here, a `FlexBox` with `gap`). When you want a rule, add a `Divider` between them."}}},render:()=>r(W,{direction:"column",gap:2,sx:{width:480},children:[r(n,{children:[e(t,{children:e(o,{variant:"body2",children:"First section"})}),e(a,{children:e(o,{children:"Body of the first section."})})]}),r(n,{children:[e(t,{children:e(o,{variant:"body2",children:"Second section"})}),e(a,{children:e(o,{children:"Body of the second section."})})]})]})},h={parameters:{docs:{description:{story:"Opt out of the DS `disableGutters` default by passing `disableGutters={false}`. The panel then grows a margin when expanded, matching MUI's out-of-the-box behaviour. Reach for this only when the callsite genuinely benefits from the size shift."}}},render:()=>r(n,{disableGutters:!1,children:[e(t,{children:e(o,{variant:"body2",children:"Grows on expand"})}),e(a,{children:e(o,{children:"Notice the margin that appears when the panel opens."})})]})},u={parameters:{docs:{description:{story:"When a callsite genuinely wants an Accordion that reads as a card — coloured surface, elevation, padded body — override the DS defaults inline. Every DS opinion is overridable because the wrapper spreads props last: pass `elevation={2}` to restore the shadow, `sx={{ bgcolor: ... }}` on the root to paint the surface, and per-callsite padding on Summary/Details. Prefer reaching for `Card` before doing this — the DS ships two different shapes for a reason. This story exists to show the escape hatch, not to recommend it."}}},render:()=>r(n,{elevation:2,sx:s=>({bgcolor:s.palette.background.paper,borderRadius:1,border:`1px solid ${s.palette.divider}`,"&:hover":{borderColor:s.palette.primary.main}}),children:[e(t,{sx:{px:2,py:1},children:e(o,{variant:"body2",children:"Card-shaped Accordion"})}),e(a,{sx:s=>({px:2,pb:2,bgcolor:s.palette.background.default,borderTop:`1px solid ${s.palette.divider}`}),children:e(o,{children:"Elevation, background colour, rounded corners, a border, and per-section padding are all restored at the callsite. The DS opinions are defaults, not locks."})})]})},m={parameters:{docs:{description:{story:"`disabled` renders the summary inert — it stops receiving pointer and keyboard events, and the chevron dims. Use this when a section's content isn't yet available (e.g. requires an earlier form field to be filled)."}}},render:()=>r(n,{disabled:!0,children:[e(t,{children:e(o,{variant:"body2",children:"Not yet available"})}),e(a,{children:e(o,{children:"Body is unreachable while the summary is disabled."})})]})};var y,b,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The shape every other story varies. No \`sx\` at the callsite — the transparent background, no gutter, hidden top divider, and default expand chevron all come from the theme."
      }
    }
  },
  render: () => <Accordion>
      <AccordionSummary>
        <Text variant="body2">Advanced options</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>Fields go here.</Text>
      </AccordionDetails>
    </Accordion>
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,g,A;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`defaultExpanded\` renders the panel open on first mount. Reach for this when the collapsed state is unlikely to be useful — a single-item accordion used purely to visually group a form section, or a detail whose closed state hides the primary read."
      }
    }
  },
  render: () => <Accordion defaultExpanded>
      <AccordionSummary>
        <Text variant="body2">Security label</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>Classification, nats, orgs, groups.</Text>
      </AccordionDetails>
    </Accordion>
}`,...(A=(g=d.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var v,w,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Override the DS-default \`expandIcon\` by passing your own. Any icon component or \`ReactNode\` works — the wrapper spreads props last, so a callsite \`expandIcon\` always wins."
      }
    }
  },
  render: () => <Accordion>
      <AccordionSummary expandIcon={<span aria-hidden>+</span>}>
        <Text variant="body2">Custom chevron</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>The default chevron has been replaced with a plus sign.</Text>
      </AccordionDetails>
    </Accordion>
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,D,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Padding on \`AccordionSummary\` and \`AccordionDetails\` is deliberately per-callsite. When the Accordion sits inside a surface that already carries horizontal padding — a form column, a panel row — pass \`sx={{ px: 0 }}\` on both to align the summary flush with the surrounding content. This is the shape graph's \`SecurityLabelEditor\` uses."
      }
    }
  },
  render: () => <Accordion>
      <AccordionSummary sx={{
      px: 0
    }}>
        <Text variant="body2" color="text.secondary">
          Security label: IDH · O · GBR/USA · TELICENT
        </Text>
      </AccordionSummary>
      <AccordionDetails sx={{
      px: 0
    }}>
        <Text>Classification, nats, orgs, groups.</Text>
      </AccordionDetails>
    </Accordion>
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var E,C,k;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Two Accordions sitting next to each other have no separator — the DS suppresses the top \`:before\` divider MUI paints. When you want spacing between rows, put it on the parent container (here, a \`FlexBox\` with \`gap\`). When you want a rule, add a \`Divider\` between them."
      }
    }
  },
  render: () => <FlexBox direction="column" gap={2} sx={{
    width: 480
  }}>
      <Accordion>
        <AccordionSummary>
          <Text variant="body2">First section</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>Body of the first section.</Text>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Text variant="body2">Second section</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>Body of the second section.</Text>
        </AccordionDetails>
      </Accordion>
    </FlexBox>
}`,...(k=(C=p.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var P,U,G;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Opt out of the DS \`disableGutters\` default by passing \`disableGutters={false}\`. The panel then grows a margin when expanded, matching MUI's out-of-the-box behaviour. Reach for this only when the callsite genuinely benefits from the size shift."
      }
    }
  },
  render: () => <Accordion disableGutters={false}>
      <AccordionSummary>
        <Text variant="body2">Grows on expand</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>Notice the margin that appears when the panel opens.</Text>
      </AccordionDetails>
    </Accordion>
}`,...(G=(U=h.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var M,B,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When a callsite genuinely wants an Accordion that reads as a card — coloured surface, elevation, padded body — override the DS defaults inline. Every DS opinion is overridable because the wrapper spreads props last: pass \`elevation={2}\` to restore the shadow, \`sx={{ bgcolor: ... }}\` on the root to paint the surface, and per-callsite padding on Summary/Details. Prefer reaching for \`Card\` before doing this — the DS ships two different shapes for a reason. This story exists to show the escape hatch, not to recommend it."
      }
    }
  },
  render: () => <Accordion elevation={2} sx={theme => ({
    bgcolor: theme.palette.background.paper,
    borderRadius: 1,
    border: \`1px solid \${theme.palette.divider}\`,
    "&:hover": {
      borderColor: theme.palette.primary.main
    }
  })}>
      <AccordionSummary sx={{
      px: 2,
      py: 1
    }}>
        <Text variant="body2">Card-shaped Accordion</Text>
      </AccordionSummary>
      <AccordionDetails sx={theme => ({
      px: 2,
      pb: 2,
      bgcolor: theme.palette.background.default,
      borderTop: \`1px solid \${theme.palette.divider}\`
    })}>
        <Text>
          Elevation, background colour, rounded corners, a border, and per-section padding
          are all restored at the callsite. The DS opinions are defaults, not locks.
        </Text>
      </AccordionDetails>
    </Accordion>
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var N,O,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`disabled\` renders the summary inert — it stops receiving pointer and keyboard events, and the chevron dims. Use this when a section's content isn't yet available (e.g. requires an earlier form field to be filled)."
      }
    }
  },
  render: () => <Accordion disabled>
      <AccordionSummary>
        <Text variant="body2">Not yet available</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>Body is unreachable while the summary is disabled.</Text>
      </AccordionDetails>
    </Accordion>
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const me=["Default","StartsExpanded","CustomExpandIcon","FlushLeftPadding","AdjacentAccordions","WithGutter","OverriddenStyles","Disabled"];export{p as AdjacentAccordions,c as CustomExpandIcon,i as Default,m as Disabled,l as FlushLeftPadding,u as OverriddenStyles,d as StartsExpanded,h as WithGutter,me as __namedExportsOrder,ue as default};
