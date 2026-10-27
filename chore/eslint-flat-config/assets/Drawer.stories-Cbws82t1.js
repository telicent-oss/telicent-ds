import{a as e,b as a,r as D,F as S}from"./iframe-DZvJTdLH.js";import{r as A,B as l}from"./UserProfileContent-BecRDo52.js";import{X as O}from"./XIcon-QAa36Zq2.js";import{c as E,T as F}from"./Text-CeICp6tE.js";import{F as p}from"./FlexBox-DqoSphCj.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-_W7uhZIP.js";import"./clsx-B-dksMZM.js";import"./styled-CYiE1R_0.js";import"./extendSxProp-CJf5Ylsc.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Gs2OW64u.js";import"./TransitionGroupContext-DW-CadkF.js";import"./MapToggleButtonPresentational-Bv15blBa.js";import"./Remove-DfAAsDlO.js";import"./createSvgIcon-DAAJopla.js";import"./SvgIcon-Dh5ZJP-b.js";import"./IconButton-DUdtZIUE.js";import"./Paper-CCIRRnYl.js";import"./Box-BKngloQ-.js";import"./Brand-fdaXkxaR.js";import"./Typography-CMsNHFNw.js";import"./IconButton-8pZ9K19z.js";import"./LinkButton-oo7B018k.js";import"./AppInfoRow-BnZOAG2R.js";import"./_IconPopover-C-5OzzCa.js";import"./Box-oyFUK34N.js";import"./Popover-DCCxxHyt.js";import"./utils-BojYxu5F.js";import"./index-BeNEZCo_.js";import"./index-DZKKb8Ei.js";import"./Modal-B-Jrfzth.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CGbu6pRn.js";import"./useSlotProps-D1CGgc7b.js";import"./InfoIcon-zRlouagw.js";import"./AppSettings-CwOueJgv.js";import"./CogIcon-CIuYjsyA.js";import"./Badge-CXcYRuuH.js";import"./Badge-DAQPuUGC.js";import"./Chip-DOiPte_Q.js";import"./Chip-D0ft7hQi.js";import"./Divider-Bt0PK1Em.js";import"./Divider-Co3nspBN.js";import"./dividerClasses-DXr8v9nN.js";import"./ThemeSwitchRow-PZEOW11l.js";import"./index--cAEdwB6.js";import"./Skeleton-oWp-lzGI.js";import"./Skeleton-B6kfoS7x.js";import"./TextField--zteS9Z3.js";import"./useFormControl-DRohniRh.js";import"./FormControl-CMWNxSpD.js";import"./ListContext-IkSGtFSk.js";import"./useControlled-CMjA5emF.js";import"./FormHelperText-DSqqnB4u.js";import"./MenuItem-BbOJvVrz.js";import"./ExpandMoreIcon-CoyOjiP1.js";import"./ListItem-BW1ZgJz6.js";import"./Toolbar-BUoDdB4_.js";import"./Close-HI-kgcXD.js";import"./Popper-FEDRhdQ8.js";import"./FormControlLabel-W0LRkKmU.js";import"./Stack-Tdm1puzf.js";import"./styled-D3T-GcQA.js";import"./createStyled-DCQOt2Af.js";import"./useThemeProps-DukH9-pI.js";import"./Edit-7kV_dAD-.js";import"./SvgIcon-DjOKORyd.js";import"./TableRow-B_USo3AD.js";import"./TableCell-Dqb6AS6c.js";import"./TreeView-2KoVSPL2.js";import"./useThemeProps-HgEH_AVI.js";import"./Collapse-MMMT4y8r.js";import"./Dialog-DSHn1z9S.js";import"./DialogContent-B0W5F4Cx.js";import"./Alert-CcKbQcmF.js";import"./useSlot-CzbqdBW5.js";import"./LinearProgress-D96_7Ef0.js";import"./LinearProgress-CkoUAzn0.js";import"./Spinner-MO7bqc-q.js";import"./CircularProgress-CyLAzHGZ.js";import"./TextField-C7If2Wuf.js";import"./FormControl-CDX6nODe.js";import"./FormHelperText-CLInVfCn.js";import"./LabeledSwitch-CLfoxOWm.js";import"./Switch-BTn852xS.js";import"./Switch-D4XwAo5L.js";import"./RadioGroup-CHruPiDE.js";import"./Container-BneX2xXG.js";import"./ToggleButton-L5BGVeTP.js";import"./ToggleButton-wbRLKRj1.js";import"./ToggleButtonGroup-B8J0oCmm.js";import"./MenuItem-DN6TEHwr.js";import"./Tabs-CrI35iIi.js";import"./AccordionSummary-DG4EpXIp.js";import"./Paper-BMay5fSE.js";import"./ErrorFallback-Cd58QQxa.js";import"./ErrorFallbackText-MlzepuDI.js";import"./ErrorFallbackWrapper-CeD4slRe.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,kr={title:"Surfaces/Drawer",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
