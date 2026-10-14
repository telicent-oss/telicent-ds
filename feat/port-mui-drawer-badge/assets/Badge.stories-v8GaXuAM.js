import{a as e}from"./iframe-C-ZFHi7G.js";import{I as v}from"./IconButton-D4AMQVbi.js";import{F as R}from"./FlexBox-lULQm6VU.js";import{T as I}from"./Text-CHFW8IH8.js";import{B as a}from"./Badge-OR03eEi0.js";import"./preload-helper-C1FmrZbK.js";import"./IconButton-BSmPEpg3.js";import"./clsx-B-dksMZM.js";import"./styled-Bk2IjbB5.js";import"./extendSxProp-dXted_0R.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-UsKYAmFM.js";import"./TransitionGroupContext-C0NcEdG2.js";import"./Stack-CmCwoFm_.js";import"./styled-DNl7Cs_R.js";import"./createStyled-vuo4qSuW.js";import"./useThemeProps-CDA2VJay.js";import"./Typography-CkxFGaa5.js";import"./Badge-BRhX8-6K.js";import"./useSlotProps-8MMKxgpT.js";import"./resolveComponentProps-Ji4pwD1h.js";const J={title:"Data display/Badge",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
A count or a dot on another element, such as the number of filters applied on a Refine button. MUI's \`Badge\` under the DS theme.

---

### The opinion

- **\`color="primary"\` by default.** The badge reads in the app colour, and its text comes from \`primary.contrastText\`.
- **Hidden from assistive technology.** The badge is decoration. What it counts belongs in the accessible name of what it sits on.
- **The DS shape.** A 20px pill, 11px bold, with a ring in the page background that stands it off what it overlaps. Clicks pass through to the host.

---

### Accessibility

The badge sets \`aria-hidden="true"\`, so a screen reader never hears a bare "2". The host must carry the count instead:

- **Right:** an \`IconButton\` named "Refine, 2 filters applied", with the badge showing 2.
- **Wrong:** an \`IconButton\` named "Refine", where the count exists only visually. That fails WCAG 1.1.1 and 4.1.2.

If a badge has no labelled host, announce it with \`slotProps={{ badge: { "aria-hidden": false } }}\`.

---

### Defaults

- \`color\`: \`"primary"\`.
- \`slotProps.badge["aria-hidden"]\`: \`true\`. Your \`slotProps.badge\`, object or function, is merged after it.

---

### Other supported features

- \`max\` caps the count: 120 with \`max={99}\` shows "99+".
- \`variant="dot"\` shows presence without a number.
- A count of \`0\` is hidden unless you pass \`showZero\`. \`invisible\` hides it outright.
- Placement is the callsite's: move the badge with \`sx\` on \`.MuiBadge-badge\` to suit the host's shape.

---

### When & how to use it

- **Use it** for a small count or a "something new" dot on a control.
- **Don't use it** for status text such as "Draft" or "Failed"; that's a \`Chip\`.

---

### Example

\`\`\`tsx
import { Badge, IconButton } from "@telicent-oss/ds";

<Badge badgeContent={appliedCount}>
  <IconButton
    aria-label={appliedCount ? \`Refine, \${appliedCount} filters applied\` : "Refine"}
    onClick={onOpen}
  >
    <i className="fa-solid fa-sliders" aria-hidden />
  </IconButton>
</Badge>
\`\`\`
        `}}},argTypes:{badgeContent:{control:{type:"number"},description:"The count."},color:{control:{type:"select"},options:["primary","secondary","error","info","success","warning","default"],description:'DS default `"primary"`.'},max:{control:{type:"number"},description:"Counts above it show as `max+`."},showZero:{control:{type:"boolean"},description:"Show a count of 0."},invisible:{control:{type:"boolean"},description:"Hide the badge."},variant:{control:{type:"select"},options:["standard","dot"],description:"`dot` shows presence without a number."},slotProps:{control:!1,description:"Merged after the DS default, so `badge['aria-hidden']` stays `true` unless you set it.",table:{type:{summary:"BadgeProps['slotProps']"}}},children:{control:!1}}},d=({label:t})=>e(v,{"aria-label":t,children:e("i",{className:"fa-solid fa-sliders","aria-hidden":!0})}),n={args:{badgeContent:2},parameters:{docs:{description:{story:`The Refine pattern: the count is in the button's name, "Refine, 2 filters applied", and the badge is hidden from screen readers.`}}},render:t=>e(a,{...t,children:e(d,{label:`Refine, ${t.badgeContent} filters applied`})})},o={args:{badgeContent:0},parameters:{docs:{description:{story:"A count of 0 shows no badge. Pass `showZero` to show it."}}},render:t=>e(a,{...t,children:e(d,{label:"Refine"})})},r={args:{badgeContent:120,max:99},parameters:{docs:{description:{story:"`max={99}` shows 120 as 99+. The host's name keeps the real count."}}},render:t=>e(a,{...t,children:e(d,{label:"Refine, 120 filters applied"})})},s={args:{variant:"dot",badgeContent:1},parameters:{docs:{description:{story:'`variant="dot"` for presence without a number, such as unread activity.'}}},render:t=>e(a,{...t,children:e(d,{label:"Notifications, new activity"})})},i={args:{badgeContent:3,slotProps:{badge:{"aria-hidden":!1}}},parameters:{docs:{description:{story:"The rare badge with no labelled host. `aria-hidden: false` lets a screen reader read the count itself."}}},render:t=>e(R,{direction:"row",alignItems:"center",gap:2,children:e(a,{...t,children:e(I,{component:"span",children:"Inbox"})})})};var c,p,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    badgeContent: 2
  },
  parameters: {
    docs: {
      description: {
        story: "The Refine pattern: the count is in the button's name, \\"Refine, 2 filters applied\\", and the badge is hidden from screen readers."
      }
    }
  },
  render: args => <Badge {...args}>
      <Host label={\`Refine, \${args.badgeContent} filters applied\`} />
    </Badge>
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var h,m,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    badgeContent: 0
  },
  parameters: {
    docs: {
      description: {
        story: "A count of 0 shows no badge. Pass \`showZero\` to show it."
      }
    }
  },
  render: args => <Badge {...args}>
      <Host label="Refine" />
    </Badge>
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    badgeContent: 120,
    max: 99
  },
  parameters: {
    docs: {
      description: {
        story: "\`max={99}\` shows 120 as 99+. The host's name keeps the real count."
      }
    }
  },
  render: args => <Badge {...args}>
      <Host label="Refine, 120 filters applied" />
    </Badge>
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,w,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "dot",
    badgeContent: 1
  },
  parameters: {
    docs: {
      description: {
        story: "\`variant=\\"dot\\"\` for presence without a number, such as unread activity."
      }
    }
  },
  render: args => <Badge {...args}>
      <Host label="Notifications, new activity" />
    </Badge>
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var B,C,T;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    badgeContent: 3,
    slotProps: {
      badge: {
        "aria-hidden": false
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "The rare badge with no labelled host. \`aria-hidden: false\` lets a screen reader read the count itself."
      }
    }
  },
  render: args => <FlexBox direction="row" alignItems="center" gap={2}>
      <Badge {...args}>
        <Text component="span">Inbox</Text>
      </Badge>
    </FlexBox>
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const K=["OnIconButton","ZeroHidden","Max","Dot","AnnouncedBadge"];export{i as AnnouncedBadge,s as Dot,r as Max,n as OnIconButton,o as ZeroHidden,K as __namedExportsOrder,J as default};
