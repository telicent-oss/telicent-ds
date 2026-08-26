import{j as e,a as v}from"./iframe-CA_6RkqO.js";import{S as s,u as p,B as n}from"./DropdownButton-BZtDtOal.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DTk_4ZHb.js";import"./SvgIcon-BWAhgByR.js";import"./generateUtilityClass-CfDRvlGw.js";import"./styled-CVefpKE-.js";import"./generateUtilityClasses-C47siXwS.js";import"./useTheme-Dm6Z4O55.js";import"./Box-BW6pEvIo.js";import"./Box-DRdQdhLP.js";import"./Container-ljR5Mlot.js";import"./styled-BZqq2mi8.js";import"./createStyled-D4eWRD3H.js";import"./useThemeProps-Cd3wv7Xx.js";import"./FlexBox-CNxWriJY.js";import"./Stack-BF2ZTufs.js";import"./Typography-89Tvlrsc.js";import"./Paper-Ec3Q2dVy.js";import"./useThemeProps-Ciz7WQ9r.js";import"./Text-kbO6tKSd.js";import"./AdapterDayjs-D37bSqFv.js";import"./Modal-ClU2RWPM.js";import"./utils-CUE5wzp2.js";import"./TransitionGroupContext-B7OUtgPI.js";import"./index-CZHtQLZq.js";import"./resolveComponentProps-Dn_frYuF.js";import"./Popover-BEGXH3NQ.js";import"./TextField-vpmRkwtN.js";import"./useFormControl-B5eiIyWN.js";import"./createSvgIcon-BmwhwAqn.js";import"./IconButton-DtNtarBg.js";import"./ButtonBase-D6Bx6lP1.js";import"./DialogContent-Bjk6fQxi.js";import"./Button-CtzIpja4.js";import"./Chip-CUcMHjoK.js";import"./DateTimePicker-BFqbfcrX.js";import"./Divider-C7dFHnGB.js";import"./AppInfoRow-CEbLv7hl.js";import"./Chip-Bn4GruJi.js";import"./Divider-Ch-VEHlJ.js";import"./TreeView-B6I62OZ2.js";import"./Alert-fjB33Bay.js";import"./LinearProgress-uTJnSXzv.js";import"./Spinner-CCLxETt1.js";import"./Dialog-CxPCMfoF.js";import"./MapToggleButtonPresentational-5Q31WZ7z.js";import"./Remove-DmcGi_Wa.js";import"./LinkButton-vlyktWjA.js";import"./TextField-X3HuGAf0.js";import"./Switch-M79zMsH0.js";import"./DatePicker-C_Oow28J.js";import"./Paper-BuyoLuFc.js";import"./ErrorFallback-LaiW1HKw.js";import"./ErrorFallbackText-Ck2XCFF1.js";import"./ErrorFallbackWrapper-BumR9vBV.js";import"./Brand-D_DOo81n.js";import"./constants-CcDpWV1i.js";import"./Edit-M3NLeTM0.js";const Ce={title:"Feedback/Snackbar",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
The DS's snackbar system: filled Alert with severity colours, X-close affordance, and opinionated composition defaults. Mount \`SnackbarProvider\` once at the root; call \`enqueueSnackbar\` / \`useSnackbar\` from anywhere in the tree.

Every prop is overridable. The \`Components\` prop merges onto the DS defaults so a callsite customising one variant doesn't silently drop the DS content on the others.

---

### Defaults

- \`anchorOrigin\`: \`{ vertical: "top", horizontal: "right" }\`
- \`maxSnack\`: \`3\`
- \`autoHideDuration\`: \`7000\`ms — uniform across variants; the X provides earlier manual dismissal.
- \`preventDuplicate\`: \`true\` — identical enqueue calls are suppressed. Override per call with \`preventDuplicate: false\`.
- \`Components\`: DS Snackbar mounted for \`default\`, \`success\`, \`error\`, \`warning\`, \`info\`.

---

### Dismiss affordance

Every toast renders an X \`IconButton\` in the Alert's \`action\` slot. Clicking the toast body does **not** dismiss — the X is the only manual affordance. Callsites can supply their own \`action\` at \`enqueueSnackbar\` time; it composes to the left of the X.

---

### Palette

The DS supplies opinionated \`success\` / \`warning\` / \`info\` / \`error\` colours that filled Alert renders through. Toggle Themes in the toolbar to spot-check per-theme rendering.

---

### Example

\`\`\`tsx
import {
  SnackbarProvider,
  UIThemeProvider,
  enqueueSnackbar,
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
enqueueSnackbar({ variant: "success", message: "Dataset created." });

// With a callsite action (retry, undo, etc.):
const { closeSnackbar } = useSnackbar();

enqueueSnackbar({
  variant: "error",
  message: "Upload failed.",
  action: (id) => (
    <Button size="small" variant="text" onClick={() => closeSnackbar(id)}>
      Retry
    </Button>
  ),
});
\`\`\`
`}}}},b=["default","success","error","warning","info"],y=()=>{const{enqueueSnackbar:t}=p();return e("div",{style:{display:"flex",flexDirection:"column",gap:8,alignItems:"flex-start"},children:b.map(r=>v(n,{variant:"primary",onClick:()=>t({message:`This is a ${r} snackbar.`,variant:r}),children:["Show ",r]},r))})},o={parameters:{docs:{description:{story:"One trigger per variant. Toggle Themes to spot-check filled-Alert rendering per theme."}}},render:()=>e(s,{maxSnack:5,autoHideDuration:null,children:e(y,{})})},x=()=>{const{enqueueSnackbar:t,closeSnackbar:r}=p();return e(n,{variant:"primary",onClick:()=>t({message:"Upload failed.",variant:"error",action:c=>e(n,{size:"small",variant:"text",sx:{color:"inherit"},onClick:()=>{r(c),t({message:"Retrying...",variant:"info"})},children:"Retry"})}),children:"Show snackbar with callsite action"})},a={parameters:{docs:{description:{story:"A toast with a callsite-supplied `action` — the action renders to the left of the DS X. Use for retry, undo, or any per-toast affordance the callsite wants to expose."}}},render:()=>e(s,{children:e(x,{})})},A=()=>{const{enqueueSnackbar:t}=p();return e(n,{variant:"primary",onClick:()=>{b.forEach((r,c)=>t({message:`Stacked ${r} #${c+1}`,variant:r}))},children:"Fire 5 toasts at once"})},i={parameters:{docs:{description:{story:"Fires five snackbars in quick succession. Only three are visible at once (`maxSnack` default); the rest queue and appear as earlier toasts dismiss or auto-hide."}}},render:()=>e(s,{children:e(A,{})})};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "One trigger per variant. Toggle Themes to spot-check filled-Alert rendering per theme."
      }
    }
  },
  render: () => <SnackbarProvider maxSnack={5} autoHideDuration={null}>
      <VariantTriggers />
    </SnackbarProvider>
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A toast with a callsite-supplied \`action\` — the action renders to the left of the DS X. Use for retry, undo, or any per-toast affordance the callsite wants to expose."
      }
    }
  },
  render: () => <SnackbarProvider>
      <ActionComposition />
    </SnackbarProvider>
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,f,g;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Fires five snackbars in quick succession. Only three are visible at once (\`maxSnack\` default); the rest queue and appear as earlier toasts dismiss or auto-hide."
      }
    }
  },
  render: () => <SnackbarProvider>
      <StackDemo />
    </SnackbarProvider>
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Be=["AllVariants","WithCallsiteAction","MaxStack"];export{o as AllVariants,i as MaxStack,a as WithCallsiteAction,Be as __namedExportsOrder,Ce as default};
