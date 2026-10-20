import{a as e,b as a,r as D,F as S}from"./iframe-H00w80Or.js";import{q as A,B as l}from"./DropdownButton-dp3UZT7u.js";import{X as O}from"./ExpandLessIcon-BszsM4qE.js";import{c as E,T as F}from"./Text-wA3ZXyxz.js";import{F as p}from"./FlexBox-CO2h70Gz.js";import"./preload-helper-C1FmrZbK.js";import"./CogIcon-yzQkEaTn.js";import"./SvgIcon-62q7EVQn.js";import"./clsx-B-dksMZM.js";import"./styled-0iMzvdEp.js";import"./extendSxProp-DjNpUFg0.js";import"./composeClasses-fLhin0tj.js";import"./InfoIcon-KXnvf3xk.js";import"./ExpandMoreIcon-CmOQf-OW.js";import"./ThemeSwitchRow-DC0I62HD.js";import"./index-DroXl4b1.js";import"./ListItem-CIX3erCJ.js";import"./ListContext-JPB_oyLb.js";import"./FormControl-DgKeLVgZ.js";import"./useFormControl-IvUXOtj3.js";import"./TransitionGroupContext-BzdPLesw.js";import"./resolveComponentProps-BEZJTj5A.js";import"./ButtonBase-q86Xzq01.js";import"./Toolbar-B8bYqEFU.js";import"./TextField-gd7MEMhf.js";import"./Modal-4pBuhtQR.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-lvm_v48l.js";import"./index-CtDoTQ8v.js";import"./utils-D2gZUpWj.js";import"./Popover-FTtalKAU.js";import"./Paper-ufb6o8lk.js";import"./useControlled-Bn2nyR_9.js";import"./createSvgIcon-CiVlnnHz.js";import"./FormHelperText-Byk_ugW2.js";import"./Close-BjCtc8xA.js";import"./Popper-4ejOxVhQ.js";import"./Badge-C0V1iWjJ.js";import"./Chip-CIeLwZjP.js";import"./IconButton-B-TGVwcE.js";import"./FormControlLabel-DT2ODpRX.js";import"./Typography-BeNp4hZk.js";import"./Stack-D4ylMwmH.js";import"./styled-DEANjgQR.js";import"./createStyled-BS21KARw.js";import"./useThemeProps-BwLca_Tx.js";import"./MenuItem-DdlDr0ZH.js";import"./dividerClasses-BFp8x9AY.js";import"./IconButton-DlbSnkMX.js";import"./Badge-D-W6c0gw.js";import"./Chip-DKIonNZh.js";import"./Divider-pZ3IXV4I.js";import"./Divider-dkPyhD-7.js";import"./Box-PGTe_iKL.js";import"./TreeView-DIg7qFOg.js";import"./useThemeProps-C79kCelR.js";import"./Collapse-BhPshysv.js";import"./useSlot-28dyUGlP.js";import"./AppInfoRow-kOozOQgV.js";import"./_IconPopover-DihhQVMX.js";import"./Box-BPWUYpPq.js";import"./AppSettings-D-4IsWrA.js";import"./SvgIcon-8QThMI5m.js";import"./TableRow-uDW1Sb-b.js";import"./TableCell-DFC8CWhZ.js";import"./LinearProgress-DtO0fbZP.js";import"./LinearProgress-B2fSExrt.js";import"./Spinner-CF6arQiu.js";import"./CircularProgress-CjEAu3fq.js";import"./Dialog-C8r9bZj8.js";import"./DialogContent-3cYYjIfQ.js";import"./Button-C_DxOEgn.js";import"./MapToggleButtonPresentational-BZf2zw2H.js";import"./Remove-D7AlsKhh.js";import"./Alert-BlUYh8NQ.js";import"./ToggleButton-CTbh2YDH.js";import"./ToggleButton-BENVC70c.js";import"./ToggleButtonGroup-BrXjNDoG.js";import"./LinkButton-DU5juLDL.js";import"./Container-xAch6yKK.js";import"./TextField-vmXQ439n.js";import"./Switch-CZks5nrW.js";import"./Switch-nDSeyWnc.js";import"./LabeledSwitch-CPePvXi_.js";import"./RadioGroup-QDFk1CAT.js";import"./FormControl-Ddw-GhPc.js";import"./FormHelperText-Bmn0upHu.js";import"./Tabs-DPrcsUlF.js";import"./MenuItem-RCWgR922.js";import"./AccordionDetails-Dbo1O38p.js";import"./Paper-BJSr6UaX.js";import"./ErrorFallback-C0XWCyRr.js";import"./ErrorFallbackText-BCpI9Vcj.js";import"./ErrorFallbackWrapper-LbAdlq-T.js";import"./Brand-BCpYs0jj.js";import"./Edit-B-OE2jTa.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,vr={title:"Surfaces/Drawer",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{width:{control:{type:"number"},description:"Width of a left or right panel, in px when a number. Capped at the viewport.",table:{type:{summary:"number | string"}}},anchor:{control:{type:"select"},options:["left","right","top","bottom"],description:"The edge the drawer opens from."},open:{control:{type:"boolean"},description:"Controlled. The caller owns it."},onClose:{action:"closed",description:"Escape, a backdrop click, or your close button."},children:{control:!1}},args:{onClose:I()}},d=({body:r,...c})=>{const[o,h]=D.useState(!1),m=()=>h(!1);return a(S,{children:[e(l,{variant:"primary","aria-expanded":o,onClick:()=>h(!0),children:"Open drawer"}),a(A,{anchor:"right",...c,open:o,onClose:m,children:[a(p,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:3,py:2,borderBottom:1,borderColor:"divider"},children:[e(E,{sx:{fontSize:20},children:"Refine"}),e(l,{variant:"text","aria-label":"Close refine",onClick:m,sx:{minWidth:0},children:e(O,{})})]}),e(p,{sx:{flex:1,overflowY:"auto",px:3,py:2},children:r??e(F,{children:"Panel content"})}),e(p,{direction:"row",justifyContent:"flex-end",sx:{px:3,py:2,borderTop:1,borderColor:"divider"},children:e(l,{variant:"primary",onClick:m,children:"Apply"})})]})]})},t={args:{open:!1},parameters:{docs:{description:{story:"Opened from a button. The close button, Escape and a backdrop click all close it through `onClose`."}}},render:()=>e(d,{})},i={args:{open:!1,width:420},parameters:{docs:{description:{story:"`width={420}` from the right: the filter panel's shape."}}},render:r=>e(d,{width:r.width})},n={args:{open:!1,width:1600},parameters:{docs:{description:{story:"A width wider than the screen stops at the viewport, so the sheet never runs off a narrow window."}}},render:r=>e(d,{width:r.width})},s={args:{open:!1,width:420},parameters:{docs:{description:{story:"Long content scrolls in a `flex: 1` body between a fixed header and footer, because the paper is a flex column."}}},render:r=>e(d,{width:r.width,body:e(p,{direction:"column",gap:1,children:Array.from({length:60},(c,o)=>a(F,{children:["Filter option ",o+1]},o))})})};var f,w,u;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Br=["Default","Width","CappedAtViewport","HeaderBodyFooter"];export{n as CappedAtViewport,t as Default,s as HeaderBodyFooter,i as Width,Br as __namedExportsOrder,vr as default};
