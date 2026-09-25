import{r as M,a as c}from"./iframe-B8lru9Ox.js";import{L}from"./LabeledSwitch-0Oeg2Pzv.js";import"./preload-helper-C1FmrZbK.js";import"./Switch-DP0Ivfww.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-B7kmWUc9.js";import"./extendSxProp-DjHg015s.js";import"./useFormControl-CLg-uBwy.js";import"./generateUtilityClasses-g9ufi11G.js";import"./useControlled-D13dP5S1.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B1n-NBaA.js";import"./TransitionGroupContext-Bg30LDe0.js";import"./Typography-DtJW_51A.js";import"./Stack-DQqlKiUu.js";import"./styled-LsKj47KW.js";import"./createStyled-_4klY0ey.js";import"./useThemeProps-DqCYqzYY.js";import"./FlexBox-QL3KD45m.js";import"./Text-Cy_FjCVa.js";import"./FormHelperText-Bbq3OgSk.js";import"./FormControl-DRfKH_qZ.js";const{fn:O}=__STORYBOOK_MODULE_TEST__,te={title:"Inputs/LabeledSwitch",component:L,tags:["autodocs"],parameters:{docs:{description:{component:'\nA form row combining a switch toggle with a title, an optional description, and optional helper/validation text. Wraps the switch in a FormControl fieldset so error state propagates to the row and every callsite doesn\'t reimplement the row layout, the subtitle-plus-body typography pairing, or the error wiring.\n\nPorts the admin app\'s `LabeledSwitch` pattern into DS so multiple apps share a single implementation instead of drifting.\n\n---\n\n### The opinion\n\n- **Fixed row layout** — text/subtext/helperText on the left, switch pinned to the right (`justifyContent="space-between"`). Callers don\'t choose placement; the row shape is the whole point of the component.\n- **Narrowed `onChange` signature** — `(checked: boolean) => void` rather than MUI\'s `(event, checked) => void`. The event is dropped because callers overwhelmingly only need the boolean.\n- **Composes DS.Switch, not raw MUI** — future DS Switch theming/tokens propagate for free.\n- **Ref target is the switch button** (`HTMLButtonElement`), matching DS.Switch. Migrating from admin\'s local `LabeledSwitch` — which used `inputRef` — needs adjustment only when the ref is used for input-specific behaviour.\n\n---\n\n### Accessibility\n\n- The FormControl renders as `component="fieldset"`, grouping the label + control semantically so screen readers announce them together.\n- `error` propagates from the FormControl to `FormHelperText` and to any descendant that reads FormControl context, colouring the helper text red and setting `aria-invalid` on the input.\n- Pass `inputProps` to attach additional a11y attributes to the underlying input (`aria-labelledby`, `aria-describedby`, `data-testid`, etc.).\n\n---\n\n### Defaults\n\n- `FormControl.component`: `"fieldset"` — for semantic grouping.\n- `FormControl.variant`: `"standard"` — flat, no border or underline.\n- `FormControl.fullWidth`: `true` — the row fills its container.\n- Layout: `direction="row"`, `justifyContent="space-between"`, `alignItems="center"`.\n- Typography: `text` → Text `variant="subtitle1"`, `subtext` → Text `variant="body2"`.\n\n---\n\n### Other supported features\n\n- `inputProps` — forwarded to the underlying input; `inputProps.name` also copies onto the Switch\'s `name` prop.\n- Extra props (`...rest`) — forwarded to the composed DS.Switch, so `sx`, `data-*`, and other Switch props remain reachable at the callsite.\n\n---\n\n### When & how to use it\n\n- **Rows in a settings/preferences panel** where each toggle has a title and (usually) a short description.\n- **Scope-toggle lists** (permissions, feature flags, notification categories) — the pattern is a repeated row with title + description + on/off.\n- **Do not use for a bare switch with no description** — reach for `DS.Switch` with a `label` prop instead.\n- **Do not use inside a form-field grid where the switch must align with other inputs** — pair `FormControlLabel` with `DS.Switch` directly for that.\n\n---\n\n### Example\n\n```tsx\nimport { LabeledSwitch } from "@telicent-oss/ds";\nimport { Controller } from "react-hook-form";\n\n<Controller\n  control={form.control}\n  name="scopeProfile"\n  render={({ field, fieldState }) => (\n    <LabeledSwitch\n      text="Profile"\n      subtext="Request standard user info (name, email, username)."\n      checked={!!field.value}\n      onChange={(v) => field.onChange(v)}\n      error={!!fieldState.error}\n      helperText={fieldState.error?.message}\n    />\n  )}\n/>\n```\n        '}}},args:{onChange:O()},argTypes:{text:{control:"text",description:'Primary label, rendered as Text `variant="subtitle1"`. Required.'},subtext:{control:"text",description:'Optional short description, rendered as Text `variant="body2"` beneath the label. Use for one-line context; if the copy runs past a sentence or two, rethink the layout.'},checked:{control:"boolean",description:"Whether the switch is on. Controlled by the caller."},onChange:{control:!1,description:"Fires with the new checked value. Signature is narrowed from MUI's `(event, checked)` to `(checked)` — the event is dropped because callers overwhelmingly only need the boolean.",table:{type:{summary:"(checked: boolean) => void"}}},disabled:{control:"boolean",description:"Locks the switch. The row text stays visible; only interaction is blocked."},error:{control:"boolean",description:"Marks the row as in an error state. Propagates through FormControl so `helperText` colours red and `aria-invalid` is set on the input."},helperText:{control:"text",description:"Optional helper or validation text rendered below the description. Colours red when `error` is true."},inputProps:{control:!1,description:"Standard HTML input attributes forwarded to the underlying input (e.g. `aria-labelledby`, `data-testid`). `name` also copies onto the Switch's `name` prop.",table:{type:{summary:"InputHTMLAttributes<HTMLInputElement>"}}},ref:{control:!1,description:"Ref to the switch button (`HTMLButtonElement`), matching DS.Switch's ref target. Not the underlying input.",table:{type:{summary:"Ref<HTMLButtonElement>"}}}}},e=i=>{const[D,I]=M.useState(i.checked??!1);return c("div",{children:c(L,{...i,checked:D,onChange:l=>{I(l),i.onChange(l)}})})},t={args:{text:"Enable feature"},render:e,parameters:{docs:{description:{story:"Baseline — just a `text` label. Demonstrates that `subtext` and `helperText` are optional; the row still spaces the switch to the right and renders the label as `subtitle1`."}}}},r={args:{text:"Email notifications",subtext:"Send updates when your workspace changes."},render:e,parameters:{docs:{description:{story:"The common case — a titled toggle with a one-line description. Use this when a raw label wouldn't be enough for the user to know what the toggle controls."}}}},o={args:{text:"Email notifications",subtext:"Send updates when your workspace changes.",helperText:"You can change this later in preferences.",checked:!0},render:e,parameters:{docs:{description:{story:"Helper text sits below the description and is styled the same in the neutral state. Use it for non-error hints — reversibility, defaults, follow-up steps. When the message describes an error, set `error` too so the styling changes."}}}},n={args:{text:"Require MFA",subtext:"Force all users in this org to enrol in MFA.",error:!0,helperText:"MFA setup incomplete for one or more users."},render:e,parameters:{docs:{description:{story:"`error` propagates from FormControl to the helper text, colouring it red and setting `aria-invalid` on the input. Pair with a validation library (react-hook-form, Formik) by forwarding `fieldState.error?.message` into `helperText` and `!!fieldState.error` into `error`."}}}},s={args:{text:"OpenID",subtext:"Required by the authorization server — can't be turned off.",disabled:!0,checked:!0},render:e,parameters:{docs:{description:{story:"Locked-on pattern — the toggle communicates a permanently-enabled setting. The row text remains fully visible so the user can still read the rationale in `subtext`. Matches admin's ScopesSection OpenID case (required by the authorization server)."}}}},a={args:{text:"Enable federated identity across the entire workspace hierarchy",subtext:"When enabled, all users, service accounts, and integrations in this workspace and every nested workspace will authenticate through the shared identity provider configured at the organisation level.",helperText:"Applies to new sessions only. Existing sessions continue using their previous authentication method until they expire or the user signs out."},render:e,parameters:{docs:{description:{story:"The text column wraps freely; the switch stays pinned to the right at a fixed size. Use this to sanity-check a callsite where the description or helper text may run long — the layout doesn't break, but readability suffers past a sentence or two. If your copy consistently looks like this, consider a different layout."}}}};var h,d,p;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: "Enable feature"
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "Baseline — just a \`text\` label. Demonstrates that \`subtext\` and \`helperText\` are optional; the row still spaces the switch to the right and renders the label as \`subtitle1\`."
      }
    }
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: "Email notifications",
    subtext: "Send updates when your workspace changes."
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "The common case — a titled toggle with a one-line description. Use this when a raw label wouldn't be enough for the user to know what the toggle controls."
      }
    }
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,f,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: "Email notifications",
    subtext: "Send updates when your workspace changes.",
    helperText: "You can change this later in preferences.",
    checked: true
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "Helper text sits below the description and is styled the same in the neutral state. Use it for non-error hints — reversibility, defaults, follow-up steps. When the message describes an error, set \`error\` too so the styling changes."
      }
    }
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,x,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: "Require MFA",
    subtext: "Force all users in this org to enrol in MFA.",
    error: true,
    helperText: "MFA setup incomplete for one or more users."
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "\`error\` propagates from FormControl to the helper text, colouring it red and setting \`aria-invalid\` on the input. Pair with a validation library (react-hook-form, Formik) by forwarding \`fieldState.error?.message\` into \`helperText\` and \`!!fieldState.error\` into \`error\`."
      }
    }
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,T,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: "OpenID",
    subtext: "Required by the authorization server — can't be turned off.",
    disabled: true,
    checked: true
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "Locked-on pattern — the toggle communicates a permanently-enabled setting. The row text remains fully visible so the user can still read the rationale in \`subtext\`. Matches admin's ScopesSection OpenID case (required by the authorization server)."
      }
    }
  }
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,F,E;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: "Enable federated identity across the entire workspace hierarchy",
    subtext: "When enabled, all users, service accounts, and integrations in this workspace and every nested workspace will authenticate through the shared identity provider configured at the organisation level.",
    helperText: "Applies to new sessions only. Existing sessions continue using their previous authentication method until they expire or the user signs out."
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "The text column wraps freely; the switch stays pinned to the right at a fixed size. Use this to sanity-check a callsite where the description or helper text may run long — the layout doesn't break, but readability suffers past a sentence or two. If your copy consistently looks like this, consider a different layout."
      }
    }
  }
}`,...(E=(F=a.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const re=["Basic","WithSubtext","WithHelperText","ErrorState","Disabled","LongContent"];export{t as Basic,s as Disabled,n as ErrorState,a as LongContent,o as WithHelperText,r as WithSubtext,re as __namedExportsOrder,te as default};
