import{a as e,b as a,r as D,F as S}from"./iframe-Cc505q8T.js";import{r as A,B as l}from"./UserProfileContent-BCGV3pt1.js";import{X as O}from"./XIcon-DfplpFrn.js";import{c as E,T as F}from"./Text-CeS4nIe3.js";import{F as p}from"./FlexBox-INXNFDos.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BGbQUNXq.js";import"./clsx-B-dksMZM.js";import"./styled-BvzKQ4sx.js";import"./extendSxProp-DK-r-88F.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-xv6WL43m.js";import"./TransitionGroupContext-CQcyUDLY.js";import"./MapToggleButtonPresentational-SEdkkgro.js";import"./Remove-wLSkQjhc.js";import"./createSvgIcon-C2iK1MKO.js";import"./SvgIcon-QK6eTELx.js";import"./IconButton-wGfyijkC.js";import"./Paper-BEgnxPoV.js";import"./Box-DBDnR1g8.js";import"./Brand-B_inw8Nn.js";import"./Typography-JA0wl7ef.js";import"./IconButton-bijqnudJ.js";import"./LinkButton-CrQZWdvL.js";import"./AppInfoRow-DNstdpiQ.js";import"./_IconPopover-CEgvvroX.js";import"./Box-C7w_TU32.js";import"./Popover-B-7QVUjC.js";import"./utils-llZg6Ldu.js";import"./index-BYRKYzg2.js";import"./index-E67BpH2O.js";import"./Modal-B1TMbF1u.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CEFtJ1JV.js";import"./useSlotProps-vDTfIZOq.js";import"./InfoIcon-Dz7o8k3j.js";import"./AppSettings-CJGIgiF6.js";import"./CogIcon-ChH7stlR.js";import"./Badge-CaVpaSp6.js";import"./Badge-UZyuKCJw.js";import"./Chip-CSt2gfB4.js";import"./Chip-C0LSZzbe.js";import"./Divider-DoUPlLT7.js";import"./Divider-CzNUtG-0.js";import"./dividerClasses-BvSlSoD1.js";import"./ThemeSwitchRow-DppX6RPX.js";import"./Skeleton-NT2g86kk.js";import"./Skeleton-wC5DXAYG.js";import"./TextField-BD6Mkee3.js";import"./useFormControl-C6vP74Jn.js";import"./FormControl-Ca5m24gk.js";import"./ListContext-mDo66NCa.js";import"./useControlled-bQ2OS_cP.js";import"./FormHelperText-BoGba_Gk.js";import"./MenuItem-CezCKy8F.js";import"./ExpandMoreIcon-ldPi6jMj.js";import"./ListItem-B3mBow1c.js";import"./Toolbar-bO9Fqt8n.js";import"./Close-DueXUMhB.js";import"./Popper-nweOkxzE.js";import"./FormControlLabel-CbfZt0_t.js";import"./Stack-CXQatkal.js";import"./styled-nyzOJzdX.js";import"./createStyled-DL0YunmW.js";import"./useThemeProps-DUoDE_hW.js";import"./Edit-CHOg278_.js";import"./SvgIcon-BEgI93BA.js";import"./TableRow-DCNIHjLK.js";import"./TableCell-B-Xo9P4q.js";import"./TreeView-BzLLrYY7.js";import"./useThemeProps-vZa-IxWp.js";import"./index-CmE1T0Xl.js";import"./Collapse-QTd9ButL.js";import"./Dialog-Co_6VBJM.js";import"./DialogContent-DXpWtf-D.js";import"./Alert-wTSBptqR.js";import"./useSlot-DSvhdQyN.js";import"./LinearProgress-CF5PbK0_.js";import"./LinearProgress-B38XWAmN.js";import"./Spinner-CkaqrDBP.js";import"./CircularProgress-Bo5P2Z-p.js";import"./TextField-CwQOSZsD.js";import"./FormControl-Bh0L5A3e.js";import"./FormHelperText-Dd5c2IgU.js";import"./LabeledSwitch-BO0Zz5ka.js";import"./Switch-ChbOueU7.js";import"./Switch-CHwrG2-X.js";import"./RadioGroup-CFZqodNP.js";import"./Container-C5FmO0ZG.js";import"./ToggleButton-D96Gk9kD.js";import"./ToggleButton--FZGV6SF.js";import"./ToggleButtonGroup-DaCVckCp.js";import"./MenuItem-CS3aBPeu.js";import"./Tabs-DF-xdkqW.js";import"./AccordionSummary-Bssa8i78.js";import"./Paper-DT8s_h7n.js";import"./ErrorFallback-BhqQfFtZ.js";import"./ErrorFallbackText-CIKedg_H.js";import"./ErrorFallbackWrapper-CGtn1SJd.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,kr={title:"Surfaces/Drawer",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
