import{a as c,r as P,b as W,F as S}from"./iframe-Cc505q8T.js";import{e as A,B as E}from"./UserProfileContent-BCGV3pt1.js";import{a as R}from"./XIcon-DfplpFrn.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BGbQUNXq.js";import"./clsx-B-dksMZM.js";import"./styled-BvzKQ4sx.js";import"./extendSxProp-DK-r-88F.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-xv6WL43m.js";import"./TransitionGroupContext-CQcyUDLY.js";import"./MapToggleButtonPresentational-SEdkkgro.js";import"./Remove-wLSkQjhc.js";import"./createSvgIcon-C2iK1MKO.js";import"./SvgIcon-QK6eTELx.js";import"./IconButton-wGfyijkC.js";import"./Paper-BEgnxPoV.js";import"./Box-DBDnR1g8.js";import"./Brand-B_inw8Nn.js";import"./Typography-JA0wl7ef.js";import"./IconButton-bijqnudJ.js";import"./LinkButton-CrQZWdvL.js";import"./AppInfoRow-DNstdpiQ.js";import"./_IconPopover-CEgvvroX.js";import"./Box-C7w_TU32.js";import"./Popover-B-7QVUjC.js";import"./utils-llZg6Ldu.js";import"./index-BYRKYzg2.js";import"./index-E67BpH2O.js";import"./Modal-B1TMbF1u.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CEFtJ1JV.js";import"./useSlotProps-vDTfIZOq.js";import"./InfoIcon-Dz7o8k3j.js";import"./FlexBox-INXNFDos.js";import"./Stack-CXQatkal.js";import"./styled-nyzOJzdX.js";import"./createStyled-DL0YunmW.js";import"./useThemeProps-DUoDE_hW.js";import"./Text-CeS4nIe3.js";import"./AppSettings-CJGIgiF6.js";import"./CogIcon-ChH7stlR.js";import"./Badge-CaVpaSp6.js";import"./Badge-UZyuKCJw.js";import"./Chip-CSt2gfB4.js";import"./Chip-C0LSZzbe.js";import"./Divider-DoUPlLT7.js";import"./Divider-CzNUtG-0.js";import"./dividerClasses-BvSlSoD1.js";import"./ThemeSwitchRow-DppX6RPX.js";import"./Skeleton-NT2g86kk.js";import"./Skeleton-wC5DXAYG.js";import"./TextField-BD6Mkee3.js";import"./useFormControl-C6vP74Jn.js";import"./FormControl-Ca5m24gk.js";import"./ListContext-mDo66NCa.js";import"./useControlled-bQ2OS_cP.js";import"./FormHelperText-BoGba_Gk.js";import"./MenuItem-CezCKy8F.js";import"./ExpandMoreIcon-ldPi6jMj.js";import"./ListItem-B3mBow1c.js";import"./Toolbar-bO9Fqt8n.js";import"./Close-DueXUMhB.js";import"./Popper-nweOkxzE.js";import"./FormControlLabel-CbfZt0_t.js";import"./Edit-CHOg278_.js";import"./SvgIcon-BEgI93BA.js";import"./TableRow-DCNIHjLK.js";import"./TableCell-B-Xo9P4q.js";import"./TreeView-BzLLrYY7.js";import"./useThemeProps-vZa-IxWp.js";import"./index-CmE1T0Xl.js";import"./Collapse-QTd9ButL.js";import"./Dialog-Co_6VBJM.js";import"./DialogContent-DXpWtf-D.js";import"./Alert-wTSBptqR.js";import"./useSlot-DSvhdQyN.js";import"./LinearProgress-CF5PbK0_.js";import"./LinearProgress-B38XWAmN.js";import"./Spinner-CkaqrDBP.js";import"./CircularProgress-Bo5P2Z-p.js";import"./TextField-CwQOSZsD.js";import"./FormControl-Bh0L5A3e.js";import"./FormHelperText-Dd5c2IgU.js";import"./LabeledSwitch-BO0Zz5ka.js";import"./Switch-ChbOueU7.js";import"./Switch-CHwrG2-X.js";import"./RadioGroup-CFZqodNP.js";import"./Container-C5FmO0ZG.js";import"./ToggleButton-D96Gk9kD.js";import"./ToggleButton--FZGV6SF.js";import"./ToggleButtonGroup-DaCVckCp.js";import"./MenuItem-CS3aBPeu.js";import"./Tabs-DF-xdkqW.js";import"./AccordionSummary-Bssa8i78.js";import"./Paper-DT8s_h7n.js";import"./ErrorFallback-BhqQfFtZ.js";import"./ErrorFallbackText-CIKedg_H.js";import"./ErrorFallbackWrapper-CGtn1SJd.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,Ot={title:"Feedback/Confirm dialog",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},args:{onConfirm:d(),onClose:d()},argTypes:{open:{control:"boolean",description:"Whether the dialog is shown. Controlled by the consumer."},title:{control:"text",description:'Short, action-focused heading (e.g. "Delete project?").'},body:{control:!1,description:"Body content. A string is wrapped in body2 Text; a ReactNode is rendered as-is.",table:{type:{summary:"ReactNode"}}},confirmLabel:{control:"text",description:'Label for the confirm button. Defaults to `"Confirm"` — set explicitly (e.g. `"Delete"`, `"Publish"`, `"Leave"`) for clarity.'},cancelLabel:{control:"text",description:'Label for the cancel button. Defaults to `"Cancel"`.'},pendingLabel:{control:"text",description:'Confirm-button label while `isPending` is true. Defaults to `"Working…"`.'},icon:{control:!1,description:"Icon shown in the header pill and on the confirm button. Defaults to `BinIcon` for destructive, `WarningIcon` for warning, none for neutral.",table:{type:{summary:"ReactNode"}}},isPending:{control:"boolean",description:"When true: buttons disable, confirm label swaps to `pendingLabel`, and close is blocked."},alert:{control:!1,description:'Optional callout rendered as an Alert below the body. Use it to emphasise domain consequences the user must read before confirming (e.g. "This permanently removes the dataset and orphans its distributions."). Not for surfacing async mutation errors — those belong in the calling flow, not inside the confirmation.',table:{type:{summary:"{ severity: AlertColor; message: string }"}}},variant:{control:"radio",options:[void 0,"warning","destructive"],description:'Visual tone. Undefined = neutral (default). `"warning"` = amber for consequential-but-not-destructive actions. `"destructive"` = red for irreversible removals.'},id:{control:"text",description:'Optional id prefix used for stable selectors. Defaults to `"confirm-dialog"`, producing `${id}-title`, `${id}-body`, `${id}-cancel`, `${id}-confirm`, `${id}-error`.'},ariaLabel:{control:"text",description:"Overrides the dialog's accessible name. When omitted, the title is used via `aria-labelledby`."}}},e=s=>{const[q,l]=P.useState(!1);return W(S,{children:[c(E,{onClick:()=>l(!0),children:"Open dialog"}),c(A,{...s,open:q,onClose:()=>{l(!1),s.onClose()},onConfirm:()=>{l(!1),s.onConfirm()}})]})},t={args:{open:!1,title:"Publish this dataset?",body:"Consumers with access will see the new version immediately.",confirmLabel:"Publish"},render:e,parameters:{docs:{description:{story:"The default. No `variant` set — primary confirm button, no header icon. Use for actions that need explicit consent but aren't dangerous (publish, submit, save, send)."}}}},o={args:{open:!1,variant:"warning",title:"Leave without saving?",body:"Your edits will be lost if you leave now.",confirmLabel:"Leave",cancelLabel:"Stay"},render:e,parameters:{docs:{description:{story:"For consequential actions that aren't destructive per se, but where the user should think twice — dirty-form leave-page, restart service, apply migration. Amber pill with `WarningIcon`, amber confirm button."}}}},r={args:{open:!1,variant:"destructive",title:"Delete project?",body:"This can't be undone. All related assets will also be removed.",confirmLabel:"Delete"},render:e,parameters:{docs:{description:{story:"For irreversible operations that remove something — delete, revoke, archive, remove-from-team. Red pill with `BinIcon`, red confirm button. Explicit opt-in — the default is neutral, so this styling never appears by accident."}}}},n={args:{open:!1,variant:"destructive",title:"Delete dataset?",body:"The dataset and its metadata will be removed from the catalogue.",confirmLabel:"Delete",alert:{severity:"warning",message:"This permanently removes the dataset and orphans its distributions. This action cannot be undone."}},render:e,parameters:{docs:{description:{story:"Use `alert` to surface an important consequence of the action as a visually distinct callout above the buttons. This is developer-authored context — pick the severity that matches the tone (`warning` for consequences, `info` for heads-up, `success` rarely). Not for showing async mutation errors."}}}},i={args:{open:!1,variant:"destructive",title:"Revoke API key?",body:"The key will stop working immediately. Existing clients using it will fail.",confirmLabel:"Revoke",icon:c(R,{})},render:e,parameters:{docs:{description:{story:"Override `icon` for any variant. Use for destructive actions that aren't deletes (revoke, archive, remove-from-team) or to reinforce a warning with a domain-specific glyph. The same icon renders in the header pill and on the confirm button."}}}},a={args:{open:!1,variant:"destructive",title:"Delete workspace?",body:"Deleting this workspace will permanently remove all projects, datasets, dashboards, saved queries, sharing rules, and audit logs contained within it. This action affects 12 collaborators and cannot be undone once confirmed.",confirmLabel:"Delete"},render:e,parameters:{docs:{description:{story:"The body wraps as needed within the 420px dialog. Use longer body copy when the user needs to understand exactly what the action affects before confirming."}}}},At=["Neutral","Warning","Destructive","WithAlert","CustomIcon","LongBody"];var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(O=(I=a.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};export{i as CustomIcon,r as Destructive,a as LongBody,t as Neutral,o as Warning,n as WithAlert,At as __namedExportsOrder,Ot as default};
