import{j as e,a as g}from"./iframe-BXY8qhtT.js";import{S as s,s as i,B as n,u as b}from"./DropdownButton-CMCln0pB.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Bz3heM6b.js";import"./SvgIcon-Ny0aRQHI.js";import"./generateUtilityClass-wYVai49J.js";import"./styled-H7Fdw8PF.js";import"./generateUtilityClasses-BA7K2SXw.js";import"./useTheme-jpEbcY17.js";import"./Box-BKFfSYU7.js";import"./Box-DmdH8_CM.js";import"./Container-u3BuaPcs.js";import"./styled-bWS-fPzl.js";import"./createStyled-C5U3_gNR.js";import"./useThemeProps-lfivHL7Q.js";import"./FlexBox-H-sCRMiR.js";import"./Stack-mn3XG4cs.js";import"./Typography-D_A1aX7c.js";import"./Paper-Dxa9EUvO.js";import"./useThemeProps-DH9W_0R3.js";import"./Text-BYojZcvc.js";import"./AdapterDayjs-5XgIQcgH.js";import"./Modal-ipxBrzNN.js";import"./utils-CE69r2C4.js";import"./TransitionGroupContext-CryLiEHc.js";import"./index-WLUfl6fz.js";import"./resolveComponentProps-mqZrAnvV.js";import"./Popover-BVxxj8q6.js";import"./TextField-BpDVwlCN.js";import"./useFormControl-E--nQZxq.js";import"./createSvgIcon-DjsA-uZ8.js";import"./IconButton-B-B6ziHV.js";import"./ButtonBase-BadIhpsX.js";import"./DialogContent-CyDUkUFC.js";import"./Button-BGy2rwjE.js";import"./Chip-B3_yOCCL.js";import"./DateTimePicker-B7sYKJNb.js";import"./Divider-B2-WeumM.js";import"./AppInfoRow-ZAGiEJOr.js";import"./Chip-C5kaT8Lc.js";import"./Divider-BZWBYD5d.js";import"./TreeView-lJGuyWyx.js";import"./Alert-CbPLOKCy.js";import"./LinearProgress-BRbnBQfK.js";import"./Spinner-DiRwWvdE.js";import"./Dialog-Djinkl1M.js";import"./MapToggleButtonPresentational-BPCec7gk.js";import"./Remove-FN9daPXK.js";import"./LinkButton-CCn1fa7f.js";import"./TextField-BiPbqIQb.js";import"./Switch-CbYpuBJM.js";import"./DatePicker-B42bozBr.js";import"./Paper-BJ8D2bs1.js";import"./ErrorFallback-CXf1lrVR.js";import"./ErrorFallbackText-BbxsiRdP.js";import"./ErrorFallbackWrapper-F_6HkMfr.js";import"./Brand-BHfEveUR.js";import"./constants-BgFE9pGk.js";import"./Edit-0n8mwjN-.js";const Be={title:"Feedback/Snackbar",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
The DS's snackbar system: filled Alert with severity colours, X-close affordance, and opinionated composition defaults. Mount \`SnackbarProvider\` once at the root; call \`snackbar()\` from anywhere in the tree.

Every prop is overridable. The \`Components\` prop merges onto the DS defaults so a callsite customising one type doesn't silently drop the DS content on the others.

---

### Defaults

- \`anchorOrigin\`: \`{ vertical: "top", horizontal: "right" }\`
- \`maxSnack\`: \`3\`
- \`autoHideDuration\`: \`7000\`ms — uniform across types; the X provides earlier manual dismissal.
- \`preventDuplicate\`: \`true\` — identical enqueue calls are suppressed. Override per call with \`preventDuplicate: false\`.
- \`Components\`: DS Snackbar mounted for \`success\`, \`error\`, \`warning\`, \`info\`. No \`default\` — a \`type\` is required.

---

### Dismiss affordance

Every toast renders an X \`IconButton\` in the Alert's \`action\` slot. Clicking the toast body does **not** dismiss — the X is the only manual affordance. Callsites can supply their own \`action\` at \`snackbar()\` time; it composes to the left of the X.

---

### Palette

The DS supplies opinionated \`success\` / \`warning\` / \`info\` / \`error\` colours that filled Alert renders through. Toggle Themes in the toolbar to spot-check per-theme rendering.

---

### Example

\`\`\`tsx
import {
  SnackbarProvider,
  UIThemeProvider,
  snackbar,
  useSnackbar,
  Button,
} from "@telicent-oss/ds";

// Root: mount once inside your theme provider.
<UIThemeProvider dark theme="AdminBlue">
  <SnackbarProvider>
    <App />
  </SnackbarProvider>
</UIThemeProvider>;

// Anywhere in the tree — fire-and-forget:
snackbar({ type: "success", message: "Dataset created." });

// With a callsite action (retry, undo, etc.):
const { closeSnackbar } = useSnackbar();

snackbar({
  type: "error",
  message: "Upload failed.",
  action: (id) => (
    <Button size="small" variant="text" onClick={() => closeSnackbar(id)}>
      Retry
    </Button>
  ),
});
\`\`\`
`}}}},y=["success","error","warning","info"],v=()=>e("div",{style:{display:"flex",flexDirection:"column",gap:8,alignItems:"flex-start"},children:y.map(r=>g(n,{variant:"primary",onClick:()=>i({type:r,message:`This is a ${r} snackbar.`}),children:["Show ",r]},r))}),t={parameters:{docs:{description:{story:"One trigger per type. Toggle Themes to spot-check filled-Alert rendering per theme."}}},render:()=>e(s,{maxSnack:5,autoHideDuration:null,children:e(v,{})})},T=()=>{const{closeSnackbar:r}=b();return e(n,{variant:"primary",onClick:()=>i({type:"error",message:"Upload failed.",action:c=>e(n,{size:"small",variant:"text",sx:{color:"inherit"},onClick:()=>{r(c),i({type:"info",message:"Retrying..."})},children:"Retry"})}),children:"Show snackbar with action"})},o={parameters:{docs:{description:{story:"A toast with an `action` supplied at `snackbar()` time — it renders to the left of the DS X. Use for retry, undo, or any per-toast affordance."}}},render:()=>e(s,{children:e(T,{})})},x=()=>e(n,{variant:"primary",onClick:()=>{y.forEach((r,c)=>i({type:r,message:`Stacked ${r} #${c+1}`}))},children:"Fire 4 toasts at once"}),a={parameters:{docs:{description:{story:"Fires four snackbars in quick succession. Only three are visible at once (`maxSnack` default); each new toast auto-dismisses the oldest to make room."}}},render:()=>e(s,{children:e(x,{})})};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "One trigger per type. Toggle Themes to spot-check filled-Alert rendering per theme."
      }
    }
  },
  render: () => <SnackbarProvider maxSnack={5} autoHideDuration={null}>
      <TypeTriggers />
    </SnackbarProvider>
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A toast with an \`action\` supplied at \`snackbar()\` time — it renders to the left of the DS X. Use for retry, undo, or any per-toast affordance."
      }
    }
  },
  render: () => <SnackbarProvider>
      <ActionComposition />
    </SnackbarProvider>
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var k,f,S;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Fires four snackbars in quick succession. Only three are visible at once (\`maxSnack\` default); each new toast auto-dismisses the oldest to make room."
      }
    }
  },
  render: () => <SnackbarProvider>
      <StackDemo />
    </SnackbarProvider>
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const Oe=["AllTypes","WithAction","MaxStack"];export{t as AllTypes,a as MaxStack,o as WithAction,Oe as __namedExportsOrder,Be as default};
