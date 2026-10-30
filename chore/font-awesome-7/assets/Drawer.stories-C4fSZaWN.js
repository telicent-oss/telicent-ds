import{a as e,b as a,r as D,F as S}from"./iframe-B8Ndjgs7.js";import{r as A,B as l}from"./EntityList-BhryZOsc.js";import{X as O}from"./ExpandLessIcon-XoRe2dIW.js";import{c as E,T as F}from"./Text-B8d64O_Y.js";import{F as p}from"./FlexBox-Dm4YTDCC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./styled-CtcE8cKO.js";import"./extendSxProp-21VtOiYW.js";import"./ListContext-BrZ-GaYK.js";import"./ListItem-CB8jEQm3.js";import"./FormControl-3TJEEoeT.js";import"./useFormControl-BjXCnS6h.js";import"./composeClasses-fLhin0tj.js";import"./TransitionGroupContext-DZHet8-E.js";import"./resolveComponentProps-utvTJYfY.js";import"./ButtonBase-B_Llp_PF.js";import"./Toolbar-CISRzm9i.js";import"./TextField-BTz-o-Kc.js";import"./Modal-Ct6w46wj.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-AhVjQ7Gk.js";import"./index-BtgTVimu.js";import"./index-BbzF8qOu.js";import"./utils-DYAAZsgJ.js";import"./Popover-CCtwc_z-.js";import"./Paper-rbZdw6s-.js";import"./useControlled-mY01Zfpb.js";import"./createSvgIcon-CGOjPHBt.js";import"./SvgIcon-C47WU1LB.js";import"./FormHelperText-DpwVaweK.js";import"./Close-BdpiD1Ss.js";import"./Popper-AaPlJ6uF.js";import"./Badge-DYs2SihV.js";import"./Chip-D_9jUssn.js";import"./IconButton-KoDWoU7V.js";import"./FormControlLabel-uh3SpxA2.js";import"./Typography-s2ICI44X.js";import"./Stack-rvIPxQ-d.js";import"./styled-BYZRNKV0.js";import"./createStyled-wNLCiFTP.js";import"./useThemeProps-CLApfop_.js";import"./MenuItem-CQaq3Nw5.js";import"./dividerClasses-CXlbGETs.js";import"./Button-Ds71WDMa.js";import"./MapToggleButtonPresentational-DaEIfM6E.js";import"./Remove-DLztY2SR.js";import"./Box-DWlntqlD.js";import"./CogIcon-Cx2nuXV6.js";import"./InfoIcon-z080ie21.js";import"./ExpandMoreIcon-C-7YScuE.js";import"./ThemeSwitchRow-QHgoULL7.js";import"./IconButton-Bp9NzKGU.js";import"./Badge-CCUmKRz_.js";import"./Chip-DkK8QWr7.js";import"./Divider-BCsdqXJ_.js";import"./Divider-DP7n1nVq.js";import"./TreeView-3XRMjQH4.js";import"./useThemeProps-C4jrygnl.js";import"./index-BreE0q1-.js";import"./Collapse-B-5zWWtm.js";import"./useSlot-BfqIP4m7.js";import"./AppInfoRow-DcG9pln0.js";import"./_IconPopover-C1PNRads.js";import"./Box-tid9eA9-.js";import"./AppSettings-BXK_6o6N.js";import"./SvgIcon-C22eSXdq.js";import"./TableRow-DWGhKXZz.js";import"./TableCell--HWIkjOy.js";import"./Skeleton-BcRltIku.js";import"./Skeleton-B2XntzD3.js";import"./Edit-L48O_6R-.js";import"./LinearProgress-BKGZlMo3.js";import"./LinearProgress-BuxH05pl.js";import"./Spinner-rjnbl10G.js";import"./CircularProgress-B0d2h-_4.js";import"./Dialog-DAlnXd4S.js";import"./DialogContent-CSHYPR4j.js";import"./Alert-CLckrKX0.js";import"./ToggleButton-DqmNPX07.js";import"./ToggleButton-XWsnd7ne.js";import"./ToggleButtonGroup-syVqFRSt.js";import"./LinkButton-C9RIImpp.js";import"./Container-BIyIkFdg.js";import"./TextField-BZJb3dXc.js";import"./Switch-CM1NShQE.js";import"./Switch-CkdQrvO8.js";import"./LabeledSwitch-D2KenOv3.js";import"./RadioGroup-B4cSf-Rs.js";import"./FormControl-DNyd5Wo1.js";import"./FormHelperText-BPBLk9Qd.js";import"./Tabs-umBbm1V9.js";import"./MenuItem-DS_246t9.js";import"./AccordionDetails-BhI29Hn1.js";import"./Paper-DCXKoJ6A.js";import"./ErrorFallback-DmKx3vvI.js";import"./ErrorFallbackText-DDsYNZoE.js";import"./ErrorFallbackWrapper-DrscerA0.js";import"./Brand-Bx7kSsxa.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,kr={title:"Surfaces/Drawer",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
