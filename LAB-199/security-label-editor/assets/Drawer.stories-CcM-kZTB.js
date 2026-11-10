import{a as e,b as a,r as D,F as S}from"./iframe-Qc_S7xDc.js";import{r as A,B as l}from"./UserProfileContent-BtTtKEHB.js";import{X as O}from"./XIcon-FwcEWS-P.js";import{c as E,T as F}from"./Text-B8g7NM2g.js";import{F as p}from"./FlexBox-DBS92b2G.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dj7cUP7O.js";import"./clsx-B-dksMZM.js";import"./styled-CgcIX_5n.js";import"./extendSxProp-BDprp3VL.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-BGM1JOzh.js";import"./TransitionGroupContext-CPUMsqsi.js";import"./MapToggleButtonPresentational-BTwyEcFF.js";import"./Remove-BPrAu3rF.js";import"./createSvgIcon-vUDj1WZO.js";import"./SvgIcon-CVLqOmKr.js";import"./IconButton-BfhPabTn.js";import"./Paper-C70JDaiv.js";import"./Box-CxkKEmSS.js";import"./Brand-CXuO_7Nj.js";import"./Typography-Cu-yy0Da.js";import"./IconButton-CRgr_6IA.js";import"./LinkButton-PZL0MtA6.js";import"./AppInfoRow-L9Ct41uR.js";import"./_IconPopover-CVwwBihx.js";import"./Box-DtX81eGL.js";import"./Popover-C5IN9cMT.js";import"./utils-ckqgl2AC.js";import"./index-xdr6vpDP.js";import"./index-DFgxXqr5.js";import"./Modal-KUCWN-hc.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C8vHIN9n.js";import"./useSlotProps-fAUM90Vx.js";import"./InfoIcon-WP7T-PZz.js";import"./AppSettings-DLGgVhD4.js";import"./CogIcon-QfRJwl7x.js";import"./Badge-DH4M2IdE.js";import"./Badge-if7a42J8.js";import"./Chip-DtxHEqsM.js";import"./Chip-uL9TB9Pu.js";import"./Divider-CTYdoKka.js";import"./Divider-D8fiawbv.js";import"./dividerClasses-yonhPajF.js";import"./ThemeSwitchRow-B00tKUjH.js";import"./Skeleton-BJSorI16.js";import"./Skeleton-Dkff_NGZ.js";import"./TextField-xzu_DPyE.js";import"./useFormControl-xNPWxtva.js";import"./FormControl-X_hisCzp.js";import"./ListContext-BHAyDyBX.js";import"./useControlled-Cpi-ico-.js";import"./FormHelperText-DwzhRR8K.js";import"./MenuItem-TKTN96be.js";import"./ExpandMoreIcon-CcvmRhY8.js";import"./ListItem-C8W6Ik8d.js";import"./Toolbar-DSDblHdz.js";import"./Close-CIhAeHGU.js";import"./Popper-BT4vA2xI.js";import"./FormControlLabel-DLxcqeM9.js";import"./Stack-DoNqUwFA.js";import"./styled-BB7A3pcn.js";import"./createStyled-CUdeGtFR.js";import"./useThemeProps-BxFBB-sR.js";import"./Edit-BvmZceNx.js";import"./SvgIcon-BrScsTXV.js";import"./TableRow-DHvRRQH1.js";import"./TableCell-_uNta8pa.js";import"./TreeView-BfiblcHE.js";import"./useThemeProps-Df8lhP5o.js";import"./index-C7V_D8MZ.js";import"./Collapse-CYu1yO86.js";import"./Dialog-DQAHdxrq.js";import"./DialogContent-DxaHQn4a.js";import"./Alert-C-ywUKjz.js";import"./useSlot-Cj9015tv.js";import"./LinearProgress-YzlvXZ7B.js";import"./LinearProgress-Cx-vdS0c.js";import"./Spinner-CFkE0pqS.js";import"./CircularProgress-Cu2BM2_M.js";import"./TextField-CMKqH5KV.js";import"./FormControl-BQbHDIJ4.js";import"./FormHelperText-Ca1ptZ2c.js";import"./LabeledSwitch-Z3aJeObb.js";import"./Switch-DDlhBOlC.js";import"./Switch-CLg_WwE6.js";import"./RadioGroup-Bf07373r.js";import"./Container-C-AxOArc.js";import"./ToggleButton-ClkVXijM.js";import"./ToggleButton-DMCkzxLU.js";import"./ToggleButtonGroup-B1_EfocB.js";import"./MenuItem-CFb7InxQ.js";import"./Tabs-C5IpzZMr.js";import"./AccordionSummary-Bp6-l77_.js";import"./Paper-CUW1p5Tc.js";import"./ErrorFallback-CETo05fh.js";import"./ErrorFallbackText-CMA-asQU.js";import"./ErrorFallbackWrapper-iwCi0O44.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,kr={title:"Surfaces/Drawer",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
A controlled side sheet for a task done beside the page: filters, details, settings. MUI's \`Drawer\` under the DS theme.

---

### The opinion

- **Controlled.** The caller owns \`open\` and \`onClose\`. Escape, a backdrop click and your close button all go through \`onClose\`, so dismissal has one path. A form inside can discard its draft there and know it ran on every dismissal.
- **\`width\`.** A width for a left or right panel, in px when a number. No more \`PaperProps={{ sx: { width } }}\`.
- **Capped at the viewport.** A temporary (modal) drawer's paper has \`maxWidth: 100vw\`, so a fixed width never runs off a narrow screen.

---

### Accessibility

- It's modal: focus moves inside when it opens, is trapped while it's open, and returns to the trigger when it closes (WCAG 2.4.3).
- Give the trigger \`aria-expanded\`, and the panel a heading and a labelled close button (WCAG 4.1.2).

---

### Defaults

- \`width\`: unset. Pass one; MUI otherwise sizes the paper to its content.
- \`maxWidth\`: \`100vw\`, on temporary drawers only. The deprecated, persistent \`InsetDrawer\` keeps its own layout.

---

### Other supported features

- Every MUI \`Drawer\` prop passes through: \`anchor\`, \`variant\`, \`PaperProps\` (your \`sx\` merges after \`width\`), \`ModalProps\`.
- The paper is a flex column, so a header and footer stay put while a \`flex: 1\` body scrolls.

---

### When & how to use it

- **Use it** for a side task with its own controls, such as a filter panel with Apply.
- **Don't use it** for a small contextual overlay; reach for \`PopOver\`.
- **Not for the map inset.** The deprecated \`InsetDrawer\` is the map's ref-driven panel, kept for existing consumers.

---

### Example

\`\`\`tsx
import { Button, Drawer, FlexBox, Text, XIcon } from "@telicent-oss/ds";

<Drawer anchor="right" width={420} open={isOpen} onClose={onClose}>
  <FlexBox direction="row" justifyContent="space-between" sx={{ px: 3, py: 2 }}>
    <Text component="h2">Refine</Text>
    <Button variant="text" aria-label="Close refine" onClick={onClose}>
      <XIcon />
    </Button>
  </FlexBox>
  <FlexBox sx={{ flex: 1, overflowY: "auto", px: 3 }}>{filters}</FlexBox>
  <FlexBox direction="row" justifyContent="flex-end" sx={{ px: 3, py: 2 }}>
    <Button variant="primary" onClick={onApply}>Apply</Button>
  </FlexBox>
</Drawer>
\`\`\`
        `}}},argTypes:{width:{control:{type:"number"},description:"Width of a left or right panel, in px when a number. Capped at the viewport.",table:{type:{summary:"number | string"}}},anchor:{control:{type:"select"},options:["left","right","top","bottom"],description:"The edge the drawer opens from."},open:{control:{type:"boolean"},description:"Controlled. The caller owns it."},onClose:{action:"closed",description:"Escape, a backdrop click, or your close button."},children:{control:!1}},args:{onClose:I()}},d=({body:r,...c})=>{const[o,h]=D.useState(!1),m=()=>h(!1);return a(S,{children:[e(l,{variant:"primary","aria-expanded":o,onClick:()=>h(!0),children:"Open drawer"}),a(A,{anchor:"right",...c,open:o,onClose:m,children:[a(p,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:3,py:2,borderBottom:1,borderColor:"divider"},children:[e(E,{sx:{fontSize:20},children:"Refine"}),e(l,{variant:"text","aria-label":"Close refine",onClick:m,sx:{minWidth:0},children:e(O,{})})]}),e(p,{sx:{flex:1,overflowY:"auto",px:3,py:2},children:r??e(F,{children:"Panel content"})}),e(p,{direction:"row",justifyContent:"flex-end",sx:{px:3,py:2,borderTop:1,borderColor:"divider"},children:e(l,{variant:"primary",onClick:m,children:"Apply"})})]})]})},t={args:{open:!1},parameters:{docs:{description:{story:"Opened from a button. The close button, Escape and a backdrop click all close it through `onClose`."}}},render:()=>e(d,{})},i={args:{open:!1,width:420},parameters:{docs:{description:{story:"`width={420}` from the right: the filter panel's shape."}}},render:r=>e(d,{width:r.width})},n={args:{open:!1,width:1600},parameters:{docs:{description:{story:"A width wider than the screen stops at the viewport, so the sheet never runs off a narrow window."}}},render:r=>e(d,{width:r.width})},s={args:{open:!1,width:420},parameters:{docs:{description:{story:"Long content scrolls in a `flex: 1` body between a fixed header and footer, because the paper is a flex column."}}},render:r=>e(d,{width:r.width,body:e(p,{direction:"column",gap:1,children:Array.from({length:60},(c,o)=>a(F,{children:["Filter option ",o+1]},o))})})},Ar=["Default","Width","CappedAtViewport","HeaderBodyFooter"];var f,w,u;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    open: false
  },
  parameters: {
    docs: {
      description: {
        story: "Opened from a button. The close button, Escape and a backdrop click all close it through \`onClose\`."
      }
    }
  },
  render: () => <Sheet />
}`,...(u=(w=t.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var x,g,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: false,
    width: 420
  },
  parameters: {
    docs: {
      description: {
        story: "\`width={420}\` from the right: the filter panel's shape."
      }
    }
  },
  render: args => <Sheet width={args.width} />
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,C,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: false,
    width: 1600
  },
  parameters: {
    docs: {
      description: {
        story: "A width wider than the screen stops at the viewport, so the sheet never runs off a narrow window."
      }
    }
  },
  render: args => <Sheet width={args.width} />
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var B,T,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    open: false,
    width: 420
  },
  parameters: {
    docs: {
      description: {
        story: "Long content scrolls in a \`flex: 1\` body between a fixed header and footer, because the paper is a flex column."
      }
    }
  },
  render: args => <Sheet width={args.width} body={<FlexBox direction="column" gap={1}>
          {Array.from({
      length: 60
    }, (_, i) => <Text key={i}>Filter option {i + 1}</Text>)}
        </FlexBox>} />
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};export{n as CappedAtViewport,t as Default,s as HeaderBodyFooter,i as Width,Ar as __namedExportsOrder,kr as default};
