import{j as c,r as P,a as W,F as S}from"./iframe-CXSK8Dk-.js";import{b as A,B as E}from"./DropdownButton-vWLux3xG.js";import{M as R}from"./UserIcon-DfXchAa_.js";import"./preload-helper-C1FmrZbK.js";import"./FlexBox-aDkc32O8.js";import"./SvgIcon-CwlR4LV8.js";import"./generateUtilityClass-Fzt3JCAB.js";import"./styled-DtvgUq6a.js";import"./generateUtilityClasses-Bj4Ss80x.js";import"./Stack-DTT6iyaf.js";import"./styled-hp6s30PY.js";import"./createStyled-jo3qW0uY.js";import"./useThemeProps-CkYUtoJ-.js";import"./useThemeProps-BBCRbUjf.js";import"./useTheme-BKykcnyZ.js";import"./Text-BMxl2SwS.js";import"./Typography-_WXcuVAU.js";import"./AdapterDayjs-DBeZyuIU.js";import"./Modal-C6fXv4Zz.js";import"./utils-BP8_ys-M.js";import"./TransitionGroupContext-CIYUs1Uk.js";import"./index-BH3lY3kJ.js";import"./resolveComponentProps-B-UI_umu.js";import"./Popover-Dbdn6-R4.js";import"./Paper-CCY0nncl.js";import"./TextField-CsymqzzJ.js";import"./useFormControl-8AnV7jcl.js";import"./createSvgIcon-B4OWaiSw.js";import"./IconButton-CH8TE1o1.js";import"./ButtonBase-CyMDbepC.js";import"./DialogContent-CPmdNXcl.js";import"./Button-OtEdq2P_.js";import"./Chip-DpWSlKGB.js";import"./DateTimePicker-CuvapaAa.js";import"./Divider-Bv_OvFaD.js";import"./AppInfoRow-BqYxjxEK.js";import"./Box-PoQ7y_F9.js";import"./Box-CN1tfwJW.js";import"./Chip-CP3VY8ZP.js";import"./Divider-B42Uh_Bj.js";import"./TreeView-DpdtxLcB.js";import"./Alert-B_Svt6kM.js";import"./LinearProgress-BzA3k14P.js";import"./Spinner-ClMpHh1d.js";import"./Dialog-B-CBTz5q.js";import"./MapToggleButtonPresentational-CEEmCWRw.js";import"./Remove-DsJJL5XN.js";import"./LinkButton-C4EtbQ1R.js";import"./Container-BYH1eQOO.js";import"./TextField-C1RKnAyX.js";import"./Switch-Ck6dNew2.js";import"./DatePicker-63Sx7fEQ.js";import"./Paper-BtVQmXu1.js";import"./ErrorFallback-CyHZraUv.js";import"./ErrorFallbackText-CXNMYw6_.js";import"./ErrorFallbackWrapper-C9ggY6qV.js";import"./Brand-Bh3aijrf.js";import"./constants-CY3-_VsX.js";import"./Edit-6FH8M8KH.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,Me={title:"Feedback/Confirm dialog",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
A modal dialog that asks the user to confirm an action — submits, publishes, restarts, deletes, or anything else that needs explicit consent before proceeding. Encodes the DS-blessed layout, colour language, focus behaviour, and pending-state handling so consuming apps don't reimplement (or diverge on) any of it.

Owns nothing but its own rendering — the caller controls \`open\` and \`isPending\` so the dialog integrates with any mutation library (React Query, RTK, custom).

---

### Variants

The visual tone is chosen by the \`variant\` prop:

- **Neutral** (default, no \`variant\`) — primary confirm button, no header icon by default. For routine confirmations where the consequence is minor or purely acknowledgement (submit, save, send invitation, one-time key display).
- **Warning** (\`variant="warning"\`) — amber-tinted header pill with \`WarningIcon\`, amber confirm button. For high-consequence but non-destructive actions where the user should be warned before proceeding (dirty-form leave-page, restart service, apply migration).
- **Destructive** (\`variant="destructive"\`) — red-tinted header pill with \`BinIcon\`, red confirm button. For irreversible operations that remove something (delete, revoke, archive, remove-from-team).

The safe default is neutral — a forgotten \`variant\` prop under-sells the action rather than over-selling it.

---

### Other supported features

- **Pending state** — while \`isPending\` is true both buttons disable, the confirm label swaps to \`pendingLabel\`, and dismissal (backdrop click / Escape) is blocked to prevent race conditions between "cancel" and "in-flight mutation".
- **Alert callout** — pass \`alert={{ severity, message }}\` to surface an important consequence of the action as a visually distinct Alert above the buttons. Developer-authored, static — not for showing async mutation errors.
- **Custom icon** — override \`icon\` for any variant. The same icon renders in the header pill and on the confirm button.
- **Stable selectors** — override \`id\` to produce stable ids for E2E and telemetry: \`\${id}-title\`, \`\${id}-body\`, \`\${id}-cancel\`, \`\${id}-confirm\`, \`\${id}-alert\`.

---

### When & how to use it

- **Anywhere the user needs to make a yes/no decision with a consequence** — deletes, publishes, revokes, form submits with side effects, dirty-form leave-page prompts.
- **Do not use for informational modals with a single "OK" button** — that's a different shape (an alert/acknowledgement dialog), not covered here.
- **Do not use for form validation errors** — inline field errors or an Alert on the form itself are the right tool.
- **Wire \`isPending\` to your mutation** — the component won't manage the async lifecycle for you, but it handles the UX of it correctly if you supply the state. If a server error needs to be shown after the action, handle that in the calling flow (e.g. a toast) rather than trying to render it inside the dialog.

---

### Example

\`\`\`tsx
import { ConfirmDialog } from "@telicent-oss/ds";
import { useMutation } from "@tanstack/react-query";

const deleteMutation = useMutation({ mutationFn: deleteDataset });

<ConfirmDialog
  open={confirmOpen}
  variant="destructive"
  onClose={() => setConfirmOpen(false)}
  onConfirm={() => deleteMutation.mutate(datasetId)}
  title="Delete dataset?"
  body="The dataset and its metadata will be removed from the catalogue."
  confirmLabel="Delete"
  pendingLabel="Deleting…"
  isPending={deleteMutation.isPending}
  alert={{
    severity: "warning",
    message: "This permanently removes the dataset and orphans its distributions. This action cannot be undone.",
  }}
/>
\`\`\`
        `}}},args:{onConfirm:d(),onClose:d()},argTypes:{open:{control:"boolean",description:"Whether the dialog is shown. Controlled by the consumer."},title:{control:"text",description:'Short, action-focused heading (e.g. "Delete project?").'},body:{control:!1,description:"Body content. A string is wrapped in body2 Text; a ReactNode is rendered as-is.",table:{type:{summary:"ReactNode"}}},confirmLabel:{control:"text",description:'Label for the confirm button. Defaults to `"Confirm"` — set explicitly (e.g. `"Delete"`, `"Publish"`, `"Leave"`) for clarity.'},cancelLabel:{control:"text",description:'Label for the cancel button. Defaults to `"Cancel"`.'},pendingLabel:{control:"text",description:'Confirm-button label while `isPending` is true. Defaults to `"Working…"`.'},icon:{control:!1,description:"Icon shown in the header pill and on the confirm button. Defaults to `BinIcon` for destructive, `WarningIcon` for warning, none for neutral.",table:{type:{summary:"ReactNode"}}},isPending:{control:"boolean",description:"When true: buttons disable, confirm label swaps to `pendingLabel`, and close is blocked."},alert:{control:!1,description:'Optional callout rendered as an Alert below the body. Use it to emphasise domain consequences the user must read before confirming (e.g. "This permanently removes the dataset and orphans its distributions."). Not for surfacing async mutation errors — those belong in the calling flow, not inside the confirmation.',table:{type:{summary:"{ severity: AlertColor; message: string }"}}},variant:{control:"radio",options:[void 0,"warning","destructive"],description:'Visual tone. Undefined = neutral (default). `"warning"` = amber for consequential-but-not-destructive actions. `"destructive"` = red for irreversible removals.'},id:{control:"text",description:'Optional id prefix used for stable selectors. Defaults to `"confirm-dialog"`, producing `${id}-title`, `${id}-body`, `${id}-cancel`, `${id}-confirm`, `${id}-error`.'},ariaLabel:{control:"text",description:"Overrides the dialog's accessible name. When omitted, the title is used via `aria-labelledby`."}}},e=s=>{const[q,l]=P.useState(!1);return W(S,{children:[c(E,{onClick:()=>l(!0),children:"Open dialog"}),c(A,{...s,open:q,onClose:()=>{l(!1),s.onClose()},onConfirm:()=>{l(!1),s.onConfirm()}})]})},t={args:{open:!1,title:"Publish this dataset?",body:"Consumers with access will see the new version immediately.",confirmLabel:"Publish"},render:e,parameters:{docs:{description:{story:"The default. No `variant` set — primary confirm button, no header icon. Use for actions that need explicit consent but aren't dangerous (publish, submit, save, send)."}}}},n={args:{open:!1,variant:"warning",title:"Leave without saving?",body:"Your edits will be lost if you leave now.",confirmLabel:"Leave",cancelLabel:"Stay"},render:e,parameters:{docs:{description:{story:"For consequential actions that aren't destructive per se, but where the user should think twice — dirty-form leave-page, restart service, apply migration. Amber pill with `WarningIcon`, amber confirm button."}}}},o={args:{open:!1,variant:"destructive",title:"Delete project?",body:"This can't be undone. All related assets will also be removed.",confirmLabel:"Delete"},render:e,parameters:{docs:{description:{story:"For irreversible operations that remove something — delete, revoke, archive, remove-from-team. Red pill with `BinIcon`, red confirm button. Explicit opt-in — the default is neutral, so this styling never appears by accident."}}}},r={args:{open:!1,variant:"destructive",title:"Delete dataset?",body:"The dataset and its metadata will be removed from the catalogue.",confirmLabel:"Delete",alert:{severity:"warning",message:"This permanently removes the dataset and orphans its distributions. This action cannot be undone."}},render:e,parameters:{docs:{description:{story:"Use `alert` to surface an important consequence of the action as a visually distinct callout above the buttons. This is developer-authored context — pick the severity that matches the tone (`warning` for consequences, `info` for heads-up, `success` rarely). Not for showing async mutation errors."}}}},i={args:{open:!1,variant:"destructive",title:"Revoke API key?",body:"The key will stop working immediately. Existing clients using it will fail.",confirmLabel:"Revoke",icon:c(R,{})},render:e,parameters:{docs:{description:{story:"Override `icon` for any variant. Use for destructive actions that aren't deletes (revoke, archive, remove-from-team) or to reinforce a warning with a domain-specific glyph. The same icon renders in the header pill and on the confirm button."}}}},a={args:{open:!1,variant:"destructive",title:"Delete workspace?",body:"Deleting this workspace will permanently remove all projects, datasets, dashboards, saved queries, sharing rules, and audit logs contained within it. This action affects 12 collaborators and cannot be undone once confirmed.",confirmLabel:"Delete"},render:e,parameters:{docs:{description:{story:"The body wraps as needed within the 420px dialog. Use longer body copy when the user needs to understand exactly what the action affects before confirming."}}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    open: false,
    title: "Publish this dataset?",
    body: "Consumers with access will see the new version immediately.",
    confirmLabel: "Publish"
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "The default. No \`variant\` set — primary confirm button, no header icon. Use for actions that need explicit consent but aren't dangerous (publish, submit, save, send)."
      }
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: false,
    variant: "warning",
    title: "Leave without saving?",
    body: "Your edits will be lost if you leave now.",
    confirmLabel: "Leave",
    cancelLabel: "Stay"
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "For consequential actions that aren't destructive per se, but where the user should think twice — dirty-form leave-page, restart service, apply migration. Amber pill with \`WarningIcon\`, amber confirm button."
      }
    }
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,v,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    open: false,
    variant: "destructive",
    title: "Delete project?",
    body: "This can't be undone. All related assets will also be removed.",
    confirmLabel: "Delete"
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "For irreversible operations that remove something — delete, revoke, archive, remove-from-team. Red pill with \`BinIcon\`, red confirm button. Explicit opt-in — the default is neutral, so this styling never appears by accident."
      }
    }
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,T,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: false,
    variant: "destructive",
    title: "Delete dataset?",
    body: "The dataset and its metadata will be removed from the catalogue.",
    confirmLabel: "Delete",
    alert: {
      severity: "warning",
      message: "This permanently removes the dataset and orphans its distributions. This action cannot be undone."
    }
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "Use \`alert\` to surface an important consequence of the action as a visually distinct callout above the buttons. This is developer-authored context — pick the severity that matches the tone (\`warning\` for consequences, \`info\` for heads-up, \`success\` rarely). Not for showing async mutation errors."
      }
    }
  }
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var D,L,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    open: false,
    variant: "destructive",
    title: "Revoke API key?",
    body: "The key will stop working immediately. Existing clients using it will fail.",
    confirmLabel: "Revoke",
    icon: <MinusCircleIcon />
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "Override \`icon\` for any variant. Use for destructive actions that aren't deletes (revoke, archive, remove-from-team) or to reinforce a warning with a domain-specific glyph. The same icon renders in the header pill and on the confirm button."
      }
    }
  }
}`,...(x=(L=i.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var C,I,O;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: false,
    variant: "destructive",
    title: "Delete workspace?",
    body: "Deleting this workspace will permanently remove all projects, datasets, dashboards, saved queries, sharing rules, and audit logs contained within it. This action affects 12 collaborators and cannot be undone once confirmed.",
    confirmLabel: "Delete"
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: "The body wraps as needed within the 420px dialog. Use longer body copy when the user needs to understand exactly what the action affects before confirming."
      }
    }
  }
}`,...(O=(I=a.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const je=["Neutral","Warning","Destructive","WithAlert","CustomIcon","LongBody"];export{i as CustomIcon,o as Destructive,a as LongBody,t as Neutral,n as Warning,r as WithAlert,je as __namedExportsOrder,Me as default};
