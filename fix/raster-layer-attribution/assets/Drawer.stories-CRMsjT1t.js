import{a as e,b as a,r as D,F as S}from"./iframe-TzH9HoJB.js";import{r as A,B as l}from"./UserProfileContent-DLDByR5F.js";import{X as O}from"./XIcon-DGixMYxC.js";import{c as E,T as F}from"./Text-Wjw9mAbu.js";import{F as p}from"./FlexBox-DRW8tIce.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-OwbOqTSh.js";import"./clsx-B-dksMZM.js";import"./styled-Fi-PJMA2.js";import"./extendSxProp-BcuL-Nvl.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B0uhPIY5.js";import"./TransitionGroupContext-9gZwZNUS.js";import"./MapToggleButtonPresentational-DFyons0C.js";import"./Remove-DAQRFvaE.js";import"./createSvgIcon-CUXDMF07.js";import"./SvgIcon-HYlfJc8_.js";import"./IconButton-PY87z89E.js";import"./Paper-YFzx4ddw.js";import"./Box-DS3YN1ZG.js";import"./Brand-BlQ8b-ry.js";import"./Typography-zeuNrRSn.js";import"./IconButton-Mzh_sPPf.js";import"./LinkButton-Du-kxWOQ.js";import"./AppInfoRow-BV_aa5lk.js";import"./_IconPopover-hWyolf0i.js";import"./Box-Bo6gauv7.js";import"./Popover-DX_paYG2.js";import"./utils-DAXs4UmQ.js";import"./index-C5JqvuCX.js";import"./index-CoaIpLkh.js";import"./Modal-DHYwyE7o.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BSzFeukN.js";import"./useSlotProps-CB65AuIn.js";import"./InfoIcon-CuaXepFp.js";import"./AppSettings-BzU83vRR.js";import"./CogIcon-K9_cAB5b.js";import"./Badge-682oFqE8.js";import"./Badge-BFQfTkfR.js";import"./Chip-CTmkkGRh.js";import"./Chip-rF6T4rUT.js";import"./Divider-DBOrLmFb.js";import"./Divider-nCna6h_E.js";import"./dividerClasses-yHkBJDJd.js";import"./ThemeSwitchRow-CoAtHhZA.js";import"./Skeleton-YZOMWl5n.js";import"./Skeleton-2TdWFO3K.js";import"./TextField-3lnVRzgq.js";import"./useFormControl-B5BL4Dkn.js";import"./FormControl-CCq8g0Qj.js";import"./ListContext-C1CE2G2k.js";import"./useControlled-DLY0GURg.js";import"./FormHelperText-8S5YkPy6.js";import"./MenuItem-CHk81Hva.js";import"./ExpandMoreIcon-CpVvmAB8.js";import"./ListItem-CLOQjQZa.js";import"./Toolbar--ZbXsggf.js";import"./Close-DpJbrle0.js";import"./Popper-DAbEjCJA.js";import"./FormControlLabel-C0_yDqIQ.js";import"./Stack-VXbRlDW3.js";import"./styled-Detq6LXO.js";import"./createStyled-DpILs1eO.js";import"./useThemeProps-C-ryN40T.js";import"./Edit-qL9wNaAs.js";import"./SvgIcon-ak9zVNAx.js";import"./TableRow-5QaVWAOF.js";import"./TableCell-B3sIJQHc.js";import"./TreeView-Sl1KgHox.js";import"./useThemeProps-CTGgwm9-.js";import"./index-D3hKYTw4.js";import"./Collapse-D2Q2PYDS.js";import"./Dialog-Yb-veoJ6.js";import"./DialogContent-9AxQB7IK.js";import"./Alert-BhRCq8N3.js";import"./useSlot-CNLXZk78.js";import"./LinearProgress-W8XZFG7o.js";import"./LinearProgress-M-9cHjHE.js";import"./Spinner-kZ2y9DVo.js";import"./CircularProgress-HVwFS8ym.js";import"./TextField-jO_QGFZE.js";import"./FormControl-DsF2nchf.js";import"./FormHelperText-C1B-jnvM.js";import"./LabeledSwitch-B_k81Zfn.js";import"./Switch-BRrjrBxW.js";import"./Switch-LinUY1Bf.js";import"./RadioGroup-BQTXXTjr.js";import"./Container-8Zbg9EiI.js";import"./ToggleButton-Db5rHd7I.js";import"./ToggleButton-BYiCWuVK.js";import"./ToggleButtonGroup-CiG3xB0s.js";import"./MenuItem-C17Q6CqC.js";import"./Tabs-C87aF2xa.js";import"./AccordionSummary-DLRaYHNg.js";import"./Paper-DmuX9rfV.js";import"./ErrorFallback-BBjYL2F9.js";import"./ErrorFallbackText-CgArZ3nG.js";import"./ErrorFallbackWrapper-BvE4laRa.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,kr={title:"Surfaces/Drawer",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
