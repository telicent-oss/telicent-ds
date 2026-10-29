import{a as c,r as P,b as W,F as S}from"./iframe-Bm3hXUOR.js";import{e as A,B as E}from"./EntityList-rJdJf1cx.js";import{a as R}from"./ExpandLessIcon-DBGEN9sP.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-_AwHYlr2.js";import"./Stack-CweGn0Hc.js";import"./styled-DyULGS0b.js";import"./extendSxProp-BuZx_F0_.js";import"./clsx-B-dksMZM.js";import"./styled-C7iFnRcW.js";import"./createStyled-BSW-AAi3.js";import"./useThemeProps-DbicsnOf.js";import"./composeClasses-fLhin0tj.js";import"./Text-DijcGIMv.js";import"./Typography-IeSSUSnG.js";import"./ListContext-DK998PZh.js";import"./ListItem-mVDRARA2.js";import"./FormControl-BPl_v2oA.js";import"./useFormControl-Dh2tG7y1.js";import"./TransitionGroupContext-TroGB69i.js";import"./resolveComponentProps-B_u2Bd7V.js";import"./ButtonBase-B90bUUd9.js";import"./Toolbar-BGwmXmZ6.js";import"./TextField-DZPOD6P2.js";import"./Modal-DT28HXjZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-BDu1bYir.js";import"./index-Cj-yI5r7.js";import"./index-DQBmKBjb.js";import"./utils-BaA0rvxy.js";import"./Popover-EfvB51d9.js";import"./Paper-pWUzODlp.js";import"./useControlled-BLxWakUc.js";import"./createSvgIcon-CY9Fp0_O.js";import"./SvgIcon-BeWTLv9H.js";import"./FormHelperText-B1KQ539b.js";import"./Close-DwHyc7oX.js";import"./Popper-ByZb3Mzn.js";import"./Badge-C2hR_d-s.js";import"./Chip-BZnuQMLc.js";import"./IconButton-CErjrx2_.js";import"./FormControlLabel-zVmiSlDE.js";import"./MenuItem-DPWeZRqW.js";import"./dividerClasses-DReHYfP6.js";import"./Button-CBrDpZ-p.js";import"./MapToggleButtonPresentational-CBDLh_cV.js";import"./Remove-BQa1AOEr.js";import"./Box-CexaEQmQ.js";import"./CogIcon-BvyMh2cw.js";import"./InfoIcon-DtylHRhB.js";import"./ExpandMoreIcon-Rcc8lwpw.js";import"./ThemeSwitchRow-D2RDNnRH.js";import"./index-DCLPWREO.js";import"./IconButton-DbDsumXP.js";import"./Badge-Bln6FEW9.js";import"./Chip-sFPDCY_T.js";import"./Divider-1DTE9E3S.js";import"./Divider-eqbb1UOv.js";import"./TreeView-DbGOvJIf.js";import"./useThemeProps-Bp1dY9od.js";import"./Collapse-Ddn3acUj.js";import"./useSlot-Dr-m60mq.js";import"./AppInfoRow-C1wf-V0h.js";import"./_IconPopover-B-DWREQB.js";import"./Box-D21XowzU.js";import"./AppSettings-ueUwBjzn.js";import"./SvgIcon-BOgW6Vs6.js";import"./TableRow-D-N1ayrG.js";import"./TableCell-D6yiUVMs.js";import"./Skeleton-D7hRqs-z.js";import"./Skeleton-B_UdrOGr.js";import"./Edit-RIIp7UWE.js";import"./LinearProgress-CayA7BiN.js";import"./LinearProgress-BUkYKEbD.js";import"./Spinner-DXnO_-hv.js";import"./CircularProgress-Dib0Lx_Z.js";import"./Dialog-BJXw5Ehe.js";import"./DialogContent-DMwkd_KF.js";import"./Alert-FBw1yGft.js";import"./ToggleButton-YWaXnOlt.js";import"./ToggleButton-BCPxy8Ge.js";import"./ToggleButtonGroup-DgGofYMS.js";import"./LinkButton-BXoA6ppQ.js";import"./Container-edJRQxXs.js";import"./TextField-ByxcbquB.js";import"./Switch-CDRD8Euo.js";import"./Switch-It0KOob1.js";import"./LabeledSwitch-DVDqP3zB.js";import"./RadioGroup-BAvBK26U.js";import"./FormControl-CiX3rHgQ.js";import"./FormHelperText-Bc9Sqjm2.js";import"./Tabs-3h5XvcqN.js";import"./MenuItem-CH4gFEae.js";import"./AccordionDetails-Ct_vIrVf.js";import"./Paper-BDi0dJoh.js";import"./ErrorFallback-DgO8QC3X.js";import"./ErrorFallbackText-C_qZY6-a.js";import"./ErrorFallbackWrapper-FM7Ac7RI.js";import"./Brand-CHH9dXMD.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,Ot={title:"Feedback/Confirm dialog",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
