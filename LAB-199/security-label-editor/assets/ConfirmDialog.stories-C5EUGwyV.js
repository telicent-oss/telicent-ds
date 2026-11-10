import{a as c,r as P,b as W,F as S}from"./iframe-BOxWlwg5.js";import{e as A,B as E}from"./UserProfileContent-dZ7zWbX5.js";import{a as R}from"./XIcon-DBA19TI9.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-RST7cKYM.js";import"./clsx-B-dksMZM.js";import"./styled-BgVBpEwg.js";import"./extendSxProp-CVzwORHv.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Fpsrv8av.js";import"./TransitionGroupContext-s9Ly73kI.js";import"./MapToggleButtonPresentational-BdOPS_HS.js";import"./Remove-q51AYkkp.js";import"./createSvgIcon-Cbav5LI2.js";import"./SvgIcon-BuYUPz_9.js";import"./IconButton-Dau69Om4.js";import"./Paper-sf9JWptJ.js";import"./Box-CvHBf5NP.js";import"./Brand-XnqjgZ4f.js";import"./Typography-CFlIo-Q1.js";import"./IconButton-LgOVvbaj.js";import"./LinkButton-D8kcuh6P.js";import"./AppInfoRow-CANQsy5u.js";import"./_IconPopover-OfVEyw5R.js";import"./Box-DtSH4RJf.js";import"./Popover-DE_4eFiH.js";import"./utils-C3dOeq5Z.js";import"./index-CNcMevBU.js";import"./index-DGC1M5ns.js";import"./Modal-BhqwZZig.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-vB5A6xUp.js";import"./useSlotProps-Cg0GMwyG.js";import"./InfoIcon-BG9JhvZK.js";import"./FlexBox-Cv8f2Kgf.js";import"./Stack-CawfPr20.js";import"./styled-DO2oWJWU.js";import"./createStyled-BNm24LSV.js";import"./useThemeProps-Bxv5NIts.js";import"./Text-dB-e86oS.js";import"./AppSettings-DiZ0JEr4.js";import"./CogIcon-B7SI9pu3.js";import"./Badge-BGOsj2Ca.js";import"./Badge-DI9NlIAf.js";import"./Chip-8tQb7tBt.js";import"./Chip-iuAj1t61.js";import"./Divider-kspxcsBA.js";import"./Divider-w9MV6g0K.js";import"./dividerClasses-B5mKUAOo.js";import"./ThemeSwitchRow--QYarRG2.js";import"./Skeleton-O_rn9M7d.js";import"./Skeleton-DiHIX88t.js";import"./TextField-B-iZ9q_3.js";import"./useFormControl-CqEKaJO6.js";import"./FormControl-CNCCIB7H.js";import"./ListContext-3BYol91A.js";import"./useControlled-Crd973ZW.js";import"./FormHelperText-Cdu7wh-n.js";import"./MenuItem-DCjm5sxk.js";import"./ExpandMoreIcon-cR278gH1.js";import"./ListItem-sx5uYsfj.js";import"./Toolbar-BDm5sDas.js";import"./Close-CIRg-aOw.js";import"./Popper-BZv-1Yvv.js";import"./FormControlLabel-oASRYr7v.js";import"./Edit-Crc51dG7.js";import"./SvgIcon-BtF96WW6.js";import"./TableRow-B9BSqYVz.js";import"./TableCell-kr0lx5yP.js";import"./TreeView-BwV_15o1.js";import"./useThemeProps-CkA-ZwoX.js";import"./index-DHZDPTGE.js";import"./Collapse-CJdJ3uyR.js";import"./Dialog-MZhmu3-0.js";import"./DialogContent-CR-wXjtm.js";import"./Alert-bOjTzR4W.js";import"./useSlot-ljNNkbcn.js";import"./LinearProgress-B2bHkg80.js";import"./LinearProgress-CX8da3qz.js";import"./Spinner-COCl1drt.js";import"./CircularProgress-BHwLWokq.js";import"./TextField-DIbPruU-.js";import"./FormControl-Dwd6rDK_.js";import"./FormHelperText-BIWFhEJH.js";import"./LabeledSwitch-C8YuLEMm.js";import"./Switch-CUBlLIbd.js";import"./Switch-9odXMQM9.js";import"./RadioGroup-OVsHCzkT.js";import"./Container-DHBouHEB.js";import"./ToggleButton-CsoQZQ9x.js";import"./ToggleButton-DfWGuPF5.js";import"./ToggleButtonGroup-BIYFhty6.js";import"./MenuItem-Bh_ocaUE.js";import"./Tabs-BsBGmFx0.js";import"./AccordionSummary-DWx619cH.js";import"./Paper-B8YjvAvG.js";import"./ErrorFallback-z7nRQ4o7.js";import"./ErrorFallbackText-x_QK0bvY.js";import"./ErrorFallbackWrapper-CSs0BRCk.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,Ot={title:"Feedback/Confirm dialog",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
