import{a as c,r as P,b as W,F as S}from"./iframe-Cq2F8nnt.js";import{e as A,B as E}from"./EntityList-DaLKgoBW.js";import{a as R}from"./ExpandLessIcon-Baa6e0mA.js";import"./preload-helper-C1FmrZbK.js";import"./FlexBox-C04F2Oi9.js";import"./Stack-C0kkN408.js";import"./styled-BFu-il5r.js";import"./extendSxProp-C_3gOtzH.js";import"./clsx-B-dksMZM.js";import"./styled-DanlI2xt.js";import"./createStyled-Ch69_NI_.js";import"./useThemeProps-P0CvXcYF.js";import"./composeClasses-fLhin0tj.js";import"./Text-CBOSUAEh.js";import"./Typography-BwTJfg_0.js";import"./ListContext-BAusblW9.js";import"./ListItem-DKE093t7.js";import"./FormControl-BUNS3ShE.js";import"./useFormControl-CV4aeut4.js";import"./TransitionGroupContext-GhvSAu4t.js";import"./resolveComponentProps-Cqm51eMl.js";import"./ButtonBase-Dgq-9fM-.js";import"./Toolbar-oXmRnOPk.js";import"./TextField-DwlpbE60.js";import"./Modal-C_ZAcMul.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Cvu7cjI6.js";import"./index-Yf-oiQ9v.js";import"./utils-B_pcJLAo.js";import"./Popover-CXsS9GGj.js";import"./Paper-u6GRQMwm.js";import"./useControlled-B1ajGRtS.js";import"./createSvgIcon-1goxyuUk.js";import"./SvgIcon-TnW6j3SK.js";import"./FormHelperText-BmifT0EA.js";import"./Close-CBbLzOeS.js";import"./Popper-C0YrUmlc.js";import"./Badge-BZpNOhc9.js";import"./Chip-DKKqjRmN.js";import"./IconButton-C1aFxNcW.js";import"./FormControlLabel-Be4X22x1.js";import"./MenuItem-DceuxKDN.js";import"./dividerClasses-C6GToXYV.js";import"./Button-JWos0z8D.js";import"./MapToggleButtonPresentational-BFzQ5gPJ.js";import"./Remove-B3S6saWd.js";import"./Box-BQK-RQwY.js";import"./CogIcon-C7NF5K8t.js";import"./InfoIcon-DPqgxdQZ.js";import"./ExpandMoreIcon-DNBS7Ae_.js";import"./ThemeSwitchRow-9homoP8I.js";import"./index-D2fxJFUo.js";import"./IconButton-Ci8BXdvE.js";import"./Badge-_Ks2Ec9c.js";import"./Chip-1H0HG8HA.js";import"./Divider-sULGPtF-.js";import"./Divider-Bbde2_fu.js";import"./TreeView-GAhKaiG4.js";import"./useThemeProps-Dr3B81aN.js";import"./Collapse-BYeD06gr.js";import"./useSlot-CReHhYw8.js";import"./AppInfoRow-_l5cjwhy.js";import"./_IconPopover-CYGOjWq8.js";import"./Box-CAEYLSso.js";import"./AppSettings-BTMPNOva.js";import"./SvgIcon-BI9-VwwI.js";import"./TableRow-DlKh2N0Z.js";import"./TableCell-CEBLf8Yr.js";import"./Skeleton-BpIhNe2X.js";import"./Skeleton-Du6dERAP.js";import"./Edit-CXQT9gM2.js";import"./LinearProgress-G9ObWG-G.js";import"./LinearProgress-Crs6Zu4l.js";import"./Spinner-DzvFtaD2.js";import"./CircularProgress-BgI1_Xtz.js";import"./Dialog-DhKmN4qh.js";import"./DialogContent-rtf5aXKs.js";import"./Alert-CE5w6l2H.js";import"./ToggleButton-Bub8BXIU.js";import"./ToggleButton-CAEgdqR9.js";import"./ToggleButtonGroup-D-3xBYH1.js";import"./LinkButton-BtFJ8Ptt.js";import"./Container-DqN7QDyr.js";import"./TextField-DLAYsvZY.js";import"./Switch-Dic_zt7r.js";import"./Switch-DvSveS_U.js";import"./LabeledSwitch-BYrzyMPQ.js";import"./RadioGroup-C-Ze-TFB.js";import"./FormControl-Doz5KOXY.js";import"./FormHelperText-BXOFl--T.js";import"./Tabs-V9ydvoHK.js";import"./MenuItem-DnUBD1eV.js";import"./AccordionDetails-gBwhydje.js";import"./Paper-DR1fCpm6.js";import"./ErrorFallback-BK4szP6K.js";import"./ErrorFallbackText-DH69geC6.js";import"./ErrorFallbackWrapper-Dy-bg1rq.js";import"./Brand-B5FmdXmX.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,It={title:"Feedback/Confirm dialog",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},args:{onConfirm:d(),onClose:d()},argTypes:{open:{control:"boolean",description:"Whether the dialog is shown. Controlled by the consumer."},title:{control:"text",description:'Short, action-focused heading (e.g. "Delete project?").'},body:{control:!1,description:"Body content. A string is wrapped in body2 Text; a ReactNode is rendered as-is.",table:{type:{summary:"ReactNode"}}},confirmLabel:{control:"text",description:'Label for the confirm button. Defaults to `"Confirm"` — set explicitly (e.g. `"Delete"`, `"Publish"`, `"Leave"`) for clarity.'},cancelLabel:{control:"text",description:'Label for the cancel button. Defaults to `"Cancel"`.'},pendingLabel:{control:"text",description:'Confirm-button label while `isPending` is true. Defaults to `"Working…"`.'},icon:{control:!1,description:"Icon shown in the header pill and on the confirm button. Defaults to `BinIcon` for destructive, `WarningIcon` for warning, none for neutral.",table:{type:{summary:"ReactNode"}}},isPending:{control:"boolean",description:"When true: buttons disable, confirm label swaps to `pendingLabel`, and close is blocked."},alert:{control:!1,description:'Optional callout rendered as an Alert below the body. Use it to emphasise domain consequences the user must read before confirming (e.g. "This permanently removes the dataset and orphans its distributions."). Not for surfacing async mutation errors — those belong in the calling flow, not inside the confirmation.',table:{type:{summary:"{ severity: AlertColor; message: string }"}}},variant:{control:"radio",options:[void 0,"warning","destructive"],description:'Visual tone. Undefined = neutral (default). `"warning"` = amber for consequential-but-not-destructive actions. `"destructive"` = red for irreversible removals.'},id:{control:"text",description:'Optional id prefix used for stable selectors. Defaults to `"confirm-dialog"`, producing `${id}-title`, `${id}-body`, `${id}-cancel`, `${id}-confirm`, `${id}-error`.'},ariaLabel:{control:"text",description:"Overrides the dialog's accessible name. When omitted, the title is used via `aria-labelledby`."}}},e=s=>{const[q,l]=P.useState(!1);return W(S,{children:[c(E,{onClick:()=>l(!0),children:"Open dialog"}),c(A,{...s,open:q,onClose:()=>{l(!1),s.onClose()},onConfirm:()=>{l(!1),s.onConfirm()}})]})},t={args:{open:!1,title:"Publish this dataset?",body:"Consumers with access will see the new version immediately.",confirmLabel:"Publish"},render:e,parameters:{docs:{description:{story:"The default. No `variant` set — primary confirm button, no header icon. Use for actions that need explicit consent but aren't dangerous (publish, submit, save, send)."}}}},o={args:{open:!1,variant:"warning",title:"Leave without saving?",body:"Your edits will be lost if you leave now.",confirmLabel:"Leave",cancelLabel:"Stay"},render:e,parameters:{docs:{description:{story:"For consequential actions that aren't destructive per se, but where the user should think twice — dirty-form leave-page, restart service, apply migration. Amber pill with `WarningIcon`, amber confirm button."}}}},r={args:{open:!1,variant:"destructive",title:"Delete project?",body:"This can't be undone. All related assets will also be removed.",confirmLabel:"Delete"},render:e,parameters:{docs:{description:{story:"For irreversible operations that remove something — delete, revoke, archive, remove-from-team. Red pill with `BinIcon`, red confirm button. Explicit opt-in — the default is neutral, so this styling never appears by accident."}}}},n={args:{open:!1,variant:"destructive",title:"Delete dataset?",body:"The dataset and its metadata will be removed from the catalogue.",confirmLabel:"Delete",alert:{severity:"warning",message:"This permanently removes the dataset and orphans its distributions. This action cannot be undone."}},render:e,parameters:{docs:{description:{story:"Use `alert` to surface an important consequence of the action as a visually distinct callout above the buttons. This is developer-authored context — pick the severity that matches the tone (`warning` for consequences, `info` for heads-up, `success` rarely). Not for showing async mutation errors."}}}},i={args:{open:!1,variant:"destructive",title:"Revoke API key?",body:"The key will stop working immediately. Existing clients using it will fail.",confirmLabel:"Revoke",icon:c(R,{})},render:e,parameters:{docs:{description:{story:"Override `icon` for any variant. Use for destructive actions that aren't deletes (revoke, archive, remove-from-team) or to reinforce a warning with a domain-specific glyph. The same icon renders in the header pill and on the confirm button."}}}},a={args:{open:!1,variant:"destructive",title:"Delete workspace?",body:"Deleting this workspace will permanently remove all projects, datasets, dashboards, saved queries, sharing rules, and audit logs contained within it. This action affects 12 collaborators and cannot be undone once confirmed.",confirmLabel:"Delete"},render:e,parameters:{docs:{description:{story:"The body wraps as needed within the 420px dialog. Use longer body copy when the user needs to understand exactly what the action affects before confirming."}}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,v,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,T,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var D,L,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(I=a.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const Ot=["Neutral","Warning","Destructive","WithAlert","CustomIcon","LongBody"];export{i as CustomIcon,r as Destructive,a as LongBody,t as Neutral,o as Warning,n as WithAlert,Ot as __namedExportsOrder,It as default};
